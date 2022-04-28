<template>
    <div class="mainbutton">
        <button>
            <slot>Button</slot>
        </button>
    </div>
</template>
  <script>
export default {
  name: "mainbutton"
};
</script>
<style>
.mainbutton {
 --color: #45BEB7;
 position: relative;
 z-index: 1;
}

.mainbutton::before {
 content: '';
 position: absolute;
 width: 30px;
 height: 30px;
 background: transparent;
 top: -10px;
 left: -10px;
 z-index: -5;
 border-top: 3px solid var(--color);
 border-left: 3px solid var(--color);
 transition: 0.5s;
}

.mainbutton::after {
 content: '';
 position: absolute;
 width: 30px;
 height: 30px;
 background: transparent;
 bottom: -10px;
 right: -10px;
 z-index: -5;
 border-right: 3px solid var(--color);
 border-bottom: 3px solid var(--color);
 transition: 0.5s;
}

.mainbutton:hover::before {
 width: 100%;
 height: 100%;
}

.mainbutton:hover::after {
 width: 100%;
 height: 100%;
}

.mainbutton button {
 padding: 0.7em 2em;
 font-size: 16px;
 background: #45BEB7;
 color: #fff;
 border: none;
 cursor: pointer;
 font-family: inherit;
 color: #fff;
}
</style>
