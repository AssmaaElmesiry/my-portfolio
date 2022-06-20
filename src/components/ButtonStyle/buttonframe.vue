<template>
    <div class="buttonframe">
        <button>
            <slot>Button</slot>
        </button>
    </div>
</template>
  <script>
export default {
  name: "buttonframe"
};
</script>
<style>
.buttonframe {
 --color: #fff;
 position: relative;
 z-index: 1;
}

.buttonframe::before {
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

.buttonframe::after {
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

.buttonframe:hover::before {
 width: 100%;
 height: 100%;
}

.buttonframe:hover::after {
 width: 100%;
 height: 100%;
}

.buttonframe button {
 padding: 0.7em 2em;
 font-size: 16px;
 border: 1px solid #45BEB7;
 color: #fff;
 border: none;
 cursor: pointer;
 font-family: inherit;
 color: #45BEB7;
}
</style>