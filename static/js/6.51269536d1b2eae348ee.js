webpackJsonp([6],{Dxic:function(t,e){},nPlw:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});a("PJh5");var s=a("mtWM"),r=a.n(s),l={data:function(){return{ds:!1,activeName:"first",data:{},msgForm:{wid:"",name:"方便测试",sex:"0",nation:"汉族",nationality:"中国",origin:"广东省东莞市",idType:"0",idNumber:"432503197505028819",education:"本科",degree:"学士",department:"0",job:"清洁工",title:"工人",lPhone:"13547896321",sPhone:"123456",email:"124452@qq.com",img:"https://i.loli.net/2019/07/12/5d28410b6a20524513.jpg",state:1,sfzz:"",sfzf:"",yhkz:"",yhkf:""},msgrules:{name:[{required:!0,message:"请输入姓名",trigger:"blur"}],sex:[{required:!0,message:"请选择性别",trigger:"blur"}],nation:[{required:!0,message:"请输入民族",trigger:"blur"}],nationality:[{required:!0,message:"请输入国籍",trigger:"blur"}],idType:[{required:!0,message:"请选择开户银行",trigger:"blur"}],idNumber:[{required:!0,validator:function(t,e,a){if(!e)return a(new Error("请输入身份证号"));var s=e;if(!/^(([1][1-5])|([2][1-3])|([3][1-7])|([4][1-6])|([5][0-4])|([6][1-5])|([7][1])|([8][1-2]))\d{4}(([1][9]\d{2})|([2]\d{3}))(([0][1-9])|([1][0-2]))(([0][1-9])|([1-2][0-9])|([3][0-1]))\d{3}[0-9xX]$/.test(s))return a(new Error("身份证校验码不合规"));var r=s.substr(6,4),l=s.substr(10,2),i=s.substr(12,2),o=Date.parse(l+"-"+i+"-"+r),n=Date.parse(new Date),m=new Date(r,l,0).getDate();if(o>n||i>m)return{status:0,msg:"出生日期不合规"};for(var c=new Array(7,9,10,5,8,4,2,1,6,3,7,9,10,5,8,4,2),u=new Array("1","0","X","9","8","7","6","5","4","3","2"),d=s.split(""),p=0,f=0;f<17;f++)p+=parseInt(d[f])*parseInt(c[f]);if(d[17].toUpperCase()!=u[p%11].toUpperCase())return a(new Error("身份证校验码不合规"));a()},trigger:"blur"}],education:[{required:!0,message:"请选择学历",trigger:"blur"}],degree:[{required:!0,message:"请选择学位",trigger:"blur"}],department:[{required:!0,message:"请选择部门",trigger:"blur"}],lPhone:[{required:!0,validator:function(t,e,a){var s=/^1[3|4|5|7|8][0-9]{9}$/;if(!e)return a(new Error("请输入电话号码"));setTimeout(function(){Number.isInteger(+e)?s.test(e)?a():a(new Error("电话号码格式不正确")):a(new Error("请输入数字值"))},100)},trigger:"blur"}],sPhone:[{validator:function(t,e,a){var s=/^[0-9]{6}$/;if(!e)return a(new Error("请输入电话号码"));setTimeout(function(){Number.isInteger(+e)?s.test(e)?a():a(new Error("电话号码格式不正确")):a(new Error("请输入数字值"))},100)},trigger:"blur"}],email:[{validator:function(t,e,a){var s=/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;if(!e)return a(new Error("请输入邮箱"));setTimeout(function(){s.test(e)?a():a(new Error("请输入正确的邮箱格式"))},100)},trigger:"blur"}]},fileListZ:[],fileListF:[],fileListyhkz:[],fileListyhkf:[],xcForm:{wid:"",baseWage:"",bankName:"",bankId:""},xcTable:[],xcrules:{baseWage:[{required:!0,message:"请输入基本工资",trigger:"blur"}],bankName:[{required:!0,message:"请选择银行名称",trigger:"blur"}],bankId:[{required:!0,validator:function(t,e,a){if(!e)return a(new Error("请输入银行卡号"));var s=(e+"").replace(/[\D]/g,"");if(!/^\d{12,19}$/.test(s))return a(new Error("银行卡号不合规"));for(var r=s.split("").reverse(),l=parseInt(r.shift(),10),i=r.length,o=i,n=0;o>0;o--){var m=i-o,c=parseInt(r[m],10),u=c;if(m%2==0){var d=2*c;switch(d){case 10:u=1;break;case 12:u=3;break;case 14:u=5;break;case 16:u=7;break;case 18:u=9;break;default:u=d}}n+=u}if(parseInt((9*n+"").replace(/\d+(\d$)/,"$1"),10)!==l)return a(new Error("银行卡号不合规"));a()},trigger:"blur"}]},htForm:{},htTable:[],htrules:{htName:[{required:!0,message:"请输入合同名称",trigger:"blur"}],signingTime:[{required:!0,message:"请输入合同有效期",trigger:"blur"}],useTime:[{required:!0,message:"请输入合同有效期",trigger:"blur"}]},search:"",ht:0,departmentList:[]}},created:function(){this.data=this.$route.params.data,console.log(this.data),"0"===this.data?(this.ds=!0,this.getWid()):(this.init(),this.gethttable(),this.getxctable());var t=this.$route.params.index;this.activeName=1===t?"first":2===t?"second":"third",this.getDepartment()},methods:{init:function(){this.msgForm.wid=this.data.wid,this.msgForm.name=this.data.name,this.msgForm.sex=this.data.sex,this.msgForm.nation=this.data.nation,this.msgForm.nationality=this.data.nationality,this.msgForm.origin=this.data.origin,this.msgForm.idType=this.data.idType,this.msgForm.idNumber=this.data.idNumber,this.msgForm.degree=this.data.degree,this.msgForm.education=this.data.education,this.msgForm.department=this.data.department,this.msgForm.job=this.data.job,this.msgForm.title=this.data.title,this.msgForm.lPhone=this.data.lPhone,this.msgForm.sPhone=this.data.sPhone,this.msgForm.email=this.data.email,this.msgForm.img=this.data.img,this.msgForm.sfzz=this.data.sfzz,this.msgForm.sfzf=this.data.sfzf,this.msgForm.yhkz=this.data.yhkz,this.msgForm.yhkf=this.data.yhkf,null!=this.data.sfzz&&(this.fileListZ=[{name:this.data.wid+"sfz_zm",url:this.data.sfzz}],console.log(this.fileListZ)),null!=this.data.sfzf&&(this.fileListF=[{name:this.data.wid+"sfz_fm",url:this.data.sfzf}]),null!=this.data.yhkz&&(this.fileListyhkz=[{name:this.data.wid+"yhk_zm",url:this.data.yhkz}]),null!=this.data.yhkf&&(this.fileListyhkf=[{name:this.data.wid+"yhk_fm",url:this.data.yhkf}]),this.xcForm.wid=this.data.wid,this.xcForm.baseWage=this.data.baseWage,this.xcForm.bankName=this.data.bankName,this.xcForm.bankId=this.data.bankId},gethttable:function(){var t=this;r()({url:"/httable",params:{wid:t.data.wid}}).then(function(e){t.htTable=e.data}).catch(function(t){console.log(t)})},getxctable:function(){var t=this;r()({url:"/xctable",params:{wid:t.data.wid}}).then(function(e){t.xcTable=e.data}).catch(function(t){console.log(t)})},getWid:function(){var t=this;r()({url:"/init"}).then(function(e){t.msgForm.wid=e.data.wid,t.data.wid=e.data.wid}).catch(function(t){console.log(t)})},getDepartment:function(){var t=this;r()({url:"/department"}).then(function(e){t.departmentList=e.data}).catch(function(e){t.$message.error("无法连接服务器!")})},handleClick:function(t,e){console.log(t,e)},goBack:function(){this.$router.go(-1)},beforeRemove:function(t,e){return this.$confirm("确定移除 "+t.name+"？")},handleAvatarSuccess:function(t,e){1===t.success&&(this.$message({type:"success",message:"上传成功!"}),this.msgForm.img=t.url)},sfzzdl:function(){window.open(this.fileListZ[0].url)},sfzfdl:function(){window.open(this.fileListF[0].url)},yhkzdl:function(){window.open(this.fileListyhkz[0].url)},yhkfdl:function(){window.open(this.fileListyhkf[0].url)},handleUpSuccess:function(t,e,a){if(a[0].name=t.name,"sfzz"===t.type)this.fileListZ=[{name:t.name,url:t.url}];else if("sfzf"===t.type)this.fileListF=[{name:t.name,url:t.url}];else if("yhkz"===t.type)this.fileListyhkz=[{name:t.name,url:t.url}];else{if("yhkf"!==t.type)return;this.fileListyhkf=[{name:t.name,url:t.url}]}this.$message({type:"success",message:"上传成功!"})},beforeAvatarUpload:function(t){var e=this,a="image/jpeg"===t.type||"image/png"===t.type,s=t.size/1024<500;a||this.$message.error("上传头像图片只能是 jpg、png格式!"),s||this.$message.error("上传头像图片大小不能超过 500KB!");var r=new Promise(function(e,a){var s=window.URL||window.webkitURL,r=new Image;r.onload=function(){144==r.width&&192==r.height?e():a()},r.src=s.createObjectURL(t)}).then(function(){return t},function(){return e.$message.error("上传头像图片尺寸不符合,只能是144*192!"),Promise.reject()});return a&&s&&r},beforeUpload:function(t){var e="image/jpeg"===t.type||"image/png"===t.type,a=t.size/1024<500;return e||this.$message.error("上传头像图片只能是 jpg、png格式!"),a||this.$message.error("上传头像图片大小不能超过 500KB!"),e&&a},handleDelete:function(t,e){var a=this;this.$confirm("确定移除 "+e.htName+"？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){r()({url:"/htdelete",params:{wid:a.data.wid,hid:e.hid}}).then(function(t){1===t.data.success?(a.$message({type:"success",message:"删除成功!"}),a.gethttable()):a.$message.error("操作失败!")}).catch(function(t){console.log(t)})})},htlai:function(t,e){var a="image/jpeg"===t.type,s="image/png"===t.type;return t.size/1024<500?a||s?void 0:(this.$message.error("上传合同图片的格式必须是JPG或PNG!"),!1):(f,this.$message.error("上传合同图片大小不能超过 500k!"),!1)},htwc:function(t,e){1===t.success?(this.$message({type:"success",message:"提交成功!"}),this.gethttable()):this.$message.error("出错了")},htSubmit:function(){var t=this;this.$refs.htForm.validate(function(e){e&&(t.$refs.htupload.submit(),t.gethttable())})},msgSubmit:function(){var t=this;this.$refs.msgForm.validate(function(e){e&&(console.log(t.msgForm),r()({method:"post",url:"/add",data:t.msgForm}).then(function(e){1===e.data.success&&(t.$message({type:"success",message:"提交成功!"}),t.ds=!1)}).catch(function(t){console.log(t)}))})},xzSubmit:function(){var t=this;this.$refs.xcForm.validate(function(e){e&&r()({method:"post",url:"/xcedit",data:t.xcForm}).then(function(e){1===e.data.success&&t.$message({type:"success",message:"提交成功!"})}).catch(function(t){console.log(t)})})},handleDownload:function(t,e){window.open(e.htUrl)}}},i={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main"},[a("el-page-header",{attrs:{content:t.msgForm.wid},on:{back:t.goBack}}),t._v(" "),a("el-tabs",{on:{"tab-click":t.handleClick},model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[a("el-tab-pane",{attrs:{label:"基本信息",name:"first"}},[a("el-divider",{attrs:{"content-position":"left"}},[t._v("基础信息")]),t._v(" "),a("el-form",{ref:"msgForm",attrs:{model:t.msgForm,"status-icon":"",rules:t.msgrules,"label-width":"100px"}},[a("el-row",[a("el-col",{staticClass:"img",attrs:{span:4}},[a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"点击上传头像",placement:"top-start"}},[a("el-upload",{staticClass:"avatar-uploader",attrs:{action:"http://localhost:8080/headimg","show-file-list":!1,"on-success":t.handleAvatarSuccess,"before-upload":t.beforeAvatarUpload,data:{wid:t.data.wid},"with-credentials":!0}},[a("img",{attrs:{src:t.msgForm.img,width:"144",height:"192"}}),t._v(" "),a("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[t._v("只能上传jpg/png文件，分辨率为144*192，且不超过500kb")])])],1)],1),t._v(" "),a("el-col",{attrs:{span:20}},[a("el-row",[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"工号：",prop:"wid"}},[a("el-input",{attrs:{autocomplete:"off",disabled:!0},model:{value:t.msgForm.wid,callback:function(e){t.$set(t.msgForm,"wid",e)},expression:"msgForm.wid"}})],1)],1),t._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"姓名：",prop:"name"}},[a("el-input",{attrs:{autocomplete:"off"},model:{value:t.msgForm.name,callback:function(e){t.$set(t.msgForm,"name",e)},expression:"msgForm.name"}})],1)],1),t._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"性别：",prop:"sex"}},[a("el-select",{model:{value:t.msgForm.sex,callback:function(e){t.$set(t.msgForm,"sex",e)},expression:"msgForm.sex"}},[a("el-option",{attrs:{label:"男",value:"0"}}),t._v(" "),a("el-option",{attrs:{label:"女",value:"1"}})],1)],1)],1),t._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"民族：",prop:"nation"}},[a("el-input",{attrs:{autocomplete:"off"},model:{value:t.msgForm.nation,callback:function(e){t.$set(t.msgForm,"nation",e)},expression:"msgForm.nation"}})],1)],1),t._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"国籍：",prop:"nationality"}},[a("el-input",{attrs:{autocomplete:"off"},model:{value:t.msgForm.nationality,callback:function(e){t.$set(t.msgForm,"nationality",e)},expression:"msgForm.nationality"}})],1)],1),t._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"籍贯：",prop:"origin"}},[a("el-input",{attrs:{autocomplete:"off"},model:{value:t.msgForm.origin,callback:function(e){t.$set(t.msgForm,"origin",e)},expression:"msgForm.origin"}})],1)],1),t._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"证件类型：",prop:"idType"}},[a("el-select",{model:{value:t.msgForm.idType,callback:function(e){t.$set(t.msgForm,"idType",e)},expression:"msgForm.idType"}},[a("el-option",{attrs:{label:"身份证",value:"0"}}),t._v(" "),a("el-option",{attrs:{label:"港澳居民来往内地通行证",value:"1"}}),t._v(" "),a("el-option",{attrs:{label:"台湾居民来往大陆通行证",value:"2"}}),t._v(" "),a("el-option",{attrs:{label:"护照",value:"3"}}),t._v(" "),a("el-option",{attrs:{label:"外国人永久居留证",value:"4"}}),t._v(" "),a("el-option",{attrs:{label:"其他国家或地区身份证明",value:"5"}})],1)],1)],1),t._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"证件号：",prop:"idNumber"}},[a("el-input",{attrs:{autocomplete:"off"},model:{value:t.msgForm.idNumber,callback:function(e){t.$set(t.msgForm,"idNumber",e)},expression:"msgForm.idNumber"}})],1)],1),t._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"学历：",prop:"education"}},[a("el-select",{model:{value:t.msgForm.education,callback:function(e){t.$set(t.msgForm,"education",e)},expression:"msgForm.education"}},[a("el-option",{attrs:{label:"博士研究生",value:"1"}}),t._v(" "),a("el-option",{attrs:{label:"硕士研究生",value:"2"}}),t._v(" "),a("el-option",{attrs:{label:"本科毕业生",value:"3"}}),t._v(" "),a("el-option",{attrs:{label:"专科毕业生",value:"4"}}),t._v(" "),a("el-option",{attrs:{label:"其他",value:"5"}})],1)],1)],1),t._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"学位：",prop:"degree"}},[a("el-select",{model:{value:t.msgForm.degree,callback:function(e){t.$set(t.msgForm,"degree",e)},expression:"msgForm.degree"}},[a("el-option",{attrs:{value:"学士"}}),t._v(" "),a("el-option",{attrs:{value:"硕士"}}),t._v(" "),a("el-option",{attrs:{value:"博士"}})],1)],1)],1),t._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"部门：",prop:"department"}},[a("el-select",{model:{value:t.msgForm.department,callback:function(e){t.$set(t.msgForm,"department",e)},expression:"msgForm.department"}},t._l(t.departmentList,function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}),1)],1)],1),t._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"岗位：",prop:"job"}},[a("el-input",{attrs:{autocomplete:"off"},model:{value:t.msgForm.job,callback:function(e){t.$set(t.msgForm,"job",e)},expression:"msgForm.job"}})],1)],1),t._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"职称：",prop:"title"}},[a("el-input",{attrs:{autocomplete:"off"},model:{value:t.msgForm.title,callback:function(e){t.$set(t.msgForm,"title",e)},expression:"msgForm.title"}})],1)],1),t._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"手机号码：",prop:"lPhone"}},[a("el-input",{attrs:{autocomplete:"off"},model:{value:t.msgForm.lPhone,callback:function(e){t.$set(t.msgForm,"lPhone",e)},expression:"msgForm.lPhone"}})],1)],1),t._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"短号：",prop:"sPhone"}},[a("el-input",{attrs:{autocomplete:"off"},model:{value:t.msgForm.sPhone,callback:function(e){t.$set(t.msgForm,"sPhone",e)},expression:"msgForm.sPhone"}})],1)],1),t._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"邮箱：",prop:"email"}},[a("el-input",{attrs:{autocomplete:"off"},model:{value:t.msgForm.email,callback:function(e){t.$set(t.msgForm,"email",e)},expression:"msgForm.email"}})],1)],1),t._v(" "),a("el-col",{attrs:{span:18}},[a("div",{staticStyle:{width:"100%",color:"#ffffff"}},[t._v("123")])]),t._v(" "),a("el-col",{attrs:{span:6}},[a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:t.msgSubmit}},[t._v("提交")])],1)],1)],1)],1)],1)],1),t._v(" "),a("el-divider",{attrs:{"content-position":"left"}},[t._v("证件")]),t._v(" "),a("el-row",[a("el-col",{attrs:{span:12}},[a("el-upload",{attrs:{action:"http://localhost:8080/sfzz","before-remove":t.beforeRemove,"file-list":t.fileListZ,limit:1,"before-upload":t.beforeUpload,"on-success":t.handleUpSuccess,"on-preview":t.sfzzdl,data:{wid:t.data.wid},"with-credentials":!0}},[t._v("\n                        上传证件正面照\n                        "),a("el-button",{attrs:{size:"small",type:"primary"}},[t._v("点击上传")]),t._v(" "),a("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[t._v("只能上传jpg/png文件，且不超过500kb，必须删除已有文件才能上传")])],1)],1),t._v(" "),a("el-col",{attrs:{span:12}},[a("el-upload",{attrs:{action:"http://localhost:8080/sfzf","before-remove":t.beforeRemove,"file-list":t.fileListF,limit:1,"before-upload":t.beforeUpload,"on-success":t.handleUpSuccess,"on-preview":t.sfzfdl,data:{wid:t.data.wid},"with-credentials":!0}},[t._v("\n                        上传证件背面照\n                        "),a("el-button",{attrs:{size:"small",type:"primary"}},[t._v("点击上传")]),t._v(" "),a("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[t._v("只能上传jpg/png文件，且不超过500kb，必须删除已有文件才能上传")])],1)],1)],1)],1),t._v(" "),a("el-tab-pane",{attrs:{label:"薪酬管理",name:"second",disabled:t.ds}},[a("el-divider",{attrs:{"content-position":"left"}},[t._v("基础信息")]),t._v(" "),a("el-form",{ref:"xcForm",attrs:{model:t.xcForm,"status-icon":"","label-width":"160px",rules:t.xcrules}},[t._e(),t._v(" "),a("el-row",[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"银行名称：",prop:"bankName"}},[a("el-select",{model:{value:t.xcForm.bankName,callback:function(e){t.$set(t.xcForm,"bankName",e)},expression:"xcForm.bankName"}},[a("el-option",{attrs:{label:"中国工商银行",value:"0"}}),t._v(" "),a("el-option",{attrs:{label:"中国农业银行",value:"1"}}),t._v(" "),a("el-option",{attrs:{label:"中国建设银行",value:"2"}}),t._v(" "),a("el-option",{attrs:{label:"中国招商银行",value:"3"}}),t._v(" "),a("el-option",{attrs:{label:"中国交通银行",value:"4"}}),t._v(" "),a("el-option",{attrs:{label:"邮政储蓄银行",value:"5"}})],1)],1)],1),t._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"银行卡号：",prop:"bankId"}},[a("el-input",{attrs:{autocomplete:"off"},model:{value:t.xcForm.bankId,callback:function(e){t.$set(t.xcForm,"bankId",e)},expression:"xcForm.bankId"}})],1)],1),t._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"基本工资(元)：",prop:"baseWage"}},[a("el-input-number",{attrs:{"controls-position":"right",min:0},model:{value:t.xcForm.baseWage,callback:function(e){t.$set(t.xcForm,"baseWage",e)},expression:"xcForm.baseWage"}})],1)],1),t._v(" "),a("el-col",{attrs:{span:21}},[a("div",{staticStyle:{width:"100%",color:"#ffffff"}},[t._v("123")])]),t._v(" "),a("el-col",{attrs:{span:3}},[a("el-button",{attrs:{type:"primary"},on:{click:t.xzSubmit}},[t._v("提交")])],1)],1)],1),t._v(" "),a("el-divider",{attrs:{"content-position":"left"}},[t._v("证件")]),t._v(" "),a("el-row",[a("el-col",{attrs:{span:12}},[a("el-upload",{attrs:{action:"http://localhost:8080/yhkz","before-remove":t.beforeRemove,"file-list":t.fileListyhkz,limit:1,"before-upload":t.beforeUpload,"on-success":t.handleUpSuccess,"on-preview":t.yhkzdl,data:{wid:t.data.wid},"with-credentials":!0}},[t._v("\n                        上传银行卡正面照\n                        "),a("el-button",{attrs:{size:"small",type:"primary"}},[t._v("点击上传")]),t._v(" "),a("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[t._v("只能上传jpg/png文件，且不超过500kb，必须删除已有文件才能上传")])],1)],1),t._v(" "),a("el-col",{attrs:{span:12}},[a("el-upload",{attrs:{action:"http://localhost:8080/yhkf","before-remove":t.beforeRemove,"file-list":t.fileListyhkf,limit:1,"before-upload":t.beforeUpload,"on-preview":t.yhkfdl,"on-success":t.handleUpSuccess,data:{wid:t.data.wid},"with-credentials":!0}},[t._v("\n                        上传银行卡背面照\n                        "),a("el-button",{attrs:{size:"small",type:"primary"}},[t._v("点击上传")]),t._v(" "),a("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[t._v("只能上传jpg/png文件，且不超过500kb，必须删除已有文件才能上传")])],1)],1)],1),t._v(" "),a("el-divider",{attrs:{"content-position":"left"}},[t._v("发放记录")]),t._v(" "),a("el-table",{ref:"xcTable",staticStyle:{width:"100%"},attrs:{"tooltip-effect":"dark","header-cell-style":{background:"#f5f7fa"},"default-sort":{prop:"time"},data:t.xcTable}},[a("el-table-column",{attrs:{prop:"time",label:"发放时间",sortable:""}}),t._v(" "),a("el-table-column",{attrs:{prop:"baseWage",label:"基本工资"}})],1)],1),t._v(" "),a("el-tab-pane",{attrs:{label:"合同管理",name:"third",disabled:t.ds}},[a("el-divider",{attrs:{"content-position":"left"}},[t._v("新增")]),t._v(" "),a("el-form",{ref:"htForm",attrs:{model:t.htForm,"status-icon":"","label-width":"160px",rules:t.htrules}},[t._e(),t._v(" "),a("el-row",[a("el-col",{attrs:{span:12}},[a("el-row",[a("el-form-item",{attrs:{label:"合同名称：",prop:"htName"}},[a("el-input",{attrs:{autocomplete:"off"},model:{value:t.htForm.htName,callback:function(e){t.$set(t.htForm,"htName",e)},expression:"htForm.htName"}})],1)],1),t._v(" "),a("el-row",[a("el-form-item",{attrs:{label:"签约时间：",prop:"signingTime"}},[a("el-date-picker",{attrs:{type:"date",placeholder:"选择日期"},model:{value:t.htForm.signingTime,callback:function(e){t.$set(t.htForm,"signingTime",e)},expression:"htForm.signingTime"}})],1)],1),t._v(" "),a("el-row",[a("el-form-item",{attrs:{label:"合同有效期(月)：",prop:"useTime"}},[a("el-input-number",{attrs:{"controls-position":"right",min:0},model:{value:t.htForm.useTime,callback:function(e){t.$set(t.htForm,"useTime",e)},expression:"htForm.useTime"}})],1)],1)],1),t._v(" "),a("el-col",{attrs:{span:12}},[a("el-upload",{ref:"htupload",staticClass:"htfile",attrs:{action:"http://localhost:8080/htfile",limit:1,"before-upload":t.htlai,"on-success":t.htwc,data:{wid:t.data.wid,htName:t.htForm.htName,signingTime:t.htForm.signingTime,useTime:t.htForm.useTime},"auto-upload":!1}},[a("span",{staticStyle:{color:"red"}},[t._v("*")]),t._v("上传合同：\n                            "),a("el-button",{attrs:{size:"small",type:"primary"}},[t._v("点击上传")]),t._v(" "),a("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[t._v("只能上传jpg/png文件，且不超过500kb")])],1)],1),t._v(" "),a("el-col",{attrs:{span:21}},[a("div",{staticStyle:{width:"100%",color:"#ffffff"}},[t._v("123")])]),t._v(" "),a("el-col",{attrs:{span:3}},[a("el-button",{attrs:{type:"primary"},on:{click:t.htSubmit}},[t._v("提交")])],1)],1)],1),t._v(" "),a("el-divider",{attrs:{"content-position":"left"}},[t._v("合同列表")]),t._v(" "),a("el-table",{ref:"htTable",staticStyle:{width:"100%"},attrs:{"tooltip-effect":"dark","header-cell-style":{background:"#f5f7fa"},"default-sort":{prop:"signingTime"},data:t.htTable}},[a("el-table-column",{attrs:{prop:"signingTime",label:"签约时间",sortable:""}}),t._v(" "),a("el-table-column",{attrs:{prop:"htName",label:"合同名称"}}),t._v(" "),a("el-table-column",{attrs:{prop:"useTime",label:"合同有效期(月)"}}),t._v(" "),a("el-table-column",{attrs:{prop:"state",label:"状态"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-tag",{attrs:{type:1===e.row.state?"primary":"warning","disable-transitions":""}},[t._v(t._s(1==e.row.state?"有效":"无效"))])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(a){return t.handleDownload(e.$index,e.row)}}},[t._v("下载")]),t._v(" "),a("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(a){return t.handleDelete(e.$index,e.row)}}},[t._v("删除")])]}}])})],1)],1)],1)],1)},staticRenderFns:[]};var o=a("VU/8")(l,i,!1,function(t){a("Dxic")},"data-v-5781fb88",null);e.default=o.exports}});
//# sourceMappingURL=6.51269536d1b2eae348ee.js.map