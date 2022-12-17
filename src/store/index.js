import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate"

export default createStore({
  state: {
    items: [
      [
        {
          id: 0,
          name: "Sword",
          description:
            "Swords are weapons that are primarily used to kill mobs or other players quicker than punching them with bare hands. They also remove some blocks faster than using a player's bare hands (such as leaves, vines, melons, and cobwebs). Each broken block counts as two uses on the sword's durability when used in this way.",
          counter: 4,
          imgUrl: "/img/Sword.png",
          category: "weapon",
        },
        {
          id: 1,
          name: "Wheat",
          description:
            "Wheat is a food item obtained through farming, which is used in crafting. It can also be considered as a block while it is growing on a plot of farmland. Wheat seeds, required for growing wheat, can be obtained by breaking tall grass (30% chance) or can be found in chests within dungeons. It is one of the first crops a player can cultivate when starting a new world.",
          counter: 64,
          imgUrl: "/img/Wheat.png",
          category: "plant",
        },
        {
          id: 2,
          name: "Saddle",
          description:
            "A saddle is an item that can be placed on a pig, horse, mule, strider, or donkey, allowing a player to ride the animal.",
          counter: 1,
          imgUrl: "/img/Saddle.png",
          category: "utility",
        },
        {
          id: 3,
          name: "Arrow",
          description:
            "Arrows are the projectiles required to use a Bow or a Crossbow. They can either be crafted or gathered as loot.",
          counter: 32,
          imgUrl: "/img/Arrow.png",
          category: "weapon",
        },
        {},
      ],
      [{}, {}, {}, {}, {}],
      [{}, {}, {}, {}, {}],
      [{}, {}, {}, {}, {}],
      [{}, {}, {}, {}, {}],
    ],
    i: null,
    j: null,
    k: null,
    l: null,
  },
  getters: {},
  plugins: [createPersistedState()],
  mutations: {
    setPosition(state, event) {
      state.i = event.toElement.dataset.row;
      state.j = event.toElement.dataset.col;
    },
    swapElements(state, event) {
      state.k = event.toElement.dataset.row;
      state.l = event.toElement.dataset.col;

      let temp = state.items[state.i][state.j];
      state.items[state.i][state.j] = state.items[state.k][state.l];
      state.items[state.k][state.l] = temp;
    },
  },
  actions: {},
  modules: {},
});
