webpackJsonp([5],{RWRd:function(e,t){},cUdX:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a("Hzfl"),l=a("1CZe"),n=a("YaEn"),r=(a("PJh5"),a("t4zo"),a("uXZL"),a("mtWM")),s=a.n(r),d={data:function(){return{search:"",edititem:{},editVisible:!1,fileitem:{},fileVisible:!1,currentPage:1,totalPage:1,departmentList:[{label:"部门1",value:"0"},{label:"部门2",value:"1"},{label:"部门3",value:"2"}],department:"",degreeList:[{label:"博士研究生",value:"1"},{label:"本科毕业生",value:"3"},{label:"硕士研究生",value:"2"},{label:"专科毕业生",value:"4"},{label:"其他",value:"5"}],degree:"",stime:"",etime:"",tableData:[{data:"25888-2255",htName:"sdsg",wid:"2019500",name:"李贵起",sex:"男",img:"https://i.loli.net/2019/07/12/5d28410b6a20524513.jpg",degree:"博士研究生",department:"部门1",htSum:"2",state:"在职",signingTime:"2007-07-25",departureTime:""},{wid:"2019501",name:"季贵超",sex:"女",img:"https://i.loli.net/2019/07/12/5d28410b6a20524513.jpg",degree:"本科毕业生",department:"部门2",htSum:"2",state:"在职",signingTime:"2015-05-18",departureTime:""},{wid:"2019502",name:"李费超",sex:"男",img:"https://i.loli.net/2019/07/12/5d28410b6a20524513.jpg",degree:"专科毕业生",department:"部门3",htSum:"2",state:"在职",signingTime:"2016-05-10",departureTime:""},{wid:"2019503",name:"李贵趋",sex:"女",img:"https://i.loli.net/2019/07/12/5d28410b6a20524513.jpg",degree:"硕士研究生",department:"部门2",htSum:"2",state:"离职",signingTime:"2010-10-10",departureTime:"2015-12-12"},{wid:"2019504",name:"李责超",sex:"男",img:"https://i.loli.net/2019/07/12/5d28410b6a20524513.jpg",degree:"硕士研究生",department:"部门2",htSum:"2",state:"在职",signingTime:"2000-01-30",departureTime:""},{wid:"2019505",name:"李贵趙",sex:"男",img:"https://i.loli.net/2019/07/12/5d28410b6a20524513.jpg",degree:"硕士研究生",department:"部门3",htSum:"2",state:"离职",signingTime:"2016-10-10",departureTime:"2018-08-08"},{wid:"2019506",name:"李贯超",sex:"男",img:"https://i.loli.net/2019/07/12/5d28410b6a20524513.jpg",degree:"博士研究生",department:"部门1",htSum:"2",state:"在职",signingTime:"2011-10-10",departureTime:""}],td:"",multipleSelection:[]}},created:function(){this.td=this.tableData},mounted:function(){},watch:{department:function(e,t){this.getList()},search:function(e,t){this.getList()},degree:function(e,t){this.getList()}},components:{edit:i.a,file:l.a},methods:{getList:function(){var e=this;s()({url:"/list",params:{department:e.department,degree:e.degree,search:e.search,currentPage:e.currentPage}}).then(function(t){var a=t.data;e.tableData=a.data,e.totalPage=a.totalPage}).catch(function(e){console.log(e)})},Close_dialog:function(e){this.editVisible=!1,this.fileVisible=!1},handleSelectionChange:function(e){this.multipleSelection=e},filterSex:function(e,t){return t.sex===e},filterState:function(e,t){return t.state===e},handleCurrentChange:function(){this.getList()},add:function(){n.a.push({name:"tabs",params:{data:"0",index:3}})},handleEdit:function(e,t){n.a.push({name:"tabs",params:{data:t,index:3}})}}},o={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-main",[a("div",{staticClass:"select"},[a("el-select",{attrs:{clearable:"",filterable:"",placeholder:"部门"},model:{value:e.department,callback:function(t){e.department=t},expression:"department"}},e._l(e.departmentList,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1),e._v(" "),a("el-select",{attrs:{clearable:"",filterable:"",placeholder:"学历"},model:{value:e.degree,callback:function(t){e.degree=t},expression:"degree"}},e._l(e.degreeList,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1),e._v(" "),a("el-input",{attrs:{placeholder:"姓名",clearable:""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1),e._v(" "),a("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{id:"out-table",border:"","tooltip-effect":"dark","header-cell-style":{background:"#f5f7fa"},"default-sort":{prop:"wid",order:"descending"},data:e.tableData},on:{"selection-change":e.handleSelectionChange}},[a("el-table-column",{attrs:{prop:"wid",label:"工号","min-width":"100",sortable:""}}),e._v(" "),a("el-table-column",{attrs:{prop:"name",label:"姓名","min-width":"100"}}),e._v(" "),a("el-table-column",{attrs:{prop:"sex",label:"性别","min-width":"100",filters:[{text:"男",value:"0"},{text:"女",value:"1"}],"filter-method":e.filterSex,"filter-placement":"bottom-end"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-tag",{attrs:{type:"0"===t.row.sex?"primary":"warning","disable-transitions":""}},[e._v(e._s("1"==t.row.sex?"女":"男"))])]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"degree",label:"学历","min-width":"100"}}),e._v(" "),a("el-table-column",{attrs:{prop:"department",label:"部门","min-width":"100"}}),e._v(" "),a("el-table-column",{attrs:{prop:"htSum",label:"合同数量","min-width":"100"}}),e._v(" "),a("el-table-column",{attrs:{"min-width":"130",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(a){return e.handleEdit(t.$index,t.row)}}},[e._v("编辑")])]}}])})],1),e._v(" "),a("el-pagination",{staticStyle:{float:"right","margin-top":"8px"},attrs:{background:"","current-page":e.currentPage,layout:"prev, pager, next","page-size":7,total:e.totalPage},on:{"update:currentPage":function(t){e.currentPage=t},"update:current-page":function(t){e.currentPage=t},"current-change":e.handleCurrentChange}})],1),e._v(" "),a("edit",{attrs:{edititem:e.edititem,editVisible:e.editVisible},on:{"close-dialogStatus":e.Close_dialog}}),e._v(" "),a("file",{attrs:{fileitem:e.fileitem,fileVisible:e.fileVisible},on:{"close-dialogStatus":e.Close_dialog}})],1)},staticRenderFns:[]};var u=a("VU/8")(d,o,!1,function(e){a("RWRd")},"data-v-62f8b288",null);t.default=u.exports}});
//# sourceMappingURL=5.59913101b3cd844357b7.js.map