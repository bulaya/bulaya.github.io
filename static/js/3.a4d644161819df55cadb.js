webpackJsonp([3],{"4HQS":function(e,t){},"61ot":function(e,t){},"6mjk":function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=l("mtWM"),a=l.n(i),o={data:function(){return{form:{},roleLists:[],dialogpmisible:!1}},props:{pmVisible:Boolean,pmitem:Object},created:function(){this.getList()},watch:{pmVisible:function(e,t){this.dialogpmisible=e},pmitem:function(e,t){this.form=e,console.log(this.form),1===e.state?this.form.state=!0:this.form.state=!1}},methods:{getList:function(){var e=this;a()({url:"/roleLists"}).then(function(t){var l=t.data;e.roleLists=l}).catch(function(e){console.log(e)})},closeDialog:function(){this.$emit("close-dialogStatus",!0)},onSubmit:function(){var e=this;a()({url:"/gledit",data:e.form}).then(function(t){1===t.data.success?e.$message({message:"修改成功",type:"success"}):e.$message.error("操作失败!"),e.dialogpmisible=!1}).catch(function(e){console.log(e)})}}},r={render:function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",[l("el-dialog",{attrs:{title:"编辑",visible:e.dialogpmisible,width:"30%"},on:{"update:visible":function(t){e.dialogpmisible=t},close:e.closeDialog}},[l("el-form",{ref:"form",attrs:{model:e.form}},[l("el-form-item",{attrs:{label:"角色",prop:"role","label-width":"40px"}},[l("el-checkbox-group",{model:{value:e.form.role,callback:function(t){e.$set(e.form,"role",t)},expression:"form.role"}},e._l(e.roleLists,function(e){return l("el-checkbox",{key:e.rid,attrs:{label:e.name,name:"role"}})}),1)],1),e._v(" "),l("el-form-item",{attrs:{label:"状态"}},[l("el-switch",{model:{value:e.form.state,callback:function(t){e.$set(e.form,"state",t)},expression:"form.state"}})],1),e._v(" "),l("el-form-item",{staticStyle:{"text-align":"right"}},[l("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("提交")]),e._v(" "),l("el-button",{on:{click:function(t){e.dialogpmisible=!1}}},[e._v("取消")])],1)],1)],1)],1)},staticRenderFns:[]},n=l("VU/8")(o,r,!1,null,null,null).exports,s={data:function(){return{dialogdetailisible:!1,roleLists:[],form:{role:[]},rules:{id:[{required:!0,validator:function(e,t,l){if(!t)return l(new Error("请输入管理员账号"));if(!/^[0-9]/.test(t))return l(new Error("只能输入数字"));l()},trigger:"blur"}],name:[{required:!0,message:"请输入管理员姓名",trigger:"blur"}]}}},props:{detailVisible:Boolean},created:function(){this.form={role:[]},this.getList()},watch:{detailVisible:function(e,t){this.dialogdetailisible=e}},methods:{getList:function(){var e=this;a()({url:"/roleLists"}).then(function(t){var l=t.data;e.roleLists=l}).catch(function(e){console.log(e)})},closeDialog:function(){this.$emit("close-dialogStatus",!0)},onSubmit:function(){var e=this;a()({url:"/gledit"}).then(function(t){1===t.data.success?e.$message({message:"修改成功",type:"success"}):e.$message.error("操作失败!"),e.dialogpmisible=!1}).catch(function(e){console.log(e)})}}},c={render:function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",[l("el-dialog",{attrs:{title:"添加",visible:e.dialogdetailisible,width:"40%"},on:{"update:visible":function(t){e.dialogdetailisible=t},close:e.closeDialog}},[l("el-form",{ref:"form",attrs:{model:e.form,"label-width":"100px",rules:e.rules}},[l("el-form-item",{attrs:{label:"账号",prop:"id"}},[l("el-input",{attrs:{autocomplete:"off"},model:{value:e.form.id,callback:function(t){e.$set(e.form,"id",t)},expression:"form.id"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"姓名",prop:"name"}},[l("el-input",{attrs:{autocomplete:"off"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"角色",prop:"role"}},[l("el-checkbox-group",{model:{value:e.form.role,callback:function(t){e.$set(e.form,"role",t)},expression:"form.role"}},[e._l(e.roleLists,function(e){return l("el-checkbox",{key:e.rid,attrs:{label:e.name,name:"role"}})}),e._v(" "),l("el-checkbox",{attrs:{label:"超级管理员",name:"role"}}),e._v(" "),l("el-checkbox",{attrs:{label:"部门1管理员",name:"role"}}),e._v(" "),l("el-checkbox",{attrs:{label:"部门2管理员",name:"role"}}),e._v(" "),l("el-checkbox",{attrs:{label:"部门3管理员",name:"role"}})],2)],1),e._v(" "),l("el-form-item",{attrs:{label:"状态"}},[l("el-switch",{model:{value:e.form.state,callback:function(t){e.$set(e.form,"state",t)},expression:"form.state"}})],1),e._v(" "),l("el-form-item",{staticStyle:{"text-align":"right"}},[l("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("提交")]),e._v(" "),l("el-button",{on:{click:function(t){e.dialogdetailisible=!1}}},[e._v("取消")])],1)],1)],1)],1)},staticRenderFns:[]};var u={data:function(){return{pmitem:{},pmVisible:!1,detailVisible:!1,gid:"",name:"",roles:"",currentPage:1,totalPage:1,tableData:[]}},components:{pm:n,detail:l("VU/8")(s,c,!1,function(e){l("61ot")},"data-v-a5240c8a",null).exports},created:function(){this.getList()},watch:{gid:function(e,t){this.getList()},name:function(e,t){this.getList()}},methods:{getList:function(){var e=this;a()({url:"/gllist",params:{gid:e.gid,name:e.name,currentPage:e.currentPage}}).then(function(t){var l=t.data;e.tableData=l.data,e.totalPage=l.totalPage}).catch(function(e){console.log(e)})},Close_dialog:function(e){this.pmVisible=!1,this.detailVisible=!1,this.getList()},handleEdit:function(e,t){this.pmitem=t,this.pmVisible=!0},add:function(){this.detailVisible=!0},handleCurrentChange:function(){this.getList()}}},m={render:function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",[l("el-main",[l("div",{staticClass:"select"},[l("el-input",{attrs:{placeholder:"账号",clearable:""},model:{value:e.gid,callback:function(t){e.gid=t},expression:"gid"}}),e._v(" "),l("el-input",{attrs:{placeholder:"姓名",clearable:""},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}})],1),e._v(" "),l("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{border:"","tooltip-effect":"dark","header-cell-style":{background:"#f5f7fa"},"default-sort":{prop:"gid"},data:e.tableData}},[l("el-table-column",{attrs:{prop:"gid",label:"账号",sortable:""}}),e._v(" "),l("el-table-column",{attrs:{prop:"name",label:"姓名"}}),e._v(" "),l("el-table-column",{attrs:{prop:"role",label:"角色"}}),e._v(" "),l("el-table-column",{attrs:{prop:"state",label:"状态","min-width":"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-tag",{attrs:{type:1===t.row.state?"primary":"warning","disable-transitions":""}},[e._v(e._s(1==t.row.state?"已启用":"已停用"))])]}}])}),e._v(" "),l("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(l){return e.handleEdit(t.$index,t.row)}}},[e._v("编辑")])]}}])})],1),e._v(" "),l("el-pagination",{staticStyle:{float:"right","margin-top":"8px"},attrs:{background:"","current-page":e.currentPage,layout:"prev, pager, next","page-size":7,total:e.totalPage},on:{"update:currentPage":function(t){e.currentPage=t},"update:current-page":function(t){e.currentPage=t},"current-change":e.handleCurrentChange}})],1),e._v(" "),l("pm",{attrs:{pmitem:e.pmitem,pmVisible:e.pmVisible},on:{"close-dialogStatus":e.Close_dialog}}),e._v(" "),l("detail",{attrs:{detailVisible:e.detailVisible},on:{"close-dialogStatus":e.Close_dialog}})],1)},staticRenderFns:[]};var d=l("VU/8")(u,m,!1,function(e){l("4HQS")},"data-v-554228ec",null);t.default=d.exports}});
//# sourceMappingURL=3.a4d644161819df55cadb.js.map