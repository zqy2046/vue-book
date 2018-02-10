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

http.createServer((req, res) => {
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
      case 'GET':
        if (id) {
          read('./books.json').then((books) => {
            books = JSON.parse(books)
            let book = books.find((item) => {
              return item.bookId === id
            })
            if (!book) book = {}
            setHeader(res)
            return res.end(JSON.stringify(book))
          })
        } else {
          read('./books.json').then((books) => {
            setHeader(res)
            return res.end(JSON.stringify(JSON.parse(books).reverse()))
          })
        }
        break
      case 'POST':
        break
      case 'PUT':
        break
      case 'DELETE':
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
}).listen(3000, () => {
  console.log('3000端口已监听')
})
