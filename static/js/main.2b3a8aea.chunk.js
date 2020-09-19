(this["webpackJsonpcontentful-question-extension"]=this["webpackJsonpcontentful-question-extension"]||[]).push([[0],{15:function(e,t,n){e.exports=n(30)},20:function(e,t,n){},21:function(e,t,n){},29:function(e,t){function n(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id=29},30:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n.n(c),a=n(3),o=n.n(a),r=(n(20),n(4)),l=n(2),s=n(7),u=(n(21),n(22),n(6)),d=n(1),m=["single-choice","multiple-choice","dropdown"];function h(e){var t=e.isOpen,n=e.setOpen,i=e.selectedQuestionType,a=e.setQuestionType;return c.createElement("div",{className:"question-type"},c.createElement("span",null,"Choose question type:"),c.createElement(d.e,{isOpen:t,onClose:function(){n(!1)},key:Date.now(),toggleElement:c.createElement(d.a,{size:"small",buttonType:"muted",indicateDropdown:!0,onClick:function(){return n(!t)}},i)},c.createElement(d.f,null,m.map((function(e){return c.createElement(d.g,{key:e,isActive:e===i,onClick:function(){a(e),n(!1)}},e)})))))}function p(e){var t=c.useState(""),n=Object(s.a)(t,2),i=n[0],a=n[1];return c.createElement("div",{className:"add-choice-container"},c.createElement(d.j,{value:i,placeholder:"add the choice's text and press return",role:"add-choice-input",onChange:function(e){a(e.currentTarget.value)},onKeyPress:function(t){"Enter"===t.key&&(e.onSubmit(i),a(""))}}))}function f(e){var t=e.choice,n=e.removeChoice,i=e.makeValid,a=e.dndProvided,o=e.questionType;return c.createElement("div",Object.assign({},a.draggableProps,a.dragHandleProps,{ref:a.innerRef}),c.createElement(d.b,{style:{display:"flex"}},c.createElement("div",{style:{margin:"-0.875rem 1rem -0.875rem -0.875rem"}},c.createElement(d.c,null,"move")),{"single-choice":c.createElement(d.i,{labelText:t.text,checked:t.isValid,onChange:function(){i(t.id)},id:"choice-id"}),"multiple-choice":c.createElement(d.d,{labelText:t.text,checked:t.isValid,id:"choice-id",onChange:function(){i(t.id)}}),dropdown:null}[o],c.createElement(d.h,{onClick:function(){return n(t.id)},buttonType:"negative",iconProps:{icon:"Close"},label:"remove"})))}function b(e){var t=e.question,n=e.removeChoice,c=e.makeValid;return i.a.createElement(i.a.Fragment,null,t.choices.map((function(e,a){return i.a.createElement(u.b,{key:e.id,draggableId:e.id,index:a},(function(a,o){return i.a.createElement(f,{questionType:t.type,dndProvided:a,choice:e,removeChoice:n,makeValid:c})}))})))}function v(e){var t=e.choices,n=e.makeValid,c=e.removeChoice;return i.a.createElement(d.e,{isOpen:!0,key:Date.now(),toggleElement:i.a.createElement(d.a,{size:"small",buttonType:"muted",indicateDropdown:!0},"Trigger Dropdown")},i.a.createElement(d.f,null,t&&t.map((function(e){var t=e.id,a=e.text,o=e.isValid;return i.a.createElement(d.g,{key:t},i.a.createElement(d.i,{labelText:a,checked:o,inputProps:{"data-testid":"make-choice-".concat(t,"-valid")},onChange:function(){n(t)},id:"choice-id"}),i.a.createElement(d.h,{onClick:function(){return c(t)},buttonType:"negative","data-testid":"remove-choice-".concat(t),iconProps:{icon:"Close"},label:"remove"}))}))))}var E=function(e){var t=e.sdk,n=i.a.useState(!1),c=Object(s.a)(n,2),a=c[0],o=c[1],d=i.a.useState({type:"multiple-choice",choices:[]}),m=Object(s.a)(d,2),f=m[0],E=m[1];i.a.useEffect((function(){t.window.updateHeight(550);var e=t.field.getValue();E(e)}),[t]),i.a.useEffect((function(){t.field.setValue(f)}),[t,f]);var O=function(e){E(Object(l.a)(Object(l.a)({},f),{},{choices:f.choices.map((function(t){return t.id===e?Object(l.a)(Object(l.a)({},t),{},{isValid:!t.isValid}):"single-choice"===f.type||"dropdown"===f.type?Object(l.a)(Object(l.a)({},t),{},{isValid:!1}):t}))}))},g=function(e){E(Object(l.a)(Object(l.a)({},f),{},{choices:f.choices.filter((function(t){return t.id!==e}))}))};return i.a.createElement("div",{className:"question-container"},i.a.createElement(h,{selectedQuestionType:f.type,isOpen:a,setOpen:o,setQuestionType:function(e){E(Object(l.a)(Object(l.a)({},f),{},{type:e,choices:f.choices.map((function(e){return Object(l.a)(Object(l.a)({},e),{},{isValid:!1})}))}))}}),i.a.createElement(p,{onSubmit:function(e){E(Object(l.a)(Object(l.a)({},f),{},{choices:[].concat(Object(r.a)(f.choices),[{isValid:!1,id:"".concat(Math.random().toString().slice(2)),text:e}])}))}}),i.a.createElement(u.a,{onDragEnd:function(e){if(e.destination){var t=e.source.index,n=e.destination.index,c=Object(r.a)(f.choices);if(n>t){var i=c.slice(0,t),a=c.slice(t+1,n+1),o=c[t],s=c.slice(n+1);E(Object(l.a)(Object(l.a)({},f),{},{choices:[].concat(Object(r.a)(i),Object(r.a)(a),[o],Object(r.a)(s))}))}else if(t>n){var u=c.slice(0,n),d=c.slice(n,t),m=c[t],h=c.slice(t+1);E(Object(l.a)(Object(l.a)({},f),{},{choices:[].concat(Object(r.a)(u),[m],Object(r.a)(d),Object(r.a)(h))}))}}}},i.a.createElement(u.c,{droppableId:"choices"},(function(e,t){return i.a.createElement("div",Object.assign({},e.droppableProps,{ref:e.innerRef,className:"question-choices"}),"dropdown"===f.type?i.a.createElement(v,{choices:f.choices,makeValid:O,removeChoice:g}):i.a.createElement(b,{question:f,removeChoice:g,makeValid:O}))}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var O=n(14);Object(O.init)((function(e){o.a.render(i.a.createElement(E,{sdk:e}),document.getElementById("root"))})),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[15,1,2]]]);
//# sourceMappingURL=main.2b3a8aea.chunk.js.map