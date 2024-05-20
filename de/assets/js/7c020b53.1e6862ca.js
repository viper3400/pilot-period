"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3166],{6205:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>d});var a=n(5893),o=n(1151);const s={slug:"normal-flaky-tests",title:"Normal Flaky Tests",authors:["jang"],tags:["testing","automation"]},r=void 0,i={permalink:"/de/normal-flaky-tests",source:"@site/blog/2024-05-20-normal-flaky-tests.mdx",title:"Normal Flaky Tests",description:"Imagine a tightrope walker blaming their safety net for a fall \u2014 retrying, hoping the net won't",date:"2024-05-20T00:00:00.000Z",tags:[{label:"testing",permalink:"/de/tags/testing"},{label:"automation",permalink:"/de/tags/automation"}],readingTime:2.885,hasTruncateMarker:!1,authors:[{name:"Jan Graefe",title:"Autor",url:"https://jangraefe.de",imageURL:"img/jan.jpg",key:"jang"}],frontMatter:{slug:"normal-flaky-tests",title:"Normal Flaky Tests",authors:["jang"],tags:["testing","automation"]},unlisted:!1,nextItem:{title:"Serenity/JS and Actor Notepads for Injecting User Credentials",permalink:"/de/sjs-actors-notepad"}},l={authorsImageUrls:[void 0]},d=[{value:"Learn more about your application under test",id:"learn-more-about-your-application-under-test",level:2},{value:"Learn more about your test environment",id:"learn-more-about-your-test-environment",level:2},{value:"Learn more about your test automation framework",id:"learn-more-about-your-test-automation-framework",level:2},{value:"Learn more about your tests",id:"learn-more-about-your-tests",level:2},{value:"Learn how to fix it",id:"learn-how-to-fix-it",level:2},{value:"Conclusion",id:"conclusion",level:2}];function h(e){const t={a:"a",blockquote:"blockquote",em:"em",h2:"h2",img:"img",p:"p",strong:"strong",...(0,o.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:'Imagine a tightrope walker blaming their safety net for a fall \u2014 retrying, hoping the net won\'t\ncatch them the second time, or worse, removing it altogether. Sounds absurd, right?\nYet, in software testing, we often treat "flaky tests" with the same flawed logic.'})}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"Something I read recently in a chat when one of the so called e2e tests failed:"}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:'Was it just a "normal flaky test"?'}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.em,{children:'"normal" first step'})," is to retry the failed test,\nhope that it pass, then go on - and probably cheer automation tools that support retrying\nfailed tests for x times before declaring them as failed."]}),"\n",(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.em,{children:'"normal" second step'})," is to disable this tests to get the build green."]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"tightrope walker",src:n(5922).Z+"",width:"1024",height:"1024"})}),"\n",(0,a.jsx)(t.p,{children:'When software people refer to tests as their "saftey net", then I start to wonder the situation,\nif they were tightrope walkers. Imagine a situation that you made mistakenly a step a side and fall\ndown into the saftey net - would you act like in the situation I described above?'}),"\n",(0,a.jsx)(t.p,{children:"Retry again - hope that the net won't catch you the 2nd or 3rd time? Remove the net, because it was\nobvoiusly the net's fault you made the wrong step."}),"\n",(0,a.jsx)(t.p,{children:"Okay, don't let us be to metaphorical and I don't want to elaborate about the reasons\nbehind flaky tests. There was enough stuff written about that\n(a lot of good and a lot of bad stuff)."}),"\n",(0,a.jsxs)(t.p,{children:["One good collection of reasons that is a bit aged but I can still relate to:\n",(0,a.jsx)(t.a,{href:"https://testing.googleblog.com/2020/12/test-flakiness-one-of-main-challenges.html",children:"https://testing.googleblog.com/2020/12/test-flakiness-one-of-main-challenges.html"})]}),"\n",(0,a.jsx)(t.p,{children:'So today I just like to remind you about some skills to learn to avoid "normal flaky tests":'}),"\n",(0,a.jsx)(t.h2,{id:"learn-more-about-your-application-under-test",children:"Learn more about your application under test"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Understand application behavior and interactions:"})," Deep dive into how your application behaves, especially in edge cases."]}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Handle asynchronous operations:"})," Ensure you understand and properly handle asynchronous operations within the application."]}),"\n",(0,a.jsx)(t.h2,{id:"learn-more-about-your-test-environment",children:"Learn more about your test environment"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Manage test data consistently:"})," Ensure your tests have reliable and consistent data to work with, avoiding fluctuations that cause flakiness."]}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Maintain environmental consistency:"})," Ensure that your test environments are consistent and reflect the production environment as closely as possible."]}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Ensure network stability and handling:"})," Understand how to manage and mitigate network instability that could affect your tests."]}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Implement robust error handling:"})," Develop robust error handling to manage unexpected issues gracefully."]}),"\n",(0,a.jsx)(t.h2,{id:"learn-more-about-your-test-automation-framework",children:"Learn more about your test automation framework"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Understand parallel execution:"})," Learn how your test framework handles parallel execution and manage shared resources to avoid conflicts."]}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Manage timeouts and synchronization:"})," Configure proper timeouts and synchronization mechanisms to handle asynchronous operations effectively."]}),"\n",(0,a.jsx)(t.h2,{id:"learn-more-about-your-tests",children:"Learn more about your tests"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Isolate tests:"})," Ensure that tests are isolated and independent, avoiding interdependencies that could cause cascading failures."]}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Test data management:"})," Develop strategies for consistent and reliable test data management to avoid flaky results."]}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Error handling in tests:"})," Implement robust error handling within your tests to manage unexpected issues gracefully."]}),"\n",(0,a.jsx)(t.h2,{id:"learn-how-to-fix-it",children:"Learn how to fix it"}),"\n",(0,a.jsx)(t.p,{children:"Finally, learn how to identify the root of your issues within the knowledge fields above,\nlearn how to fix them - and then - just fix them!"}),"\n",(0,a.jsx)(t.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,a.jsx)(t.p,{children:'Implementing these strategies to avoid "normal flaky tests" requires effort and isn\'t free of challenges.\nHowever, the investment in learning about your application, test environment, test automation framework,\nand tests themselves pays off significantly. By addressing the root causes of flakiness, you can improve\nthe reliability and robustness of your tests, ultimately enhancing the overall quality of your software.'})]})}function u(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},5922:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/tightrope-walker-8f2e808982d52da4c8fb47d40cc6d183.jpg"},1151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>r});var a=n(7294);const o={},s=a.createContext(o);function r(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);