"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[71],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=c(n),f=r,g=m["".concat(l,".").concat(f)]||m[f]||p[f]||o;return n?a.createElement(g,s(s({ref:t},u),{},{components:n})):a.createElement(g,s({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9146:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const o={slug:"automation-vs-test-tool",title:"Automation vs. Testframework",authors:["jang"],tags:["testing","automation","serenity-js"]},s=void 0,i={permalink:"/automation-vs-test-tool",source:"@site/blog/2022-11-12-automation-vs-test-tool.mdx",title:"Automation vs. Testframework",description:"In the discussion about the right framework for the automatic execution of tests",date:"2022-11-12T00:00:00.000Z",formattedDate:"November 12, 2022",tags:[{label:"testing",permalink:"/tags/testing"},{label:"automation",permalink:"/tags/automation"},{label:"serenity-js",permalink:"/tags/serenity-js"}],readingTime:1.125,hasTruncateMarker:!1,authors:[{name:"Jan Graefe",title:"Maintainer",url:"https://jangraefe.de",imageURL:"https://static.vecteezy.com/system/resources/thumbnails/006/487/917/small_2x/man-avatar-icon-free-vector.jpg",key:"jang"}],frontMatter:{slug:"automation-vs-test-tool",title:"Automation vs. Testframework",authors:["jang"],tags:["testing","automation","serenity-js"]}},l={authorsImageUrls:[void 0]},c=[],u={toc:c};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In the discussion about the right framework for the automatic execution of tests\nfor web applications can quickly lead to clashes. It is indicative of this\nthat it is often about the technical aspects of a framework or tool.\nThe more heated the discussion, the more the aspect of testing slips into the background.\nLet's take a buzzword and take it apart: ",(0,r.kt)("strong",{parentName:"p"},"Test automation"),".\nThis word consists of the Share ",(0,r.kt)("strong",{parentName:"p"},"Test")," and ",(0,r.kt)("strong",{parentName:"p"},"Automation"),".\nLet's take a look at an example. We have a number of d\u2202irectories.\nWe look for files in these directories.\nIs a file older than 60 days, we delete them. The code in an automation script might look like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"var folders = [ 'pictures', 'documents', 'desktop' ];\n\nforeach(folder in folders) {\n    var files = folder.getFiles();\n    foreach (file in files) {\n        var fileAge = file.getAge();\n        if (fileAge > Days(60))\n          delete(file)\n    }\n}\n")),(0,r.kt)("p",null,"So we have automated the deletion of old files. But have we ",(0,r.kt)("strong",{parentName:"p"},"tested")," that the files have been deleted? Let's move on to ",(0,r.kt)("strong",{parentName:"p"},"Browser Automation"),". Here, too, we have a Automation job: Open a search engine and find how to needs to boil an egg."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"var webpage = browser.getUrl('https://duckduckgo.com');\n\nwebpage.enterSearchValue('how to boil an egg');\nwebpage.click(searchButton);\n\n")),(0,r.kt)("p",null,"Again: We have the search ",(0,r.kt)("strong",{parentName:"p"},"automated"),"t, ",(0,r.kt)("strong",{parentName:"p"},"not")," but the search result ",(0,r.kt)("strong",{parentName:"p"},"checked"),". So we don't know if our search actually worked."))}p.isMDXComponent=!0}}]);