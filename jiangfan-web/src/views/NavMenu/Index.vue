<template>
  <el-row class="tac">
    <el-col :span="24">
      <!--:router = true-->
      <el-menu
        :default-active="onRoutes"
        class="el-menu-vertical-demo"
        background-color="#545c64"
        @open="handleOpen"
        @close="handleClose">
        <el-submenu v-bind:index="menu.id" v-for="menu in menus">
          <template slot="title">
            <i v-bind:class="menu.icon"></i>
            <span>{{menu.name}}</span>
          </template>
          <el-menu-item v-for="menuItem in menu.menus" :key="menuItem.id" :index="menuItem.url" @click="addTab(menuItem)" >
            <span>{{menuItem.name}}</span>
          </el-menu-item>
        </el-submenu>
      </el-menu>
    </el-col>
  </el-row>

</template>

<script>
  import bus from '../../common/bus.js'

  export default {
    data() {
      return {
        menus: [
          {
            "id": "1",
            "name": "用户管理",
            "icon": "el-icon-location",
            "menus": [{"id": "1-1", "name": "HOME", "url": "HelloWorld"}]
          },
          {
            "id": "2",
            "name": "客户管理",
            "icon": "el-icon-menu",
            "menus": [{"id": "2-1", "name": "客户列表", "url": "Customer"}]
          },
          {
            "id": "3",
            "name": "TABS管理",
            "icon": "el-icon-menu",
            "menus": [{"id": "3-1", "name": "TABS列表", "url": "Tabs"}]
          },
        ]
      }
    },
    methods: {
      onRoutes() {
        //当前激活菜单的 index
        return this.$route.path.replace('/', '');
      },
      addTab(menuItem) {
        alert(JSON.stringify(menuItem));
        // console.log(id, url);
        bus.$emit('navPath', menuItem.url)
      },
      //
      // //实现路由的局部刷新
      // reloadRouter(path) {
      //   this.$router.replace({
      //     path: "/Main",
      //     query: {
      //       nextPath: path
      //     }
      //   });
      // },
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style scoped>

</style>
