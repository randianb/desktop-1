<template>
  <div>
    <div class="vChat-container flex1 flexbox flex__direction-column">
      <div class="vChat__header">
        顶部
      </div>

      <div class="vChat__main flex1 flexbox flex__direction-column" style="border:1px solid blue;">
        <geminiScrollbar autoshow class="geminiScrollbar flex1">
          首页自定义内容<br><br><br>
          首页自定义内容<br><br><br>
          首页自定义内容<br><br><br>
        </geminiScrollbar>
      </div>

      <div class="vChat__footer">
        底部
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {}
    },
    methods: {},
  }
</script>

<style>

</style>
