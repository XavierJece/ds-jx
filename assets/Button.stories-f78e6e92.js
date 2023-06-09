import{j as m}from"./jsx-runtime-6db5783a.js";import{I as O,r as V,c as C}from"./index-3958e03d.js";import{R as e,r as H}from"./index-532c4ca3.js";import"./extends-98964cd2.js";import"./_commonjsHelpers-042e6b4d.js";var n=new Map;n.set("bold",function(r){return e.createElement(e.Fragment,null,e.createElement("line",{x1:"40",y1:"128",x2:"216",y2:"128",fill:"none",stroke:r,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),e.createElement("polyline",{points:"144 56 216 128 144 200",fill:"none",stroke:r,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});n.set("duotone",function(r){return e.createElement(e.Fragment,null,e.createElement("line",{x1:"40",y1:"128",x2:"216",y2:"128",fill:"none",stroke:r,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),e.createElement("polyline",{points:"144 56 216 128 144 200",fill:"none",stroke:r,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});n.set("fill",function(){return e.createElement(e.Fragment,null,e.createElement("path",{d:"M221.7,133.7l-72,72A8.3,8.3,0,0,1,144,208a8.5,8.5,0,0,1-3.1-.6A8,8,0,0,1,136,200V136H40a8,8,0,0,1,0-16h96V56a8,8,0,0,1,4.9-7.4,8.4,8.4,0,0,1,8.8,1.7l72,72A8.1,8.1,0,0,1,221.7,133.7Z"}))});n.set("light",function(r){return e.createElement(e.Fragment,null,e.createElement("line",{x1:"40",y1:"128",x2:"216",y2:"128",fill:"none",stroke:r,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),e.createElement("polyline",{points:"144 56 216 128 144 200",fill:"none",stroke:r,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});n.set("thin",function(r){return e.createElement(e.Fragment,null,e.createElement("line",{x1:"40",y1:"128",x2:"216",y2:"128",fill:"none",stroke:r,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),e.createElement("polyline",{points:"144 56 216 128 144 200",fill:"none",stroke:r,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});n.set("regular",function(r){return e.createElement(e.Fragment,null,e.createElement("line",{x1:"40",y1:"128",x2:"216",y2:"128",fill:"none",stroke:r,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),e.createElement("polyline",{points:"144 56 216 128 144 200",fill:"none",stroke:r,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var N=function(u,M){return V(u,M,n)},_=H.forwardRef(function(r,u){return e.createElement(O,Object.assign({ref:u},r,{renderPath:N}))});_.displayName="ArrowRight";const Z=_,Q={title:"Form/Button",component:C,args:{variant:"primary",size:"md",disabled:!1},argTypes:{variant:{options:["primary","secondary","tertiary"],control:{type:"inline-radio"}},size:{options:["sm","md"],control:{type:"inline-radio"}},disabled:{control:{type:"boolean"}},onClick:{action:"click"}}},t={args:{children:"Default Button"}},a={args:{children:"Disabled",disabled:!0}},o={args:{children:m.jsxs(m.Fragment,{children:["With Icon",m.jsx(Z,{})]})}},s={args:{variant:"secondary",children:"Secondary"}},i={args:{variant:"secondary",children:"Secondary - Disable",disabled:!0}},c={args:{variant:"tertiary",children:"Tertiary"}},l={args:{variant:"tertiary",children:"Tertiary - Disable",disabled:!0}},d={args:{size:"sm",children:"Small"}};var p,y,h;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    children: 'Default Button'
  }
}`,...(h=(y=t.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};var g,k,f;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    children: 'Disabled',
    disabled: true
  }
}`,...(f=(k=a.parameters)==null?void 0:k.docs)==null?void 0:f.source}}};var b,E,L;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    children: <>
        With Icon
        <ArrowRight />
      </>
  }
}`,...(L=(E=o.parameters)==null?void 0:E.docs)==null?void 0:L.source}}};var S,x,D;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    children: 'Secondary'
  }
}`,...(D=(x=s.parameters)==null?void 0:x.docs)==null?void 0:D.source}}};var W,j,v;i.parameters={...i.parameters,docs:{...(W=i.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    children: 'Secondary - Disable',
    disabled: true
  }
}`,...(v=(j=i.parameters)==null?void 0:j.docs)==null?void 0:v.source}}};var F,T,R;c.parameters={...c.parameters,docs:{...(F=c.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    variant: 'tertiary',
    children: 'Tertiary'
  }
}`,...(R=(T=c.parameters)==null?void 0:T.docs)==null?void 0:R.source}}};var A,B,w;l.parameters={...l.parameters,docs:{...(A=l.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    variant: 'tertiary',
    children: 'Tertiary - Disable',
    disabled: true
  }
}`,...(w=(B=l.parameters)==null?void 0:B.docs)==null?void 0:w.source}}};var I,z,P;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    size: 'sm',
    children: 'Small'
  }
}`,...(P=(z=d.parameters)==null?void 0:z.docs)==null?void 0:P.source}}};const U=["Default","Disable","WithIcon","Secondary","SecondaryDisable","Tertiary","TertiaryDisable","Small"];export{t as Default,a as Disable,s as Secondary,i as SecondaryDisable,d as Small,c as Tertiary,l as TertiaryDisable,o as WithIcon,U as __namedExportsOrder,Q as default};
//# sourceMappingURL=Button.stories-f78e6e92.js.map
