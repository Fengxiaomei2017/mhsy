<template>
  <div class='fankui'>
    <div class='jiebangtishi'>
      <i class='icon-check_circle'></i>
      <span>解绑成功！</span>
    </div>
    <form action=''>
      <h3>请告诉我们解绑的原因，我们会努力持续改进</h3>
      <p class='xuanzefankui'
         v-for='(item,index) in fuxuankuang'>
      <input type='checkbox'
             name='fankui'
             :value='item'
             @click='xuanze(index)'>{{item}}</p>
      <p class='writejianyi'>您还有其它建议吗：<textarea v-model='writeresult' rows='10'></textarea></p>
      <a href='javascript:'
         @click='tijiao'>提交</a>
    </form>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        fuxuankuang: ['重新绑定', '用着不舒服', '没有效果'],
        xuanzeresult: [],
        writeresult: '',
        fankuiresult: {}
      }
    },
    methods: {
      xuanze: function (index) {
        let inputjs = document.getElementsByTagName('input')
        if (inputjs[index].className.indexOf('check') < 0) {
          inputjs[index].className = 'check'
          this.xuanzeresult.push(index)
          this.fankuiresult['xuanze'] = this.xuanzeresult
        } else {
          inputjs[index].className = ''
          this.xuanzeresult.splice(index, 1)
        }
      },
      tijiao: function () {
        this.fankuiresult['write'] = this.writeresult
        console.log(this.fankuiresult)
      }
    }
  }
</script>
<style scoped>
  .fankui {
    margin-top: 50px;
  }
  .fankui .jiebangtishi,.fankui form {
    background-color: #fff;
    border: 1px  solid #E4E3E9;
    border-left: 0;
    border-right: 0;
  }
  .jiebangtishi {
    height: 10vh;
    font-size: 1.3em;
    line-height: 10vh;
    text-align: center;
  }
  .jiebangtishi i {
    color: #3AA112;
  }
  .fankui form {
    padding: 3vh 3vw;
  }
  .fankui form h3{
    margin-bottom: 1vh;
  }
  .fankui form h3 {
    font-size: 1em;
  }
  .fankui form .xuanzefankui {
    height: 5vh;
    line-height: 5vh;
  }
  .fankui form input {
    width: 5vw;
    height: 3vh;
    margin-right: 2vw;
    vertical-align: middle;
    box-shadow: 2px 2px 3px #EDEDED inset;
  }
  .fankui form .writejianyi {
    margin: 1vh 0;
  }
  .fankui form textarea {
    width: 92vw;
    margin-top: 2vh;
    font-size: 1em;
    border: 1px solid #ACA5A5;
  }
  .fankui a {
    display: block;
    width: 50vw;
    height: 40px;
    margin: 0 auto;
    font-size: 1.2em;
    line-height: 40px;
    color: #fff;
    text-align: center;
    background-color: #79DC72;
    border: 1px solid #83CE7E;
  }
</style>
