<template>
    <div id="header">
        <div id="app-title">
            <h3>{{title}}</h3>
        </div>
        <div id="github">
            <a v-bind:href="repo" target="_blank">Github Repository</a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Header',
    data: () => ({
        title: "Records Manager",
        repo: "https://www.github.com/iamSokhi"
    })
}
</script>

<style scoped>
#header {
    display: flex;
    padding: 0 20px;
    align-items: center;
    margin-bottom: 10px;
    background-color: #f4f4f4;
    justify-content: space-between;
    border-bottom: 1px solid #c4c4c4;
}
</style>