import { defineStore } from 'pinia';


export interface IDataToken {
  type: string
  value :string
}

export const useLoginModal = defineStore('loginModal', {
  state: () => ({
    isOpen: false,
  }),
  getters: {
    getIsAuthenticated: (state) => state.isOpen,
  },
  actions: {
    open(data: IDataToken) {
      this.isOpen = true;
    },
    close() {
      this.isOpen = false;
    },
  },
})

