"use strict";(self.webpackChunkabin=self.webpackChunkabin||[]).push([[429],{96429:function(e,a,t){t.r(a),t.d(a,{default:function(){return z}});var r=t(74165),l=t(15861),n=t(29439),s=t(72791),i=t(30077),o=t(18380),c=t(99402),d=t(83481),u=t(45987),h=["title","titleId"];var m=s.forwardRef((function(e,a){var t=e.title,r=e.titleId,l=(0,u.Z)(e,h);return s.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",ref:a,"aria-labelledby":r},l),t?s.createElement("title",{id:r},t):null,s.createElement("path",{d:"M6 3a3 3 0 00-3 3v2.25a3 3 0 003 3h2.25a3 3 0 003-3V6a3 3 0 00-3-3H6zM15.75 3a3 3 0 00-3 3v2.25a3 3 0 003 3H18a3 3 0 003-3V6a3 3 0 00-3-3h-2.25zM6 12.75a3 3 0 00-3 3V18a3 3 0 003 3h2.25a3 3 0 003-3v-2.25a3 3 0 00-3-3H6zM17.625 13.5a.75.75 0 00-1.5 0v2.625H13.5a.75.75 0 000 1.5h2.625v2.625a.75.75 0 001.5 0v-2.625h2.625a.75.75 0 000-1.5h-2.625V13.5z"}))})),x=t(67156),v=t(98872),f=t(79139),g=t(61447),b=t(81238),j=t(11087),p=t(86587),w=t(122),y=t(80184),N=[{label:"All",value:"all"},{label:"Monitored",value:"monitored"},{label:"Pending",value:"pending"}],Z=["Course","Category","Status","Added",""],z=function(){var e=(0,s.useState)([]),a=(0,n.Z)(e,2),t=a[0],u=a[1],h=(0,s.useState)(""),z=(0,n.Z)(h,2),E=z[0],C=z[1],k=(0,p.Z)(t,4),T=k.currentPage,I=k.totalPages,B=k.currentData,M=(k.goToPage,k.goToPreviousPage),H=k.goToNextPage,P=(0,w.Z)(t,E),R=function(){var e=(0,l.Z)((0,r.Z)().mark((function e(){var a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,g.Rr)();case 2:a=e.sent,u(a.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();(0,s.useEffect)((function(){R()}),[]);var L=""!==E?P:B;return(0,y.jsxs)(f.Card,{className:"h-auto w-full mb-24 ",children:[(0,y.jsxs)(f.CardHeader,{floated:!1,shadow:!1,className:"rounded-none",children:[(0,y.jsxs)("div",{className:"mb-8 flex items-center justify-between gap-8",children:[(0,y.jsxs)("div",{children:[(0,y.jsx)(f.Typography,{variant:"h5",color:"blue-gray",children:"Course list"}),(0,y.jsx)(f.Typography,{color:"gray",className:"mt-1 font-normal",children:"See information about all courses"})]}),(0,y.jsxs)("div",{className:"flex shrink-0 flex-col gap-2 sm:flex-row",children:[(0,y.jsx)(f.Button,{variant:"outlined",color:"blue-gray",size:"sm",children:"view all"}),(0,y.jsx)(j.rU,{to:"/instructors/add-course",children:(0,y.jsxs)(f.Button,{className:"flex items-center gap-3",color:"blue",size:"sm",children:[(0,y.jsx)(d.Z,{strokeWidth:2,className:"h-4 w-4"})," Add course"]})})]})]}),(0,y.jsxs)("div",{className:"flex flex-col items-center justify-between gap-4 md:flex-row",children:[(0,y.jsx)(f.Tabs,{value:"all",className:"w-full md:w-max",children:(0,y.jsx)(f.TabsHeader,{children:N.map((function(e){var a=e.label,t=e.value;return(0,y.jsxs)(f.Tab,{value:t,children:["\xa0\xa0",a,"\xa0\xa0"]},t)}))})}),(0,y.jsx)("div",{className:"w-full md:w-72",children:(0,y.jsx)(f.Input,{label:"Search",value:E,onInput:function(e){C(e.currentTarget.value)},icon:(0,y.jsx)(i.Z,{className:"h-5 w-5"})})})]})]}),(0,y.jsx)(f.CardBody,{className:"overflow-scroll px-0",children:(0,y.jsxs)("table",{className:"mt-4 w-full min-w-max table-auto text-left",children:[(0,y.jsx)("thead",{children:(0,y.jsx)("tr",{children:Z.map((function(e,a){return(0,y.jsx)("th",{className:"cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50",children:(0,y.jsxs)(f.Typography,{variant:"small",color:"blue-gray",className:"flex items-center justify-between gap-2 font-normal leading-none opacity-70",children:[e,a!==Z.length-1&&(0,y.jsx)(o.Z,{strokeWidth:2,className:"h-4 w-4"})]})},e)}))})}),(0,y.jsx)("tbody",{children:L.length>0?L.map((function(e,a){var t=e._id,r=e.title,l=e.thumbnailUrl,n=(e.description,e.category),s=e.createdAt,i=e.isVerified,o=a===B.length-1?"p-4":"p-4 border-b border-blue-gray-50";if(a<=4)return(0,y.jsxs)("tr",{children:[(0,y.jsx)("td",{className:o,children:(0,y.jsxs)("div",{className:"flex items-center gap-3",children:[(0,y.jsx)(f.Avatar,{src:l,alt:"image",size:"sm"}),(0,y.jsx)("div",{className:"flex flex-col",children:(0,y.jsx)(f.Typography,{variant:"small",color:"blue-gray",className:"font-normal",children:r})})]})}),(0,y.jsx)("td",{className:o,children:(0,y.jsx)("div",{className:"flex flex-col",children:(0,y.jsx)(f.Typography,{variant:"small",color:"blue-gray",className:"font-normal",children:n})})}),(0,y.jsx)("td",{className:o,children:(0,y.jsx)("div",{className:"w-max",children:(0,y.jsx)(f.Chip,{variant:"ghost",size:"sm",value:i?"active":"pending",color:i?"green":"blue-gray"})})}),(0,y.jsx)("td",{className:o,children:(0,y.jsx)(f.Typography,{variant:"small",color:"blue-gray",className:"font-normal",children:(0,b.p6)(s)})}),(0,y.jsxs)("td",{className:o,children:[(0,y.jsx)(f.Tooltip,{content:"Add lessons",children:(0,y.jsx)(j.rU,{to:"/instructors/view-lessons/".concat(t),children:(0,y.jsx)(f.IconButton,{variant:"text",color:"blue-gray",children:(0,y.jsx)(m,{className:"h-4 w-4 text-blue-500"})})})}),(0,y.jsx)(f.Tooltip,{content:"Edit course",children:(0,y.jsx)(j.rU,{to:"/instructors/edit-course/".concat(t),children:(0,y.jsx)(f.IconButton,{variant:"text",color:"blue-gray",children:(0,y.jsx)(x.Z,{className:"h-4 w-4"})})})}),(0,y.jsx)(f.Tooltip,{content:"Delete course",children:(0,y.jsx)(f.IconButton,{variant:"text",color:"blue-gray",children:(0,y.jsx)(v.Z,{className:"h-4 w-4 text-red-500"})})})]})]},t)})):(0,y.jsx)("tr",{children:(0,y.jsx)("td",{className:"p-4 text-center",colSpan:Z.length,children:(0,y.jsxs)("div",{className:"flex items-center justify-center gap-2",children:[(0,y.jsx)(c.Z,{className:"h-6 w-6 text-blue-gray-400"}),(0,y.jsx)(f.Typography,{variant:"body",color:"blue-gray",children:"No results found for your search query."})]})})})})]})}),(0,y.jsxs)(f.CardFooter,{className:"flex items-center justify-between border-t border-blue-gray-50 p-4",children:[(0,y.jsxs)(f.Typography,{variant:"small",color:"blue-gray",className:"font-normal",children:["Page ",T," of ",I]}),(0,y.jsxs)("div",{className:"flex gap-2",children:[(0,y.jsx)(f.Button,{onClick:M,disabled:1===T,variant:"outlined",color:"blue-gray",size:"sm",children:"Previous"}),(0,y.jsx)(f.Button,{onClick:H,disabled:T===I,variant:"outlined",color:"blue-gray",size:"sm",children:"Next"})]})]})]})}},18380:function(e,a,t){var r=t(45987),l=t(72791),n=["title","titleId"];var s=l.forwardRef((function(e,a){var t=e.title,s=e.titleId,i=(0,r.Z)(e,n);return l.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:a,"aria-labelledby":s},i),t?l.createElement("title",{id:s},t):null,l.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"}))}));a.Z=s},99402:function(e,a,t){var r=t(45987),l=t(72791),n=["title","titleId"];var s=l.forwardRef((function(e,a){var t=e.title,s=e.titleId,i=(0,r.Z)(e,n);return l.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:a,"aria-labelledby":s},i),t?l.createElement("title",{id:s},t):null,l.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"}))}));a.Z=s},67156:function(e,a,t){var r=t(45987),l=t(72791),n=["title","titleId"];var s=l.forwardRef((function(e,a){var t=e.title,s=e.titleId,i=(0,r.Z)(e,n);return l.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",ref:a,"aria-labelledby":s},i),t?l.createElement("title",{id:s},t):null,l.createElement("path",{d:"M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z"}))}));a.Z=s},98872:function(e,a,t){var r=t(45987),l=t(72791),n=["title","titleId"];var s=l.forwardRef((function(e,a){var t=e.title,s=e.titleId,i=(0,r.Z)(e,n);return l.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",ref:a,"aria-labelledby":s},i),t?l.createElement("title",{id:s},t):null,l.createElement("path",{fillRule:"evenodd",d:"M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z",clipRule:"evenodd"}))}));a.Z=s},83481:function(e,a,t){var r=t(45987),l=t(72791),n=["title","titleId"];var s=l.forwardRef((function(e,a){var t=e.title,s=e.titleId,i=(0,r.Z)(e,n);return l.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",ref:a,"aria-labelledby":s},i),t?l.createElement("title",{id:s},t):null,l.createElement("path",{d:"M6.25 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM3.25 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM19.75 7.5a.75.75 0 00-1.5 0v2.25H16a.75.75 0 000 1.5h2.25v2.25a.75.75 0 001.5 0v-2.25H22a.75.75 0 000-1.5h-2.25V7.5z"}))}));a.Z=s}}]);
//# sourceMappingURL=429.cd66a112.chunk.js.map