<template>
   <div>
      <div>
         <label for="frontend">frontend</label>
         <input
            type="checkbox"
            name=""
            id="frontend"
            @change="selectCheckbox"
         />
      </div>
      <div>
         <label for="backend">backend</label>
         <input type="checkbox" name="" id="backend" @change="selectCheckbox" />
      </div>
      <div>
         <label for="fullstack">fullstack</label>
         <input
            type="checkbox"
            name=""
            id="fullstack"
            @change="selectCheckbox"
         />
      </div>
      <button @click="getData">Click to get request</button>
      <p v-if="!!error">{{ error }}</p>
   </div>
</template>

<script>
export default {
   data() {
      return {
         areas: [],
         error: null,
      };
   },
   methods: {
      async selectCheckbox(e) {
         const target = e.target;
         if (target.checked && !this.areas.includes(target.id)) {
            this.areas.push(target.id);
         } else {
            const selectedCheckboxIndex = this.areas.indexOf(target.id);
            this.areas.splice(selectedCheckboxIndex, 1);
         }

         try {
            await this.$store.dispatch("sendData", this.areas);
         } catch (err) {
            this.error = "Failed to send data";
         }
      },
      async getData() {
         try {
            await this.$store.dispatch("fetchData");
         } catch {
            this.error = "Failed to get data";
         }
      },
   },
};
</script>

<style>
</style>