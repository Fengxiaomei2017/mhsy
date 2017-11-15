<template>
  <div class='liebiao'>
    <div class='datetime'
         v-for='val in allshuju[num]'>
        <h3>历史数据</h3>
        <small v-for='(value,key) in val'
               v-if='key === "date"'>{{value}}</small>
    </div>
    <div class='liebiaooutbox'>
      <div class='liebiaoinbox'>
        <ul class='liebiaoshuju'
             v-for='val in allshuju[num]'>
          <li v-for='(value,key) in val'
              v-if='key !== "date"'>{{value}}</li>
        </ul>
        <ul class='yuming'>
          <li v-for='item in yuming'>{{item}}</li>
        </ul>
      </div>
    </div>
    <div class='anniu'>
      <button class='prev' @click='prev'>上一页</button>
      <button class='next' @click='next'>下一页</button>
    </div>
  </div>
</template>
<script>
  import {liebiao} from '@/common/js/ziduan.js'
  export default {
    data () {
      return {
        allshuju: {},
        yumingziduan: [
          'xieya', 'xietang', 'hxietang', 'ganyousanzhi', 'zhidanbai', 'tizhong', 'shenggao', 'xieniaosuan'
        ],
        yuming: [],
        num: ''
      }
    },
    created () {
      setTimeout(() => {
        this.getallshuju()
        this.getyuming()
      }, 20)
    },
    methods: {
      getallshuju: function () {
        this.allshuju = [
          {
            'rq_20170112': {
              'date': '2017/1/12',
              'xieya': 99,
              'xietang': 12,
              'hxietang': 13,
              'ganyousanzhi': 222,
              'zhidanbai': 555,
              'tizhong': 58,
              'shenggao': 172,
              'xieniaosuan': 888
            }
          },
          {
            'rq_20170312': {
              'date': '2017/3/12',
              'xieya': 100,
              'xietang': 8,
              'hxietang': 10,
              'ganyousanzhi': 222,
              'zhidanbai': 555,
              'tizhong': 56,
              'shenggao': 172,
              'xieniaosuan': 666
            }
          },
          {
            'rq_20170612': {
              'date': '2017/6/12',
              'xieya': 110,
              'xietang': 5,
              'hxietang': 6,
              'ganyousanzhi': 222,
              'zhidanbai': 555,
              'tizhong': 55,
              'shenggao': 172,
              'xieniaosuan': 777
            }
          },
          {
            'rq_20170912': {
              'date': '2017/9/12',
              'xieya': 112,
              'xietang': 4,
              'hxietang': 5,
              'ganyousanzhi': 111,
              'zhidanbai': 666,
              'tizhong': 55,
              'shenggao': 172,
              'xieniaosuan': 777
            }
          }
        ]
        this.num = this.allshuju.length - 1
      },
      prev: function () {
        if (this.num < 1) {
          this.num = 0
        } else {
          this.num -= 1
        }
      },
      next: function () {
        if (this.num > this.allshuju.length - 2) {
          this.num = this.allshuju.length - 1
        } else {
          this.num += 1
        }
      },
      getyuming: function () {
        for (let i = 0; i < this.yumingziduan.length; i++) {
          this.yuming.push(liebiao(this.yumingziduan[i]))
        }
      }
    }
  }
</script>
<style scoped>
  .liebiao {
    width: 100vw;
    margin: 2vh auto 80px auto;
  }
  .liebiao .datetime {
    color: #353333;
    margin-bottom: 10px;
    padding: 2vh 0;
    text-align: center;
    background-color: #fff;
    border: 1px  solid #E4E3E9;
  }
  .liebiao .datetime small {
    display: block;
    margin-top: 1vh;
    font-size: 1rem;
  }
  .liebiao .liebiaooutbox {
    padding: 2vh 0;
    background-color: #fff;
    border: 1px  solid #E4E3E9;
    border-left: 0;
    border-right: 0;
  }
  .liebiao .liebiaoinbox {
    width: 85vw;
    margin: 0 auto;
  }
  .liebiao ul {
    border: 1px solid #CACACA;
    border-bottom: 0;
    border-radius: 4px;
  }
   .liebiao .yuming li, .liebiao .liebiaoshuju li {
    height: 40px;
    padding-left: 15px;
    font-size: 1.1rem;
    line-height: 40px;
    border-bottom: 1px solid #CACACA;
  }
  .yuming {
    width: 45%;
  }
  .liebiao .liebiaoshuju {
    float: right;
    width: 56%;
    border-left: 0;
  }
  .liebiao .anniu {
    margin-top: 10px;
    padding: 2vh 0;
    text-align: center;
    background-color: #fff;
    border: 1px  solid #E4E3E9;
    border-left: 0;
    border-right: 0;
  }
  .liebiao .anniu button {
    width: 20vw;
    height: 5vh;
    margin: 0 1vw;
    font-size: 1rem;
    color: #fff;
    background-color: #E25162;
    border: 1px solid #E25162;
    border-radius: 4px;
  }
</style>
