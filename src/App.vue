<template>
  <div id="app">

    <router-link to="/">Go to home</router-link>
    <br>
    <router-link to="/test">Go to test</router-link>
    <br>
    <router-link to="/r1">Go to router1</router-link>
    <br>
    <router-link to="/r2">Go to router2</router-link>
    <br>
    <router-link to="/r3">Go to router3</router-link>
    <br>

    <input type="text" v-model="todo" @keydown="addList($event)">
    <!--<button @click="addList">增加</button>-->
    <hr>
    <h2>进行中</h2>
    <ul>
      <li v-if="!l.state" v-for="(l,key) in list"><input type="checkbox" v-model="l.state"> {{l}}--- <button @click="del(key)">删除</button></li>
    </ul>
    <h2>已完成</h2>
    <ul>
      <li v-if="l.state" v-for="(l,key) in list"><input type="checkbox" v-model="l.state"> {{l}}--- <button @click="del(key)">删除</button></li>
    </ul>

    <v-header></v-header>

    <br>
    <hr>
    <br>

    <v-life></v-life>

    <br>
    <hr>
    <br>

    <v-resource></v-resource>

    <br>
    <hr>
    <br>

    <v-news></v-news>

    <br>
    <hr>
    <br>

    <router-link to="/list">新闻列表</router-link>

    <br>
    <hr>
    <br>

    <br>
    <hr>
    <br>

    <button @click="hrefGo()">跳转到新闻路由</button>

    <br>
    <hr>
    <br>

    <router-link to="/list">新闻列表</router-link>

    <br>
    <hr>
    <br>

    <router-link to="/user/add">用户中心</router-link>

    <br>
    <hr>
    <br>

    <router-view></router-view>


    <br>
    <hr>
    <br>

    <mt-button type="default">default</mt-button>
    <mt-button type="primary">primary</mt-button>
    <mt-button type="danger">danger</mt-button>

    <br>
    <hr>
    <br>

    <mt-index-list>
      <mt-index-section index="A">
        <mt-cell title="Aaron"></mt-cell>
        <mt-cell title="Alden"></mt-cell>
        <mt-cell title="Austin"></mt-cell>
      </mt-index-section>
      <mt-index-section index="B">
        <mt-cell title="Baldwin"></mt-cell>
        <mt-cell title="Braden"></mt-cell>
      </mt-index-section>
      <mt-index-section index="Z">
        <mt-cell title="Zack"></mt-cell>
        <mt-cell title="Zane"></mt-cell>
      </mt-index-section>
    </mt-index-list>

    <br>
    <hr>
    <br>

    <mt-actionsheet></mt-actionsheet>

    <br>
    <hr>
    <br>

    <mt-spinner></mt-spinner>

    <br>
    <hr>
    <br>

  </div>
</template>

<script>


  /**
   * 生命周期函数：
   * 组件挂载，组件更新，组件销毁 的时候触发的一系列方法
   *
   */


  // 引入组件
  import Header from './components/Header';
  import News from './components/News';
  import Life from './components/Life';
  import Resource from './components/Resource';
  import ActionSheet from './components/ActionSheet';
  import InfiniteScroll from './components/InfiniteScroll';

  export default {
    name: 'app',

    // 数据分配
    data () {
      return {
        todo: '',
        list: [],
      }
    },

    // 功能方法
    methods: {
      addList(e){
        if(e.keyCode===13){
          // console.log(e);
          if(this.todo){
            this.list.push({
              title: this.todo,
              state: false
            });
            this.todo='';
          }
        }
      },
      del(key){
        // console.log(key);
        this.list.splice(key,1);
      },
      hrefGo(){
        // this.$router.push({path:'list'});
        this.$router.push({path:'article/495'});
      }
    },

    // 生命周期函数：vue页面每次刷新就会触发的方法
    mounted(){
      // console.log('to ... ')
    },

    // 挂载组件
    components: {
      'v-header': Header,
      'v-life': Life,
      'v-resource': Resource,
      'v-news': News,
      'mt-actionsheet': ActionSheet,
      'mt-spinner': InfiniteScroll
    }


  }
</script>

<style scoped>

</style>
