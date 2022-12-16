<template>
  <div class="wrapper">
    <div class="wrapper__content">
      <Sidebar />
      <Table />
    </div>
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar.vue";
import Table from "@/components/Table.vue";
export default {
  components: { Sidebar, Table },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap");
.wrapper {
  background: #1e1e1e;
  padding: 32px;
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  font-family: "Inter", sans-serif;

  &__content {
    display: flex;
    justify-content: center;
    gap: 24px;
  }
}

body {
  margin: 0;
}
</style>
