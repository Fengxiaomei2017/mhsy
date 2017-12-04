<template>
  <div class='tongyishu_wrapper'>
    <div class='tongyishu'>
      <h3 class='title'>用户须知</h3>
      <p class='description'>
        {{yonghuxuzhi}}
      </p>
      <div class='tongyi_wrapper'>
        <input  type='checkbox'
                @click='gouxuan(currentindex)'>
          <small class='small_text'>
            同意
            <span class='zhuyi'>"用户须知"</span>
            和
            <span class='zhuyi'>'隐私权相关政策'</span>
          </small>
        <div class='checkInfo'>
          <small class='small_text'><span class='warn'>!</span>请接受服务条款</small>
        </div>
      </div>
      <div class='tongyi_text'>
        <button class='btn'
                type='button'
                @click='tijiao()'>提交</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      currentindex: 0,
      yonghuxuzhi: `为使用爱斗图网站（以下简称"本网站"），您应当阅读并遵守《爱斗图许可及服务协议》（以下简称"本协议"。请您务必审慎阅读、充分理解各条款内容，特别是免除或者限制爱斗图官方责任的相应条款，限制用户权利的相应条款，以及开通或使用某项服务的单独协议，并选择接受或不接受。除非您已阅读并接受本协议所有条款，否则您无权使用本网站及相关服务。您的使用、登录等行为即视为您已阅读并同意上述协议的约束。
                    如果您未满18周岁，请在法定监护人的陪同下阅读本协议及其他上述协议，并特别注意未成年人使用条款。`
    }
  },
  methods: {
    gouxuan: function (index) {
      let inputjs = document.getElementsByTagName('input')
      let checkInfo = document.getElementsByClassName('checkInfo')[0]
      if (inputjs[index].className.indexOf('check') < 0) {
        inputjs[index].className = 'check'
        checkInfo.style.display = 'none'
      } else {
        inputjs[index].className = ''
      }
    },
    tijiao: function () {
      let inputjs = document.getElementsByTagName('input')[0]
      let checkInfo = document.getElementsByClassName('checkInfo')[0]
      if (inputjs.className === 'check') {
        console.log('提交成功')
        this.$router.push({path: '/bangdingshebei'})
      } else {
        checkInfo.style.display = 'block'
      }
    }
  }
}
</script>
<style scoped>
  .tongyishu_wrapper {
    width: 100vw;
    height: 100vh;
    background-color: #F9F9F9;
  }
  .tongyishu_wrapper .tongyishu {
    margin: 0 15px;
    padding: 18px 0;
  }
  .tongyishu .title,.tongyishu .tongyi_text,.tongyishu .tongyi_wrapper {
    text-align: center;
  }
  .tongyishu .title {
    font-family: Oswald;
    height: 40px;
    line-height: 40px;
  }
  .tongyishu .description {
    font-family: Droid Sans;
    line-height: 30px;
    text-indent: 2em;
  }
  .tongyishu .tongyi_wrapper {
    margin: 10px 0;
  }
  .tongyishu .zhuyi {
    color: red;
  }
  .tongyishu input {
    width: 5vw;
    height: 3vh;
    margin-right: 2vw;
    vertical-align: middle;
    box-shadow: 2px 2px 3px #EDEDED inset;
  }
  .tongyishu .small_text {
    font-size: 1em;
  }
  .checkInfo {
		display: none;
		color: #CC0000;
		margin:8px 0;
	}
  .checkInfo .warn {
    display: inline-block;
    width: 20px;
    height: 20px;
    line-height: 20px;
    margin-right: 8px;
    color: #fff;
    background-color: #EE8F3B;
    border-radius: 45px;
  }
  .tongyi_text .btn {
    display: inline-block;
    width: 120px;
    margin: 5px 0 30px 0;
    padding: 6px 12px;
    font-size: 14px;
    font-weight: 400;
    color: #fff;
    background-color: #5cb85c;
    border: 1px solid #4cae4c;
    border-radius: 4px;
  }
  .tongyi_text .btn:hover {
    color: #fff;
    background-color: #449d44;
    border-color: #398439;
  }
</style>
