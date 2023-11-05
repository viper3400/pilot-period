(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[592],{9047:(e,t,n)=>{"use strict";n.d(t,{Z:()=>_});var s=n(7294),o=n(5893);function i(e){const{mdxAdmonitionTitle:t,rest:n}=function(e){const t=s.Children.toArray(e),n=t.find((e=>s.isValidElement(e)&&"mdxAdmonitionTitle"===e.type)),i=t.filter((e=>e!==n)),a=n?.props.children;return{mdxAdmonitionTitle:a,rest:i.length>0?(0,o.jsx)(o.Fragment,{children:i}):null}}(e.children),i=e.title??t;return{...e,...i&&{title:i},children:n}}var a=n(4334),c=n(5999),r=n(5281);const l={admonition:"admonition_xJq3",admonitionHeading:"admonitionHeading_Gvgb",admonitionIcon:"admonitionIcon_Rf37",admonitionContent:"admonitionContent_BuS1"};function d(e){let{type:t,className:n,children:s}=e;return(0,o.jsx)("div",{className:(0,a.Z)(r.k.common.admonition,r.k.common.admonitionType(t),l.admonition,n),children:s})}function u(e){let{icon:t,title:n}=e;return(0,o.jsxs)("div",{className:l.admonitionHeading,children:[(0,o.jsx)("span",{className:l.admonitionIcon,children:t}),n]})}function m(e){let{children:t}=e;return t?(0,o.jsx)("div",{className:l.admonitionContent,children:t}):null}function h(e){const{type:t,icon:n,title:s,children:i,className:a}=e;return(0,o.jsxs)(d,{type:t,className:a,children:[(0,o.jsx)(u,{title:s,icon:n}),(0,o.jsx)(m,{children:i})]})}function p(e){return(0,o.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,o.jsx)("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})})}const f={icon:(0,o.jsx)(p,{}),title:(0,o.jsx)(c.Z,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)",children:"note"})};function b(e){return(0,o.jsx)(h,{...f,...e,className:(0,a.Z)("alert alert--secondary",e.className),children:e.children})}function g(e){return(0,o.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,o.jsx)("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})})}const x={icon:(0,o.jsx)(g,{}),title:(0,o.jsx)(c.Z,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)",children:"tip"})};function j(e){return(0,o.jsx)(h,{...x,...e,className:(0,a.Z)("alert alert--success",e.className),children:e.children})}function v(e){return(0,o.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,o.jsx)("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})})}const N={icon:(0,o.jsx)(v,{}),title:(0,o.jsx)(c.Z,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)",children:"info"})};function k(e){return(0,o.jsx)(h,{...N,...e,className:(0,a.Z)("alert alert--info",e.className),children:e.children})}function y(e){return(0,o.jsx)("svg",{viewBox:"0 0 16 16",...e,children:(0,o.jsx)("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})})}const C={icon:(0,o.jsx)(y,{}),title:(0,o.jsx)(c.Z,{id:"theme.admonition.warning",description:"The default label used for the Warning admonition (:::warning)",children:"warning"})};function B(e){return(0,o.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,o.jsx)("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})})}const w={icon:(0,o.jsx)(B,{}),title:(0,o.jsx)(c.Z,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)",children:"danger"})};const L={icon:(0,o.jsx)(y,{}),title:(0,o.jsx)(c.Z,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)",children:"caution"})};const Z={...{note:b,tip:j,info:k,warning:function(e){return(0,o.jsx)(h,{...C,...e,className:(0,a.Z)("alert alert--warning",e.className),children:e.children})},danger:function(e){return(0,o.jsx)(h,{...w,...e,className:(0,a.Z)("alert alert--danger",e.className),children:e.children})}},...{secondary:e=>(0,o.jsx)(b,{title:"secondary",...e}),important:e=>(0,o.jsx)(k,{title:"important",...e}),success:e=>(0,o.jsx)(j,{title:"success",...e}),caution:function(e){return(0,o.jsx)(h,{...L,...e,className:(0,a.Z)("alert alert--warning",e.className),children:e.children})}}};function _(e){const t=i(e),n=(s=t.type,Z[s]||(console.warn(`No admonition component found for admonition type "${s}". Using Info as fallback.`),Z.info));var s;return(0,o.jsx)(n,{...t})}},7846:(e,t,n)=>{"use strict";n.d(t,{Z:()=>j});var s=n(7294),o=n(4334),i=n(7950),a=n(7524),c=n(9960),r=n(5999),l=n(6550),d=n(8596);function u(e){const{pathname:t}=(0,l.TH)();return(0,s.useMemo)((()=>e.filter((e=>function(e,t){return!(e.unlisted&&!(0,d.Mg)(e.permalink,t))}(e,t)))),[e,t])}const m={sidebar:"sidebar_re4s",sidebarItemTitle:"sidebarItemTitle_pO2u",sidebarItemList:"sidebarItemList_Yudw",sidebarItem:"sidebarItem__DBe",sidebarItemLink:"sidebarItemLink_mo7H",sidebarItemLinkActive:"sidebarItemLinkActive_I1ZP"};var h=n(5893);function p(e){let{sidebar:t}=e;const n=u(t.items);return(0,h.jsx)("aside",{className:"col col--3",children:(0,h.jsxs)("nav",{className:(0,o.Z)(m.sidebar,"thin-scrollbar"),"aria-label":(0,r.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"}),children:[(0,h.jsx)("div",{className:(0,o.Z)(m.sidebarItemTitle,"margin-bottom--md"),children:t.title}),(0,h.jsx)("ul",{className:(0,o.Z)(m.sidebarItemList,"clean-list"),children:n.map((e=>(0,h.jsx)("li",{className:m.sidebarItem,children:(0,h.jsx)(c.Z,{isNavLink:!0,to:e.permalink,className:m.sidebarItemLink,activeClassName:m.sidebarItemLinkActive,children:e.title})},e.permalink)))})]})})}var f=n(3102);function b(e){let{sidebar:t}=e;const n=u(t.items);return(0,h.jsx)("ul",{className:"menu__list",children:n.map((e=>(0,h.jsx)("li",{className:"menu__list-item",children:(0,h.jsx)(c.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active",children:e.title})},e.permalink)))})}function g(e){return(0,h.jsx)(f.Zo,{component:b,props:e})}function x(e){let{sidebar:t}=e;const n=(0,a.i)();return t?.items.length?"mobile"===n?(0,h.jsx)(g,{sidebar:t}):(0,h.jsx)(p,{sidebar:t}):null}function j(e){const{sidebar:t,toc:n,children:s,...a}=e,c=t&&t.items.length>0;return(0,h.jsx)(i.Z,{...a,children:(0,h.jsx)("div",{className:"container margin-vert--lg",children:(0,h.jsxs)("div",{className:"row",children:[(0,h.jsx)(x,{sidebar:t}),(0,h.jsx)("main",{className:(0,o.Z)("col",{"col--7":c,"col--9 col--offset-1":!c}),itemScope:!0,itemType:"https://schema.org/Blog",children:s}),n&&(0,h.jsx)("div",{className:"col col--2",children:n})]})})})}},2196:(e,t,n)=>{"use strict";n.d(t,{Z:()=>ie});var s=n(7294),o=n(1151),i=n(5742),a=n(2389),c=n(4334),r=n(2949),l=n(6668);function d(){const{prism:e}=(0,l.L)(),{colorMode:t}=(0,r.I)(),n=e.theme,s=e.darkTheme||n;return"dark"===t?s:n}var u=n(5281),m=n(7594),h=n.n(m);const p=/title=(?<quote>["'])(?<title>.*?)\1/,f=/\{(?<range>[\d,-]+)\}/,b={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"},lua:{start:"--",end:""},wasm:{start:"\\;\\;",end:""},tex:{start:"%",end:""}};function g(e,t){const n=e.map((e=>{const{start:n,end:s}=b[e];return`(?:${n}\\s*(${t.flatMap((e=>[e.line,e.block?.start,e.block?.end].filter(Boolean))).join("|")})\\s*${s})`})).join("|");return new RegExp(`^\\s*(?:${n})\\s*$`)}function x(e,t){let n=e.replace(/\n$/,"");const{language:s,magicComments:o,metastring:i}=t;if(i&&f.test(i)){const e=i.match(f).groups.range;if(0===o.length)throw new Error(`A highlight range has been given in code block's metastring (\`\`\` ${i}), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.`);const t=o[0].className,s=h()(e).filter((e=>e>0)).map((e=>[e-1,[t]]));return{lineClassNames:Object.fromEntries(s),code:n}}if(void 0===s)return{lineClassNames:{},code:n};const a=function(e,t){switch(e){case"js":case"javascript":case"ts":case"typescript":return g(["js","jsBlock"],t);case"jsx":case"tsx":return g(["js","jsBlock","jsx"],t);case"html":return g(["js","jsBlock","html"],t);case"python":case"py":case"bash":return g(["bash"],t);case"markdown":case"md":return g(["html","jsx","bash"],t);case"tex":case"latex":case"matlab":return g(["tex"],t);case"lua":case"haskell":case"sql":return g(["lua"],t);case"wasm":return g(["wasm"],t);default:return g(Object.keys(b).filter((e=>!["lua","wasm","tex","latex","matlab"].includes(e))),t)}}(s,o),c=n.split("\n"),r=Object.fromEntries(o.map((e=>[e.className,{start:0,range:""}]))),l=Object.fromEntries(o.filter((e=>e.line)).map((e=>{let{className:t,line:n}=e;return[n,t]}))),d=Object.fromEntries(o.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.start,t]}))),u=Object.fromEntries(o.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.end,t]})));for(let h=0;h<c.length;){const e=c[h].match(a);if(!e){h+=1;continue}const t=e.slice(1).find((e=>void 0!==e));l[t]?r[l[t]].range+=`${h},`:d[t]?r[d[t]].start=h:u[t]&&(r[u[t]].range+=`${r[u[t]].start}-${h-1},`),c.splice(h,1)}n=c.join("\n");const m={};return Object.entries(r).forEach((e=>{let[t,{range:n}]=e;h()(n).forEach((e=>{m[e]??=[],m[e].push(t)}))})),{lineClassNames:m,code:n}}const j={codeBlockContainer:"codeBlockContainer_Ckt0"};var v=n(5893);function N(e){let{as:t,...n}=e;const s=function(e){const t={color:"--prism-color",backgroundColor:"--prism-background-color"},n={};return Object.entries(e.plain).forEach((e=>{let[s,o]=e;const i=t[s];i&&"string"==typeof o&&(n[i]=o)})),n}(d());return(0,v.jsx)(t,{...n,style:s,className:(0,c.Z)(n.className,j.codeBlockContainer,u.k.common.codeBlock)})}const k={codeBlockContent:"codeBlockContent_biex",codeBlockTitle:"codeBlockTitle_Ktv7",codeBlock:"codeBlock_bY9V",codeBlockStandalone:"codeBlockStandalone_MEMb",codeBlockLines:"codeBlockLines_e6Vv",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_o6Pm",buttonGroup:"buttonGroup__atx"};function y(e){let{children:t,className:n}=e;return(0,v.jsx)(N,{as:"pre",tabIndex:0,className:(0,c.Z)(k.codeBlockStandalone,"thin-scrollbar",n),children:(0,v.jsx)("code",{className:k.codeBlockLines,children:t})})}var C=n(902);const B={attributes:!0,characterData:!0,childList:!0,subtree:!0};function w(e,t){const[n,o]=(0,s.useState)(),i=(0,s.useCallback)((()=>{o(e.current?.closest("[role=tabpanel][hidden]"))}),[e,o]);(0,s.useEffect)((()=>{i()}),[i]),function(e,t,n){void 0===n&&(n=B);const o=(0,C.zX)(t),i=(0,C.Ql)(n);(0,s.useEffect)((()=>{const t=new MutationObserver(o);return e&&t.observe(e,i),()=>t.disconnect()}),[e,o,i])}(n,(e=>{e.forEach((e=>{"attributes"===e.type&&"hidden"===e.attributeName&&(t(),i())}))}),{attributes:!0,characterData:!1,childList:!1,subtree:!1})}var L=n(4798);const Z={codeLine:"codeLine_lJS_",codeLineNumber:"codeLineNumber_Tfdd",codeLineContent:"codeLineContent_feaV"};function _(e){let{line:t,classNames:n,showLineNumbers:s,getLineProps:o,getTokenProps:i}=e;1===t.length&&"\n"===t[0].content&&(t[0].content="");const a=o({line:t,className:(0,c.Z)(n,s&&Z.codeLine)}),r=t.map(((e,t)=>(0,v.jsx)("span",{...i({token:e,key:t})},t)));return(0,v.jsxs)("span",{...a,children:[s?(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)("span",{className:Z.codeLineNumber}),(0,v.jsx)("span",{className:Z.codeLineContent,children:r})]}):r,(0,v.jsx)("br",{})]})}var I=n(5999);function E(e){return(0,v.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,v.jsx)("path",{fill:"currentColor",d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})})}function T(e){return(0,v.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,v.jsx)("path",{fill:"currentColor",d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"})})}const A={copyButtonCopied:"copyButtonCopied_obH4",copyButtonIcons:"copyButtonIcons_eSgA",copyButtonIcon:"copyButtonIcon_y97N",copyButtonSuccessIcon:"copyButtonSuccessIcon_LjdS"};function S(e){let{code:t,className:n}=e;const[o,i]=(0,s.useState)(!1),a=(0,s.useRef)(void 0),r=(0,s.useCallback)((()=>{!function(e,t){let{target:n=document.body}=void 0===t?{}:t;if("string"!=typeof e)throw new TypeError(`Expected parameter \`text\` to be a \`string\`, got \`${typeof e}\`.`);const s=document.createElement("textarea"),o=document.activeElement;s.value=e,s.setAttribute("readonly",""),s.style.contain="strict",s.style.position="absolute",s.style.left="-9999px",s.style.fontSize="12pt";const i=document.getSelection(),a=i.rangeCount>0&&i.getRangeAt(0);n.append(s),s.select(),s.selectionStart=0,s.selectionEnd=e.length;let c=!1;try{c=document.execCommand("copy")}catch{}s.remove(),a&&(i.removeAllRanges(),i.addRange(a)),o&&o.focus()}(t),i(!0),a.current=window.setTimeout((()=>{i(!1)}),1e3)}),[t]);return(0,s.useEffect)((()=>()=>window.clearTimeout(a.current)),[]),(0,v.jsx)("button",{type:"button","aria-label":o?(0,I.I)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,I.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,I.I)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,c.Z)("clean-btn",n,A.copyButton,o&&A.copyButtonCopied),onClick:r,children:(0,v.jsxs)("span",{className:A.copyButtonIcons,"aria-hidden":"true",children:[(0,v.jsx)(E,{className:A.copyButtonIcon}),(0,v.jsx)(T,{className:A.copyButtonSuccessIcon})]})})}function M(e){return(0,v.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,v.jsx)("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})})}const z={wordWrapButtonIcon:"wordWrapButtonIcon_Bwma",wordWrapButtonEnabled:"wordWrapButtonEnabled_EoeP"};function H(e){let{className:t,onClick:n,isEnabled:s}=e;const o=(0,I.I)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return(0,v.jsx)("button",{type:"button",onClick:n,className:(0,c.Z)("clean-btn",t,s&&z.wordWrapButtonEnabled),"aria-label":o,title:o,children:(0,v.jsx)(M,{className:z.wordWrapButtonIcon,"aria-hidden":"true"})})}function R(e){let{children:t,className:n="",metastring:o,title:i,showLineNumbers:a,language:r}=e;const{prism:{defaultLanguage:u,magicComments:m}}=(0,l.L)(),h=function(e){return e?.toLowerCase()}(r??function(e){const t=e.split(" ").find((e=>e.startsWith("language-")));return t?.replace(/language-/,"")}(n)??u),f=d(),b=function(){const[e,t]=(0,s.useState)(!1),[n,o]=(0,s.useState)(!1),i=(0,s.useRef)(null),a=(0,s.useCallback)((()=>{const n=i.current.querySelector("code");e?n.removeAttribute("style"):(n.style.whiteSpace="pre-wrap",n.style.overflowWrap="anywhere"),t((e=>!e))}),[i,e]),c=(0,s.useCallback)((()=>{const{scrollWidth:e,clientWidth:t}=i.current,n=e>t||i.current.querySelector("code").hasAttribute("style");o(n)}),[i]);return w(i,c),(0,s.useEffect)((()=>{c()}),[e,c]),(0,s.useEffect)((()=>(window.addEventListener("resize",c,{passive:!0}),()=>{window.removeEventListener("resize",c)})),[c]),{codeBlockRef:i,isEnabled:e,isCodeScrollable:n,toggle:a}}(),g=function(e){return e?.match(p)?.groups.title??""}(o)||i,{lineClassNames:j,code:y}=x(t,{metastring:o,language:h,magicComments:m}),C=a??function(e){return Boolean(e?.includes("showLineNumbers"))}(o);return(0,v.jsxs)(N,{as:"div",className:(0,c.Z)(n,h&&!n.includes(`language-${h}`)&&`language-${h}`),children:[g&&(0,v.jsx)("div",{className:k.codeBlockTitle,children:g}),(0,v.jsxs)("div",{className:k.codeBlockContent,children:[(0,v.jsx)(L.y$,{theme:f,code:y,language:h??"text",children:e=>{let{className:t,style:n,tokens:s,getLineProps:o,getTokenProps:i}=e;return(0,v.jsx)("pre",{tabIndex:0,ref:b.codeBlockRef,className:(0,c.Z)(t,k.codeBlock,"thin-scrollbar"),style:n,children:(0,v.jsx)("code",{className:(0,c.Z)(k.codeBlockLines,C&&k.codeBlockLinesWithNumbering),children:s.map(((e,t)=>(0,v.jsx)(_,{line:e,getLineProps:o,getTokenProps:i,classNames:j[t],showLineNumbers:C},t)))})})}}),(0,v.jsxs)("div",{className:k.buttonGroup,children:[(b.isEnabled||b.isCodeScrollable)&&(0,v.jsx)(H,{className:k.codeButton,onClick:()=>b.toggle(),isEnabled:b.isEnabled}),(0,v.jsx)(S,{className:k.codeButton,code:y})]})]})]})}function V(e){let{children:t,...n}=e;const o=(0,a.Z)(),i=function(e){return s.Children.toArray(e).some((e=>(0,s.isValidElement)(e)))?e:Array.isArray(e)?e.join(""):e}(t),c="string"==typeof i?R:y;return(0,v.jsx)(c,{...n,children:i},String(o))}var W=n(9960);var $=n(7459),P=n(7186);const D={details:"details_lb9f",isBrowser:"isBrowser_bmU9",collapsibleContent:"collapsibleContent_i85q"};function O(e){return!!e&&("SUMMARY"===e.tagName||O(e.parentElement))}function q(e,t){return!!e&&(e===t||q(e.parentElement,t))}function F(e){let{summary:t,children:n,...o}=e;const i=(0,a.Z)(),c=(0,s.useRef)(null),{collapsed:r,setCollapsed:l}=(0,P.u)({initialState:!o.open}),[d,u]=(0,s.useState)(o.open),m=s.isValidElement(t)?t:(0,v.jsx)("summary",{children:t??"Details"});return(0,v.jsxs)("details",{...o,ref:c,open:d,"data-collapsed":r,className:(0,$.Z)(D.details,i&&D.isBrowser,o.className),onMouseDown:e=>{O(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const t=e.target;O(t)&&q(t,c.current)&&(e.preventDefault(),r?(l(!1),u(!0)):l(!0))},children:[m,(0,v.jsx)(P.z,{lazy:!1,collapsed:r,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{l(e),u(!e)},children:(0,v.jsx)("div",{className:D.collapsibleContent,children:n})})]})}const G={details:"details_b_Ee"},U="alert alert--info";function Y(e){let{...t}=e;return(0,v.jsx)(F,{...t,className:(0,c.Z)(U,G.details,t.className)})}function J(e){const t=s.Children.toArray(e.children),n=t.find((e=>s.isValidElement(e)&&"summary"===e.type)),o=(0,v.jsx)(v.Fragment,{children:t.filter((e=>e!==n))});return(0,v.jsx)(Y,{...e,summary:n,children:o})}var K=n(2503);function Q(e){return(0,v.jsx)(K.Z,{...e})}const X={containsTaskList:"containsTaskList_mC6p"};function ee(e){if(void 0!==e)return(0,c.Z)(e,e?.includes("contains-task-list")&&X.containsTaskList)}const te={img:"img_ev3q"};var ne=n(9047),se=n(1875);const oe={Head:i.Z,details:J,Details:J,code:function(e){return s.Children.toArray(e.children).every((e=>"string"==typeof e&&!e.includes("\n")))?(0,v.jsx)("code",{...e}):(0,v.jsx)(V,{...e})},a:function(e){return(0,v.jsx)(W.Z,{...e})},pre:function(e){return(0,v.jsx)(v.Fragment,{children:e.children})},ul:function(e){return(0,v.jsx)("ul",{...e,className:ee(e.className)})},img:function(e){return(0,v.jsx)("img",{loading:"lazy",...e,className:(t=e.className,(0,c.Z)(t,te.img))});var t},h1:e=>(0,v.jsx)(Q,{as:"h1",...e}),h2:e=>(0,v.jsx)(Q,{as:"h2",...e}),h3:e=>(0,v.jsx)(Q,{as:"h3",...e}),h4:e=>(0,v.jsx)(Q,{as:"h4",...e}),h5:e=>(0,v.jsx)(Q,{as:"h5",...e}),h6:e=>(0,v.jsx)(Q,{as:"h6",...e}),admonition:ne.Z,mermaid:se.Z};function ie(e){let{children:t}=e;return(0,v.jsx)(o.Z,{components:oe,children:t})}},3008:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});n(7294);var s=n(4334),o=n(9960);const i={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};var a=n(5893);function c(e){let{permalink:t,label:n,count:c}=e;return(0,a.jsxs)(o.Z,{href:t,className:(0,s.Z)(i.tag,c?i.tagWithCount:i.tagRegular),children:[n,c&&(0,a.jsx)("span",{children:c})]})}},7594:(e,t)=>{function n(e){let t,n=[];for(let s of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(s))n.push(parseInt(s,10));else if(t=s.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,s,o,i]=t;if(s&&i){s=parseInt(s),i=parseInt(i);const e=s<i?1:-1;"-"!==o&&".."!==o&&"\u2025"!==o||(i+=e);for(let t=s;t!==i;t+=e)n.push(t)}}return n}t.default=n,e.exports=n},1151:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c,a:()=>a});var s=n(7294);const o={},i=s.createContext(o);function a(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);