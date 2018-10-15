<template>
    <div>
      <h2>新闻组件：非父子组件传值</h2>
    </div>
</template>

<script>
    import VueEvent from '../model/vueEvent';

    export default {
      name: "News",
      data(){
          return {
            news: '新闻组件内容'
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
