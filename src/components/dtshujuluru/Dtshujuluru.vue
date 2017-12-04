<template>
  <div class='wrapper'>
    <div class='title'><h3>数据填写</h3></div>
    <div class='biaodanbox'>
      <ul class='biaodanshuju'>
        <li class='lilist'
            v-for='item in biaoshuju'
            :key='item.bianma'>
          <label :for='item.bianma'>{{item.biaoti}}
            <span class='must'
                  v-if='item.must'>*</span>
          </label><i></i>
          <input type='number'
                 :id='item.bianma'
                 :class='{current: item.must}'
                 :placeholder='item.tishi'
                 v-model='biaodan[item.bianma]'>
                 </li>
      </ul>
    </div>
    <div class='tijiao'><button @click='tijiao()'>提交</button></div>
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
            'must': true,
            'biaoti': '血压',
            'tishi': '请输入血压'
          },
          {
            'bianma': 'xietang',
            'must': true,
            'biaoti': '空腹血糖',
            'tishi': '请输入空腹血糖'
          },
          {
            'bianma': 'hxietang',
            'must': false,
            'biaoti': '餐后2h血糖',
            'tishi': '请输入餐后2h血糖'
          },
          {
            'bianma': 'ganyousanzhi',
            'must': false,
            'biaoti': '甘油三酯',
            'tishi': '请输入甘油三酯'
          },
          {
            'bianma': 'zhidanbai',
            'must': false,
            'biaoti': '高密度脂蛋白',
            'tishi': '请输入高密度脂蛋白'
          },
          {
            'bianma': 'tizhong',
            'must': true,
            'biaoti': '体重(公斤)',
            'tishi': '请输入体重'
          },
          {
            'bianma': 'shenggao',
            'must': true,
            'biaoti': '身高(米)',
            'tishi': '例如：1.70'
          },
          {
            'bianma': 'xieniaosuan',
            'must': false,
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
        this.yanzheng()
        let currentjs = document.getElementsByClassName('current')
        // 当必填项的值全部不为空时进行路由跳转
        for (let i = 0; i < currentjs.length; i++) {
          if (!currentjs[i].value) {
            return false
          }
        }
        let tanchukuang = document.getElementById('tanchukuang')
        tanchukuang.style.display = 'block'
        setTimeout(() => {
          this.$router.push({path: '/lishishuju'})
        }, 2000)
      },
      // 当必填项为空时，给予提示
      yanzheng: function () {
        let inputjs = document.getElementsByTagName('input')
        let lijs = document.getElementsByTagName('li')
        for (let i = 0; i < this.biaoshuju.length; i++) {
          for (let j in this.biaoshuju[i]) {
            if (this.biaoshuju[i][j] === true) {
              if (!inputjs[i].value) {
                lijs[i].style.borderColor = '#E60404'
              } else {
                lijs[i].style.borderColor = '#CACACA'
              }
            }
          }
        }
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
    font-size: 1em;
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
  .biaodanshuju .lilist .must {
    color: #E60404;
    font-size: 1.3em;
    font-weight: bold;
    vertical-align: top;
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
    font-size: 1em;
    text-indent: 1em;
    border: 0;
  }
  .wrapper .tijiao {
    margin: 2vh 0;
    padding: 2vh 0;
  }
  .wrapper .tijiao button {
    display: block;
    width: 50vw;
    max-width: 200px;
    height: 6vh;
    margin: 0 auto;
    font-size: 1.1em;
    font-weight: bold;
    line-height: 6vh;
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
