"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1457],{5907:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var r=t(5893),i=t(1151);const s={slug:"serenityjs-protractor2playwright",title:"Serenity/JS - Migrate from Protractor to Playwright",authors:["jang"],tags:["testing","automation","serenity-js","hands-on"]},o=void 0,a={permalink:"/serenityjs-protractor2playwright",source:"@site/blog/2024-02-04-sjs-protractor2playwright.mdx",title:"Serenity/JS - Migrate from Protractor to Playwright",description:"*When I chose Serenity/JS as a vendor-agnostic API, my intention was to isolate my test specification from the test runner.",date:"2024-02-04T00:00:00.000Z",formattedDate:"February 4, 2024",tags:[{label:"testing",permalink:"/tags/testing"},{label:"automation",permalink:"/tags/automation"},{label:"serenity-js",permalink:"/tags/serenity-js"},{label:"hands-on",permalink:"/tags/hands-on"}],readingTime:4.47,hasTruncateMarker:!1,authors:[{name:"Jan Graefe",title:"Maintainer",url:"https://jangraefe.de",imageURL:"https://www.pilot-period.org/img/jan.jpg",key:"jang"}],frontMatter:{slug:"serenityjs-protractor2playwright",title:"Serenity/JS - Migrate from Protractor to Playwright",authors:["jang"],tags:["testing","automation","serenity-js","hands-on"]},unlisted:!1,nextItem:{title:"HTML Tables in Browser Automation Using Serenity/JS and Playwright",permalink:"/serenityjs-tables-peql"}},l={authorsImageUrls:[void 0]},c=[{value:"Prepare Example project",id:"prepare-example-project",level:2},{value:"Migration",id:"migration",level:2},{value:"Additional Dependencies",id:"additional-dependencies",level:3},{value:"Mocha Configuration",id:"mocha-configuration",level:3},{value:"Serenity/JS Actors",id:"serenityjs-actors",level:3},{value:"Serenity/JS Configuration",id:"serenityjs-configuration",level:3},{value:"Angular Sychronisation in Non-Angular Project",id:"angular-sychronisation-in-non-angular-project",level:3},{value:"Additional npm Scripts",id:"additional-npm-scripts",level:3},{value:"First Testrun Using Playwright",id:"first-testrun-using-playwright",level:2},{value:"Conclusion",id:"conclusion",level:2}];function h(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"When I chose Serenity/JS as a vendor-agnostic API, my intention was to isolate my test specification from the test runner.\nToday, I seamlessly transitioned from Protractor to Playwright in less than 10 minutes.\nThe kicker? No need for me, any AI, or non-AI tool to lay a finger on selectors or test specs.\nAll it took was a swift config update."})})}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"In this blog post, we'll explore a seamless transition from Protractor to Playwright\nin a Serenity/JS project, all achieved in a mere 10 minutes. Witness how the power\nof Serenity/JS makes this migration effortless, requiring no modifications to your\nselectors or Jasmine test specifications. Let's dive in and unlock a smoother,\nmore efficient testing experience."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Serentiy/JS",src:t(2418).Z+"",width:"2150",height:"682"})}),"\n",(0,r.jsx)(n.admonition,{title:"Any browser, any device, any interface",type:"tip",children:(0,r.jsxs)(n.p,{children:["\xab",(0,r.jsx)(n.a,{href:"https://serenity-js.org/",children:"Serenity/JS"})," is a modular and extensible abstraction\nlayer that works seamlessly with integration tools like Playwright,\nSelenium, WebdriverIO, Appium, or Axios, and gives you a consistent,\nintuitive, and vendor-agnostic API to work with.\xbb"]})}),"\n",(0,r.jsx)(n.h2,{id:"prepare-example-project",children:"Prepare Example project"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:"(Example on this page was tested with Serenity/JS version 3.16.0)"})}),"\n",(0,r.jsx)(n.p,{children:"Let's start by setting up a small example project based on the Protractor with Jasmine\ntemplate provided by Serenity/JS, as this combination was the most common."}),"\n",(0,r.jsxs)(n.p,{children:["Clone the ",(0,r.jsx)(n.a,{href:"https://github.com/serenity-js/serenity-js-jasmine-protractor-template",children:"serenity-js-jasmine-protractor-template"}),",\ninstall the NodeJS dependencies, and start a test run to ensure that the template is working."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"git clone https://github.com/serenity-js/serenity-js-jasmine-protractor-template.git\ncd serenity-js-mocha-protractor-template\nnpm install\nnpm test\n"})}),"\n",(0,r.jsx)(n.h2,{id:"migration",children:"Migration"}),"\n",(0,r.jsx)(n.h3,{id:"additional-dependencies",children:"Additional Dependencies"}),"\n",(0,r.jsx)(n.p,{children:"Add additional dependencies to your project:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"npm install @serenity-js/playwright\nnpm install playwright\nnpm install mocha\nnpm install @serenity-js/mocha\n"})}),"\n",(0,r.jsx)(n.p,{children:"Install Playwright:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"npx playwright install\n"})}),"\n",(0,r.jsx)(n.h3,{id:"mocha-configuration",children:"Mocha Configuration"}),"\n",(0,r.jsxs)(n.p,{children:["Add a ",(0,r.jsx)(n.code,{children:".mocharc.yml"})," file to the root directory of you project:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yml",metastring:'title=".mocharc.yml"',children:"check-leaks: false\ncolor: true\ndiff: true\nfull-trace: true\nreporter: '@serenity-js/mocha'\nrequire:\n  - 'ts-node/register'\n  - 'src/serenity.config.ts'\ntimeout: 30000\nv8-stack-trace-limit: 100\nspec:\n  - './spec/**/*.spec.ts'\n"})}),"\n",(0,r.jsx)(n.h3,{id:"serenityjs-actors",children:"Serenity/JS Actors"}),"\n",(0,r.jsxs)(n.p,{children:["Create a ",(0,r.jsx)(n.code,{children:"src"})," folder in your project root and create an ",(0,r.jsx)(n.code,{children:"Actors.ts"})," file:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",metastring:'title="./src/Actors.ts"',children:"import { Actor, Cast, TakeNotes } from '@serenity-js/core';\nimport { BrowseTheWebWithPlaywright, PlaywrightOptions } from '@serenity-js/playwright';\nimport { CallAnApi } from '@serenity-js/rest';\nimport * as playwright from 'playwright-core';\n\nexport class Actors implements Cast {\n    constructor(\n        private readonly page: playwright.Page,\n        private readonly options: PlaywrightOptions,\n    ) {\n    }\n\n    prepare(actor: Actor): Actor {\n        return actor.whoCan(\n            BrowseTheWebWithPlaywright.usingPage(this.page, this.options),\n            TakeNotes.usingAnEmptyNotepad(),\n            CallAnApi.at(this.options.baseURL)\n        );\n    }\n}\n"})}),"\n",(0,r.jsxs)(n.admonition,{title:"Remark",type:"tip",children:[(0,r.jsxs)(n.p,{children:["There are two ways to give an actor the ability\nto ",(0,r.jsx)(n.a,{href:"https://serenity-js.org/api/playwright/class/BrowseTheWebWithPlaywright/",children:"BrowseTheWebWithPlaywright"}),":"]}),(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:".using(browser)"})}),"\n"]}),(0,r.jsxs)(n.p,{children:["A new browser instance is created for every ",(0,r.jsx)(n.code,{children:"it"})," block in your Mocha ",(0,r.jsx)(n.code,{children:"*.spec.ts"})," file.\nThis means you ",(0,r.jsx)(n.strong,{children:"cannot access"})," a page you've navigated to in your first ",(0,r.jsx)(n.code,{children:"it"})," block\nin your second ",(0,r.jsx)(n.code,{children:"it"})," block."]}),(0,r.jsxs)(n.ol,{start:"2",children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:".usingPage(page)"})}),"\n"]}),(0,r.jsxs)(n.p,{children:["The browser instance, or Playwright page instance, will be re-used for the entire\n",(0,r.jsx)(n.code,{children:"*.spec.ts"})," file.\nThis means you ",(0,r.jsx)(n.strong,{children:"can access"})," a page you've navigated to in your first ",(0,r.jsx)(n.code,{children:"it"})," block in\nyour second ",(0,r.jsx)(n.code,{children:"it"})," block."]})]}),"\n",(0,r.jsx)(n.h3,{id:"serenityjs-configuration",children:"Serenity/JS Configuration"}),"\n",(0,r.jsxs)(n.p,{children:["Create a ",(0,r.jsx)(n.code,{children:"serenity.config.ts"})," file in the same ",(0,r.jsx)(n.code,{children:"src"})," folder."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",metastring:'title="./src/serenity.config.ts"',children:"import { configure, Duration, NoOpDiffFormatter } from '@serenity-js/core';\nimport { BrowserContextOptions } from 'playwright';\nimport * as playwright from 'playwright-core';\n\nimport { Actors } from './Actors';\n\nlet browser: playwright.Browser;\nlet page: playwright.Page;\n\nexport const mochaHooks = {\n    async beforeAll(): Promise<void> {\n        browser = await playwright.chromium.launch({\n            headless: false\n        });\n\n        const contextOptions : BrowserContextOptions = { baseURL: 'https://serenity-js.org' }\n        const context = await browser.newContext(contextOptions);\n        page = await context.newPage();\n\n        configure({\n            actors: new Actors(page, {\n                defaultNavigationTimeout:   Duration.ofSeconds(2).inMilliseconds(),\n                defaultTimeout:             Duration.ofMilliseconds(750).inMilliseconds(),\n            }),\n            diffFormatter: new NoOpDiffFormatter(),\n            crew: [\n                '@serenity-js/console-reporter',\n                [ '@serenity-js/serenity-bdd',          { specDirectory: 'spec' }], \n                [ '@serenity-js/web:Photographer',      { strategy: 'TakePhotosOfInteractions'    } ],\n                [ '@serenity-js/core:ArtifactArchiver', { outputDirectory: 'target/site/serenity' } ],\n            ]\n        });\n    },\n\n    async afterAll(): Promise<void> {\n        if (browser) {\n            await browser.close()\n        }\n    }\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["In our example ",(0,r.jsx)(n.code,{children:"Actors"})," class, we initiate a ",(0,r.jsx)(n.code,{children:"Browser"})," object, create a new\n",(0,r.jsx)(n.code,{children:"Context"})," with a new ",(0,r.jsx)(n.code,{children:"Page"})," and give the ",(0,r.jsx)(n.code,{children:"Actor"})," the ",(0,r.jsx)(n.code,{children:"Ability"})," to interact\nwith this page."]}),"\n",(0,r.jsx)(n.h3,{id:"angular-sychronisation-in-non-angular-project",children:"Angular Sychronisation in Non-Angular Project"}),"\n",(0,r.jsxs)(n.p,{children:["In the ",(0,r.jsx)(n.code,{children:"serenity-js_website.spec.ts"})," example file, remove the ",(0,r.jsx)(n.code,{children:"UseAngularSynchronisation"}),", as the page we're\ninteracting with is not even an Angular page."]}),"\n",(0,r.jsxs)(n.p,{children:["Uncomment the following line in ",(0,r.jsx)(n.code,{children:"protractor.conf.ts"}),". so we will be able to use\nProtractor and Playwright side by side."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:'title="./protractor.conf.js"',children:"    onPrepare: function() {\n         ...\n         browser.waitForAngularEnabled(false);\n    },\n"})}),"\n",(0,r.jsx)(n.h3,{id:"additional-npm-scripts",children:"Additional npm Scripts"}),"\n",(0,r.jsxs)(n.p,{children:["In the script section of your ",(0,r.jsx)(n.code,{children:"package.json"})," and two new scripts:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",metastring:'title="./package.json"',children:'...\n  "scripts": {\n    ...\n    "test:execute:playwright": "mocha --config .mocharc.yml",\n    "test:playwright": "failsafe clean test:execute:playwright test:report",\n    ... \n  }\n'})}),"\n",(0,r.jsx)(n.h2,{id:"first-testrun-using-playwright",children:"First Testrun Using Playwright"}),"\n",(0,r.jsxs)(n.p,{children:["Congratulations! You're done. Just run ",(0,r.jsx)(n.code,{children:"npm run test:playwright"}),".\nYou can still run the tests with Protractor by running ",(0,r.jsx)(n.code,{children:"npm test"}),".\nIf you're satisfied with Playwright, you can remove all dependencies\nfrom Protractor and Jasmine from your project now."]}),"\n",(0,r.jsx)(n.admonition,{title:"Mocha vs. Playwright Test",type:"tip",children:(0,r.jsxs)(n.p,{children:["In this scenario, we use Mocha as the test runner for Playwright,\ninstead of the native Playwright test runner.\nMigration to the Playwright test runner may also be straightforward,\nbut you will have to replace some imports in your files.\nFor more information, refer to the\n",(0,r.jsx)(n.a,{href:"https://serenity-js.org/handbook/test-runners/playwright-test/#examples-and-project-templates",children:"Serenity/JS handbook"})]})}),"\n",(0,r.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,r.jsx)(n.p,{children:"In just a brief span, we've navigated the transition from Protractor to Playwright\nwith Serenity/JS. The beauty lies not just in the simplicity of the process but in\nthe retained integrity of your existing codebase. As you embark on your testing\nendeavors with this upgraded setup, feel empowered by the speed, efficiency,\nand flexibility now at your fingertips. The synergy of Protractor's familiarity,\nPlaywright's power, and Serenity/JS's adaptability ensures a testing ecosystem\nthat not only meets but exceeds your expectations. Happy testing!"})]})}function d(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},2418:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/SerenityJS-e0ac35fd94e6db4f0481afa86bf71b26.png"},1151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>o});var r=t(7294);const i={},s=r.createContext(i);function o(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);