import { defineStore } from 'pinia';

type Operation = {
  expression: string;
  result: number;
};

type IState = {
  history: Operation[];
};

// You could even create a hook to build this store
export const useOperationsStore = defineStore('operations', {
  state: (): IState => ({
    history: [],
  }),
  getters: {
    // ! No need to override state
    //   history: (state): Operation[] => state.history,
  },
  actions: {
    add(operation: Operation) {
      this.history.push(operation);
    },
    clearAll() {
      this.history = [];
    },
  },
});

// export const useCounterStore = defineStore('counter', () => {
//   const count = ref(0)
//   function increment() {
//     count.value++
//   }

//   return { count, increment }
// })
