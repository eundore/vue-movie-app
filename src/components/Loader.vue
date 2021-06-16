<template>
  <div 
    :style="{
      width: `${size}rem`,
      height: `${size}rem`,
      zIndex
    }"
    :class="{ 
      absolute
      , fixed }"
    class="spinner-border text-primary"></div>
</template>

<script>
export default {
  props:{ //props는 부모 컴포넌트에서 자식 컴포넌트로 데이터를 내려보내주는 것.
    size: {
      type: Number,
      default: 2
    },
    absolute: {
      type: Boolean,
      default: false
    },
    fixed: {
      type: Boolean,
      default: false
    },
    zIndex: {
      type: Number,
      default: 0
    }
  }
}
</script>

<style lang="scss" scoped>
.spinner-border{
  margin: auto;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  &.absolute {
    position: absolute; //부모요소 기준에 가운데 배치
  }
  &.fixed{
    position: fixed; //뷰포트 기준에 가운데 배치
  }
}
</style>