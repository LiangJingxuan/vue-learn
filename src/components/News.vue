<template>
    <div>
      <h2>新闻组件：非父子组件传值</h2>
      <ul>
        <li v-for="(l,key) in list">
          <router-link to="/detail/">{{l}}</router-link>
        </li>
      </ul>
    </div>
</template>

<script>
    import VueEvent from '../model/vueEvent';

    export default {
      name: "News",
      data(){
          return {
            news: '新闻组件内容',
            list: ['新闻1','新闻2','新闻3','新闻4']
          }
      },

      // 监听组件
      mounted(){
        VueEvent.$on('to-news',(data)=>{
            console.log(data);
        });
      }
    }
</script>

<style scoped>

</style>
