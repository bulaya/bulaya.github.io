webpackJsonp([4],{MFpu:function(e,t){},ulHd:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=o("mtWM"),a=o.n(r),s={data:function(){return{activeName:"first",gid:"",data:{},search:"",tableData:[{gid:"12345",name:"asdasd"},{gid:"36925",name:"sdfds"},{gid:"98563",name:"asfghd"},{gid:"25631",name:"ui"},{gid:"65412",name:"tryu"}],form:{rid:"",name:"",person:[],log:[],manager:[],role:[],depPower:[]},qxForm:{rid:"",name:"",pagePower:"",depPower:""}}},created:function(){this.init(),this.getList()},methods:{init:function(){this.data=this.$route.params.data,this.form.rid=this.data.rid,this.form.name=this.data.name;var e=parseInt(this.data.pagePower,16).toString(2);"1"===e[0]&&this.form.person.push("查"),"1"===e[1]&&this.form.person.push("改"),"1"===e[2]&&this.form.person.push("删"),"1"===e[3]&&this.form.person.push("增"),"1"===e[4]&&this.form.log.push("查"),"1"===e[5]&&this.form.log.push("改"),"1"===e[6]&&this.form.log.push("删"),"1"===e[7]&&this.form.log.push("增"),"1"===e[8]&&this.form.manager.push("查"),"1"===e[9]&&this.form.manager.push("改"),"1"===e[10]&&this.form.manager.push("删"),"1"===e[11]&&this.form.manager.push("增"),"1"===e[12]&&this.form.role.push("查"),"1"===e[13]&&this.form.role.push("改"),"1"===e[14]&&this.form.role.push("删"),"1"===e[15]&&this.form.role.push("增"),"1"===this.data.depPower[0]&&this.form.depPower.push("部门1"),"1"===this.data.depPower[1]&&this.form.depPower.push("部门2"),"1"===this.data.depPower[2]&&this.form.depPower.push("部门3")},getList:function(){var e=this;a()({url:"/gllists",params:{rid:e.data.rid}}).then(function(t){var o=t.data;e.tableData=o}).catch(function(e){console.log(e)})},goBack:function(){this.$router.go(-1)},handleDelete:function(e,t){var o=this;this.$confirm("是否移除该管理员?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){var e=o;a()({url:"/gldel",params:{rid:e.data.rid,gid:t.gid}}).then(function(t){1===t.data.success?(e.$message({type:"success",message:"移除成功!"}),e.getList()):e.$message.error("移除失败!")}).catch(function(e){console.log(e)})})},submit:function(){var e=this;a()({url:"/gladd",params:{gid:e.gid,rid:e.data.rid}}).then(function(t){1===t.data.success?e.$message({message:"添加成功",type:"success"}):e.$message.error("添加失败!")}).catch(function(e){console.log(e)})},onSubmit:function(){var e=this;this.transformation(),a()({method:"post",url:"/qxedit",data:e.qxForm}).then(function(t){1===t.data.success?e.$message({message:"修改成功",type:"success"}):e.$message.error("修改失败!")}).catch(function(e){console.log(e)})},reset:function(){this.init()},transformation:function(){console.log(this.form),this.qxForm.rid=this.form.rid,this.qxForm.name=this.form.name,this.qxForm.pagePower="",this.qxForm.depPower="",this.qxForm.pagePower=this.qxForm.pagePower.concat(-1!==this.form.person.indexOf("查")?"1":"0"),this.qxForm.pagePower=this.qxForm.pagePower.concat(-1!==this.form.person.indexOf("改")?"1":"0"),this.qxForm.pagePower=this.qxForm.pagePower.concat(-1!==this.form.person.indexOf("删")?"1":"0"),this.qxForm.pagePower=this.qxForm.pagePower.concat(-1!==this.form.person.indexOf("增")?"1":"0"),this.qxForm.pagePower=this.qxForm.pagePower.concat(-1!==this.form.log.indexOf("查")?"1":"0"),this.qxForm.pagePower=this.qxForm.pagePower.concat(-1!==this.form.log.indexOf("改")?"1":"0"),this.qxForm.pagePower=this.qxForm.pagePower.concat(-1!==this.form.log.indexOf("删")?"1":"0"),this.qxForm.pagePower=this.qxForm.pagePower.concat(-1!==this.form.log.indexOf("增")?"1":"0"),this.qxForm.pagePower=this.qxForm.pagePower.concat(-1!==this.form.manager.indexOf("查")?"1":"0"),this.qxForm.pagePower=this.qxForm.pagePower.concat(-1!==this.form.manager.indexOf("改")?"1":"0"),this.qxForm.pagePower=this.qxForm.pagePower.concat(-1!==this.form.manager.indexOf("删")?"1":"0"),this.qxForm.pagePower=this.qxForm.pagePower.concat(-1!==this.form.manager.indexOf("增")?"1":"0"),this.qxForm.pagePower=this.qxForm.pagePower.concat(-1!==this.form.role.indexOf("查")?"1":"0"),this.qxForm.pagePower=this.qxForm.pagePower.concat(-1!==this.form.role.indexOf("改")?"1":"0"),this.qxForm.pagePower=this.qxForm.pagePower.concat(-1!==this.form.role.indexOf("删")?"1":"0"),this.qxForm.pagePower=this.qxForm.pagePower.concat(-1!==this.form.role.indexOf("增")?"1":"0"),this.qxForm.pagePower=this.qxForm.pagePower.concat("1111"),this.qxForm.pagePower=this.qxForm.pagePower.split("").reverse().join(""),this.qxForm.pagePower=parseInt(this.qxForm.pagePower,2).toString(16),this.qxForm.depPower=this.qxForm.depPower.concat(-1!==this.form.depPower.indexOf("部门1")?"1":"0"),this.qxForm.depPower=this.qxForm.depPower.concat(-1!==this.form.depPower.indexOf("部门2")?"1":"0"),this.qxForm.depPower=this.qxForm.depPower.concat(-1!==this.form.depPower.indexOf("部门3")?"1":"0"),this.qxForm.depPower=this.qxForm.depPower.split("").reverse().join("")}}},i={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"main"},[o("el-page-header",{attrs:{content:e.data.name},on:{back:e.goBack}}),e._v(" "),o("el-tabs",{model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[o("el-tab-pane",{attrs:{label:"管理员",name:"first"}},[o("div",{staticClass:"select"},[o("el-input",{attrs:{placeholder:"输入管理员账号",clearable:""},model:{value:e.gid,callback:function(t){e.gid=t},expression:"gid"}}),e._v(" "),o("el-button",{attrs:{type:"primary"},on:{click:e.submit}},[e._v("添加")])],1),e._v(" "),o("el-table",{staticStyle:{width:"100%"},attrs:{border:"","tooltip-effect":"dark","header-cell-style":{background:"#f5f7fa"},"default-sort":{prop:"gid"},data:e.tableData.filter(function(t){return!e.search||t.name.toLowerCase().includes(e.search.toLowerCase())})}},[o("el-table-column",{attrs:{prop:"gid",label:"账号",sortable:""}}),e._v(" "),o("el-table-column",{attrs:{prop:"name",label:"姓名"}}),e._v(" "),o("el-table-column",{attrs:{align:"right"},scopedSlots:e._u([{key:"default",fn:function(t){return[o("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(o){return e.handleDelete(t.$index,t.row)}}},[e._v("移除")])]}}])},[o("template",{slot:"header"},[o("el-input",{attrs:{size:"mini",placeholder:"输入姓名搜索"},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1)],2)],1)],1),e._v(" "),o("el-tab-pane",{attrs:{label:"权限",name:"second"}},[o("el-form",{ref:"form",attrs:{model:e.form,"label-width":"90px"}},[o("el-divider",{attrs:{"content-position":"left"}},[e._v("页面权限")]),e._v(" "),o("el-form-item",{attrs:{label:"人员管理"}},[o("el-checkbox-group",{model:{value:e.form.person,callback:function(t){e.$set(e.form,"person",t)},expression:"form.person"}},[o("el-checkbox",{attrs:{label:"增",name:"person"}}),e._v(" "),o("el-checkbox",{attrs:{label:"删",name:"person"}}),e._v(" "),o("el-checkbox",{attrs:{label:"改",name:"person"}}),e._v(" "),o("el-checkbox",{attrs:{label:"查",name:"person"}})],1)],1),e._v(" "),o("el-form-item",{attrs:{label:"日志管理"}},[o("el-checkbox-group",{model:{value:e.form.log,callback:function(t){e.$set(e.form,"log",t)},expression:"form.log"}},[o("el-checkbox",{attrs:{label:"增",name:"log",disabled:""}}),e._v(" "),o("el-checkbox",{attrs:{label:"删",name:"log",disabled:""}}),e._v(" "),o("el-checkbox",{attrs:{label:"改",name:"log",disabled:""}}),e._v(" "),o("el-checkbox",{attrs:{label:"查",name:"log"}})],1)],1),e._v(" "),o("el-form-item",{attrs:{label:"管理员列表"}},[o("el-checkbox-group",{model:{value:e.form.manager,callback:function(t){e.$set(e.form,"manager",t)},expression:"form.manager"}},[o("el-checkbox",{attrs:{label:"增",name:"manager",disabled:""}}),e._v(" "),o("el-checkbox",{attrs:{label:"删",name:"manager",disabled:""}}),e._v(" "),o("el-checkbox",{attrs:{label:"改",name:"manager"}}),e._v(" "),o("el-checkbox",{attrs:{label:"查",name:"manager"}})],1)],1),e._v(" "),o("el-form-item",{attrs:{label:"角色管理"}},[o("el-checkbox-group",{model:{value:e.form.role,callback:function(t){e.$set(e.form,"role",t)},expression:"form.role"}},[o("el-checkbox",{attrs:{label:"增",name:"role"}}),e._v(" "),o("el-checkbox",{attrs:{label:"删",name:"role"}}),e._v(" "),o("el-checkbox",{attrs:{label:"改",name:"role"}}),e._v(" "),o("el-checkbox",{attrs:{label:"查",name:"role"}})],1)],1),e._v(" "),o("el-divider",{attrs:{"content-position":"left"}},[e._v("部门权限")]),e._v(" "),o("el-form-item",{attrs:{label:"部门"}},[o("el-checkbox-group",{model:{value:e.form.depPower,callback:function(t){e.$set(e.form,"depPower",t)},expression:"form.depPower"}},[o("el-checkbox",{attrs:{label:"部门1",name:"depPower"}}),e._v(" "),o("el-checkbox",{attrs:{label:"部门2",name:"depPower"}}),e._v(" "),o("el-checkbox",{attrs:{label:"部门3",name:"depPower"}})],1)],1),e._v(" "),o("div",{staticStyle:{"text-align":"left"}},[o("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("提交")]),e._v(" "),o("el-button",{on:{click:e.reset}},[e._v("重置")])],1)],1)],1)],1)],1)},staticRenderFns:[]};var n=o("VU/8")(s,i,!1,function(e){o("MFpu")},"data-v-c454b6b6",null);t.default=n.exports}});
//# sourceMappingURL=4.82c1b15058dd57233433.js.map