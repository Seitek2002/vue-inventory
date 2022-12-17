<template>
  <div class="sidebar">
    <img src="./assets/avatar.png" alt="" />
    <h2 class="sidebar__title bg-blur"></h2>
    <p class="sidebar__stroke bg-blur long"></p>
    <p class="sidebar__stroke bg-blur short"></p>
    <p class="sidebar__stroke bg-blur medium"></p>
    <p class="sidebar__stroke bg-blur short"></p>
    <p class="sidebar__stroke bg-blur medium"></p>
    <p class="sidebar__stroke bg-blur"></p>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.sidebar {
  padding: 18px 14px;
  text-align: center;
  width: 236px;
  background: #262626;
  border: 1px solid #4d4d4d;
  border-radius: 12px;

  &__title {
    border-radius: 8px;
    width: 190px;
    height: 26px;
    margin: 22px auto;
  }

  &__stroke {
    margin: 16px auto;
    height: 10px;
  }

  .long {
    width: 190px;
  }

  .medium {
    width: 170px;
  }

  .short {
    width: 160px;
  }
}

.bg-blur {
  background: linear-gradient(90deg, #3c3c3c 0%, #444444 51.04%, #333333 100%);
  border-radius: 4px;
}
</style>
