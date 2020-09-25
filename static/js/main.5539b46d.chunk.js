(this["webpackJsonpcontentful-question-extension"]=this["webpackJsonpcontentful-question-extension"]||[]).push([[0],{15:function(e,t,n){e.exports=n(31)},20:function(e,t,n){},21:function(e,t,n){},29:function(e,t,n){},30:function(e,t){function n(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id=30},31:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n.n(c),o=n(3),a=n.n(o),r=(n(20),n(4)),l=n(1),s=n(5),d=(n(21),n(22),n(7)),u=n(2),m=["single-choice","multiple-choice","dropdown"];function h(e){var t=e.isOpen,n=e.setOpen,i=e.selectedQuestionType,o=e.setQuestionType;return c.createElement("div",{className:"question-type"},c.createElement("span",null,"Choose question type:"),c.createElement(u.e,{isOpen:t,onClose:function(){n(!1)},key:Date.now(),toggleElement:c.createElement(u.a,{size:"small",buttonType:"muted",indicateDropdown:!0,onClick:function(){return n(!t)}},i)},c.createElement(u.f,null,m.map((function(e){return c.createElement(u.g,{key:e,isActive:e===i,onClick:function(){o(e),n(!1)}},e)})))))}function f(e){var t=c.useState(""),n=Object(s.a)(t,2),i=n[0],o=n[1];return c.createElement("div",{className:"add-choice-container"},c.createElement(u.j,{value:i,placeholder:"add the choice's text and press return",role:"add-choice-input",onChange:function(e){o(e.currentTarget.value)},onKeyPress:function(t){"Enter"===t.key&&(e.onSubmit(i),o(""))}}))}function p(e){var t=e.text,n=e.editText,i=c.useState(!1),o=Object(s.a)(i,2),a=o[0],r=o[1];return a?c.createElement(v,{text:t,editText:n,setEditMode:function(e){r(e)}}):c.createElement("span",{onClick:function(e){e.stopPropagation(),r(!0)},style:{cursor:"text"}},t)}function v(e){var t=e.text,n=e.editText,i=e.setEditMode,o=c.useRef(null);return c.useEffect((function(){function e(e){var t;(null===o||void 0===o||null===(t=o.current)||void 0===t?void 0:t.contains(e.target))||i(!1)}return document.addEventListener("click",e),function(){document.removeEventListener("click",e)}}),[i]),c.createElement("div",{style:{display:"inline-block"},ref:o},c.createElement(u.j,{value:t,onChange:function(e){n(e.currentTarget.value)},onBlur:function(){i(!1)},onKeyDown:function(e){"Enter"===e.key&&i(!1)}}))}function b(){return c.createElement("span",{style:{display:"inline-block",width:"8px"}})}function E(e){var t=e.choice,n=e.removeChoice,i=e.makeValid,o=e.dndProvided,a=e.questionType,r=e.editChoice;return c.createElement("div",Object.assign({},o.draggableProps,o.dragHandleProps,{ref:o.innerRef}),c.createElement(O,{choice:t,removeChoice:n,makeValid:i,questionType:a,editChoice:r}))}function O(e){var t=e.choice,n=e.removeChoice,i=e.makeValid,o=e.questionType,a=e.editChoice;return c.createElement(u.b,{style:{display:"flex"}},c.createElement("div",{style:{margin:"-0.875rem 1rem -0.875rem -0.875rem"}},c.createElement(u.c,null,"move")),c.createElement("div",{style:{alignItems:"center"}},{"single-choice":c.createElement(u.i,{"data-testid":"make-choice-valid-".concat(t.id),checked:t.isValid,onChange:function(){i(t.id)},id:"choice-id",labelText:t.text}),"multiple-choice":c.createElement(u.d,{labelText:t.text,"data-testid":"make-choice-valid-".concat(t.id),checked:t.isValid,id:"choice-id",onChange:function(){i(t.id)}}),dropdown:null}[o],c.createElement(b,null),c.createElement(p,{text:t.text,editText:function(e){a(e)}}),c.createElement(b,null),c.createElement(u.h,{onClick:function(){return n(t.id)},buttonType:"negative","data-testid":"remove-choice-".concat(t.id),iconProps:{icon:"Close"},label:"remove"})))}function y(e){var t=e.question,n=e.removeChoice,c=e.makeValid;return i.a.createElement(i.a.Fragment,null,t.choices.map((function(o,a){return i.a.createElement(d.b,{key:o.id,draggableId:o.id,index:a},(function(a,r){return i.a.createElement(E,{questionType:t.type,dndProvided:a,choice:o,removeChoice:n,makeValid:c,editChoice:function(t){e.editChoice(o.id,t)}})}))})))}n(29);function g(e){var t=e.choices,n=e.makeValid,c=e.removeChoice,o=e.editChoice;return i.a.createElement(u.e,{isOpen:!0,key:Date.now(),position:"bottom-left",toggleElement:i.a.createElement(u.a,{size:"small",buttonType:"muted",indicateDropdown:!0},"Trigger Dropdown")},i.a.createElement(u.f,null,t&&t.map((function(e){var t=e.id,a=e.text,r=e.isValid;return i.a.createElement(u.g,{key:t,className:"dropdown-list-item-overrides"},i.a.createElement(u.i,{labelText:a,checked:r,"data-testid":"make-choice-".concat(t,"-valid"),onChange:function(){n(t)},id:"choice-id"}),i.a.createElement(b,null),i.a.createElement(p,{text:a,editText:function(e){o(t,e)}}),i.a.createElement(b,null),i.a.createElement(u.h,{onClick:function(){return c(t)},buttonType:"negative","data-testid":"remove-choice-".concat(t),iconProps:{icon:"Close"},label:"remove"}))}))))}var j=function(e){var t=e.sdk,n=i.a.useState(!1),c=Object(s.a)(n,2),o=c[0],a=c[1],u=i.a.useState({type:"multiple-choice",choices:[]}),m=Object(s.a)(u,2),p=m[0],v=m[1];i.a.useEffect((function(){t.window.updateHeight(550);var e=t.field.getValue();e&&v(e)}),[t]),i.a.useEffect((function(){t.field.setValue(p)}),[t,p]);var b=function(e){v(Object(l.a)(Object(l.a)({},p),{},{choices:p.choices.map((function(t){return t.id===e?Object(l.a)(Object(l.a)({},t),{},{isValid:!t.isValid}):"single-choice"===p.type||"dropdown"===p.type?Object(l.a)(Object(l.a)({},t),{},{isValid:!1}):t}))}))},E=function(e){v(Object(l.a)(Object(l.a)({},p),{},{choices:p.choices.filter((function(t){return t.id!==e}))}))},O=function(e,t){var n=p.choices.findIndex((function(t){return t.id===e}));-1!==n&&v(Object(l.a)(Object(l.a)({},p),{},{choices:[].concat(Object(r.a)(p.choices.slice(0,n)),[Object(l.a)(Object(l.a)({},p.choices[n]),{},{text:t})],Object(r.a)(p.choices.slice(n+1)))}))};return i.a.createElement("div",{className:"question-container"},i.a.createElement(h,{selectedQuestionType:p.type,isOpen:o,setOpen:a,setQuestionType:function(e){v(Object(l.a)(Object(l.a)({},p),{},{type:e,choices:p.choices.map((function(e){return Object(l.a)(Object(l.a)({},e),{},{isValid:!1})}))}))}}),i.a.createElement(f,{onSubmit:function(e){v(Object(l.a)(Object(l.a)({},p),{},{choices:[].concat(Object(r.a)(p.choices),[{isValid:!1,id:"".concat(Math.random().toString().slice(2)),text:e}])}))}}),i.a.createElement(d.a,{onDragEnd:function(e){if(e.destination){var t=e.source.index,n=e.destination.index,c=Object(r.a)(p.choices);if(n>t){var i=c.slice(0,t),o=c.slice(t+1,n+1),a=c[t],s=c.slice(n+1);v(Object(l.a)(Object(l.a)({},p),{},{choices:[].concat(Object(r.a)(i),Object(r.a)(o),[a],Object(r.a)(s))}))}else if(t>n){var d=c.slice(0,n),u=c.slice(n,t),m=c[t],h=c.slice(t+1);v(Object(l.a)(Object(l.a)({},p),{},{choices:[].concat(Object(r.a)(d),[m],Object(r.a)(u),Object(r.a)(h))}))}}}},i.a.createElement(d.c,{droppableId:"choices"},(function(e,t){return i.a.createElement("div",Object.assign({},e.droppableProps,{ref:e.innerRef,className:"question-choices"}),"dropdown"===p.type?i.a.createElement(g,{choices:p.choices,makeValid:b,removeChoice:E,editChoice:O}):i.a.createElement(y,{question:p,removeChoice:E,makeValid:b,editChoice:O}))}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var k=n(14);Object(k.init)((function(e){a.a.render(i.a.createElement(j,{sdk:e}),document.getElementById("root"))})),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[15,1,2]]]);
//# sourceMappingURL=main.5539b46d.chunk.js.map