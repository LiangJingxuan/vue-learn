<template>
    <div>
      <h3>生命周期函数</h3>
    </div>
</template>

<script>
    export default {
        name: "Life",

        // 生命周期函数
        beforeCreate(){
          console.log('实例创建之前')
        },
        created(){
          console.log('实例创建完成')
        },
        beforeMount(){
          console.log('模板编译之前')
        },

        // 请求数据放在这个里面
        mounted(){
          console.log('模板编译完成')
        },

        beforeUpdate(){
          console.log('数据更新之前')
        },
        updated(){
          console.log('数据更新完毕')
        },

        // 页面销毁的时候要保存一些数据，就可以监听这个销毁的生命周期函数
        beforeDestroy(){
          console.log('实例销毁之前')
        },

        destroyed(){
          console.log('实例销毁完成')
        }




    }
</script>

<style scoped>

</style>
