"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9565],{128:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var s=n(5893),r=n(1151);const o={slug:"sjs-playwright-ct-cucumber",title:"Reuse Component Test Code with BDD Scenarios using Serenity/JS and Playwright",authors:["jang"],tags:["testing","automation","serenity-js","hands-on","BDD"]},i=void 0,a={permalink:"/sjs-playwright-ct-cucumber",source:"@site/blog/2024-03-17-sjs-playwright-ct-cucumber.mdx",title:"Reuse Component Test Code with BDD Scenarios using Serenity/JS and Playwright",description:"Next Chapter: Don't reinvent the wheel! Discover how to seamlessly integrate BDD scenarios into your existing Serenity/JS and Playwright setup, unlocking the power of code reuse across component testing and user acceptance tests. Say goodbye to redundant work and hello to efficient testing.",date:"2024-03-17T00:00:00.000Z",formattedDate:"March 17, 2024",tags:[{label:"testing",permalink:"/tags/testing"},{label:"automation",permalink:"/tags/automation"},{label:"serenity-js",permalink:"/tags/serenity-js"},{label:"hands-on",permalink:"/tags/hands-on"},{label:"BDD",permalink:"/tags/bdd"}],readingTime:3.47,hasTruncateMarker:!1,authors:[{name:"Jan Graefe",title:"Maintainer",url:"https://jangraefe.de",imageURL:"https://www.pilot-period.org/img/jan.jpg",key:"jang"}],frontMatter:{slug:"sjs-playwright-ct-cucumber",title:"Reuse Component Test Code with BDD Scenarios using Serenity/JS and Playwright",authors:["jang"],tags:["testing","automation","serenity-js","hands-on","BDD"]},unlisted:!1,prevItem:{title:"Level Up Your Serenity/JS Tests with WDIO Visual Regression Testing",permalink:"/sjs-visual-wdio"},nextItem:{title:"Testing in the Age of AI - Requirements First",permalink:"/ai-requirements-first"}},c={authorsImageUrls:[void 0]},l=[];function d(e){const t={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",img:"img",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.em,{children:(0,s.jsx)(t.strong,{children:"Next Chapter: Don't reinvent the wheel! Discover how to seamlessly integrate BDD scenarios into your existing Serenity/JS and Playwright setup, unlocking the power of code reuse across component testing and user acceptance tests. Say goodbye to redundant work and hello to efficient testing."})})}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["In the ",(0,s.jsx)(t.a,{href:"/sjs-playwright-ct",children:"last tutorial"}),", I showed how to do component testing using Serenity/JS and Playwright. To be honest, it's a very simple component, making it difficult to create a real-world example. Let's just assume it's a coffee counter for controlling how many cups of coffee you drink."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Serenity/JS",src:n(3167).Z+"",width:"1200",height:"675"})}),"\n",(0,s.jsx)(t.p,{children:"Component testing ensures that your self-contained components work as expected. For user acceptance, there may be some additional things necessary to verify functionality."}),"\n",(0,s.jsx)(t.p,{children:"The good news is: You can reuse what you've already prepared for the component tests and dive into the user scenarios."}),"\n",(0,s.jsxs)(t.p,{children:["In this article, I will demonstrate how we can integrate BDD scenarios into the project I prepared the last time. I will use Serenity/JS BDD features. These BDD scenarios will run in the same project like the component tests and will reuse Serenity/JS ",(0,s.jsx)(t.code,{children:"PageElements"})," and ",(0,s.jsx)(t.code,{children:"Tasks"})," that we already used in the component tests."]}),"\n",(0,s.jsxs)(t.p,{children:["I cloned the last example and updated all packages to the latest versions to be up to date and created a ",(0,s.jsx)(t.a,{href:"https://github.com/viper3400/next-sjs-ct-cucumber-tutorial",children:"new repository"}),". If you want to follow all the steps from scratch I suggest going back and starting with the ",(0,s.jsx)(t.a,{href:"/sjs-playwright-ct",children:"component testing tutorial"})," and coming back once you've finished."]}),"\n",(0,s.jsx)(t.p,{children:"To start, you've to add some additional dev dependencies to your project:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sh",children:"npm install --save-dev @cucumber/cucumber \nnpm install --save-dev @serenity-js/cucumber\n"})}),"\n",(0,s.jsx)(t.admonition,{title:"Mind the dependency versions!",type:"warning",children:(0,s.jsxs)(t.p,{children:["Serenity/JS is a monorepo and it's strictly recommended that all dependencies to the project have the same version. Here's the trap with my simple ",(0,s.jsx)(t.code,{children:"npm install"})," approach, as this will always install the latest version, which might be incorrect."]})}),"\n",(0,s.jsx)(t.p,{children:"This time I will not list the file content in detail but refer to the repository and some explanations."}),"\n",(0,s.jsxs)(t.p,{children:["Key to using BDD and Serenity/JS with cucumber is the ",(0,s.jsx)(t.a,{href:"https://github.com/viper3400/next-sjs-ct-cucumber-tutorial/tree/main/features",children:"features folder"}),"."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"features\n|- coffee-counter\n|  |- coffee-counter.feature\n|  \\- readme.md\n|\n|- step-definitions\n|  |- counter.steps.ts\n|  \\- parameter.steps.ts\n|\n|- support\n|  |- Actors.ts\n|  \\- serenity.config.ts\n"})}),"\n",(0,s.jsxs)(t.p,{children:["To enable Serenity/JS, we need the ",(0,s.jsx)(t.code,{children:"support"})," folder with the ",(0,s.jsx)(t.code,{children:"Actors.ts"})," and the ",(0,s.jsx)(t.code,{children:"serenity.config.ts"}),"."]}),"\n",(0,s.jsx)(t.admonition,{type:"tip",children:(0,s.jsxs)(t.p,{children:["To learn more about folder structure, read about ",(0,s.jsx)(t.a,{href:"https://serenity-js.org/handbook/reporting/serenity-bdd-reporter/#serenity-bdd-best-practices",children:"requirements hierarchy"})," in the original Serenity/JS docs.\nTo learn more about cucumber features, read ",(0,s.jsx)(t.a,{href:"https://serenity-js.org/handbook/test-runners/cucumber/",children:"this"}),"."]})}),"\n",(0,s.jsxs)(t.p,{children:["To run cucumber, add a ",(0,s.jsx)(t.code,{children:"cucumber.js"})," ",(0,s.jsx)(t.a,{href:"https://github.com/viper3400/next-sjs-ct-cucumber-tutorial/blob/main/cucumber.js",children:"configuration file"})," to your project root. Among other things, we configure to use Serenity/JS Cucumber adapter in here."]}),"\n",(0,s.jsxs)(t.p,{children:["Add two new scripts to the ",(0,s.jsx)(t.code,{children:"package.json"})]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",metastring:'title="package.json"',children:'"scripts": {\n    ...\n    "test:cucumber:execute": "cucumber-js",\n    "test:cucumber": "failsafe clean serenity-bdd:update test:cucumber:execute test:report"\n}\n'})}),"\n",(0,s.jsxs)(t.p,{children:["There is still one configuration thing left: The ",(0,s.jsx)(t.code,{children:"create-next-app"})," from the last tutorial created a ",(0,s.jsx)(t.code,{children:"tsconfig.json"})," for us. Some compile options are not compatible with cucumber.js, and we have to include the ",(0,s.jsx)(t.code,{children:"features"})," folder."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",metastring:'title="tsconfig.json"',children:'{\n  "compilerOptions":\n   {\n     "module": "commonjs",\n     "moduleResolution": "node",\n     "esModuleInterop": true,\n   },\n   {\n    "include": [\n      "features/**/*.ts",\n    ]\n   }\n}\n'})}),"\n",(0,s.jsxs)(t.p,{children:["To not interfere with the original Next.js configuration, I create a copy ",(0,s.jsx)(t.code,{children:"tsconfig.next.ts"}),". I configured the Next.js itself to use this configuration in ",(0,s.jsx)(t.code,{children:"next.config.mjs"})," instead of the ",(0,s.jsx)(t.code,{children:"tsconfig.ts"})," file, just to make sure we still use the right config when building the Next.js app."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",metastring:'title="next.config.mjs"',children:"/** @type {import('next').NextConfig} */\nconst nextConfig = {\n    typescript: { tsconfigPath: 'tsconfig.next.json'}\n};\n\nexport default nextConfig;\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Until now, we just did some configuration tweaks. Now we're ready to take a look back into our ",(0,s.jsx)(t.a,{href:"https://github.com/viper3400/next-sjs-ct-cucumber-tutorial/blob/main/features/coffee-counter/coffee-counter.feature",children:"coffee counter scenario"})," again. Now have a look into the ",(0,s.jsx)(t.a,{href:"https://github.com/viper3400/next-sjs-ct-cucumber-tutorial/blob/main/features/step-definitions/counter.steps.ts",children:"counter steps definitions"}),". Here is where the magic happens. We just reuse the same tasks we ",(0,s.jsx)(t.a,{href:"https://github.com/viper3400/next-sjs-ct-cucumber-tutorial/blob/main/src/components/CounterSerenity.ts",children:"already provided for component testing"}),":"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",metastring:'title="counter.step.ts"',children:"import { Given, Then, When } from '@cucumber/cucumber';\nimport { Actor } from '@serenity-js/core';\n\nimport { CounterSerenity } from '../../src/components/CounterSerenity';\n\nThen('{pronoun} should see that the \"Increase\" button is enabled', async (actor: Actor) =>\n    actor.attemptsTo(\n        CounterSerenity.EnsureIncreaseButtonIsEnabled()\n    ))\n"})}),"\n",(0,s.jsxs)(t.p,{children:["You're nearly ready to run the test the first time. Make sure that you start your server with ",(0,s.jsx)(t.code,{children:"npm run dev"})," on port 3000."]}),"\n",(0,s.jsxs)(t.p,{children:["Then run ",(0,s.jsx)(t.code,{children:"npm run test:cucumber"})," and find the BDD report in the ",(0,s.jsx)(t.code,{children:"target/site"})," folder."]})]})}function u(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},3167:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/serenity-js-social-card-3930273354f510b08b0b4317c537637b.jpg"},1151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>i});var s=n(7294);const r={},o=s.createContext(r);function i(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);