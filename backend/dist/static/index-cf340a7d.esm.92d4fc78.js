import{s as h,a2 as g,r as l,e as p,P as v,j as s,bK as x,ah as w,cp as I,ae as _,aF as k,ai as E,bx as H}from"./sanity.9668eecb.js";import{u as S}from"./index-989e9e04.esm.d53288ab.js";import"./index.f0bd98c2.js";const B=["index","pane","paneKey"],D=["child","component","menuItems","menuItemGroups","title","type"];var f;function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?d(Object(n),!0).forEach(function(r){C(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function C(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function m(e,t){if(e==null)return{};var n=K(e,t),r,o;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],!(t.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,r)||(n[r]=e[r]))}return n}function K(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,a;for(a=0;a<r.length;a++)o=r[a],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function L(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function G(e){const{actionHandlers:t,index:n,menuItems:r,menuItemGroups:o,title:a}=e,{features:i}=S();return!(r!=null&&r.length)&&!a?null:s(w,{actions:s(I,{menuItems:r,menuItemGroups:o,actionHandlers:t}),backButton:i.backButton&&n>0&&s(_,{as:k,"data-as":"a",icon:E,mode:"bleed"}),title:a})}const T=h(g)(f||(f=L([`
  position: relative;
`])));function U(e){const{children:t}=e,{collapsed:n}=H();return s(T,{hidden:n,height:"fill",overflow:"auto",children:t})}function V(e){const{index:t,pane:n,paneKey:r}=e,o=m(e,B),{child:a,component:i,menuItems:O,menuItemGroups:b,title:P="",type:W}=n,y=m(n,D),[u,j]=l.exports.useState(null);return p(v,{id:r,minWidth:320,selected:o.isSelected,children:[s(G,{actionHandlers:u==null?void 0:u.actionHandlers,index:t,menuItems:O,menuItemGroups:b,title:P}),p(U,{children:[x.exports.isValidElementType(i)&&l.exports.createElement(i,c(c(c(c({},o),y),{ref:j}),{},{child:a,paneKey:r})),l.exports.isValidElement(i)&&i]})]})}export{V as default};
