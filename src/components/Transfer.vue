<template>
    <div>
        <h3>父组件与子组件传值: {{title}}</h3>
        <button @click="run">父组件方法传递</button>
        <button @click="foo">父组件对象传递</button>
    </div>
</template>

<script>
    export default {
        name: "Transfer",
        props: ['title','run','home'],
        methods: {
          foo(){
            console.log(this.title);
            this.run();
          }
        }
    }
</script>

<style scoped>

</style>
