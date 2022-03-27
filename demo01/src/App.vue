<template>
  <div id="app">
    <img src="./assets/logo.png" />
    <HelloWorld />

    <input type="text" v-model="title" />
    <hr />
    <TestA @add-change="testFather" :title="title"></TestA>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import TestA from "@/components/TestA";
export default {
  name: "App",
  data() {
    return {
      title: "",
    };
  },
  components: {
    HelloWorld,
    TestA,
  },
  methods: {
    testFather(param) {
      alert(param);
    },
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
