<template>
  <div class="text_group">
    <!-- 组件解构 -->

    <!-- 组件容器 -->
    <div class="input_group">
      <!-- 输入框 -->
      <input
        :type="type"
        :value="value"
        :placeholder="placeholder"
        :name="name"
        @input="$emit('input', $event.target.value)"
      />

      <!-- 按钮 -->
      <button v-if="btnTitle" :disabled="disabled" @click="$(emit('btnClick'))">{{btnTitle}}</button>
      <!-- 错误体系 -->
      <div v-if="error" class="invalid-feedback">{{error}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "inputgroup",
  props: {
    type: {
      type: String,
      default: "text",
    },
    value: String,
    placeholder: String,
    name: String,
  },
};
</script>

<style lang="scss" scoped>

</style>
