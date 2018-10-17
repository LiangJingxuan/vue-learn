<template>
  <div>
    <h2>新闻列表</h2>
    <ul>
      <li v-for="i in item">
        <router-link :to="{name:'article',params:{id:i.aid}}">{{i.title}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "List",
        data(){
          return {
            item: []
          }
        },
        methods: {
          queryItems(){
            let api='http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1';
            this.$http.jsonp(api).then((data)=>{

              console.log(data.body.result);
              this.item=data.body.result;
            },(err)=>{

              console.log(err)
            })
          }
        },
        mounted(){
          this.queryItems();
        }
    }
</script>

<style scoped>

</style>
