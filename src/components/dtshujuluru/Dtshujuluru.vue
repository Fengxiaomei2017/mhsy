<template>
  <div class='wrapper'>
    <div class='title'><h3>数据填写</h3></div>
    <div class='biaodanbox'>
      <ul class='biaodanshuju'>
        <li class='lilist'
            v-for='item in biaoshuju'
            >
          <label :for='item.bianma'>{{item.biaoti}}</label><i></i>
          <input type='number'
                 :id='item.bianma'
                 :placeholder='item.tishi'
                 v-model='biaodan[item.bianma]'>
                 </li>
      </ul>
    </div>
    <div class='tijiao' @click='tijiao()'><a href='javascript:'>提交</a></div>
    <div id='tanchukuang' style='display: none;'>
      <div class='mask'></div>
      <div class='tishi'>
        <i class='icon-check_circle'></i>
        <span>提交成功！</span>
        <small>即将跳转到数据页面</small>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    data () {
      return {
        biaoshuju: [
          {
            'bianma': 'xieya',
            'biaoti': '血压',
            'tishi': '请输入血压'
          },
          {
            'bianma': 'xietang',
            'biaoti': '空腹血糖',
            'tishi': '请输入空腹血糖'
          },
          {
            'bianma': 'hxietang',
            'biaoti': '餐后2h血糖',
            'tishi': '请输入餐后2h血糖'
          },
          {
            'bianma': 'ganyousanzhi',
            'biaoti': '甘油三酯',
            'tishi': '请输入甘油三酯'
          },
          {
            'bianma': 'zhidanbai',
            'biaoti': '高密度脂蛋白',
            'tishi': '请输入高密度脂蛋白'
          },
          {
            'bianma': 'tizhong',
            'biaoti': '体重',
            'tishi': '请输入体重'
          },
          {
            'bianma': 'shenggao',
            'biaoti': '身高',
            'tishi': '请输入身高'
          },
          {
            'bianma': 'xieniaosuan',
            'biaoti': '血尿酸',
            'tishi': '请输入血尿酸'
          }
        ],
        biaodan: {},
        zhuangtai: ['icon-check_circle', 'icon-cancel-circle'],
        num: 0
      }
    },
    methods: {
      tijiao: function () {
        let tanchukuang = document.getElementById('tanchukuang')
        tanchukuang.style.display = 'block'
        console.log(this.biaodan)
        setTimeout(() => {
          this.$router.push({path: '/lishishuju'})
        }, 2000)
      },
      guanbi: function () {
        let tanchukuang = document.getElementById('tanchukuang')
        tanchukuang.style.display = 'none'
      }
    }
  }
</script>
<style scoped>
  .wrapper {
    height: 100vh;
    margin: 2vh 0 80px 0;
  }
  .title,.biaodanbox,.tijiao {
    background-color: #fff;
    border: 1px  solid #E4E3E9;
    border-left: 0;
    border-right: 0;
  }
  .title {
    height: 5vh;
    padding: 2vh 0;
    line-height: 5vh;
    text-align: center;
    background-color: #fff;
  }
  .biaodanbox {
    padding: 2vh 0;
  }
  .biaodanshuju {
    width: 85vw;
    margin: 0 auto;
    font-size: 1rem;
    background-color: #EFEEF4;
  }
  .biaodanshuju .lilist {
    display: flex;
    height: 40px;
    margin: 3px 0;
    padding-right: 10px;
    line-height: 40px;
    border: 1px solid #CACACA;
    border-radius: 8px;
    background-color: #fff;
  }
  .biaodanshuju .lilist label {
    flex: 0 0 120px;
    text-align: center;
    font-weight: bold;
  }
  .biaodanshuju .lilist i {
    display: inline-block;
    height: 25px;
    margin: 7px 0;
    border-right: 2px solid #CCC;
  }
  .biaodanshuju .lilist input {
    flex: 1;
    width: 90%;
    height: 35px;
    margin-top: 1px;
    font-size: 1rem;
    text-indent: 1em;
    border: 0;
  }
  .wrapper .tijiao {
    margin: 2vh 0;
    padding: 2vh 0;
  }
  .wrapper .tijiao a {
    display: block;
    width: 50vw;
    height: 40px;
    margin: 0 auto;
    font-size: 1.1rem;
    font-weight: bold;
    line-height: 40px;
    color: #fff;
    text-align: center;
    background-color: #79DC72;
    border: 1px solid #83CE7E;
    border-radius: 8px;
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
    font-size: 1.2rem;
    text-align: center;
    background-color: #fff;
    border: 1px solid #E4E3E9;
  }
  .tishi .icon-check_circle {
    margin-right: 10px;
    font-size: 2rem;
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
