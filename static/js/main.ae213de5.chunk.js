(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],{14:function(e,t,c){},16:function(e,t,c){"use strict";c.r(t);var n=c(4),s=c.n(n),a=c(3),o=c(5),r=c(6),l=c(9),d=c(8),i=c(1),u=(c(14),c(7)),b=c.n(u),j=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],h=c(0),p=function(e){Object(l.a)(c,e);var t=Object(d.a)(c);function c(){var e;Object(o.a)(this,c);for(var n=arguments.length,s=new Array(n),a=0;a<n;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).state={selectedGoods:["Jam"]},e}return Object(r.a)(c,[{key:"render",value:function(){var e=this,t=this.state.selectedGoods,c="";switch(t.length){case 0:c="No goods selected";break;case 1:c="".concat(t[0]," selected");break;case 2:c="".concat(t[0]," and ").concat(t[1]," are selected");break;default:c="".concat(t.slice(0,-1).join(", ")," and ").concat(t[t.length-1]," are selected")}return Object(h.jsxs)("main",{className:"App",children:[Object(h.jsxs)("header",{className:"App__header",children:[Object(h.jsx)("h1",{className:"App__title",children:c}),t.length>0?Object(h.jsx)("button",{type:"button",className:"App__clear",onClick:function(){return e.setState({selectedGoods:[]})},children:"Clear"}):""]}),Object(h.jsx)("ul",{children:j.map((function(c){return Object(h.jsxs)("li",{className:b()("Good",{"Good--active":t.includes(c)}),children:[Object(h.jsx)("p",{children:c}),t.includes(c)?Object(h.jsx)("button",{type:"button",className:"Good__remove",onClick:function(){return e.setState({selectedGoods:Object(a.a)(t).filter((function(e){return e!==c}))})},children:"Remove"}):Object(h.jsx)("button",{type:"button",className:"Good__select",onClick:function(){return e.setState({selectedGoods:[].concat(Object(a.a)(t),[c])})},children:"Select"})]},c)}))})]})}}]),c}(i.Component);s.a.render(Object(h.jsx)(p,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.ae213de5.chunk.js.map