<template>
  <div id="app">

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



  </div>
</template>

<script>


  /**
   * 生命周期函数：
   * 组件挂载，组件更新，组件销毁 的时候触发的一系列方法
   *
   */


  // 引入组件
  import Header from './components/Header'
  import Life from './components/Life'
  import Resource from './components/Resource'

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
    }


  }
</script>

<style scoped>

</style>
