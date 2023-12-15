<template>
  <header class="!bg-red-500">header</header>
</template>

<script>
export default {
  name: "Header",
  props: {
    title: { type: String, default: "Task Tracker" },
  },
};
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 20px;
  background: yellow;
  position: sticky;
  top: 0px;
  z-index: 1000;
  height: 69px;
}
.logo {
  text-decoration: none;
  font-size: 20px;
  color: black;
  text-transform: uppercase;
}
</style>
