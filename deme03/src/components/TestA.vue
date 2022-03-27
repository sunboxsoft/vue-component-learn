<template>
  <section class="TestA">
    测试父子组件传值
    <button @click="add_minus(-1)">-</button>
    <input type="number" @input="changeInput" :value="value" />
    <button @click="add_minus(1)">+</button>
     <figure>
      <figcaption><slot name="header"></slot></figcaption>
      <slot></slot>
    </figure> 
  </section>
</template>

<script>
export default {
  name: "TestA",
  props: ["value"],
  data() {
    return {};
  },
  components: {},
  watch: {},
  mounted() {},
  methods: {
    SendMsg(msg) {
      this.$emit("on-child-click", msg);
    },
    add_minus(count) {
      this.$emit("input", this.value + count);
    },
    changeInput(e) {
      console.log(e.target,e, "DDDDDDDDDDDDDDD");
      this.$emit("input", e.target.value - 0);
    },
  },
};
</script>

<style>
</style>
