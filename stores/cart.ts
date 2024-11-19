import { defineStore } from 'pinia';

export interface Iitems {
  price: Number
  name: String
  imagePath: String
  description: String
}


export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [] as Iitems[],
  }),
  getters: {
    itemCount: (state) => state.items.length,
    getItems: (state) => state.items,
    getTotal: (state) => {
      return state.items.reduce((total , item) => {
        return Number(total) + Number(item.price);
      }, 0);
    },
  },
  actions: {
    addItem(item:Iitems) {
      this.items.push(item);
    },
    removeItem(index:number) {
      this.items = this.items.filter((item,ind)=> ind !== index);
    },
  },
});