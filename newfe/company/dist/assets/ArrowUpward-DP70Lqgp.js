import{f as _,h as R,k as b,s as S,_ as o,l as U,m as p,b as j,n as $,o as A,j as C,p as M,q,r as X,i as E}from"./index-bNFdBwd3.js";function L(t){return String(t).match(/[\d.\-+]*\s*(.*)/)[1]||""}function N(t){return parseFloat(t)}function P(t){return _("MuiSkeleton",t)}R("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);const V=["animation","className","component","height","style","variant","width"];let s=t=>t,f,g,m,v;const B=t=>{const{classes:e,variant:a,animation:i,hasChildren:r,width:l,height:n}=t;return q({root:["root",a,i,r&&"withChildren",r&&!l&&"fitContent",r&&!n&&"heightAuto"]},P,e)},D=b(f||(f=s`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`)),F=b(g||(g=s`
  0% {
    transform: translateX(-100%);
  }

  50% {
    /* +0.5s of delay between each loop */
    transform: translateX(100%);
  }

  100% {
    transform: translateX(100%);
  }
`)),I=S("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:a}=t;return[e.root,e[a.variant],a.animation!==!1&&e[a.animation],a.hasChildren&&e.withChildren,a.hasChildren&&!a.width&&e.fitContent,a.hasChildren&&!a.height&&e.heightAuto]}})(({theme:t,ownerState:e})=>{const a=L(t.shape.borderRadius)||"px",i=N(t.shape.borderRadius);return o({display:"block",backgroundColor:t.vars?t.vars.palette.Skeleton.bg:U(t.palette.text.primary,t.palette.mode==="light"?.11:.13),height:"1.2em"},e.variant==="text"&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${i}${a}/${Math.round(i/.6*10)/10}${a}`,"&:empty:before":{content:'"\\00a0"'}},e.variant==="circular"&&{borderRadius:"50%"},e.variant==="rounded"&&{borderRadius:(t.vars||t).shape.borderRadius},e.hasChildren&&{"& > *":{visibility:"hidden"}},e.hasChildren&&!e.width&&{maxWidth:"fit-content"},e.hasChildren&&!e.height&&{height:"auto"})},({ownerState:t})=>t.animation==="pulse"&&p(m||(m=s`
      animation: ${0} 2s ease-in-out 0.5s infinite;
    `),D),({ownerState:t,theme:e})=>t.animation==="wave"&&p(v||(v=s`
      position: relative;
      overflow: hidden;

      /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */
      -webkit-mask-image: -webkit-radial-gradient(white, black);

      &::after {
        animation: ${0} 2s linear 0.5s infinite;
        background: linear-gradient(
          90deg,
          transparent,
          ${0},
          transparent
        );
        content: '';
        position: absolute;
        transform: translateX(-100%); /* Avoid flash during server-side hydration */
        bottom: 0;
        left: 0;
        right: 0;
        top: 0;
      }
    `),F,(e.vars||e).palette.action.hover)),G=j.forwardRef(function(e,a){const i=$({props:e,name:"MuiSkeleton"}),{animation:r="pulse",className:l,component:n="span",height:h,style:k,variant:w="text",width:x}=i,u=A(i,V),c=o({},i,{animation:r,component:n,variant:w,hasChildren:!!u.children}),y=B(c);return C.jsx(I,o({as:n,ref:a,className:M(y.root,l),ownerState:c},u,{style:o({width:x,height:h},k)}))});var d={},K=E;Object.defineProperty(d,"__esModule",{value:!0});var O=d.default=void 0,T=K(X()),W=C;O=d.default=(0,T.default)((0,W.jsx)("path",{d:"m4 12 1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8z"}),"ArrowUpward");export{G as S,O as d};
