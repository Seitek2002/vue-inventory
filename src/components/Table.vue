<template>
  <div class="table">
    <div
      class="table__row"
      v-for="(row, rowIndex) in Array(5)"
      :key="rowIndex"
    >
      <div
        class="table__cell"
        v-for="(item, colIndex) in Array(5)"
        :key="colIndex"
      >
        <div v-if="item" class="table__item">
          <img src="" alt="" />
          <div class="table__item-counter">{{ item.counter }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.table {
  background: #262626;
  border: 1px solid #4d4d4d;
  border-radius: 12px;
  width: 525px;
  height: 500px;
  overflow: hidden;

  &__row {
    display: flex;
  }

  &__cell {
    width: 103px;
    height: 98px;
    border: 1px solid #4d4d4d;

    img {
      width: 54px;
      height: 54px;
    }
  }

  &__item {
    position: relative;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.3s;

    &-counter {
      position: absolute;
      bottom: 0;
      right: 0;
      color: #ffffff;
      opacity: 0.4;
      font-size: 10px;
      background: #262626;
      border: 1px solid #4d4d4d;
      border-radius: 6px 0px 0px 0px;
      width: 16px;
      height: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}
</style>
