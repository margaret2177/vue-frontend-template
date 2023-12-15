<template>
  <div class="button cursor-pointer" @click="cb" :style="{ background: color }">
    <span class="text-center" v-if="label">{{ label }}</span>
    <span v-if="icon"><i :class="icon"></i></span>
  </div>
</template>
<script>
export default {
  name: "Button",
  props: {
    label: { type: String },
    icon: { type: String },
    color: { type: String, default: "blue" },
    cb: { type: Function },
  },
  // methods: {
  //   handleClick() {
  //     this.$emit("button-click");
  //   },
  // },
};
</script>
<style>
.button {
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: center;
  padding: 10px 10px;
  font-size: 18px;
  font-weight: bold;
  color: white;
  height: 40px !important;
  min-width: 40px !important;
  border-radius: 9999px;
}
</style>
