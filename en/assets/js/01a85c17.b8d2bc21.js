"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[13],{1223:(e,t,a)=>{a.r(t),a.d(t,{default:()=>E});var l=a(7294),r=a(6010),n=a(5999);var s=a(1944),c=a(5281),m=a(9058),i=a(3008);const g="tag_Nnez";function o(e){let{letterEntry:t}=e;return l.createElement("article",null,l.createElement("h2",null,t.letter),l.createElement("ul",{className:"padding--none"},t.tags.map((e=>l.createElement("li",{key:e.permalink,className:g},l.createElement(i.Z,e))))),l.createElement("hr",null))}function u(e){let{tags:t}=e;const a=function(e){const t={};return Object.values(e).forEach((e=>{const a=function(e){return e[0].toUpperCase()}(e.label);t[a]??=[],t[a].push(e)})),Object.entries(t).sort(((e,t)=>{let[a]=e,[l]=t;return a.localeCompare(l)})).map((e=>{let[t,a]=e;return{letter:t,tags:a.sort(((e,t)=>e.label.localeCompare(t.label)))}}))}(t);return l.createElement("section",{className:"margin-vert--lg"},a.map((e=>l.createElement(o,{key:e.letter,letterEntry:e}))))}var p=a(197);function E(e){let{tags:t,sidebar:a}=e;const i=(0,n.I)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"});return l.createElement(s.FG,{className:(0,r.Z)(c.k.wrapper.blogPages,c.k.page.blogTagsListPage)},l.createElement(s.d,{title:i}),l.createElement(p.Z,{tag:"blog_tags_list"}),l.createElement(m.Z,{sidebar:a},l.createElement("h1",null,i),l.createElement(u,{tags:t})))}}}]);