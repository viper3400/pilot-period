"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[246],{1819:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var a=n(5893),s=n(1151);const o={slug:"sjs-actors-notepad",title:"Serenity/JS and Actor Notepads for Injecting User Credentials",authors:["jang"],tags:["testing","automation","serenity-js","hands-on","playwright"]},i=void 0,r={permalink:"/sjs-actors-notepad",source:"@site/blog/2024-04-28-sjs-actors-notepad.mdx",title:"Serenity/JS and Actor Notepads for Injecting User Credentials",description:"Are your test scripts drowning in test data chaos? Say goodbye to clutter and hello to clarity with Serenity/JS's Actor Notepads! Learn how to inject user credentials seamlessly for cleaner, more maintainable tests. Ready to dive in?",date:"2024-04-28T00:00:00.000Z",tags:[{label:"testing",permalink:"/tags/testing"},{label:"automation",permalink:"/tags/automation"},{label:"serenity-js",permalink:"/tags/serenity-js"},{label:"hands-on",permalink:"/tags/hands-on"},{label:"playwright",permalink:"/tags/playwright"}],readingTime:4.525,hasTruncateMarker:!1,authors:[{name:"Jan Graefe",title:"Maintainer",url:"https://jangraefe.de",imageURL:"https://www.pilot-period.org/img/jan.jpg",key:"jang"}],frontMatter:{slug:"sjs-actors-notepad",title:"Serenity/JS and Actor Notepads for Injecting User Credentials",authors:["jang"],tags:["testing","automation","serenity-js","hands-on","playwright"]},unlisted:!1,prevItem:{title:"Normal Flaky Tests",permalink:"/normal-flaky-tests"},nextItem:{title:"Level Up Your Serenity/JS Tests with WDIO Visual Regression Testing",permalink:"/sjs-visual-wdio"}},c={authorsImageUrls:[void 0]},l=[{value:"Actors in Serenity/JS",id:"actors-in-serenityjs",level:2},{value:"Introducing Actor Notepads",id:"introducing-actor-notepads",level:2},{value:"Example",id:"example",level:2},{value:"Advantages of Using Actor Notepads",id:"advantages-of-using-actor-notepads",level:2},{value:"Conclusion",id:"conclusion",level:2}];function d(e){const t={a:"a",blockquote:"blockquote",code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:"Are your test scripts drowning in test data chaos? Say goodbye to clutter and hello to clarity with Serenity/JS's Actor Notepads! Learn how to inject user credentials seamlessly for cleaner, more maintainable tests. Ready to dive in?"})}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"actors-in-serenityjs",children:"Actors in Serenity/JS"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"https://serenity-js.org/",children:"Serenity/JS"})," is a testing framework that promotes collaboration, clarity, and maintainability in automated testing. At its core, Serenity/JS introduces the concept of actors, which represent the different users or personas interacting with a web application. Actors are equipped with capabilities and context, allowing them to perform actions and interact with the application under test."]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Serenity/JS",src:n(3167).Z+"",width:"1200",height:"675"})}),"\n",(0,a.jsx)(t.h2,{id:"introducing-actor-notepads",children:"Introducing Actor Notepads"}),"\n",(0,a.jsx)(t.p,{children:"A key feature of Serenity/JS is the concept of actor notepads. Notepads serve as containers for actor-specific data, such as credentials, expected outcomes, and any other contextual information relevant to the test scenario. Instead of cluttering test scripts with data setup details, actor notepads encapsulate this information within the actor itself."}),"\n",(0,a.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,a.jsx)(t.p,{children:"Let's assume a small test where an actor:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["Navigates to the login page of the application (",(0,a.jsx)(t.a,{href:"https://the-internet.herokuapp.com/login",children:"https://the-internet.herokuapp.com/login"}),")."]}),"\n",(0,a.jsx)(t.li,{children:"Enters the username retrieved from the actor's notepad into the username input field on the login page."}),"\n",(0,a.jsx)(t.li,{children:"Enters the password retrieved from the actor's notepad into the password input field on the login page."}),"\n",(0,a.jsx)(t.li,{children:"Clicks on the login button to submit the credentials."}),"\n",(0,a.jsx)(t.li,{children:"Waits until a flash message appears on the page, indicating a successful login, with the expected result retrieved from the actor's notepad."}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:["First, we prepare two actors called Tom Smith, who is allowed to login and Jan Doe, who is not allowed to login.\nWe put their login credentials and expected result into their notepads, using the ability to ",(0,a.jsx)(t.a,{href:"https://serenity-js.org/api/core/class/TakeNotes/",children:"TakeNotes"}),"."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-typescript",children:"// To avoid typos and repetition when instantiating and retrieving actors, \n// we use string enums to store actor names:\nenum ActorNames {\n    Tom = 'Tom Smith, who is allowed to use our system,',\n    Jane = 'Jane Doe, who is not allowed to use our system,'\n}\n\n// We are using a model for our actors notepad\ntype FormAuthenticationModel = {\n    Username: string,\n    Password: string,\n    ExpectedResult: string\n}\n\nclass AuthenticationActors implements Cast {\n    constructor(private readonly browser: Browser) {\n    }\n\n    // Prepare method to configure actors with specific capabilities and data\n    prepare(actor: Actor): Actor {\n        // Initialize the actor with the capability to browse the web using Playwright\n        let preparedActor = actor.whoCan(BrowseTheWebWithPlaywright.using(this.browser));\n\n        // Switch statement to customize actor based on their name\n        switch (actor.name) {\n            // Configuration for actor named Tom\n            case ActorNames.Tom: {\n                // Configure actor to take notes using a notepad with specific authentication data\n                preparedActor = preparedActor.whoCan(\n                    TakeNotes.using(Notepad.with<FormAuthenticationModel>({\n                        Username: 'tomsmith',\n                        Password: 'SuperSecretPassword!',\n                        ExpectedResult: 'You logged into a secure area!'\n                    }))\n                );\n                break;\n            }\n            // Configuration for actor named Jane\n            case ActorNames.Jane: {\n                // Configure actor to take notes using a notepad with specific authentication data\n                preparedActor = preparedActor.whoCan(\n                    TakeNotes.using(Notepad.with<FormAuthenticationModel>({\n                        Username: 'janedoe',\n                        Password: 'WrongPassword!',\n                        ExpectedResult: 'Your username is invalid!'\n                    }))\n                );\n                break;\n            }\n        }\n        // Return the prepared actor with customized capabilities and data\n        return preparedActor;\n    }\n}\n"})}),"\n",(0,a.jsxs)(t.p,{children:["For our test we have to prepare the ",(0,a.jsx)(t.code,{children:"PageElements"})," and a ",(0,a.jsx)(t.code,{children:"Task"}),":"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-typescript",children:"class FormAuthenticationPage {\n    static UserNameInputField = PageElement.located(By.css('#username')).describedAs('field to input the username')\n    static PasswordInputField = PageElement.located(By.css('#password')).describedAs('field to input the password')\n    static LoginButton = PageElement.located(By.css('[type=\"submit\"]')).describedAs('button to login')\n    static FlashMessage = PageElement.located(By.css('#flash')).describedAs('result message')\n}\n\nconst LoginToAppUsingActorsNotepad = () => \n    Task.where(`#actor logs in using username and password from their notepad`,\n        Navigate.to('https://the-internet.herokuapp.com/login'),\n        Enter.theValue(notes<FormAuthenticationModel>().get('Username')).into(FormAuthenticationPage.UserNameInputField),\n        Enter.theValue(notes<FormAuthenticationModel>().get('Password')).into(FormAuthenticationPage.PasswordInputField),\n        Click.on(FormAuthenticationPage.LoginButton),\n        Wait.until(Text.of(FormAuthenticationPage.FlashMessage), includes(notes<FormAuthenticationModel>().get('ExpectedResult')))\n    )\n"})}),"\n",(0,a.jsx)(t.p,{children:"Finally, when using Serenity/JS with Playwright Test our spec looks like:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-typescript",children:"//make sure to import { describe, it, test } from '@serenity-js/playwright-test'\n\ndescribe('form authentication notepad', () => {\n    test.use({\n        \n        /*\n         * Override the default cast of actors, \n         * so that each actor receives their own,\n         * independent browser window.\n         */\n        actors: async ({ browser }, use) => {\n            use(new AuthenticationActors(browser));\n        },\n    });\n    describe('login page', () => {\n        it('should log in with correct username and password', async ({ actorCalled }) => {\n            await actorCalled(ActorNames.Tom).attemptsTo(\n                LoginToAppUsingActorsNotepad(),\n            )\n        })\n\n        it('should deny login with incorrect username and password', async ({ actorCalled }) => {\n            await actorCalled(ActorNames.Jane).attemptsTo(\n                LoginToAppUsingActorsNotepad(),\n            )\n        })\n\n    })\n})\n"})}),"\n",(0,a.jsxs)(t.p,{children:["To start right away with Serenity/JS using Playwright test I recommend to use a ",(0,a.jsx)(t.a,{href:"https://serenity-js.org/handbook/getting-started/project-templates/#playwright",children:"Serenity/JS template"}),"."]}),"\n",(0,a.jsx)(t.h2,{id:"advantages-of-using-actor-notepads",children:"Advantages of Using Actor Notepads"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Separation of Concerns:"})," By delegating data setup to actor notepads, test scripts focus solely on orchestrating actor actions, leading to cleaner and more readable code."]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Encapsulation:"})," Actor notepads encapsulate actor-specific data, promoting better organization and reducing the likelihood of data misuse or modification."]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Reusability:"})," Actor notepads facilitate the reuse of actors across multiple tests without duplicating data setup logic, improving test maintainability and reducing code duplication."]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Scalability:"})," As test suites grow, managing data setup through actor notepads proves more scalable and manageable than injecting data through parameters."]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Enhanced Reporting:"})," Serenity/JS emphasizes descriptive and readable test reports. Actor notepads enable better reporting by associating test steps with relevant actor context, enhancing test comprehensibility."]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Flexibility for Extension:"})," Actor notepads provide a flexible mechanism to extend actor capabilities or introduce additional data for testing purposes, without significantly modifying test script structure."]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,a.jsx)(t.p,{children:"In conclusion, leveraging actor notepads within Serenity/JS tranforms automated testing,\noffering a streamlined approach to managing test data. By encapsulating test data within actors,\ntest scripts become clearer, more maintainable, and less prone to errors.\nWith the separation of concerns afforded by actor notepads, the focus shifts from data setup\nto orchestrating meaningful test actions, resulting in enhanced readability and scalability."})]})}function p(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},3167:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/serenity-js-social-card-3930273354f510b08b0b4317c537637b.jpg"},1151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>i});var a=n(7294);const s={},o=a.createContext(s);function i(e){const t=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),a.createElement(o.Provider,{value:t},e.children)}}}]);