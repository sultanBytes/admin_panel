import{r as n,j as e}from"./index-CTYRllGZ.js";import{C as u,a as f}from"./CCardBody-Cb6U-Hpx.js";import{C as g}from"./CCardHeader-DU08Tavg.js";import{C as y}from"./CForm-B2vuSaoc.js";import{C as l}from"./CFormLabel-PYKEOFVD.js";import{C as t}from"./CFormInput-Dn5aZgN_.js";import{C as d}from"./CFormCheck-Bm7xSvTY.js";import{a as N}from"./index.es-D-0s3mKQ.js";import{C as v,a as S}from"./CProgress-BHFRCxra.js";import"./CFormControlWrapper-DJUfD9Rr.js";import"./DefaultLayout-iKHliWtL.js";import"./cil-envelope-open-DZEb6fPK.js";import"./cil-user-Ddrdy7PS.js";import"./cil-lock-locked-DmxpJbVL.js";function q(){const[i,p]=n.useState([]),[m,x]=n.useState(0),[o,c]=n.useState(""),h=a=>{const s=Array.from(a.target.files);p(s.map(r=>URL.createObjectURL(r))),c("")},j=a=>{if(a.preventDefault(),i.length===0){c("Please select at least one image to upload.");return}const s=100;let r=0;const C=setInterval(()=>{r+=10,x(r),r===s&&clearInterval(C)},200)};return e.jsx(e.Fragment,{children:e.jsxs(u,{className:"mb-4",children:[e.jsx(g,{className:"fw-800 fs-4",children:e.jsx("strong",{children:"Update Slider"})}),e.jsx(f,{children:e.jsxs(y,{children:[e.jsx(l,{className:"py-2",children:"Slider Name"}),e.jsx(t,{type:"text",className:"my-2",placeholder:"Slider Name",required:!0}),e.jsx(l,{className:"py-2",children:"Heading"}),e.jsx(t,{type:"text",className:"my-2",placeholder:"Heading"}),e.jsx(l,{className:"py-2",children:"Sub Heading"}),e.jsx(t,{type:"text",className:"my-2",placeholder:"Sub Heading"}),e.jsx(l,{className:"py-2",children:"Slider Images"}),e.jsx(t,{type:"file",className:"my-2",multiple:!0,onChange:h}),i.length>0&&e.jsxs("div",{className:"my-2",children:[e.jsx("h5",{children:"Image Previews:"}),e.jsx("div",{className:"d-flex flex-wrap",children:i.map((a,s)=>e.jsx("div",{className:"me-2 mb-2",children:e.jsx("img",{src:a,alt:`preview-${s}`,width:"100"})},s))})]}),o&&e.jsx("div",{className:"text-danger my-2",children:o}),e.jsxs("div",{className:"d-flex align-items-center",children:[e.jsx(l,{className:"py-2",children:"Status   :"}),e.jsxs("div",{className:"d-flex",children:[e.jsx(d,{className:"ms-3",type:"radio",name:"inlineRadioOptions",id:"inlineCheckbox1",value:"1",label:"Display"}),e.jsx(d,{className:"ms-3",type:"radio",name:"inlineRadioOptions",id:"inlineCheckbox2",value:"0",label:"Hide"})]})]}),e.jsx(N,{type:"submit",color:"primary",name:"save",onClick:j,children:"Update Slider"}),m>0&&e.jsx(v,{className:"my-3",children:e.jsxs(S,{color:"success",value:m,children:[m,"%"]})})]})})]})})}export{q as default};