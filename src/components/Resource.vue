<template>
  <div>
    <h3>数据请求的使用</h3>
    <button @click="resourceHttp()">点击请求数据</button>
  </div>
</template>

<script>
    export default {
        name: "Resource",
        methods: {
          // 请求数据
          resourceHttp(){
            this.$http.get('/hello').then((data)=>{
                console.log(data)
            },(err)=>{
                console.log(err)
            })
          }
        },
        mounted(){
          // this.resourceHttp();
        }
    }
</script>

<style scoped>

</style>
