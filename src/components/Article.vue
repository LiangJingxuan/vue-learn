<template>
    <div>
      <h2>{{article.title}}</h2>
      <div v-html="article.content"></div>
    </div>
</template>

<script>
    export default {
        name: "Article",
        data(){
          return {
            aid: '',
            article: ''
          }
        },
        mounted(){
          // console.log(this.$route.params.id);

          console.log(234);
          this.aid=this.$route.params.id;
          this.queryArticle(this.aid);
        },
        methods: {
          queryArticle(aid){
            let api='http://www.phonegap100.com/appapi.php?a=getPortalArticle&aid='+aid;
            this.$http.get(api).then((data)=>{

              console.log(data.body.result[0]);
              this.article=data.body.result[0];
            },(err)=>{

                console.log(err);
            })
          }
        }
    }
</script>

<style scoped>

</style>
