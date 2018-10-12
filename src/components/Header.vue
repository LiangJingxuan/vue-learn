<template>
    <div id="header">
      <h2>头部组件测试</h2>
      <button @click="tip">信息</button>

      <hr>
      <br><br>

      <v-transfer :title="title" :run="run" :home="this"></v-transfer>

    </div>
</template>

<script>
    import Transfer from './Transfer'
    export default {
        name: "Header",
        data () {
            return {
              msg: '头部组件信息..',
              title: '2024'
            }
        },
        methods: {
          tip(){
           alert(this.msg)
          },
          run(){
            console.log('父组件方法传递...');
          }
        },
        components: {
          'v-transfer': Transfer
        }
    }
</script>

<style scoped>
  h2{
    color: blueviolet;
  }
</style>
