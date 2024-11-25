import { defineStore } from 'pinia';


export interface IDataToken {
  type: string
  value :string
}

export const useSession = defineStore('session', {
  state: () => ({
    isAuthenticated: false,
    dataToken: {} as IDataToken
  }),
  persist: true,
  getters: {
    getIsAuthenticated: (state) => state.isAuthenticated,
  },
  actions: {
    authenticate(data: IDataToken) {
      this.isAuthenticated = true;
      this.dataToken = data;
    },
    logout() {
      this.isAuthenticated = false;
      this.dataToken = {} as IDataToken;
    },
  },
})

