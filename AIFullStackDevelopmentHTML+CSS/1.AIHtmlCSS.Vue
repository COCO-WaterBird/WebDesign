<!-- <script setup>
function showTip(){
    alert('Hello')
}
</script>
<template>
    <div @click="showTip" class="box">Click</div>
</template>

<style scoped>
.box{
    width: 200px;
    height: 200px;
    line-height: 200px;
    text-align: center;
    margin:100px auto;
    background-color: antiquewhite;
}
</style> -->


<script setup>

</script>
<template> 
    <div class="todo-app">
        <div class="title">Todo App</div>

        <div class="todo-form">
            <input type="text" class="todo-input">
            <div class="todo-button">Add Todo</div>
        </div>

        <div class="completed">
            <input type="checkbox">
            <span class="name">Meal</span>
        </div>

        <div class="del">del</div>
    </div>
 
</template>