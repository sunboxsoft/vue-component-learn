<template>
  <section class="ItCTab">
    <div class="header">
      <button
        v-for="(item, i) in tabsData"
        :key="i"
        @click="changeMenu(item.name)"
        :class="{active: item.name==value}"
      >
        {{ item.label }}
      </button>
    </div>
    <div class="footer">
      <slot></slot>
    </div>
  </section>
</template>

<script>
export default {
  name: "ItCTab",
  props: ["value"],
  data() {
    return {
      tabsData: [],
    };
  },
  components: {},
  watch: {},
  mounted() {
    this.tabsData = this.$children;
    console.log(this.$children, this.$children[0].label, "EEEEEEEEEEE");
  },
  methods: {
    changeMenu(e) {
      console.log(e, "RRRRRRRRRRRRRRR");
      this.$emit("input", e);
    },
  },
};
</script>

<style>
.ItTab {
  border: 1px solid;
  height: 200px;
  width: 400px;
}
.header {
  border-bottom: 1px solid;
  padding: 20px 0;
}
.active{
  background-color: pink;
}
</style>
