<!--<template>-->
<!--<div id="app">-->
<!--<router-link to="/home" exact>首页</router-link>-->
<!--<router-link to="/hello">欢迎</router-link>-->
<!--<router-link to="/test">vuwe</router-link>-->
<!--<router-link to="/footer">footer</router-link>-->
<!--<router-view></router-view>-->
<!--</div>-->
<!--</template>-->

<!--<script>-->
<!--export default {-->
<!--name: 'app'-->
<!--}-->
<!--</script>-->
<template>
  <div id="footer">
    <div class="views">
      <transition name="fade">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </transition>
    </div>
    <bottomNav class="tab-nav" :value='tabNav' v-if="showNav">
      <navItem value='#/home' title="首页" icon="fa fa-home" @click="onTab('home')"></navItem>
      <navItem value='#/order' title="订单" icon="fa fa-heart" @click="onTab('all')"></navItem>
      <navItem value='#/user' title="我" icon="fa fa-user-circle" @click="onTab('user')"></navItem>
    </bottomNav>
  </div>
</template>

<script>
  import vwHeader from '../vuwe/src/components/article/page-head.vue'
  import bottomNav from '../vuwe/src/components/nav/bottom-nav.vue'
  import navItem from '../vuwe/src/components/nav/nav-item.vue'
  export default {
    data () {
      return {
        title: 'App',
        backIcon: false,
        showNav: true
      }
    },
    computed: {
      tabNav () {
        return window.location.hash
      }
    },
    mounted () {
      this.backIcon = (window.location.hash !== '#/' && window.location.hash !== '#/home')
      this.showNav = (window.top === window);
      //console.log(`Within an iframe: ${!(window.top === window)}`)
    },
    watch: {
      $route (to, from) {
        this.title = to.name;
        //this.className = 'weui-bar__item_on';
        if (to.path !== '/' && to.path !== '/home') {
          this.backIcon = true
        } else {
          this.backIcon = false
        }
      }
    },
    methods: {
      onTab (t) {
        this.$router.push({name:t});
      }
    },
    components: {
      vwHeader,
      bottomNav,
      navItem
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  .router-link-active {
    color: #04BE02;
  }
</style>
