<template>
  <div class="table">
    <div
      class="table__row"
      v-for="(row, rowIndex) in $store.state.items"
      :key="rowIndex"
    >
      <div class="table__cell" v-for="(item, colIndex) in row" :key="colIndex">
        <div @click="setDrawerInfo(item)" v-if="item.name" class="table__item">
          <img :src="item.imgUrl" alt="" />
          <div class="table__item-counter">{{ item.counter }}</div>
        </div>
      </div>
    </div>
    <div v-if="isDrawerOpen" class="drawer">
      <div class="drawer__content">
        <div class="drawer__close">
          <svg
            @click="isDrawerOpen = !isDrawerOpen"
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
        </div>
        <div class="drawer__img">
          <img :src="drawerInfo.imgUrl" alt="" />
        </div>
        <div class="drawer__details">
          <h2 class="drawer__title">{{ drawerInfo.name }}</h2>
          <p class="drawer__description">
            {{ drawerInfo.description }}
          </p>
        </div>
        <button
          v-if="!isFooterActive"
          @click="isFooterActive = !isFooterActive"
          class="drawer__remove"
        >
          Удалить предмет
        </button>
      </div>
      <div class="drawer__footer">
        <div v-if="isFooterActive" class="drawer__edit">
          <input
            class="drawer__input"
            placeholder="Введите количество"
            type="text"
            @input="validateInput"
          />
          <div class="drawer__btns">
            <button
              @click="isFooterActive = !isFooterActive"
              class="drawer__cancel-btn"
            >
              Отмена
            </button>
            <button
              v-if="deletedCounter"
              @click="deleteItem(drawerInfo)"
              class="drawer__approve-btn"
            >
              Подтвердить
            </button>
            <button v-else disabled class="drawer__approve-btn">
              Подтвердить
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
export default {
  setup() {
    const isDrawerOpen = ref(false);
    const isFooterActive = ref(false);
    const deleteInputValue = ref("");

    const drawerInfo = ref(null);

    const setDrawerInfo = (data) => {
      drawerInfo.value = data;
      isDrawerOpen.value = !isDrawerOpen.value;
    };

    const deleteItem = (item) => {
      console.log(item);
    };

    const validateInput = (e) => {
      if (Number(e.target.value) || e.target.value == 0) {
        deleteInputValue.value = e.target.value;
      } else {
        e.target.value = deleteInputValue.value
      }
    };

    return {
      isDrawerOpen,
      isFooterActive,
      drawerInfo,
      setDrawerInfo,
      deleteItem,
      validateInput,
      deleteInputValue,
    };
  },
};
</script>

<style lang="scss">
.table {
  background: #262626;
  border: 1px solid #4d4d4d;
  border-radius: 12px;
  width: 525px;
  height: 500px;
  overflow: hidden;
  position: relative;

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
.drawer {
  position: absolute;
  right: 0;
  top: 0;

  &__content {
    text-align: center;
    background: rgba(38, 38, 38, 0.5);
    border-left: 1px solid #4d4d4d;
    backdrop-filter: blur(8px);
    width: 250px;
    height: 500px;
    padding: 15px;
    box-sizing: border-box;
    overflow: auto;
  }

  &__img {
    width: 130px;
    height: 130px;
    margin: 0 auto;

    img {
      max-width: 100%;
    }
  }

  &__details {
    border-top: 1px solid #4d4d4d;
    border-bottom: 1px solid #4d4d4d;
    padding-top: 16px;
    padding-bottom: 24px;
    margin-top: 30px;
    margin-bottom: 18px;
  }

  &__title {
    color: #ffffff;
    opacity: 0.4;
  }

  &__description {
    font-size: 12px;
    color: #ffffff;
    opacity: 0.4;
  }

  &__close {
    display: flex;
    justify-content: flex-end;
    padding-bottom: 34px;

    svg {
      cursor: pointer;
    }
  }

  &__remove {
    background: #fa7272;
    border-radius: 8px;
    width: 100%;
    padding: 11px 0;
    color: #ffffff;
    font-size: 14px;
    border: none;
    cursor: pointer;
  }

  &__footer {
    position: sticky;
    width: 100%;
    left: -1px;
    bottom: 0;
  }

  &__edit {
    background: rgba(38, 38, 38, 0.6);
    border: 1px solid #4d4d4d;
    backdrop-filter: blur(8px);
    padding: 20px 21px;
    box-sizing: border-box;
  }

  &__btns {
    margin-top: 20px;
    display: flex;
    gap: 10px;
  }

  &__cancel-btn {
    background: #ffffff;
    border-radius: 8px;
    padding: 8px 18px;
    box-sizing: border-box;
    border: none;
    color: #2d2d2d;
    font-size: 14px;
    cursor: pointer;
  }

  &__approve-btn {
    background: #fa7272;
    border-radius: 8px;
    padding: 8px 15px;
    box-sizing: border-box;
    border: none;
    color: #fff;
    font-size: 14px;
    cursor: pointer;

    &:disabled {
      opacity: 0.5;
    }
  }

  &__input {
    background: #262626;
    border: 1px solid #4d4d4d;
    border-radius: 4px;
    color: rgba(255, 255, 255, 0.4);
    font-size: 14px;
    padding: 12px;
    box-sizing: border-box;
    text-rendering: none !important;
    appearance: none;
  }
}
</style>
