<template>
  <el-tabs v-model="editableTabsValue" type="card" editable @edit="handleTabsEdit">
    <el-tab-pane
      :key="item.name"
      v-for="(item, index) in editableTabs"
      :label="item.title"
      :name="item.name"
    >
      <component :is="item.component"></component>
    </el-tab-pane>
  </el-tabs>
</template>
<script>
  import Breadcrumb from '@/views/Breadcrumb/index'
  import NavMenu from '@/views/NavMenu/index'

  import bus from '../../common/bus.js'


  export default {
    name: "Index",
    data() {
      return {
        editableTabsValue: '2',
        editableTabs: [{
          title: 'Tab 1',
          name: '1',
          disabled: true,
          closable: false,
          component: Breadcrumb
        }, {
          title: 'Tab 2',
          name: '2',
          disabled: true,
          closable: false,
          component: NavMenu
        }],
        tabIndex: 2
      }
    },
    created: function () {

      bus.$on("navPath", (message) => {   //这里最好用箭头函数，不然this指向有问题
        let component = resolve => require([`@/views/` + message + `/Index.vue`], resolve);
        this.editableTabs.push({
          title: 'Tab 3',
          name: 'message',
          disabled: true,
          closable: false,
          component: component
        });

      })
    },
    methods: {
      handleTabsEdit(targetName, action) {
        if (action === 'add') {
          let newTabName = ++this.tabIndex + '';
          this.editableTabs.push({
            title: 'New Tab',
            name: newTabName,
            content: 'New Tab content'
          });
          this.editableTabsValue = newTabName;
        }
        if (action === 'remove') {
          let tabs = this.editableTabs;
          let activeName = this.editableTabsValue;
          if (activeName === targetName) {
            tabs.forEach((tab, index) => {
              if (tab.name === targetName) {
                let nextTab = tabs[index + 1] || tabs[index - 1];
                if (nextTab) {
                  activeName = nextTab.name;
                }
              }
            });
          }

          this.editableTabsValue = activeName;
          this.editableTabs = tabs.filter(tab => tab.name !== targetName);
        }
      }
    }
  }
</script>
