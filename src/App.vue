<template>
  <div class="relative home">
    <Header title="Task Tracker" />
    <main class="min-w-[screen]">
      <router-view />
    </main>
    <!-- <Footer /> -->
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "HomeView",
  components: {
    Header,
    Footer,
  },
};
</script>

<style></style>
