(this.webpackJsonprecepie_app=this.webpackJsonprecepie_app||[]).push([[0],{12:function(e,t,c){},15:function(e,t,c){},16:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),i=c(6),a=c.n(i),s=(c(12),c(4)),o=c.n(s),u=c(7),p=c(2),l=c(5),j=c.n(l),b=c(0),h=function(e){var t=e.title,c=e.calories,n=e.image,r=e.cusineType,i=e.ingredients,a=e.source;return Object(b.jsxs)("div",{className:j.a.recipe,children:[Object(b.jsx)("h1",{children:t}),Object(b.jsxs)("p",{children:["Calories = ",c]}),Object(b.jsx)("p",{children:r}),Object(b.jsx)("ol",{children:i.map((function(e){return Object(b.jsx)("li",{children:e.text})}))}),Object(b.jsxs)("p",{children:["Source:-",a]}),Object(b.jsx)("img",{className:j.a.image,src:n,alt:"Image Not Available"})]})},d=(c(15),function(){var e=Object(n.useState)([]),t=Object(p.a)(e,2),c=t[0],r=t[1],i=Object(n.useState)(""),a=Object(p.a)(i,2),s=a[0],l=a[1],j=Object(n.useState)("chicken"),d=Object(p.a)(j,2),f=d[0],m=d[1];Object(n.useEffect)((function(){O()}),[f]);var O=function(){var e=Object(u.a)(o.a.mark((function e(){var t,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.edamam.com/search?q=".concat(f,"&app_id=").concat("21a2de3f","&app_key=").concat("e55ff951c9d61bbfd793d21012ea9730"));case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,r(c.hits),console.log(c.hits);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsxs)("form",{onSubmit:function(e){e.preventDefault(),m(s),l("")},className:"search-form",children:[Object(b.jsx)("input",{placeholder:"search for your favourite food",className:"search-bar",type:"text",value:s,onChange:function(e){l(e.target.value)}}),Object(b.jsx)("button",{className:"search-button",type:"submit",children:"Search"})]}),Object(b.jsxs)("div",{className:"recipes",children:[c.map((function(e){return Object(b.jsx)(h,{title:e.recipe.label,calories:e.recipe.calories,image:e.recipe.image,source:e.recipe.source,cusineType:e.recipe.cusineType,ingredients:e.recipe.ingredients},e.recipe.label)})),";"]})]})}),f=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,17)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,i=t.getLCP,a=t.getTTFB;c(e),n(e),r(e),i(e),a(e)}))};a.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(d,{})}),document.getElementById("root")),f()},5:function(e,t,c){e.exports={recipe:"recipe_recipe__wiPD3",image:"recipe_image__1HlrA"}}},[[16,1,2]]]);
//# sourceMappingURL=main.c3a3aa25.chunk.js.map