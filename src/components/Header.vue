<template>
    <div id="header">
      <h2>头部组件测试</h2>
      <button @click="tip">信息</button>

      <hr>
      <br><br>

      <v-transfer :title="title" :run="run" :home="this"></v-transfer>

      <hr>
      <br><br>

      <v-transfer ref="header"></v-transfer>
      <button @click="getChild">获取子组件的数据和方法</button>

      <hr>
      <br><br>

      <button @click="emitEvent">非父子组件的数据传递</button>

    </div>
</template>

<script>
    import Transfer from './Transfer';
    import VueEvent from '../model/vueEvent';

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
          },

          // 获取子组件的数据和方法
          getChild(){
            console.log(this.$refs.header.bar())
          },

          // 非父子组件的数据传递
          emitEvent(){
            // 广播数据
            VueEvent.$emit('to-news',this.msg);
          }
        },
        components: {
          'v-transfer': Transfer,
        }
    }
</script>

<style scoped>
  h2{
    color: blueviolet;
  }
</style>
