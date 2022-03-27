<template>
  <div id="app">
    <img src="./assets/logo.png" />
    <router-view />
    {{ numF }}
    <hr />
    <button @click="TabFun('TestA')">切B换组件A</button>
    <button @click="TabFun('TestB')">切换组件B</button>

    <!-- <TestA v-model="numF">
      <h1 slot="header">标题</h1>
      <p>内容列表</p>
      <p>内容列表</p>
      <p>内容列表</p>
      <p>内容列表</p>
      <p>内容列表</p>
      <p>内容列表</p>
    </TestA>
    <TestB></TestB> -->
    <keep-alive>
      <component :is="defaultComponet"></component>
    </keep-alive>
  </div>
</template>

<script>
//import TestB from "./components/TestB.vue";
const TestB =()=>import("./components/TestB.vue")
export default {
  name: "App",
  data() {
    return {
      numF: 1000,
      defaultComponet: "TestA",
    };
  },
  methods: {
    getMsg(msg) {
      alert(msg + "aaaaaaaaaa");
    },
    TabFun(componetName) {
      this.defaultComponet = componetName;
    },
  },
  components: { TestB },
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
