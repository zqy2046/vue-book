<template>
  <div class="loadEffect">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </div>
</template>

<script>
  export default {
    name: 'loading'
  }
</script>

<style scoped lang="less">
  .loadEffect{
    position: absolute;
    top:0;
    left:0;
    right:0;
    bottom:0;
    width: 100px;
    height: 100px;
    margin: auto;
  }
  .loadEffect span{
    display: inline-block;
    width: 30px;
    height: 10px;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    background: gray;
    position: absolute;
    -webkit-animation: load 1.04s ease infinite;
  }
  @-webkit-keyframes load{
    0%{
      opacity: 1;
    }
    100%{
      opacity: 0.2;
    }
  }
  .loadEffect span:nth-child(1){
    left: 0;
    top: 50%;
    margin-top:-5px;
    -webkit-animation-delay:0.13s;
  }
  .loadEffect span:nth-child(2){
    left: 10px;
    top: 20px;
    -webkit-transform: rotate(45deg);
    -webkit-animation-delay:0.26s;
  }
  .loadEffect span:nth-child(3){
    left: 50%;
    top: 10px;
    margin-left: -15px;
    -webkit-transform: rotate(90deg);
    -webkit-animation-delay:0.39s;
  }
  .loadEffect span:nth-child(4){
    top: 20px;
    right:10px;
    -webkit-transform: rotate(135deg);
    -webkit-animation-delay:0.52s;
  }
  .loadEffect span:nth-child(5){
    right: 0;
    top: 50%;
    margin-top:-5px;
    -webkit-transform: rotate(180deg);
    -webkit-animation-delay:0.65s;
  }
  .loadEffect span:nth-child(6){
    right: 10px;
    bottom:20px;
    -webkit-transform: rotate(225deg);
    -webkit-animation-delay:0.78s;
  }
  .loadEffect span:nth-child(7){
    bottom: 10px;
    left: 50%;
    margin-left: -15px;
    -webkit-transform: rotate(270deg);
    -webkit-animation-delay:0.91s;
  }
  .loadEffect span:nth-child(8){
    bottom: 20px;
    left: 10px;
    -webkit-transform: rotate(315deg);
    -webkit-animation-delay:1.04s;
  }
</style>
