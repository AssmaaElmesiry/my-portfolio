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
    background-color: #45BEB7;
    border: 2px solid #45BEB7;
    border-radius: 10px;
    transition: .5s ease all;
}
.mainbutton a {
    color: #fff !important;
}
.mainbutton:hover{
    background-color: transparent;
    transition: .5s ease all;

}
</style>
