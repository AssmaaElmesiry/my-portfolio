<template>
    <div class="mainbutton">
        <a href="#">
            <slot>Button</slot>
        </a>
    </div>
</template>
  <script>
export default {
  name: "mainbutton"
};
</script>
<style>
.mainbutton{
    width: auto;
    padding: 10px 20px;
    background-color: #ea4343;
    border: 1px solid #ea4343;
}
.mainbutton
.mainbutton a {
    color: #fff;
}
</style>
