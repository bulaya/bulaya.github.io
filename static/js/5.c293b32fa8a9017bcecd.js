webpackJsonp([5],{PHo4:function(e,t){},p0Q3:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=a("Hzfl"),n=a("1CZe"),i=a("YaEn"),r=a("PJh5"),o=a.n(r),s=a("t4zo"),c=a.n(s),u=a("uXZL"),d=a.n(u),p={data:function(){return{search:"",edititem:{},editVisible:!1,fileitem:{},fileVisible:!1,currentPage:1,totalPage:1,departmentList:[{label:"部门1",value:"0"},{label:"部门2",value:"1"},{label:"部门3",value:"2"}],department:"",degreeList:[{label:"博士研究生",value:"1"},{label:"本科毕业生",value:"3"},{label:"硕士研究生",value:"2"},{label:"专科毕业生",value:"4"},{label:"其他",value:"5"}],degree:"",stime:"",etime:"",tableData:[],multipleSelection:[]}},created:function(){this.td=this.tableData},mounted:function(){},watch:{department:function(e,t){this.getList()},degree:function(e,t){this.getList()},search:function(e,t){this.getList()}},components:{edit:l.a,file:n.a},methods:{getList:function(){var e=this;axios({url:"/xclist",params:{department:e.department,degree:e.degree,search:e.search,currentPage:e.currentPage}}).then(function(t){var a=t.data;e.tableData=a.data,e.totalPage=a.totalPage}).catch(function(e){console.log(e)})},Close_dialog:function(e){this.editVisible=!1,this.fileVisible=!1},handleSelectionChange:function(e){this.multipleSelection=e},filterSex:function(e,t){return t.sex===e},filterState:function(e,t){return t.state===e},add:function(){i.a.push({name:"tabs",params:{data:"0"}})},handleEdit:function(e,t){i.a.push({name:"tabs",params:{data:t,index:2}})},handleDelete:function(e,t){var a=this;"离职"!==t.state?this.$confirm("是否解雇员工?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){a.$message({type:"success",message:"删除成功!"}),t.state="离职",t.departureTime=o()(new Date).format("YYYY-MM-DD")}):this.$message.error("该员工已离职!")},handleCurrentChange:function(){this.getList()},exportExcel:function(){var e=d.a.utils.table_to_book(document.querySelector("#out-table")),t=d.a.write(e,{bookType:"xlsx",bookSST:!0,type:"array"});try{c.a.saveAs(new Blob([t],{type:"application/octet-stream"}),"user.xlsx")}catch(e){"undefined"!=typeof console&&console.log(e,t)}return t}}},f={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-main",[a("div",{staticClass:"select"},[a("el-select",{attrs:{clearable:"",filterable:"",placeholder:"部门"},model:{value:e.department,callback:function(t){e.department=t},expression:"department"}},e._l(e.departmentList,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1),e._v(" "),a("el-select",{attrs:{clearable:"",filterable:"",placeholder:"学历"},model:{value:e.degree,callback:function(t){e.degree=t},expression:"degree"}},e._l(e.degreeList,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1),e._v(" "),a("el-input",{attrs:{placeholder:"姓名",clearable:""},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}})],1),e._v(" "),a("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{id:"out-table",border:"","tooltip-effect":"dark","header-cell-style":{background:"#f5f7fa"},"default-sort":{prop:"wid",order:"descending"},data:e.tableData},on:{"selection-change":e.handleSelectionChange}},[a("el-table-column",{attrs:{prop:"wid",label:"工号","min-width":"100",sortable:""}}),e._v(" "),a("el-table-column",{attrs:{prop:"name",label:"姓名","min-width":"100"}}),e._v(" "),a("el-table-column",{attrs:{prop:"sex",label:"性别","min-width":"100",filters:[{text:"男",value:"男"},{text:"女",value:"女"}],"filter-method":e.filterSex,"filter-placement":"bottom-end"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-tag",{attrs:{type:"男"===t.row.sex?"primary":"warning","disable-transitions":""}},[e._v(e._s(t.row.sex))])]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"degree",label:"学历","min-width":"100"}}),e._v(" "),a("el-table-column",{attrs:{prop:"department",label:"部门","min-width":"100"}}),e._v(" "),a("el-table-column",{attrs:{prop:"baseWage",label:"基本工资(月)","min-width":"100"}}),e._v(" "),a("el-table-column",{attrs:{"min-width":"130",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(a){return e.handleEdit(t.$index,t.row)}}},[e._v("编辑")])]}}])})],1),e._v(" "),a("el-pagination",{staticStyle:{float:"right","margin-top":"8px"},attrs:{background:"","current-page":e.currentPage,layout:"prev, pager, next","page-size":7,total:e.totalPage},on:{"update:currentPage":function(t){e.currentPage=t},"update:current-page":function(t){e.currentPage=t},"current-change":e.handleCurrentChange}})],1),e._v(" "),a("edit",{attrs:{edititem:e.edititem,editVisible:e.editVisible},on:{"close-dialogStatus":e.Close_dialog}}),e._v(" "),a("file",{attrs:{fileitem:e.fileitem,fileVisible:e.fileVisible},on:{"close-dialogStatus":e.Close_dialog}})],1)},staticRenderFns:[]};var b=a("VU/8")(p,f,!1,function(e){a("PHo4")},"data-v-6d3e39bc",null);t.default=b.exports}});
//# sourceMappingURL=5.c293b32fa8a9017bcecd.js.map