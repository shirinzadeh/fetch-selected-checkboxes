import { createStore } from 'vuex';

const store = createStore({
   state() {
      return {
      }
   },
   mutations: {
   },
   actions: {
      async sendData(_, data) {
         const response = await fetch('https://task-select-checkbox-default-rtdb.firebaseio.com/checkbox.json', {
            method: 'POST',
            body: JSON.stringify(data)
         })
         const responseData = await response.json();
         if(!response.ok) {
            const error = new Error(responseData.message || 'Failed to send request');
            throw error;
         }
      },
      async fetchData() {
         const response = await fetch('https://task-select-checkbox-default-rtdb.firebaseio.com/checkbox.json');
         const responseData = await response.json();
         if(!response.ok) {
            const error = new Error(responseData.message || 'Failed to get data');
            throw error;
         }
      }
   },
   getters: {

   }
})

export default store;