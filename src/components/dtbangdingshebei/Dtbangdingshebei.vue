<template>
  <div class='bianhao'>
    <div class='shujubox'>
      <h2>绑定设备号</h2>
      <div class='shuru'>
        <label for='shebeihao'>设备编号：</label>
        <input type='text'
               id='shebeihao'
               v-model='shebeihao["shebeibianhao"]'
               placeholder='请输入设备编号' />
      </div>
      <button @click='tijiaoshebe'>提交</button>
    </div>
    <div id='tanchukuang' style='display: none;'>
      <div class='mask'></div>
      <div class='tishi'>
        <i class='icon-check_circle'></i>
        <span>设备号绑定成功！</span>
        <small>即将跳转到数据录入页面</small>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    data () {
      return {
        shebeihao: {}
      }
    },
    methods: {
      tijiaoshebe: function () {
        let tanchukuang = document.getElementById('tanchukuang')
        tanchukuang.style.display = 'block'
        console.log(this.shebeihao)
        setTimeout(() => {
          this.$router.push({path: '/shujuluru'})
        }, 2000)
      }
    }
  }
</script>
<style scoped>
  .bianhao {
    position: relative;
    width: 100vw;
    height: 100vh;
    font-size: 1em;
    text-align: center;
    background-color: #eee;
  }
  .bianhao .shujubox {
    position: absolute;
    width: 95%;
    height: 40vh;
    padding-top: 5vh;
    top: 20%;
    left: 50%;
    transform: translate(-50%, 0);
    border: 1px solid #eee;
    border-radius: 5px;
    box-shadow: 0 0 5px 5px #C0C0C0;
    background-color: #fff;
  }
  .bianhao .shujubox h2 {
    margin: 0 auto 3vh auto;
  }
  .bianhao .shuru label,.bianhao .shuru input {
    width: 80vw;
    margin: 2vh 6vw;
    font-size: 1.2em;
  }
  .bianhao .shuru input,.bianhao button {
    height: 7vh;
    line-height: 7vh;
  }
  .bianhao .shuru label {
    display: block;
    text-align: left;
  }
  .bianhao .shuru input {
    margin-bottom: 30px;
    border: 0;
    border-bottom: 1px solid #A1A0A0;
  }
  .bianhao button {
    display: block;
    width: 60vw;
    max-width: 200px;
    margin: 0 auto;
    font-size: 1.2em;
    color: #fff;
    border: 1px solid #5FADFF;
    border-radius: 8px;
    background-color: #03A9F4;
  }
  .tishi {
    position: fixed;
    left: 50%;
    top: 30%;
    transform: translate(-50%, 0);
    z-index: 999;
    width: 70vw;
    height: 15vh;
    padding-top: 5vh;
    font-size: 1.2em;
    text-align: center;
    background-color: #fff;
    border: 1px solid #E4E3E9;
  }
  .tishi .icon-check_circle {
    margin-right: 10px;
    font-size: 2em;
    color: #3AA112;
    vertical-align: middle;
  }
  .tishi small {
    display: block;
    margin-top: 1vh;
  }
  .mask {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 998;
    width: 100vw;
    height: 100vh;
    background-color: rgba(38,41,44, 0.4);
  }
</style>
