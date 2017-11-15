<template>
  <div>
    <router-view></router-view>
    <ul class='menu'>
      <li><router-link to='/lishishuju'>历史数据</router-link><i class='icon-file-text2'></i></li>
      <li><router-link to='/shezhi'>设置</router-link><i class='icon-cog'></i></li>
    </ul>
  </div>
</template>
<script>
  export default{}
</script>
<style scoped>
  .menu {
    position: fixed;
    display: flex;
    left: 0;
    bottom: 0;
    width: 100vw;
    height: 70px;
    color: #fff;
    background-color: #03A9F4;
    border-top: 1px solid #17ACEF;
  }
  .menu li {
    flex: 1;
    height: 45px;
    padding: 10px 0;
    font-size: 1.2rem;
    text-align: center;
  }
  .menu li a {
    margin: 0 auto;
    color: #fff;
    text-align: center;
  }
  .menu li i {
    display: block;
    width: 30vw;
    height:30px;
    margin: 7px auto;
    line-height: 30px;
    text-align: center;
  }
  .menu a:first-child {
    text-align: left;
  }
</style>
