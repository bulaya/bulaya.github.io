<template>
    <div>
        <top></top>
        <el-main>
            <div style="margin-bottom: 8px;">
                部门
                <el-select v-model="valueList" multiple placeholder="请选择">
                    <el-option
                        v-for="item in department"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                    ></el-option>
                </el-select>性别
                <el-select v-model="sex" placeholder="请选择">
                    <el-option
                        v-for="item in sexs"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                    ></el-option>
                </el-select>学历
                <el-select v-model="degree" placeholder="请选择">
                    <el-option
                        v-for="item in degrees"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                    ></el-option>
                </el-select>签约时间
                <div class="block" style="display: inline-block">
                    <el-date-picker
                        v-model="time"
                        type="daterange"
                        range-separator="至"
                        start-placeholder="开始日期"
                        end-placeholder="结束日期"
                    ></el-date-picker>
                </div>
                <el-button type="primary" icon="el-icon-search">搜索</el-button>
            </div>
            <el-row :gutter="40">
                <el-col
                    :xs="8"
                    :sm="6"
                    :md="4"
                    :lg="3"
                    :xl="1"
                    v-for="o in 16"
                    :key="o"
                    style="margin-bottom: 20px"
                >
                    <el-card :body-style="{ padding: '0px' }">
                        <img src="../assets/teacherLi.jpg" class="image" />
                        <div style="padding: 14px;">
                            <span>李老师</span>
                            <div class="bottom clearfix">
                                <el-button type="text" class="button" @click="show()">查看</el-button>
                            </div>
                        </div>
                    </el-card>
                </el-col>
            </el-row>
            <el-pagination style="float: right" background layout="prev, pager, next" :total="1000"></el-pagination>
        </el-main>
        <detail
            :detailtem="detailitem"
            :detailVisible="detailVisible"
            @close-dialogStatus="Close_dialog"
        ></detail>
        <bottom></bottom>
    </div>
</template>
<style>
body {
    margin: 0;
}

.bottom {
    margin-top: 13px;
    line-height: 12px;
}

.button {
    padding: 0;
    float: right;
}

.image {
    width: 100%;
    height: 100%;
    display: block;
}

.clearfix:before,
.clearfix:after {
    display: table;
    content: "";
}

.clearfix:after {
    clear: both;
}
</style>

<script>
import top from "@/components/top";
import bottom from "@/components/bottom";
import detail from "@/components/detail";
export default {
    data() {
        return {
            detailitem: {},
            detailVisible: false,
            activeIndex: "1",
            department: [
                {
                    value: "选项1",
                    label: "外籍教师"
                },
                {
                    value: "选项2",
                    label: "工作人员"
                }
            ],
            valueList: [],

            sexs: [
                {
                    value: "选项1",
                    label: "男"
                },
                {
                    value: "选项2",
                    label: "女"
                }
            ],
            sex: "",

            degrees: [
                {
                    value: "选项1",
                    label: "本科"
                },
                {
                    value: "选项2",
                    label: "硕士"
                },
                {
                    value: "选项3",
                    label: "博士"
                }
            ],
            degree: "",

            time: ""
        };
    },
    created: function() {},
    mounted: function() {},
    components: {
        top,
        bottom,
        detail
    },
    methods: {
        Close_dialog(val) {
            this.detailVisible = false;
        },
        show() {
            this.detailitem = 1;
            this.detailVisible = true;
        }
    }
};
</script>
