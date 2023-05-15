<script setup>
/*
  1、选择元素，等待，直到用户将鼠标移过它；
  2、计算相对于元素的位置；
  3、将坐标存在CSS的变量中。
  4、用span包裹文本，以避免显示在按钮的上方。
  5、将 width和height初始化为0px，当用户悬停在按钮上时，将其改为400px。
  6、利用坐标追踪鼠标位置；
  7、在background 属性上应用 radial-gradient，使用closest-side circle。Closest-side能够覆盖整个面。
*/
const mousemoveHandler = (e) => {
  // console.log(e);
  // console.log(e.target);
  const x = e.pageX - e.target.offsetLeft;
  const y = e.pageY - e.target.offsetTop;
  e.target.style.setProperty('--x', x + 'px');
  e.target.style.setProperty('--y', y + 'px');
}
</script>
<template>
  <div class="box">
    <button class="button" @mousemove="mousemoveHandler">
      <span>Hello, welcome to Buttons!</span>
    </button>
  </div>
</template>
<style scoped>
.box {
  display: flex;
  justify-content: space-evenly;
}

.button {
  position: relative;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background: #f72359;
  padding: 1em 2em;
  border: none;
  color: white;
  font-size: 1.2em;
  cursor: pointer;
  outline: none;
  overflow: hidden;
  border-radius: 100px;
}

.button span {
  position: relative;
}

.button::before {
  --size: 0;
  content: '';
  position: absolute;
  left: var(--x);
  top: var(--y);
  width: var(--size);
  height: var(--size);
  background: radial-gradient(circle closest-side, #4405f7, transparent);
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  -webkit-transition: width .2s ease, height .2s ease;
  transition: width .2s ease, height .2s ease;
}

.button:hover::before {
  --size: 400px;
}
</style>