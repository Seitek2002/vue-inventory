<template>
  <div class="wrapper">
    <div class="wrapper__content">
      <Sidebar />
    </div>
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar.vue";
export default {
  components: { Sidebar },
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');
.wrapper {
  background: #1e1e1e;
  padding: 32px;
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  font-family: "Inter", sans-serif;
}

body {
  margin: 0;
}
</style>
