(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{32:function(e,t,n){e.exports=n(59)},37:function(e,t,n){},39:function(e,t,n){},49:function(e,t,n){},51:function(e,t,n){},53:function(e,t,n){},55:function(e,t,n){},57:function(e,t,n){},59:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(20),c=(n(37),n(61)),s=n(62),i=n(30),l=n(60),u=(n(39),function(){return r.a.createElement("header",{className:"headerContainer"},r.a.createElement("h1",{className:"title"},"Track Your Money"),r.a.createElement("nav",{className:"navbar"},r.a.createElement(l.a,{to:"/",activeClassName:"is-active",className:"navLink",exact:!0},"Dashboard"),r.a.createElement(l.a,{to:"/create",activeClassName:"is-active",className:"navLink"},"Create Expense")))}),m=n(22),p=n(7),d=n.n(p),E=n(5),f=n(6),h=n(11),v=n(24),x=n.n(v),S=(n(49),Object(E.b)()(function(e){var t=d()(e.expense.createdAt).format("MMMM Do YYYY h:mm:ss a");return r.a.createElement("div",null,r.a.createElement("h3",{className:"description"},e.expense.description),r.a.createElement("p",null,r.a.createElement("span",{className:"amount"},"$",e.expense.amount," "),"- ",r.a.createElement("span",{className:"createdAt"},t)),e.expense.note&&r.a.createElement("p",{className:"note"},r.a.createElement("span",{className:"spanNote"},"Note:")," ",e.expense.note),r.a.createElement("div",{className:"buttonsContainer"},r.a.createElement("button",{className:"expenseListButtons edit"},r.a.createElement(m.a,{className:"Link",to:"/edit/".concat(e.expense.id)},"Edit")),r.a.createElement("button",{className:"expenseListButtons remove",onClick:function(){var t;e.dispatch((t=e.expense.id,function(e){var n=JSON.parse(localStorage.getItem("expenses"));n=n.filter(function(e){return e.id!==t}),localStorage.setItem("expenses",JSON.stringify(n)),e(function(e){return{type:"REMOVE_EXPENSE",id:e}}(t))}))}},"Remove")))})),N=(n(51),Object(E.b)(function(e){return{expenses:e.expenses,filters:e.filters,startDateToFormat:d()(e.filters.startDate).format("YYYY-MM-DD"),endDateToFormat:d()(e.filters.endDate).format("YYYY-MM-DD")}},function(e){return{handleTextFiler:function(t){e({type:"SET_FILTER_TEXT",text:t})},handleSorting:function(t){e({type:"SET_FILTER_SORT_BY",sortBy:t})},handleStartDate:function(t){var n=d()(t).valueOf();e({type:"SET_START_DATE",startDate:n})},handleEndDate:function(t){var n=d()(t).valueOf();e({type:"SET_END_DATE",endDate:n})}}})(function(e){return r.a.createElement("div",{className:"filtersContainer"},r.a.createElement("div",{className:"miniContainer"},r.a.createElement("div",null,r.a.createElement("input",{type:"text",placeholder:"Search an expense",value:e.filters.text,onChange:function(t){return e.handleTextFiler(t.target.value)}}),"\ud83d\udd0d"),r.a.createElement("select",{value:e.filters.sortBy,onChange:function(t){return e.handleSorting(t.target.value)}},r.a.createElement("option",{value:"Amount"},"Amount"),r.a.createElement("option",{value:"Date"},"Date"))),r.a.createElement("div",{className:"miniContainer"},r.a.createElement("input",{type:"date",value:e.startDateToFormat,onChange:function(t){return e.handleStartDate(t.target.value)}}),r.a.createElement("input",{type:"date",value:e.endDateToFormat,onChange:function(t){return e.handleEndDate(t.target.value)}})))})),g=function(e,t){var n=t.text,a=t.sortBy,r=t.startDate,o=t.endDate;return e.filter(function(e){var t="number"!==typeof r||r<=e.createdAt,a="number"!==typeof o||o>=e.createdAt,c=e.description.toLowerCase().includes(n.toLowerCase())||e.note.toLowerCase().includes(n.toLowerCase());return t&&a&&c}).sort(function(e,t){return"date"===a.toLowerCase()?-(parseInt(e.createdAt)-parseInt(t.createdAt)):-(parseFloat(e.amount)-parseFloat(t.amount))})},b=Object(E.b)(function(e){return{expenses:g(e.expenses,e.filters)}})(function(e){return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(N,null)),e.expenses.map(function(e){return r.a.createElement(S,{key:e.id,expense:e})}))}),D=n(25),y=n(26),T=n(29),O=n(27),C=n(31),_=(n(53),function(e){function t(e){var n;return Object(D.a)(this,t),(n=Object(T.a)(this,Object(O.a)(t).call(this,e))).onDescriptionChange=function(e){var t=e.target.value;n.setState(function(){return{description:t}})},n.onAmountChange=function(e){var t=e.target.value;t&&!t.match(/^\d+\.?\d{0,2}$/)||n.setState(function(){return{amount:t}})},n.onNoteChange=function(e){var t=e.target.value;n.setState(function(){return{note:t}})},n.onSubmit=function(e){if(e.preventDefault(),n.state.description&&n.state.amount)n.setState(function(){return{error:""}}),n.props.onSubmit({description:n.state.description,amount:n.state.amount,createdAt:n.state.createdAt,note:n.state.note});else{n.setState(function(){return{error:"Please enter the Description and the Amount!"}})}},n.state={description:e.expense?e.expense.description:"",amount:e.expense?e.expense.amount:"",note:e.expense?e.expense.note:"",createdAt:e.expense?e.expense.createdAt:Date.now(),error:""},n}return Object(C.a)(t,e),Object(y.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,this.state.error&&r.a.createElement("p",null,this.state.error),r.a.createElement("form",{onSubmit:this.onSubmit,className:"formContainer"},r.a.createElement("input",{className:"formInput",type:"text",placeholder:"Enter a Description",value:this.state.description,onChange:this.onDescriptionChange}),r.a.createElement("input",{className:"formInput",type:"text",placeholder:"Enter an Amount",value:this.state.amount,onChange:this.onAmountChange}),r.a.createElement("textarea",{className:"formTextArea",placeholder:"Add a note for your expense (optional)",value:this.state.note,onChange:this.onNoteChange}),r.a.createElement("button",{className:"formButton"},this.props.expense?"Edit Expense":"Create New Expense")))}}]),t}(a.Component)),A=(n(55),Object(E.b)()(function(e){return r.a.createElement("div",{className:"createExpContainer"},r.a.createElement("h1",{className:"createExp"},"Create an Expense"),r.a.createElement(_,{onSubmit:function(t){e.dispatch(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(t){var n=e.id,a=void 0===n?x()():n,r=e.description,o=void 0===r?"":r,c=e.amount,s=void 0===c?0:c,i=e.note,l=void 0===i?"":i,u=e.createdAt,m={id:a,description:o,amount:s,note:l,createdAt:void 0===u?0:u},p=JSON.parse(localStorage.getItem("expenses"));p=Array.isArray(p)?p:[],localStorage.setItem("expenses",JSON.stringify(Object(h.a)(p).concat([m]))),t(function(e){return{type:"CREATE_EXPENSE",expense:e}}(m))}}(t)),e.history.push("/")}}))})),w=Object(E.b)(function(e,t){return{expense:e.expenses.find(function(e){return e.id===t.match.params.id})}})(function(e){return r.a.createElement("div",null,r.a.createElement(_,{expense:e.expense,onSubmit:function(t){var n,a;e.dispatch((n=e.expense.id,a=t,function(e){var t=JSON.parse(localStorage.getItem("expenses"));t.map(function(e){return e.id===n?Object(f.a)({},e,a):e}),localStorage.setItem("expenses",JSON.stringify(t)),e(function(e,t){return{type:"EDIT_EXPENSE",id:e,update:t}}(n,a))})),e.history.push("/")}}))}),j=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"404-Page Not Found"),r.a.createElement("div",null,r.a.createElement(m.a,{to:"/Dasheboard"},"Please click here to be redirected to the Dasheboard")))},I=(n(57),function(){return r.a.createElement("footer",{className:"stickyFooter"},r.a.createElement("div",{className:"copyright"},"@Copyright 2018 - Made with React and Redux By Saad Mourtada"))}),R=function(){return r.a.createElement(c.a,null,r.a.createElement("div",null,r.a.createElement(u,null),r.a.createElement(s.a,null,r.a.createElement(i.a,{path:"/",component:b,exact:!0}),r.a.createElement(i.a,{path:"/create",component:A}),r.a.createElement(i.a,{path:"/edit/:id",component:w}),r.a.createElement(i.a,{component:j}),"   "),r.a.createElement(I,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var L=n(8),Y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CREATE_EXPENSE":return Object(h.a)(e).concat([t.expense]);case"EDIT_EXPENSE":return e.map(function(e){var n=t.update;return e.id===t.id?Object(f.a)({},e,n):e});case"REMOVE_EXPENSE":return e.filter(function(e){return e.id!==t.id});case"GET_EXPENSES":return t.getExpenses;default:return e}},B={text:"",sortBy:"Date",startDate:"2000-01-01",endDate:"2020-01-01"},F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_FILTER_TEXT":return Object(f.a)({},e,{text:t.text});case"SET_START_DATE":return Object(f.a)({},e,{startDate:t.startDate});case"SET_END_DATE":return Object(f.a)({},e,{endDate:t.endDate});case"SET_FILTER_SORT_BY":return Object(f.a)({},e,{sortBy:t.sortBy});default:return e}},M=n(28),k=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||L.d,P=Object(L.e)(Object(L.c)({expenses:Y,filters:F}),k(Object(L.a)(M.a)));P.dispatch(function(e){var t=JSON.parse(localStorage.getItem("expenses"));t=Array.isArray(t)?t:[],e({type:"GET_EXPENSES",getExpenses:t})}),P.subscribe(function(){console.log(P.getState())}),Object(o.render)(r.a.createElement(E.a,{store:P},r.a.createElement(R,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[32,2,1]]]);
//# sourceMappingURL=main.9ac49c96.chunk.js.map