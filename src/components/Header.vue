<template>
    <div id="header">
      <h2>头部组件测试</h2>
      <button @click="tip">信息</button>

      <hr>
      <br><br>

      <v-transfer :title="title"></v-transfer>
      <v-transfer :title="msg"></v-transfer>

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
