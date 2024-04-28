"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1113],{2848:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var s=n(5893),i=n(1151);const r={slug:"sjs-visual-wdio",title:"Level Up Your Serenity/JS Tests with WDIO Visual Regression Testing",authors:["jang"],tags:["testing","automation","serenity-js","hands-on","WDIO","visual-regression"]},o=void 0,a={permalink:"/de/sjs-visual-wdio",source:"@site/blog/2024-03-24-sjs-visual-wdio.mdx",title:"Level Up Your Serenity/JS Tests with WDIO Visual Regression Testing",description:"Don't let visual bugs slip through! Learn how to quickly add WDIO visual regression testing to your Serenity/JS project.",date:"2024-03-24T00:00:00.000Z",tags:[{label:"testing",permalink:"/de/tags/testing"},{label:"automation",permalink:"/de/tags/automation"},{label:"serenity-js",permalink:"/de/tags/serenity-js"},{label:"hands-on",permalink:"/de/tags/hands-on"},{label:"WDIO",permalink:"/de/tags/wdio"},{label:"visual-regression",permalink:"/de/tags/visual-regression"}],readingTime:3.105,hasTruncateMarker:!1,authors:[{name:"Jan Graefe",title:"Autor",url:"https://jangraefe.de",imageURL:"img/jan.jpg",key:"jang"}],frontMatter:{slug:"sjs-visual-wdio",title:"Level Up Your Serenity/JS Tests with WDIO Visual Regression Testing",authors:["jang"],tags:["testing","automation","serenity-js","hands-on","WDIO","visual-regression"]},unlisted:!1,prevItem:{title:"Serenity/JS and Actor Notepads for Injecting User Credentials",permalink:"/de/sjs-actors-notepad"},nextItem:{title:"Reuse Component Test Code with BDD Scenarios using Serenity/JS and Playwright",permalink:"/de/sjs-playwright-ct-cucumber"}},l={authorsImageUrls:[void 0]},c=[{value:"Setting Up the Project",id:"setting-up-the-project",level:2},{value:"Creating Custom Interactions",id:"creating-custom-interactions",level:2},{value:"Using the Interactions in Specs",id:"using-the-interactions-in-specs",level:2},{value:"Conclusion",id:"conclusion",level:2}];function d(e){const t={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Don't let visual bugs slip through! Learn how to quickly add WDIO visual regression testing to your Serenity/JS project."})}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["I recently watched a video tutorial by Wim Selles ",(0,s.jsx)(t.a,{href:"https://www.youtube.com/watch?v=wQRGpWX3fsk",children:"here"})," explaining the new WebdriverIO snapshot and visual snapshot features introduced in version 8.29.0."]}),"\n",(0,s.jsxs)(t.p,{children:["Playwright also offers some support for snapshot and visual snapshot testing ",(0,s.jsx)(t.a,{href:"https://playwright.dev/docs/test-snapshots",children:"here"}),"."]}),"\n",(0,s.jsx)(t.p,{children:"I won't go into detail of visual regression testing since there are many resources available online."}),"\n",(0,s.jsx)(t.admonition,{title:"Visual Regression Testing",type:"info",children:(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://medium.com/loftbr/visual-regression-testing-eb74050f3366",children:"Visual Regression Testing"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://www.lambdatest.com/learning-hub/visual-regression-testing",children:"Visual Regression Testing - LambdaTest"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://themeisle.com/blog/visual-regression-testing/",children:"Visual Regression Testing with Jest and Percy.io"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://testgrid.io/blog/visual-regression-testing-guide/",children:"Visual Regression Testing Guide"})}),"\n"]})}),"\n",(0,s.jsx)(t.p,{children:"While snapshot testing isn't currently part of Serenity/JS, this guide shows how to quickly integrate the feature into your Serenity/JS test specs using custom interactions."}),"\n",(0,s.jsxs)(t.p,{children:["For more on custom interactions, refer to the Serenity/JS documentation ",(0,s.jsx)(t.a,{href:"https://serenity-js.org/api/core/class/Interaction/",children:"here"}),"."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Serenity/JS",src:n(3167).Z+"",width:"1200",height:"675"})}),"\n",(0,s.jsx)(t.h2,{id:"setting-up-the-project",children:"Setting Up the Project"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["Clone the ",(0,s.jsx)(t.code,{children:"serenity-js-mocha-webdriverio-template"})," ",(0,s.jsx)(t.a,{href:"https://github.com/serenity-js/serenity-js-mocha-webdriverio-template",children:"repository"}),":"]}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"git clone git@github.com:serenity-js/serenity-js-mocha-webdriverio-template.git\n"})}),"\n",(0,s.jsxs)(t.ol,{start:"2",children:["\n",(0,s.jsx)(t.li,{children:"Navigate to the cloned directory and run:"}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"npm install\nnpm test\n"})}),"\n",(0,s.jsx)(t.p,{children:"This ensures your project is set up correctly."}),"\n",(0,s.jsxs)(t.ol,{start:"3",children:["\n",(0,s.jsx)(t.li,{children:"Install the visual testing support for WebdriverIO:"}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"npm install @wdio/visual-service --save-dev\n"})}),"\n",(0,s.jsxs)(t.p,{children:["If you encounter errors, check the system requirements for\nvisual testing with WDIO ",(0,s.jsx)(t.a,{href:"https://webdriver.io/docs/visual-testing#system-requirements",children:"here"}),"."]}),"\n",(0,s.jsxs)(t.ol,{start:"4",children:["\n",(0,s.jsxs)(t.li,{children:["Enable the visual service in your project's root directory file ",(0,s.jsx)(t.code,{children:"wdio.conf.ts"}),":"]}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",metastring:'title="./wdio.conf.ts"',children:"// Test runner services\n// Services take over a specific job you don't want to take care of. They enhance\n// your test setup with almost no effort. Unlike plugins, they don't add new\n// commands. Instead, they hook themselves up into the test process.\nservices: [ 'visual' ],\n"})}),"\n",(0,s.jsxs)(t.ol,{start:"5",children:["\n",(0,s.jsxs)(t.li,{children:["Update your project's root directory file ",(0,s.jsx)(t.code,{children:"tsconfig.json"})," to include the necessary WDIO types:"]}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",metastring:'title="./tsconfig.json"',children:'{\n    "compilerOptions": {\n        "types": [\n          ...\n          "expect-webdriverio",\n          "@wdio/visual-service"\n        ],\n    }\n}\n'})}),"\n",(0,s.jsx)(t.h2,{id:"creating-custom-interactions",children:"Creating Custom Interactions"}),"\n",(0,s.jsx)(t.p,{children:"Now, let's create our custom Serenity/JS interactions:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",metastring:'title="./test/serenity/CustomInteractions.ts"',children:"import { Interaction, MetaQuestionAdapter } from '@serenity-js/core';\nimport { PageElement } from '@serenity-js/web';\n\nexport const CompareScreen = (snapshotIdentifier: string) =>     \n    Interaction.where('#actor compares whole page screenshot', \n        async actor => {\n            return expect(browser).toMatchFullPageSnapshot(snapshotIdentifier)\n        })\n\nexport const CompareElement = (\n    pageElement: MetaQuestionAdapter<PageElement<unknown>, PageElement<unknown>>,\n    snapshotIdentifier: string) =>     \n    Interaction.where('#actor compares element screenshot', \n        async actor => {\n            const selector = await pageElement.answeredBy(actor)\n            return expect(selector.nativeElement())\n                .toMatchElementSnapshot(snapshotIdentifier)\n        }\n    )\n"})}),"\n",(0,s.jsxs)(t.admonition,{type:"info",children:[(0,s.jsxs)(t.p,{children:["These custom interactions are designed specifically for Serenity/JS and ",(0,s.jsx)(t.strong,{children:"WDIO"}),"."]}),(0,s.jsxs)(t.p,{children:["If you're using ",(0,s.jsx)(t.strong,{children:"Playwright"}),", you'll need to implement interactions according to Playwright's approach to snapshots ",(0,s.jsx)(t.a,{href:"https://playwright.dev/docs/test-snapshots",children:"here"}),"."]}),(0,s.jsx)(t.p,{children:"A more comprehensive solution that integrates seamlessly with Serenity/JS and supports all browser automation tools would require additional development beyond this basic example."})]}),"\n",(0,s.jsx)(t.h2,{id:"using-the-interactions-in-specs",children:"Using the Interactions in Specs"}),"\n",(0,s.jsx)(t.p,{children:"Here's how to use the interactions in your spec files:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",metastring:'title="./specs/ui/todo/serenity-js_website.spec.ts"',children:" it(`offers examples to help you practice test automation`, async () => {\n        ...\n        // Once we know the system is up and running, Wendy can proceed with the web-based scenario.\n        await actorCalled('Wendy').attemptsTo(\n            TodoList.createListContaining([\n                `Buy dog food`,\n                `Feed the dog`,\n                `Book a vet's appointment`,\n            ]),\n            CompareScreen('list_after_creation'),\n            TodoList.markAsCompleted([\n                `Buy dog food`,\n                `Feed the dog`,\n            ]),\n            CompareScreen('list_after_completion'),\n            Ensure.that(\n                TodoList.outstandingItemsCount(),\n                equals(1)\n            ),\n        )\n    })\n"})}),"\n",(0,s.jsx)(t.admonition,{title:"Important Considerations",type:"info",children:(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Visual testing is not a silver bullet. Refer to the WebdriverIO page for key considerations for optimal use ",(0,s.jsx)(t.a,{href:"https://webdriver.io/docs/visual-testing/considerations",children:"here"}),"."]}),"\n",(0,s.jsx)(t.li,{children:"Choose meaningful names for your reference snapshots. Ensure unique images for unique tests, especially when reusing Serenity/JS tasks containing the 'CompareScreen' and 'CompareElement' interactions."}),"\n"]})}),"\n",(0,s.jsx)(t.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,s.jsx)(t.p,{children:"n this guide, we've explored how to integrate visual regression testing into your Serenity/JS project\nusing custom interactions. This approach allows you to leverage Serenity/JS's powerful testing\ncapabilities while ensuring the visual consistency of your web application. Remember,\nvisual testing is a valuable tool, but it's important to use it strategically and with\nclear expectations. By following the best practices, you can effectively incorporate visual\nregression testing into your Serenity/JS test suite."})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},3167:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/serenity-js-social-card-3930273354f510b08b0b4317c537637b.jpg"},1151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>o});var s=n(7294);const i={},r=s.createContext(i);function o(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);