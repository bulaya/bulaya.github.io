webpackJsonp([5],{"4zjQ":function(e,t){},nPlw:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});a("PJh5");var s=a("mtWM"),r=a.n(s),l={data:function(){return{ds:!1,activeName:"first",data:{},msgForm:{wid:"",name:"方便测试",sex:"0",nation:"汉族",nationality:"中国",origin:"广东省东莞市",idType:"0",idNumber:"432503197505028819",education:"本科",degree:"学士",department:"0",job:"清洁工",title:"工人",lPhone:"13547896321",sPhone:"123456",email:"124452@qq.com",img:"https://i.loli.net/2019/07/12/5d28410b6a20524513.jpg",state:1},msgrules:{name:[{required:!0,message:"请输入姓名",trigger:"blur"}],sex:[{required:!0,message:"请选择性别",trigger:"blur"}],nation:[{required:!0,message:"请输入民族",trigger:"blur"}],nationality:[{required:!0,message:"请输入国籍",trigger:"blur"}],idType:[{required:!0,message:"请选择开户银行",trigger:"blur"}],idNumber:[{required:!0,validator:function(e,t,a){if(!t)return a(new Error("请输入身份证号"));var s=t;if(!/^(([1][1-5])|([2][1-3])|([3][1-7])|([4][1-6])|([5][0-4])|([6][1-5])|([7][1])|([8][1-2]))\d{4}(([1][9]\d{2})|([2]\d{3}))(([0][1-9])|([1][0-2]))(([0][1-9])|([1-2][0-9])|([3][0-1]))\d{3}[0-9xX]$/.test(s))return a(new Error("身份证校验码不合规"));var r=s.substr(6,4),l=s.substr(10,2),i=s.substr(12,2),o=Date.parse(l+"-"+i+"-"+r),n=Date.parse(new Date),m=new Date(r,l,0).getDate();if(o>n||i>m)return{status:0,msg:"出生日期不合规"};for(var c=new Array(7,9,10,5,8,4,2,1,6,3,7,9,10,5,8,4,2),u=new Array("1","0","X","9","8","7","6","5","4","3","2"),p=s.split(""),d=0,f=0;f<17;f++)d+=parseInt(p[f])*parseInt(c[f]);if(p[17].toUpperCase()!=u[d%11].toUpperCase())return a(new Error("身份证校验码不合规"));a()},trigger:"blur"}],education:[{required:!0,message:"请选择学历",trigger:"blur"}],degree:[{required:!0,message:"请选择学位",trigger:"blur"}],department:[{required:!0,message:"请选择部门",trigger:"blur"}],lPhone:[{required:!0,validator:function(e,t,a){var s=/^1[3|4|5|7|8][0-9]{9}$/;if(!t)return a(new Error("请输入电话号码"));setTimeout(function(){Number.isInteger(+t)?s.test(t)?a():a(new Error("电话号码格式不正确")):a(new Error("请输入数字值"))},100)},trigger:"blur"}],sPhone:[{validator:function(e,t,a){var s=/^[0-9]{6}$/;if(!t)return a(new Error("请输入电话号码"));setTimeout(function(){Number.isInteger(+t)?s.test(t)?a():a(new Error("电话号码格式不正确")):a(new Error("请输入数字值"))},100)},trigger:"blur"}],email:[{validator:function(e,t,a){var s=/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;if(!t)return a(new Error("请输入邮箱"));setTimeout(function(){s.test(t)?a():a(new Error("请输入正确的邮箱格式"))},100)},trigger:"blur"}]},fileListZ:[],fileListF:[],fileListyhkz:[],fileListyhkf:[],xcForm:{},xcTable:[],xcrules:{baseWage:[{required:!0,message:"请输入基本工资",trigger:"blur"}],bankName:[{required:!0,message:"请选择银行名称",trigger:"blur"}],bankId:[{required:!0,validator:function(e,t,a){if(!t)return a(new Error("请输入银行卡号"));var s=(t+"").replace(/[\D]/g,"");if(!/^\d{12,19}$/.test(s))return a(new Error("银行卡号不合规"));for(var r=s.split("").reverse(),l=parseInt(r.shift(),10),i=r.length,o=i,n=0;o>0;o--){var m=i-o,c=parseInt(r[m],10),u=c;if(m%2==0){var p=2*c;switch(p){case 10:u=1;break;case 12:u=3;break;case 14:u=5;break;case 16:u=7;break;case 18:u=9;break;default:u=p}}n+=u}if(parseInt((9*n+"").replace(/\d+(\d$)/,"$1"),10)!==l)return a(new Error("银行卡号不合规"));a()},trigger:"blur"}]},htForm:{},htTable:[],htrules:{htName:[{required:!0,message:"请输入合同名称",trigger:"blur"}],signingTime:[{required:!0,message:"请输入合同有效期",trigger:"blur"}],useTime:[{required:!0,message:"请输入合同有效期",trigger:"blur"}]},search:"",ht:0,departmentList:[]}},created:function(){this.data=this.$route.params.data,console.log(this.data),"0"===this.data?(this.ds=!0,this.getWid()):(this.init(),this.gethttable(),this.getxctable());var e=this.$route.params.index;this.activeName=1===e?"first":2===e?"second":"third",this.getDepartment()},methods:{init:function(){this.msgForm.wid=this.data.wid,this.msgForm.name=this.data.name,this.msgForm.sex=this.data.sex,this.msgForm.nation=this.data.nation,this.msgForm.nationality=this.data.nationality,this.msgForm.origin=this.data.origin,this.msgForm.idType=this.data.idType,this.msgForm.idNumber=this.data.idNumber,this.msgForm.degree=this.data.degree,this.msgForm.education=this.data.education,this.msgForm.department=this.data.department,this.msgForm.job=this.data.job,this.msgForm.title=this.data.title,this.msgForm.lPhone=this.data.lPhone,this.msgForm.sPhone=this.data.sPhone,this.msgForm.email=this.data.email,this.msgForm.img=this.data.img,this.fileListZ.name=this.data.wid+"sfz_zm",this.fileListZ.url=this.data.sfzz,this.fileListF.name=this.data.wid+"sfz_fm",this.fileListF.name=this.data.sfzf,this.fileListyhkz.name=this.data.wid+"yhk_zm",this.fileListyhkz.name=this.data.yhkz,this.fileListyhkf.name=this.data.wid+"yhk_fm",this.fileListyhkf.name=this.data.yhkf,this.xcForm.wid=this.data.wid,this.xcForm.baseWage=this.data.baseWage,this.xcForm.bankName=this.data.bankName,this.xcForm.bankId=this.data.bankId},gethttable:function(){var e=this;r()({url:"/httable",params:{wid:e.data.wid}}).then(function(t){e.htTable=t.data}).catch(function(e){console.log(e)})},getxctable:function(){var e=this;r()({url:"/xctable",params:{wid:e.data.wid}}).then(function(t){e.xcTable=t.data}).catch(function(e){console.log(e)})},getWid:function(){var e=this;r()({url:"/init"}).then(function(t){e.msgForm.wid=t.data.wid,e.data.wid=t.data.wid}).catch(function(e){console.log(e)})},getDepartment:function(){var e=this;r()({url:"/department"}).then(function(t){e.departmentList=t.data}).catch(function(t){e.$message.error("无法连接服务器!")})},handleClick:function(e,t){console.log(e,t)},goBack:function(){this.$router.go(-1)},beforeRemove:function(e,t){return this.$confirm("确定移除 "+e.name+"？")},handleAvatarSuccess:function(e,t){1===e.success&&(this.$message({type:"success",message:"上传成功!"}),this.msgForm.img=e.url)},sfzzdl:function(){window.open(this.fileListZ.url)},sfzfdl:function(){window.open(this.fileListF.url)},yhkzdl:function(){window.open(this.fileListyhkz.url)},yhkfdl:function(){window.open(this.fileListyhkf.url)},handleUpSuccess:function(e,t,a){if(a[0].name=e.name,"sfzz"===e.type)this.fileListZ.name=e.name,this.fileListZ.url=e.url;else if("sfzf"===e.type)this.fileListF.name=e.name,this.fileListF.url=e.url;else if("yhkz"===e.type)this.fileListyhkz.name=e.name,this.fileListyhkz.url=e.url;else{if("yhkf"!==e.type)return;this.fileListyhkf.name=e.name,this.fileListyhkf.url=e.url}this.$message({type:"success",message:"上传成功!"})},beforeAvatarUpload:function(e){var t=this,a="image/jpeg"===e.type||"image/png"===e.type,s=e.size/1024<500;a||this.$message.error("上传头像图片只能是 jpg、png格式!"),s||this.$message.error("上传头像图片大小不能超过 500KB!");var r=new Promise(function(t,a){var s=window.URL||window.webkitURL,r=new Image;r.onload=function(){144==r.width&&192==r.height?t():a()},r.src=s.createObjectURL(e)}).then(function(){return e},function(){return t.$message.error("上传头像图片尺寸不符合,只能是144*192!"),Promise.reject()});return a&&s&&r},beforeUpload:function(e){var t="image/jpeg"===e.type||"image/png"===e.type,a=e.size/1024<500;return t||this.$message.error("上传头像图片只能是 jpg、png格式!"),a||this.$message.error("上传头像图片大小不能超过 500KB!"),t&&a},handleDelete:function(e,t){var a=this;this.$confirm("确定移除 "+t.name+"？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){r()({url:"/htdelete",params:{wid:a.data.wid,hid:t.hid}}).then(function(e){1===e.data.success?(a.$message({type:"success",message:"删除成功!"}),a.gethttable()):a.$message.error("操作失败!")}).catch(function(e){console.log(e)})})},htlai:function(e,t){var a="image/jpeg"===e.type,s="image/png"===e.type;return e.size/1024<500?a||s?void 0:(this.$message.error("上传合同图片的格式必须是JPG或PNG!"),!1):(f,this.$message.error("上传合同图片大小不能超过 500k!"),!1)},htwc:function(e,t){1===e.success?(this.$message({type:"success",message:"提交成功!"}),this.gethttable()):this.$message.error("出错了")},htSubmit:function(){var e=this;this.$refs.htForm.validate(function(t){t&&(e.$refs.htupload.submit(),e.gethttable())})},msgSubmit:function(){var e=this;this.$refs.msgForm.validate(function(t){t&&(console.log(e.msgForm),r()({method:"post",url:"/add",data:e.msgForm}).then(function(t){1===t.data.success&&(e.$message({type:"success",message:"提交成功!"}),e.ds=!1)}).catch(function(e){console.log(e)}))})},xzSubmit:function(){var e=this;this.$refs.xcForm.validate(function(t){t&&r()({method:"post",url:"/xcedit ",data:e.xcForm}).then(function(t){1===t.data.success&&e.$message({type:"success",message:"提交成功!"})}).catch(function(e){console.log(e)})})},handleDownload:function(e,t){window.open(t.htUrl)}}},i={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"main"},[a("el-page-header",{attrs:{content:e.msgForm.wid},on:{back:e.goBack}}),e._v(" "),a("el-tabs",{on:{"tab-click":e.handleClick},model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[a("el-tab-pane",{attrs:{label:"基本信息",name:"first"}},[a("el-divider",{attrs:{"content-position":"left"}},[e._v("基础信息")]),e._v(" "),a("el-form",{ref:"msgForm",attrs:{model:e.msgForm,"status-icon":"",rules:e.msgrules,"label-width":"100px"}},[a("el-row",[a("el-col",{staticClass:"img",attrs:{span:4}},[a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"点击上传头像",placement:"top-start"}},[a("el-upload",{staticClass:"avatar-uploader",attrs:{action:"http://localhost:8080/headimg","show-file-list":!1,"on-success":e.handleAvatarSuccess,"before-upload":e.beforeAvatarUpload,data:{wid:e.data.wid}}},[a("img",{attrs:{src:e.msgForm.img,width:"144",height:"192"}}),e._v(" "),a("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v("只能上传jpg/png文件，分辨率为144*192，且不超过500kb")])])],1)],1),e._v(" "),a("el-col",{attrs:{span:20}},[a("el-row",[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"工号：",prop:"wid"}},[a("el-input",{attrs:{autocomplete:"off",disabled:!0},model:{value:e.msgForm.wid,callback:function(t){e.$set(e.msgForm,"wid",t)},expression:"msgForm.wid"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"姓名：",prop:"name"}},[a("el-input",{attrs:{autocomplete:"off"},model:{value:e.msgForm.name,callback:function(t){e.$set(e.msgForm,"name",t)},expression:"msgForm.name"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"性别：",prop:"sex"}},[a("el-select",{model:{value:e.msgForm.sex,callback:function(t){e.$set(e.msgForm,"sex",t)},expression:"msgForm.sex"}},[a("el-option",{attrs:{label:"男",value:"0"}}),e._v(" "),a("el-option",{attrs:{label:"女",value:"1"}})],1)],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"民族：",prop:"nation"}},[a("el-input",{attrs:{autocomplete:"off"},model:{value:e.msgForm.nation,callback:function(t){e.$set(e.msgForm,"nation",t)},expression:"msgForm.nation"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"国籍：",prop:"nationality"}},[a("el-input",{attrs:{autocomplete:"off"},model:{value:e.msgForm.nationality,callback:function(t){e.$set(e.msgForm,"nationality",t)},expression:"msgForm.nationality"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"籍贯：",prop:"origin"}},[a("el-input",{attrs:{autocomplete:"off"},model:{value:e.msgForm.origin,callback:function(t){e.$set(e.msgForm,"origin",t)},expression:"msgForm.origin"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"证件类型：",prop:"idType"}},[a("el-select",{model:{value:e.msgForm.idType,callback:function(t){e.$set(e.msgForm,"idType",t)},expression:"msgForm.idType"}},[a("el-option",{attrs:{label:"身份证",value:"0"}}),e._v(" "),a("el-option",{attrs:{label:"港澳居民来往内地通行证",value:"1"}}),e._v(" "),a("el-option",{attrs:{label:"台湾居民来往大陆通行证",value:"2"}}),e._v(" "),a("el-option",{attrs:{label:"护照",value:"3"}}),e._v(" "),a("el-option",{attrs:{label:"外国人永久居留证",value:"4"}}),e._v(" "),a("el-option",{attrs:{label:"其他国家或地区身份证明",value:"5"}})],1)],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"证件号：",prop:"idNumber"}},[a("el-input",{attrs:{autocomplete:"off"},model:{value:e.msgForm.idNumber,callback:function(t){e.$set(e.msgForm,"idNumber",t)},expression:"msgForm.idNumber"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"学历：",prop:"education"}},[a("el-select",{model:{value:e.msgForm.education,callback:function(t){e.$set(e.msgForm,"education",t)},expression:"msgForm.education"}},[a("el-option",{attrs:{label:"博士研究生",value:"1"}}),e._v(" "),a("el-option",{attrs:{label:"硕士研究生",value:"2"}}),e._v(" "),a("el-option",{attrs:{label:"本科毕业生",value:"3"}}),e._v(" "),a("el-option",{attrs:{label:"专科毕业生",value:"4"}}),e._v(" "),a("el-option",{attrs:{label:"其他",value:"5"}})],1)],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"学位：",prop:"degree"}},[a("el-select",{model:{value:e.msgForm.degree,callback:function(t){e.$set(e.msgForm,"degree",t)},expression:"msgForm.degree"}},[a("el-option",{attrs:{value:"学士"}}),e._v(" "),a("el-option",{attrs:{value:"硕士"}}),e._v(" "),a("el-option",{attrs:{value:"博士"}})],1)],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"部门：",prop:"department"}},[a("el-select",{model:{value:e.msgForm.department,callback:function(t){e.$set(e.msgForm,"department",t)},expression:"msgForm.department"}},e._l(e.departmentList,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1)],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"岗位：",prop:"job"}},[a("el-input",{attrs:{autocomplete:"off"},model:{value:e.msgForm.job,callback:function(t){e.$set(e.msgForm,"job",t)},expression:"msgForm.job"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"职称：",prop:"title"}},[a("el-input",{attrs:{autocomplete:"off"},model:{value:e.msgForm.title,callback:function(t){e.$set(e.msgForm,"title",t)},expression:"msgForm.title"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"手机号码：",prop:"lPhone"}},[a("el-input",{attrs:{autocomplete:"off"},model:{value:e.msgForm.lPhone,callback:function(t){e.$set(e.msgForm,"lPhone",t)},expression:"msgForm.lPhone"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"短号：",prop:"sPhone"}},[a("el-input",{attrs:{autocomplete:"off"},model:{value:e.msgForm.sPhone,callback:function(t){e.$set(e.msgForm,"sPhone",t)},expression:"msgForm.sPhone"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"邮箱：",prop:"email"}},[a("el-input",{attrs:{autocomplete:"off"},model:{value:e.msgForm.email,callback:function(t){e.$set(e.msgForm,"email",t)},expression:"msgForm.email"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:18}},[a("div",{staticStyle:{width:"100%",color:"#ffffff"}},[e._v("123")])]),e._v(" "),a("el-col",{attrs:{span:6}},[a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:e.msgSubmit}},[e._v("提交")])],1)],1)],1)],1)],1)],1),e._v(" "),a("el-divider",{attrs:{"content-position":"left"}},[e._v("证件")]),e._v(" "),a("el-row",[a("el-col",{attrs:{span:12}},[a("el-upload",{attrs:{action:"http://localhost:8080/sfzz","before-remove":e.beforeRemove,"file-list":e.fileListZ,limit:1,"before-upload":e.beforeUpload,"on-success":e.handleUpSuccess,"on-preview":e.sfzzdl,data:{wid:e.data.wid}}},[e._v("\n                        上传证件正面照\n                        "),a("el-button",{attrs:{size:"small",type:"primary"}},[e._v("点击上传")]),e._v(" "),a("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v("只能上传jpg/png文件，且不超过500kb，必须删除已有文件才能上传")])],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-upload",{attrs:{action:"http://localhost:8080/sfzf","before-remove":e.beforeRemove,"file-list":e.fileListF,limit:1,"before-upload":e.beforeUpload,"on-success":e.handleUpSuccess,"on-preview":e.sfzfdl,data:{wid:e.data.wid}}},[e._v("\n                        上传证件背面照\n                        "),a("el-button",{attrs:{size:"small",type:"primary"}},[e._v("点击上传")]),e._v(" "),a("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v("只能上传jpg/png文件，且不超过500kb，必须删除已有文件才能上传")])],1)],1)],1)],1),e._v(" "),a("el-tab-pane",{attrs:{label:"薪酬管理",name:"second",disabled:e.ds}},[a("el-divider",{attrs:{"content-position":"left"}},[e._v("基础信息")]),e._v(" "),a("el-form",{ref:"xcForm",attrs:{model:e.xcForm,"status-icon":"","label-width":"160px",rules:e.xcrules}},[e._e(),e._v(" "),a("el-row",[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"银行名称：",prop:"bankName"}},[a("el-select",{model:{value:e.xcForm.bankName,callback:function(t){e.$set(e.xcForm,"bankName",t)},expression:"xcForm.bankName"}},[a("el-option",{attrs:{label:"中国工商银行",value:"0"}}),e._v(" "),a("el-option",{attrs:{label:"中国农业银行",value:"1"}}),e._v(" "),a("el-option",{attrs:{label:"中国建设银行",value:"2"}}),e._v(" "),a("el-option",{attrs:{label:"中国招商银行",value:"3"}}),e._v(" "),a("el-option",{attrs:{label:"中国交通银行",value:"4"}}),e._v(" "),a("el-option",{attrs:{label:"邮政储蓄银行",value:"5"}})],1)],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"银行卡号：",prop:"bankId"}},[a("el-input",{attrs:{autocomplete:"off"},model:{value:e.xcForm.bankId,callback:function(t){e.$set(e.xcForm,"bankId",t)},expression:"xcForm.bankId"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"基本工资(元)：",prop:"baseWage"}},[a("el-input-number",{attrs:{"controls-position":"right",min:0},model:{value:e.xcForm.baseWage,callback:function(t){e.$set(e.xcForm,"baseWage",t)},expression:"xcForm.baseWage"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:21}},[a("div",{staticStyle:{width:"100%",color:"#ffffff"}},[e._v("123")])]),e._v(" "),a("el-col",{attrs:{span:3}},[a("el-button",{attrs:{type:"primary"},on:{click:e.xzSubmit}},[e._v("提交")])],1)],1)],1),e._v(" "),a("el-divider",{attrs:{"content-position":"left"}},[e._v("证件")]),e._v(" "),a("el-row",[a("el-col",{attrs:{span:12}},[a("el-upload",{attrs:{action:"http://localhost:8080/yhkz","before-remove":e.beforeRemove,"file-list":e.fileListyhkz,limit:1,"before-upload":e.beforeUpload,"on-success":e.handleUpSuccess,"on-preview":e.yhkzdl,data:{wid:e.data.wid}}},[e._v("\n                        上传银行卡正面照\n                        "),a("el-button",{attrs:{size:"small",type:"primary"}},[e._v("点击上传")]),e._v(" "),a("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v("只能上传jpg/png文件，且不超过500kb，必须删除已有文件才能上传")])],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-upload",{attrs:{action:"http://localhost:8080/yhkf","before-remove":e.beforeRemove,"file-list":e.fileListyhkf,limit:1,"before-upload":e.beforeUpload,"on-preview":e.yhkfdl,"on-success":e.handleUpSuccess,data:{wid:e.data.wid}}},[e._v("\n                        上传银行卡背面照\n                        "),a("el-button",{attrs:{size:"small",type:"primary"}},[e._v("点击上传")]),e._v(" "),a("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v("只能上传jpg/png文件，且不超过500kb，必须删除已有文件才能上传")])],1)],1)],1),e._v(" "),a("el-divider",{attrs:{"content-position":"left"}},[e._v("发放记录")]),e._v(" "),a("el-table",{ref:"xcTable",staticStyle:{width:"100%"},attrs:{"tooltip-effect":"dark","header-cell-style":{background:"#f5f7fa"},"default-sort":{prop:"time"},data:e.xcTable}},[a("el-table-column",{attrs:{prop:"time",label:"发放时间",sortable:""}}),e._v(" "),a("el-table-column",{attrs:{prop:"baseWage",label:"基本工资"}})],1)],1),e._v(" "),a("el-tab-pane",{attrs:{label:"合同管理",name:"third",disabled:e.ds}},[a("el-divider",{attrs:{"content-position":"left"}},[e._v("新增")]),e._v(" "),a("el-form",{ref:"htForm",attrs:{model:e.htForm,"status-icon":"","label-width":"160px",rules:e.htrules}},[e._e(),e._v(" "),a("el-row",[a("el-col",{attrs:{span:12}},[a("el-row",[a("el-form-item",{attrs:{label:"合同名称：",prop:"htName"}},[a("el-input",{attrs:{autocomplete:"off"},model:{value:e.htForm.htName,callback:function(t){e.$set(e.htForm,"htName",t)},expression:"htForm.htName"}})],1)],1),e._v(" "),a("el-row",[a("el-form-item",{attrs:{label:"签约时间：",prop:"signingTime"}},[a("el-date-picker",{attrs:{type:"date",placeholder:"选择日期"},model:{value:e.htForm.signingTime,callback:function(t){e.$set(e.htForm,"signingTime",t)},expression:"htForm.signingTime"}})],1)],1),e._v(" "),a("el-row",[a("el-form-item",{attrs:{label:"合同有效期(月)：",prop:"useTime"}},[a("el-input-number",{attrs:{"controls-position":"right",min:0},model:{value:e.htForm.useTime,callback:function(t){e.$set(e.htForm,"useTime",t)},expression:"htForm.useTime"}})],1)],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-upload",{ref:"htupload",staticClass:"htfile",attrs:{action:"http://localhost:8080/htfile",limit:1,"before-upload":e.htlai,"on-success":e.htwc,data:{wid:e.data.wid,htName:e.htForm.htName,signingTime:e.htForm.signingTime,useTime:e.htForm.useTime},"auto-upload":!1}},[a("span",{staticStyle:{color:"red"}},[e._v("*")]),e._v("上传合同：\n                            "),a("el-button",{attrs:{size:"small",type:"primary"}},[e._v("点击上传")]),e._v(" "),a("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v("只能上传jpg/png文件，且不超过500kb")])],1)],1),e._v(" "),a("el-col",{attrs:{span:21}},[a("div",{staticStyle:{width:"100%",color:"#ffffff"}},[e._v("123")])]),e._v(" "),a("el-col",{attrs:{span:3}},[a("el-button",{attrs:{type:"primary"},on:{click:e.htSubmit}},[e._v("提交")])],1)],1)],1),e._v(" "),a("el-divider",{attrs:{"content-position":"left"}},[e._v("合同列表")]),e._v(" "),a("el-table",{ref:"htTable",staticStyle:{width:"100%"},attrs:{"tooltip-effect":"dark","header-cell-style":{background:"#f5f7fa"},"default-sort":{prop:"signingTime"},data:e.htTable}},[a("el-table-column",{attrs:{prop:"signingTime",label:"签约时间",sortable:""}}),e._v(" "),a("el-table-column",{attrs:{prop:"htName",label:"合同名称"}}),e._v(" "),a("el-table-column",{attrs:{prop:"useTime",label:"合同有效期(月)"}}),e._v(" "),a("el-table-column",{attrs:{prop:"state",label:"状态"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-tag",{attrs:{type:1===t.row.state?"primary":"warning","disable-transitions":""}},[e._v(e._s(1==t.row.state?"有效":"无效"))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(a){return e.handleDownload(t.$index,t.row)}}},[e._v("下载")]),e._v(" "),a("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(a){return e.handleDelete(t.$index,t.row)}}},[e._v("删除")])]}}])})],1)],1)],1)],1)},staticRenderFns:[]};var o=a("VU/8")(l,i,!1,function(e){a("4zjQ")},"data-v-b26bc03a",null);t.default=o.exports}});
//# sourceMappingURL=5.5396e743a7eb63cc901b.js.map