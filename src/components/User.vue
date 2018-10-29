<template>
    <div id="user">
      <p>用户中心</p>

      <div class="nav">
        <ul>
          <li><router-link to="/user/add">新增用户</router-link></li>
          <li><router-link to="/user/edit">修改用户</router-link></li>
        </ul>
      </div>

      <div class="common">
        <router-view></router-view>
      </div>

    </div>
</template>

<script>
    export default {
        name: "User"
    }
</script>

<style scoped>

</style>
