<template>
  <div id="app">
    <it-c-tab v-model="activeName">
      <it-c-tab-panel label="用户管理" name="first">用户管理</it-c-tab-panel>
      <it-c-tab-panel label="配置管理" name="second">配置管理</it-c-tab-panel>
      <it-c-tab-panel label="角色管理" name="third">角色管理</it-c-tab-panel>
      <it-c-tab-panel label="定时任务补偿" name="fourth">定时任务补偿</it-c-tab-panel
      >
    </it-c-tab>

    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
      <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
      <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
      <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import ItTab from "./components/ItCTab.vue";
import ItTabPanel from "./components/ItCTabPanel.vue";

export default {
  name: "App",
  data() {
    return {
      activeName: "second",
    };
  },
  components: {
    ItTab,
    ItTabPanel,
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
  },
};
</script>

<style>
</style>
