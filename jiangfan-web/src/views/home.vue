<template>
  <el-container>
    <el-aside width="200px">
      <el-col :span="24">
        <!-- NavMenu -->
        <NavMenu></NavMenu>
      </el-col>
    </el-aside>
    <el-container>
      <el-header>
        <Breadcrumb></Breadcrumb>
      </el-header>
      <el-main>
        <el-card class="box-card">
          <Tabs></Tabs>
          <!--<router-view></router-view>-->
        </el-card>
      </el-main>
      <!--<el-footer>Footer</el-footer>-->
    </el-container>
  </el-container>
</template>

<script>

  import NavMenu from '@/views/NavMenu/Index'
  import Tabs from '@/views/Tabs/Index'
  import Breadcrumb from '@/views/Breadcrumb/Index'

  export default {
    name: "home",
    components: {
      'Tabs': Tabs,
      'NavMenu': NavMenu,
      'Breadcrumb': Breadcrumb
    },
    data() {
      return {}
    },
    methods: {}
  }
</script>

<style scoped>

  .el-aside {
    background-color: #545c64;
  }

  .el-main {
    height: 488px;
  }
</style>
