<template>
  <div class='bianhao'>
    <div class='shujubox'>
      <h2>绑定设备号</h2>
      <div class='shuru'>
        <label for='shebeihao'>设备编号：</label>
        <input type='text'
                     id='shebeihao'
                     placeholder='请输入设备编号' />
      </div>
      <button><router-link to='/shujuluru'>提交</router-link></button>
    </div>
  </div>
</template>
<script>
  export default{}
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
    width: 60vw;
    max-width: 200px;
    font-size: 1.2em;
    border: 1px solid #5FADFF;
    border-radius: 8px;
    background-color: #03A9F4;
  }
  .bianhao button a {
    color: #fff;
  }
</style>
