<template>
    <div>
        <el-dialog title="详细信息" :visible.sync="dialogTableVisible" @close="closeDialog">
            <el-form
                :model="ruleForm"
                status-icon
                :rules="rules"
                ref="ruleForm"
                label-width="100px"
            >
                <el-form-item label="姓名" prop="name">
                    <el-input v-model="ruleForm.name" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="性别" prop="sex">
                    <el-input v-model="ruleForm.sex" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="身份证号" prop="identity">
                    <el-input v-model="ruleForm.identity" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="部门" prop="department">
                    <el-input v-model="ruleForm.department" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="电话号码" prop="phone">
                    <el-input v-model="ruleForm.phone" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="工号" prop="wid">
                    <el-input v-model="ruleForm.wid" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="签约时间" prop="signingTime">
                    <el-input v-model="ruleForm.signingTime" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="离校时间" prop="departureTime">
                    <el-input v-model="ruleForm.departureTime" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="学历" prop="degree">
                    <el-input v-model="ruleForm.degree" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
                    <el-button @click="resetForm('ruleForm')">重置</el-button>
                </el-form-item>
            </el-form>
        </el-dialog>
    </div>
</template>

<style>
</style>

<script>
export default {
    data() {
        return {
            dialogTableVisible: false,
            ruleForm: {
                name: "李老师",
                sex: "男",
                identity: "110",
                department: "外籍教师",
                phone: "120",
                wid: "001",
                signingTime: "2010",
                departureTime: "2019",
                degree: "博士"
            },
            rules: {
                name: [
                    {
                        required: true,
                        message: "请输入邮箱地址",
                        trigger: "blur"
                    }
                ],
                sex: [
                    {
                        required: true,
                        message: "请输入邮箱地址",
                        trigger: "blur"
                    }
                ],
                identity: [
                    {
                        required: true,
                        message: "请输入邮箱地址",
                        trigger: "blur"
                    }
                ],
                department: [
                    {
                        required: true,
                        message: "请输入邮箱地址",
                        trigger: "blur"
                    }
                ],
                phone: [
                    {
                        required: true,
                        message: "请输入邮箱地址",
                        trigger: "blur"
                    }
                ],
                wid: [
                    {
                        required: true,
                        message: "请输入邮箱地址",
                        trigger: "blur"
                    }
                ],
                signingTime: [
                    {
                        required: true,
                        message: "请输入邮箱地址",
                        trigger: "blur"
                    }
                ],
                departureTime: [
                    {
                        required: true,
                        message: "请输入邮箱地址",
                        trigger: "blur"
                    }
                ],
                degree: [
                    {
                        required: true,
                        message: "请输入邮箱地址",
                        trigger: "blur"
                    }
                ]
            }
        };
    },
    props: {
        detailVisible: Boolean,
        detailitem: Object
    },
    watch: {
        detailVisible(newValue, oldValue) {
            this.dialogTableVisible = newValue;
        }
    },
    methods: {
        closeDialog() {
            this.$emit("close-dialogStatus", true);
        },
        submitForm(ruleForm) {
          this.dialogTableVisible = false;
            this.$message('修改成功');
        }
    }
};
</script>