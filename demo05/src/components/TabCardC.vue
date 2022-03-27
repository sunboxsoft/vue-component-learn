<template>
  <div v-show="name===$parent.value"><slot></slot></div>
</template>

<script>
export default {
  name: "TabCardC",
  props: ["label", "name"],
  data() {
    return {};
  },
  components: {},
  watch: {},
  mounted() {
      console.log(this.$parent.value)
  },
  methods: {},
};
</script>

<style>
</style>
