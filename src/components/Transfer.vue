<template>
    <div>
        <h3>父组件与子组件传值: {{title}}</h3>
        <!--<button @click="run">父组件方法传递</button>-->
        <button @click="foo">父组件获取子组件对象传递</button>
        <button @click="parentFn">子组件获取父组件对象传递</button>
    </div>
</template>

<script>
    export default {
        name: "Transfer",
        props: ['title','run','home'],
        data(){
          return {
            msg: '子组件数据'
          }
        },
        methods: {
          foo(){
            // console.log(this.home.title);
            // this.run();
          },
          bar(){
            return '子组件方法...'
          },
          parentFn(){
            console.log(this.$parent.msg)
          }
        }
    }
</script>

<style scoped>

</style>
