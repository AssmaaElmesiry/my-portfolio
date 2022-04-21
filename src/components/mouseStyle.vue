<template>
    <div class="g-cursor">
        <div :style="`transform: translateX(${xParent}px) translateY(${yParent}px) translateZ(0) translate3d(0, 0, 0);`" class="g-cursor__circle"></div>
        <div class="g-cursor__point" ref="point" :style="`transform: translateX(${xChild - 3}px) translateY(${yChild - 3}px) translateZ(0) translate3d(0, 0, 0);`"></div>
    </div>
</template>
<script>
export default{
    data() {
        return {
            xChild: 0,
            yChild: 0,
            xParent: 0,
            yParent: 0,
            hover: false,
            hideCursor: true
        }
    },
    mounted() {
        const moveCursor = e => {
        this.hideCursor = false;
        this.xChild = e.clientX ? e.clientX : e.touches[0].clientX;
        this.yChild = e.clientY ? e.clientY : e.touches[0].clientY;
        setTimeout(() => {
            this.xParent =
            e.clientX - 15 ? e.clientX - 15 : e.touches[0].clientX - 15;
            this.yParent =
            e.clientY - 15 ? e.clientY - 15 : e.touches[0].clientY - 15;
        }, 100);
        };
        window.addEventListener("mousemove", moveCursor);
        window.addEventListener("touchmove", moveCursor);
        window.addEventListener("touchstart", () => {
        this.hideCursor = false;
        });
        window.addEventListener("touchend", () => {
        this.hideCursor = true;
        });
    }
}
</script>
<style>

.g-cursor {
  transition: width 0.6s ease, height 0.6s ease, opacity 0.6s ease;
}
.g-cursor_hide {
  opacity: 0;
  width: 60px;
  height: 60px;
  transition: width 0.6s ease, height 0.6s ease, opacity 0.6s ease;
}
.g-cursor__circle {
  pointer-events: none;
  user-select: none;
  top: 0;
  left: 0;
  position: fixed;
  width: 30px;
  height: 30px;
  border: 1px solid #ea4343;
  border-radius: 100%;
  z-index: 5555;
  backface-visibility: hidden;
  transition: opacity 0.6s ease;
}
.g-cursor__point {
  top: 0;
  left: 0;
  position: fixed;
  width: 4px;
  height: 4px;
  pointer-events: none;
  user-select: none;
  border-radius: 100%;
  background: #ea4343;
  z-index: 55555555;
  backface-visibility: hidden;
  will-change: transform;
}
.g-cursor_hover .g-cursor__circle {
  opacity: 0;
  width: 60px;
  height: 60px;
  transition: width 0.6s ease, height 0.6s ease, opacity 0.6s ease;
}

</style>