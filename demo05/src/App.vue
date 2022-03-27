<template>
  <div id="app">
    <TabCardF  v-model="activeName" >
      <TabCardC label="用户管理" name="first">用户管理</TabCardC>
      <TabCardC label="配置管理" name="second">配置管理</TabCardC>
      <TabCardC label="角色管理" name="third">角色管理</TabCardC>
      <TabCardC label="定时任务补偿" name="fourth">定时任务补偿</TabCardC>
    </TabCardF>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
      <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
      <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
      <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import TabCardF from "./components/TabCardF.vue";
import TabCardC from "./components/TabCardC.vue";
export default {
  name: "App",
  data() {
    return {
      activeName: "second",
    };
  },
  mounted(){
  },
  components: { TabCardF, TabCardC },
  methods: {
    handleClick(e) {
      console.log(e.name);
    },
  },
};
</script>

<style>
</style>
