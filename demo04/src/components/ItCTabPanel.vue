<template>
  <section v-show="name === $parent.value" class="ItCTabPanel">
    {{ label }} {{ name }} {{ $parent.value }}
  </section>
</template>

<script>
export default {
  name: "ItCTabPanel",
  props: ["label", "name"],
  data() {
    return {};
  },
  components: {},
  watch: {},
  mounted() {
    console.log(this.$parent.value, "UUUUUUUUUUU");
  },
  methods: {},
};
</script>

<style>
</style>
