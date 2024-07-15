<template>
    <div class="container">
          <img src="../assets/images/icon-sun-dark.svg" alt="">
          <div class="toggle-container">
            <input type="checkbox" id="toggle" class="toggle-input">
            <label for="toggle" class="toggle-label"></label>
          </div>
          <img src="../assets/images/icon-moon-dark.svg" alt="">
        </div>
</template>


<script lang="ts">
export default {
 name:'Toggle',
}
</script>

<style scoped>
.container{
    display: flex;
    align-items: center;
    width: fit-content;
    gap:16px;
    /* position: absolute; */
}

img{
    width:24px;
    height:24px;
}

.toggle-container {
    position: relative;
    width: 48px;
    height: 28px;
}

.toggle-input {
    opacity: 0;
    width: 0;
    height: 0;
}

.toggle-label {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #A729F5;
    border-radius: 30px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.toggle-label::before {
    content: "";
    position: absolute;
    left: 4px;
    top: 4px;
    width: 20px;
    height: 20px;
    background-color: white;
    border-radius: 50%;
    transition: transform 0.3s;
}

.toggle-input:checked+.toggle-label {
    background-color: #A729F5;
}

.toggle-input:checked+.toggle-label::before {
    transform: translateX(20px);
}
</style>