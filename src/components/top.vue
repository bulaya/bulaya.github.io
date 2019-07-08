<template>
    <el-header>
        <el-menu :default-active="activeIndex" mode="horizontal" @select="handleSelect">
            <h1>LOGO</h1>
            <el-menu-item index="1">人员</el-menu-item>
            <el-menu-item index="2">部门</el-menu-item>
        </el-menu>
    </el-header>
</template>

<script>
import router from "../router";
export default {
    data() {
        return {
          activeIndex: "1",
            index: ""
        };
    },
    methods: {
        handleSelect(key, keyPath) {
            if (key == 1) {
                router.push("/");
            } else {
                router.push("d");
            }
      }
    }
};
</script>

<style>
.el-header {
    padding: 0;
}
h1 {
    float: left;
    margin-bottom: 0;
    margin-top: 10px;
    margin-right: 20px;
    margin-left: 10px;
}
</style>
