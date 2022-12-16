<template>
  <div class="wrapper">
    <div class="wrapper__content">
      <Sidebar />
      <Table />
    </div>
    <footer class="wrapper__footer footer">
      <p class="footer__stroke"></p>
      <button class="footer__close">
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 1.05L10.95 0L6 4.95L1.05 0L0 1.05L4.95 6L0 10.95L1.05 12L6 7.05L10.95 12L12 10.95L7.05 6L12 1.05Z"
            fill="white"
          />
        </svg>
      </button>
    </footer>
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

  .footer {
    background: #262626;
    border: 1px solid #4d4d4d;
    border-radius: 12px;
    width: 785px;
    height: 72px;
    margin: 24px auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 18px;
    box-sizing: border-box;

    &__stroke {
      background: linear-gradient(
        90deg,
        #3c3c3c 0%,
        #444444 51.04%,
        #333333 100%
      );
      border-radius: 12px;
      width: 699px;
      height: 36px;
    }

    &__close {
      background: transparent;
      border: none;
      cursor: pointer;
    }
  }
}

body {
  margin: 0;
}
</style>
