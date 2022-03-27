<template>
<div>
  <section @click="AddByChild" class="TestA">{{title}}</section>
  <input type="text" name="num" id="num" v-model="count">
  </div>
</template>

<script>
export default {
  name: "TestA",
  props:['title'],
  data() {
    return {
        count:1
    };
  },
  components: {},
  watch: {},
  mounted() {},
  methods: {
    AddByChild(){
        this.$emit("add-change",this.title+"child"+this.count++)
    }
  },
};
</script>

<style>
</style>
