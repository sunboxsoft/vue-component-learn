<template>
  <section class="TabCardF">
    <div class="header">
      <button
        :class="{ active: value === item.name }"
        v-for="item in tabsData"
        :key="item.name"
        @click="changeMenu(item.name)"
      >
        {{ item.label }}
      </button>
    </div>
    <slot></slot>
  </section>
</template>

<script>
export default {
  name: "TabCardF",
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
    console.log(this.tabsData);
    console.log(this.$children, this.$children[0].label, "EEEEEEEEEEE");
  },
  methods: {
    changeMenu(name) {
      this.$emit("input", name);
    },
  },
};
</script>

<style>
.TabCardF {
  width: 500px;
  height: 200px;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid black;
}
.header {
  padding: 20px 0;
  border-bottom: 1px solid;
}
.active {
  background-color: yellow;
}
</style>
