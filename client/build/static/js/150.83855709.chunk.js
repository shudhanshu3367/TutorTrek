"use strict";(self.webpackChunkabin=self.webpackChunkabin||[]).push([[150],{15150:function(e,r,a){a.r(r),a.d(r,{default:function(){return v}});var s=a(29439),t=a(72791),l=a(74165),o=a(15861),n=a(26864),d=a(9085),u=a(28130),i=a(79139),c=a(59434),p=a(53071),m=a(17250),f=a(80184),b=function(e){var r,a=e.editMode,b=e.setEditMode,h=(0,t.useState)(null),x=(0,s.Z)(h,2),g=x[0],w=x[1],v=null===(r=(0,c.v9)(p.W7))||void 0===r?void 0:r.studentDetails,y=((0,c.v9)(p.MK),(0,t.useState)(!1)),N=(0,s.Z)(y,2),j=N[0],k=N[1],P=((0,c.v9)(p.g1),(0,t.useState)(!1)),C=(0,s.Z)(P,2),_=C[0],B=C[1],F=(0,c.I0)();(0,t.useEffect)((function(){F((0,p.F0)())}),[_]),(0,t.useEffect)((function(){k(!v)}),[v]);var I=function(){var e=(0,o.Z)((0,l.Z)().mark((function e(r){var a,s,t,o,n;return(0,l.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,s=new FormData,r.profilePic&&s.append("image",r.profilePic),s.append("email",r.email||""),s.append("firstName",r.firstName||""),s.append("lastName",r.lastName||""),s.append("mobile",r.mobile||""),e.next=9,(0,u.ck)(s);case 9:t=e.sent,w(null),(o=document.getElementById("file_input"))&&(o.value=""),B(!_),b(!1),d.Am.success(null===t||void 0===t||null===(a=t.data)||void 0===a?void 0:a.message,{position:d.Am.POSITION.BOTTOM_RIGHT}),e.next=22;break;case 18:e.prev=18,e.t0=e.catch(0),B(!_),d.Am.error(null===e.t0||void 0===e.t0||null===(n=e.t0.data)||void 0===n?void 0:n.message,{position:d.Am.POSITION.BOTTOM_RIGHT});case 22:case"end":return e.stop()}}),e,null,[[0,18]])})));return function(r){return e.apply(this,arguments)}}(),Z=(0,n.TA)({initialValues:{email:(null===v||void 0===v?void 0:v.email)||"",firstName:(null===v||void 0===v?void 0:v.firstName)||"",lastName:(null===v||void 0===v?void 0:v.lastName)||"",mobile:(null===v||void 0===v?void 0:v.mobile)||""},onSubmit:function(e){I(e)}});return j?(0,f.jsx)("div",{children:"Loading..."}):(0,f.jsxs)("form",{onSubmit:Z.handleSubmit,children:[(0,f.jsx)("div",{}),(0,f.jsxs)("div",{className:"p-5 flex ",children:[(0,f.jsx)(i.Avatar,{src:g||(null===v||void 0===v?void 0:v.profilePic.url)||m.lK,alt:"avatar",size:"xl"}),(0,f.jsxs)("div",{className:"pl-4",children:[(0,f.jsx)("label",{className:"block mb-2 text-sm font-medium text-gray-900 dark:text-white",htmlFor:"file_input",children:"Upload profile photo"}),(0,f.jsx)("input",{className:"block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400",id:"file_input",onChange:function(e){var r,a=null===(r=e.target.files)||void 0===r?void 0:r[0];if(a){var s=new FileReader;s.onloadend=function(){w(s.result)},s.readAsDataURL(a),Z.setFieldValue("profilePic",a)}else w(null),Z.setFieldValue("profilePic",null)},type:"file"})]})]}),(0,f.jsxs)("div",{className:"grid md:grid-cols-2 md:gap-6",children:[(0,f.jsxs)("div",{className:"relative z-0 w-full mb-6 group",children:[(0,f.jsx)("input",{type:"text",name:"firstName",id:"floating_first_name",value:Z.values.firstName,onChange:Z.handleChange,disabled:!a,onBlur:Z.handleBlur,className:"block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer",placeholder:" ",required:!0}),(0,f.jsx)("label",{htmlFor:"floating_first_name",className:"peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] ".concat(Z.values.firstName?"peer-placeholder-shown:scale-100":""," peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"),children:"First name"})]}),(0,f.jsxs)("div",{className:"relative z-0 w-full mb-6 group",children:[(0,f.jsx)("input",{type:"text",name:"lastName",id:"floating_last_name",value:Z.values.lastName,onChange:Z.handleChange,onBlur:Z.handleBlur,disabled:!a,className:"block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer",placeholder:" ",required:!0}),(0,f.jsx)("label",{htmlFor:"floating_last_name",className:"peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] ".concat(Z.values.lastName?"peer-placeholder-shown:scale-100":""," peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"),children:"Last name"})]})]}),(0,f.jsxs)("div",{className:"relative z-0 w-full mb-6 group",children:[(0,f.jsx)("input",{type:"email",name:"email",id:"floating_email",disabled:!a,value:Z.values.email,onChange:Z.handleChange,onBlur:Z.handleBlur,className:"block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer",placeholder:" ",required:!0}),(0,f.jsx)("label",{htmlFor:"floating_email",className:"peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] ".concat(Z.values.email?"peer-placeholder-shown:scale-100":""," peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"),children:"Email address"})]}),(0,f.jsxs)("div",{className:"relative z-0 w-full mb-6 group",children:[(0,f.jsx)("input",{type:"text",name:"mobile",id:"floating_phone",disabled:!a,value:Z.values.mobile,onChange:Z.handleChange,onBlur:Z.handleBlur,className:"block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer",placeholder:" ",required:!0}),(0,f.jsx)("label",{htmlFor:"floating_phone",className:"peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] ".concat(Z.values.mobile?"peer-placeholder-shown:scale-100":""," peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"),children:"Mobile"})]}),(0,f.jsx)("div",{className:"relative pt-10 pr-1",children:a&&(0,f.jsx)("button",{type:"submit",className:"text-white absolute bottom-0 right-0  bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",children:"Update"})})]})},h=a(19666),x=a(78820),g=function(){var e=(0,t.useState)(!1),r=(0,s.Z)(e,2),a=r[0],i=r[1],c=(0,t.useState)(!1),p=(0,s.Z)(c,2),m=p[0],b=p[1],g=(0,t.useState)(!1),w=(0,s.Z)(g,2),v=w[0],y=w[1],N=function(){var e=(0,o.Z)((0,l.Z)().mark((function e(r){var a,s,t,o;return(0,l.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,u.Cp)(r);case 3:"success"===(null===(t=e.sent)||void 0===t||null===(a=t.data)||void 0===a?void 0:a.status)&&j.resetForm(),d.Am.success(null===t||void 0===t||null===(s=t.data)||void 0===s?void 0:s.message,{position:d.Am.POSITION.BOTTOM_RIGHT}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),d.Am.error(null===e.t0||void 0===e.t0||null===(o=e.t0.data)||void 0===o?void 0:o.message,{position:d.Am.POSITION.BOTTOM_RIGHT});case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(r){return e.apply(this,arguments)}}(),j=(0,n.TA)({initialValues:{currentPassword:"",newPassword:"",repeatPassword:""},validationSchema:h.o,onSubmit:function(e){N(e)}}),k=function(e){switch(e){case"currentPassword":i(!a);break;case"newPassword":b(!m);break;case"repeatPassword":y(!v)}},P=function(e){switch(e){case"currentPassword":return a?"text":"password";case"newPassword":return m?"text":"password";case"repeatPassword":return v?"text":"password";default:return"password"}};return(0,f.jsxs)("form",{onSubmit:j.handleSubmit,children:[(0,f.jsxs)("div",{className:"relative z-0 w-full mb-6 group",children:[(0,f.jsx)("input",{type:P("currentPassword"),name:"currentPassword",id:"floating_current_password",value:j.values.currentPassword,onChange:j.handleChange,onBlur:j.handleBlur,className:"block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer ".concat(j.touched.currentPassword&&j.errors.currentPassword?"border-red-500":""),placeholder:" "}),j.touched.currentPassword&&j.errors.currentPassword&&(0,f.jsx)("div",{className:"text-red-500 text-xs mt-1",children:j.errors.currentPassword}),(0,f.jsx)("label",{htmlFor:"floating_email",className:"peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] ".concat(j.values.currentPassword?"peer-placeholder-shown:scale-100":""," peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"),children:"Current Password"}),(0,f.jsx)("button",{type:"button",className:"absolute right-0 top-2/4 transform -translate-y-2/4 mr-2 focus:outline-none",onClick:function(){return k("currentPassword")},children:a?(0,f.jsx)(x.I0d,{className:"text-gray-500"}):(0,f.jsx)(x.Zju,{className:"text-gray-500"})})]}),(0,f.jsxs)("div",{className:"relative z-0 w-full mb-6 group",children:[(0,f.jsx)("input",{type:P("newPassword"),name:"newPassword",id:"floating_password",value:j.values.newPassword,onChange:j.handleChange,onBlur:j.handleBlur,className:"block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer ".concat(j.touched.newPassword&&j.errors.newPassword?"border-red-500":""),placeholder:" "}),j.touched.newPassword&&j.errors.newPassword&&(0,f.jsx)("div",{className:"text-red-500 text-xs mt-1",children:j.errors.newPassword}),(0,f.jsx)("label",{htmlFor:"floating_password",className:"peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] ".concat(j.values.newPassword?"peer-placeholder-shown:scale-100":""," peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"),children:"Password"}),(0,f.jsx)("button",{type:"button",className:"absolute right-0 top-2/4 transform -translate-y-2/4 mr-2 focus:outline-none",onClick:function(){return k("newPassword")},children:m?(0,f.jsx)(x.I0d,{className:"text-gray-500"}):(0,f.jsx)(x.Zju,{className:"text-gray-500"})})]}),(0,f.jsxs)("div",{className:"relative z-0 w-full mb-6 group",children:[(0,f.jsx)("input",{type:P("repeatPassword"),name:"repeatPassword",id:"floating_repeat_password",value:j.values.repeatPassword,onChange:j.handleChange,onBlur:j.handleBlur,className:"block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer ".concat(j.touched.repeatPassword&&j.errors.repeatPassword?"border-red-500":""),placeholder:" "}),j.touched.repeatPassword&&j.errors.repeatPassword&&(0,f.jsx)("div",{className:"text-red-500 text-xs mt-1",children:j.errors.repeatPassword}),(0,f.jsx)("label",{htmlFor:"floating_repeat_password",className:"peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] ".concat(j.values.repeatPassword?"peer-placeholder-shown:scale-100":""," peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"),children:"Confirm password"}),(0,f.jsx)("button",{type:"button",className:"absolute right-0 top-2/4 transform -translate-y-2/4 mr-2 focus:outline-none",onClick:function(){return k("repeatPassword")},children:v?(0,f.jsx)(x.I0d,{className:"text-gray-500"}):(0,f.jsx)(x.Zju,{className:"text-gray-500"})})]}),(0,f.jsx)("div",{className:"relative pt-14 pr-1",children:(0,f.jsx)("button",{type:"submit",className:"text-white absolute bottom-0 right-0 bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",children:"Reset"})})]})},w=a(23853),v=function(e){var r=(0,c.I0)(),a=(0,t.useState)(!1),l=(0,s.Z)(a,2),o=l[0],n=l[1];(0,t.useEffect)((function(){r((0,p.F0)())}),[r]);return(0,f.jsx)("div",{className:"w-full flex justify-center items-center",children:(0,f.jsxs)("div",{className:"w-11/12",children:[(0,f.jsx)("div",{children:(0,f.jsx)("div",{className:"pt-5 pb-6 w-full",children:(0,f.jsx)("h2",{className:"text-3xl font-semibold text-customFontColorBlack",children:"Edit profile info"})})}),(0,f.jsxs)("div",{className:"flex flex-col md:flex-row gap-x-10 h-full pb-10",children:[(0,f.jsxs)("div",{className:"border md:w-7/12 w-full h-full rounded-md bg-white border-gray-300",children:[(0,f.jsxs)("div",{className:"flex justify-between",children:[(0,f.jsx)("h3",{className:"pl-5 pt-5 text-lg text-customFontColorBlack font-semibold",children:"Account Info"}),(0,f.jsx)("div",{children:(0,f.jsx)("button",{className:"p-5",onClick:function(){n(!0)},children:(0,f.jsx)(w.vPQ,{className:"text-customFontColorBlack text-lg"})})})]}),(0,f.jsx)("div",{className:"p-6",children:(0,f.jsx)(b,{editMode:o,setEditMode:n})})]}),(0,f.jsxs)("div",{className:"border my-7 md:mt-0 pt-5 pb-10 md:w-5/12 w-full h-full rounded-md bg-white border-gray-300",children:[(0,f.jsx)("h3",{className:"pl-5 text-lg text-customFontColorBlack font-semibold",children:"Change password"}),(0,f.jsx)("div",{className:"p-6",children:(0,f.jsx)(g,{})})]})]})]})})}},19666:function(e,r,a){a.d(r,{o:function(){return t}});var s=a(8007),t=s.Ry().shape({currentPassword:s.Z_().required("Current password is required"),newPassword:s.Z_().required("New password is required").min(8,"Password must be at least 8 characters"),repeatPassword:s.Z_().required("Confirm password is required").test("password-match","Passwords must match",(function(e){return e===this.parent.newPassword}))})}}]);
//# sourceMappingURL=150.83855709.chunk.js.map