import Vue from 'vue'
import Router from 'vue-router'
import Tongyishu from '@/components/dttongyishu/Dttongyishu.vue'
import Bangdingshebei from '@/components/dtbangdingshebei/Dtbangdingshebei.vue'
import Content from '@/components/dtcontent/Dtcontent.vue'
import Shujuluru from '@/components/dtshujuluru/Dtshujuluru.vue'
import Lishishuju from '@/components/dtlishishuju/Dtlishishuju.vue'
import Shezhi from '@/components/dtshezhi/Dtshezhi.vue'
import Fankui from '@/components/dtfankui/Dtfankui.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'default',
      redirect: '/tongyishu'
    },
    {
      path: '/tongyishu',
      component: Tongyishu
    },
    {
      path: '/bangdingshebei',
      component: Bangdingshebei
    },
    {
      path: '/content',
      component: Content,
      children: [
        {
          path: '/shujuluru',
          component: Shujuluru
        },
        {
          path: '/lishishuju',
          component: Lishishuju
        }
      ]
    },
    {
      path: '/shezhi',
      component: Shezhi
    },
    {
      path: '/fankui',
      component: Fankui
    }
  ]
})
