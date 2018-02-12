const http = require('http')
const fs = require('fs')
const url = require('url')


let sliders = require('./sliders')

function read(filename) {
  return new Promise((resolve, reject) => {
    return fs.readFile(filename, 'utf-8', (err, data) => {
      if (!err && data.length !== 0) {
        resolve(data)
      } else {
        reject(err)
      }
    })
  })
}

function write(filename, data, cb) {
  fs.writeFile('./books.json', JSON.stringify(data), (err) => {
    !err && cb()
  })
}

function setHeader(res) {
  return res.setHeader('Content-Type', 'application/json;charset=utf-8')
}

let server = http.createServer((req, res) => {
  //设置跨域头;
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Content-Length, Authorization, Accept,X-Requested-With')
  res.setHeader('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')
  res.setHeader('X-Powered-By', ' 3.2.1')
  if (req.method === 'OPTIONS') return res.end('200')
  
  // 轮播图接口
  let {pathname, query} = url.parse(req.url, true)
  if (pathname === '/sliders') {
    res.setHeader('Content-Type', 'application/json;charset=utf-8')
    return res.end(JSON.stringify(sliders))
  }
  
  // 图书接口
  if (pathname === '/hot') {
    read('./books.json').then((data) => {
      res.setHeader('Content-Type', 'application/json;charset=utf-8')
      return res.end(JSON.stringify(JSON.parse(data).reverse()))
    })
  }
  
  
  // 列表
  if (pathname === '/books') {
    let id = query.id // 取出的是字符串;
    switch (req.method) {
      case 'GET':// 获取图书
        if (id) {//获取单本图书
          read('./books.json').then((books) => {
            books = JSON.parse(books)
            let book = books.find((item) => {
              return item.bookId === id
            })
            if (!book) book = {}
            setHeader(res)
            return res.end(JSON.stringify(book))
          })
        } else {//获取所有图书
          read('./books.json').then((books) => {
            setHeader(res)
            return res.end(JSON.stringify(JSON.parse(books).reverse()))
          })
        }
        break
      
      case 'POST'://添加图书
        let str = '';
        req.on('data', chunk => {
          str += chunk;
        });
        req.on('end', () => {
          let book = JSON.parse(str);
          read('./books.json').then((bookList) => {
            bookList = JSON.parse(bookList);
            book.bookId = bookList.length ? String(parseInt(bookList[bookList.length - 1].bookId) + 1) : '10001';
            console.log(book.bookId);
            bookList.push(book);
            write('./books.json', bookList, function () {
              res.end(JSON.stringify({}))// 删除返回空对象
            })
          })
        })
        break
      case 'PUT'://修改图书信息接口
        if (id) {
          let str = '';
          req.on('data', chunk => {
            str += chunk;
          });
          req.on('end', () => {
            console.log(str);
            let book = JSON.parse(str);
            read('./books.json').then((bookList) => {
              bookList = JSON.parse(bookList).map((item) => {
                if (item.bookId === id) {
                  return book;
                }
                return item;
              });
              write('./books.json', bookList, function () {
                res.end(JSON.stringify({}))// 删除返回空对象
              })
            })
          })
        }
        break
      case 'DELETE':  //  删除
        read('./books.json').then((bookList) => {
          let result = JSON.parse(bookList)
          result = result.filter((item) => {
            return item.bookId !== id
          })
          write('./books.json', result, function () {
            res.end(JSON.stringify({}))// 删除返回空对象
          })
        })
        break
    }
  }
});
//监听3000端口
server.listen(3000, () => {
  console.log('3000端口已监听')
})
