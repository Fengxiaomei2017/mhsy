<template>
  <div class='shezhi'>
    <div class='shebeihao'><big>设备号：</big><span>{{shebeihao.shebeibianhao}}</span></div>
    <div class='jiechubangding'>
      <button @click='jiebang'>解除绑定</button></div>
    <div id='tankuang' style='display: none;'>
      <div class='mask'></div>
      <div class='tishi'>
        <i class='icon-close'
            @click='quxiao'></i>
        <h5>确定解除当前设备号？</h5>
        <button @click='queding'>确定</button>
        <button @click='quxiao'>取消</button>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        shebeihao: {'shebeibianhao': 'Mhsl12345678'}
      }
    },
    methods: {
      jiebang: function () {
        let tanchukuang = document.getElementById('tankuang')
        tanchukuang.style.display = 'block'
      },
      queding: function () {
        console.log(this.shebeihao.shebeibianhao)
        this.$router.push({path: '/fankui'})
      },
      quxiao: function () {
        let tanchukuang = document.getElementById('tankuang')
        tanchukuang.style.display = 'none'
      }
    }
  }
</script>
<style scoped>
  .shezhi {
    margin-top: 70px;
  }
  .shezhi  .shebeihao,.shezhi .jiechubangding {
    background-color: #fff;
    border: 1px  solid #E4E3E9;
    border-left: 0;
    border-right: 0;
  }
  .shebeihao {
    height: 40px;
    line-height: 40px;
    margin: 5px 0;
    padding-left: 10vw;
  }
  .shebeihao big {
    font-weight: bold;
  }
  .shebeihao span {
    display: inline-block;
    font-weight: bold;
    text-indent: 2em;
  }
  .shezhi .jiechubangding {
    padding: 10px 0;
    font-size: 1.1em;
    text-align: center;
  }
  .shezhi .jiechubangding button {
    display: block;
    width: 40vw;
    height: 6vh;
    margin: 0 auto;
    line-height: 6vh;
    color: #fff;
    background-color: #79DC72;
    border: 1px solid #83CE7E;
    border-radius: 4px;
  }
  .shezhi .mask {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 998;
    width: 100vw;
    height: 100vh;
    background-color: rgba(38,41,44, 0.4);
  }
  .shezhi .tishi {
    position: fixed;
    left: 50%;
    top: 30%;
    transform: translate(-50%, 0);
    z-index: 999;
    width: 70vw;
    height: 15vh;
    font-size: 1.2em;
    line-height: 7vh;
    text-align: center;
    background-color: #fff;
    border: 1px solid #E4E3E9;
  }
  .shezhi .tishi button {
    display: inline-block;
    width: 20vw;
    height: 4vh;
    margin: 0 5px;
    font-size: 0.8em;
    line-height: 4vh;
    color: #000;
    background-color: #fff;
    border: 1px solid #919193;
    border-radius: 4px;
  }
  .shezhi .tishi .icon-close{
    position: absolute;
    top: 8px;
    right: 10px;
    z-index: 1000;
    width: 20px;
    height: 20px;
  }
</style>
