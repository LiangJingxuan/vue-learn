<template>
    <div>
        <h3>父组件与子组件传值: {{title}}</h3>
    </div>
</template>

<script>
    export default {
        name: "Transfer",
        props: ['title']
    }
</script>

<style scoped>

</style>
