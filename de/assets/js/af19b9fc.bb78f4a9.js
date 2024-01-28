"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5625],{3903:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var o=t(5893),s=t(1151);const a={slug:"serenityjs-tables-peql",title:"HTML Tables in Browser Automation Using Serenity/JS",authors:["jang"],tags:["testing","automation","serenity-js","hands-on"]},r=void 0,i={permalink:"/de/serenityjs-tables-peql",source:"@site/blog/2024-01-28-sjs-tables-peql.mdx",title:"HTML Tables in Browser Automation Using Serenity/JS",description:"Unravel the Complexity of HTML Table Automation with Serenity/JS! Tired of wrestling with hierarchical selectors? Serenity/JS introduces the Page Element Query Language (PEQL), making HTML table automation a breeze. Dive into hands-on examples, from pinpointing rows by index to dynamically locating them based on content. Empower your web automation journey with Serenity/JS \u2013 where simplicity meets precision!",date:"2024-01-28T00:00:00.000Z",formattedDate:"28. Januar 2024",tags:[{label:"testing",permalink:"/de/tags/testing"},{label:"automation",permalink:"/de/tags/automation"},{label:"serenity-js",permalink:"/de/tags/serenity-js"},{label:"hands-on",permalink:"/de/tags/hands-on"}],readingTime:4.32,hasTruncateMarker:!1,authors:[{name:"Jan Graefe",title:"Autor",url:"https://jangraefe.de",imageURL:"img/jan.jpg",key:"jang"}],frontMatter:{slug:"serenityjs-tables-peql",title:"HTML Tables in Browser Automation Using Serenity/JS",authors:["jang"],tags:["testing","automation","serenity-js","hands-on"]},unlisted:!1,nextItem:{title:"The Role of Testers in Cross-Functional Teams",permalink:"/de/skills_before_role"}},l={authorsImageUrls:[void 0]},c=[{value:"Automating HTML Tables with Serenity/JS",id:"automating-html-tables-with-serenityjs",level:2},{value:"Knowing the Index of the Row",id:"knowing-the-index-of-the-row",level:2},{value:"Unknown Row Index: Locating Rows by Content",id:"unknown-row-index-locating-rows-by-content",level:2}];function d(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.em,{children:(0,o.jsx)(n.strong,{children:"Unravel the Complexity of HTML Table Automation with Serenity/JS! Tired of wrestling with hierarchical selectors? Serenity/JS introduces the Page Element Query Language (PEQL), making HTML table automation a breeze. Dive into hands-on examples, from pinpointing rows by index to dynamically locating them based on content. Empower your web automation journey with Serenity/JS \u2013 where simplicity meets precision!"})})}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"automating-html-tables-with-serenityjs",children:"Automating HTML Tables with Serenity/JS"}),"\n",(0,o.jsx)(n.p,{children:"If you're dealing with web automation and HTML tables,\nSerenity/JS provides a powerful and expressive way to interact with page elements."}),"\n",(0,o.jsx)(n.p,{children:"Traditional HTML selectors, such as those\nbased on CSS or XPath, are often hierarchical.\nHowever, tables are conceptually two-dimensional,\nwith rows and columns, making it less straightforward\nto express certain queries using these selectors."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Serentiy/JS",src:t(2418).Z+"",width:"2150",height:"682"})}),"\n",(0,o.jsxs)(n.p,{children:["In this article, we'll explore the usage of the\n",(0,o.jsx)(n.a,{href:"https://serenity-js.org/handbook/web-testing/page-element-query-language/",children:"Page Element Query Language (PEQL)"}),"\nin Serenity/JS for automating HTML tables, focusing on"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"scenarios where you know the index of the row you want to access and"}),"\n",(0,o.jsx)(n.li,{children:"situations where you need to locate a row based on its content."}),"\n"]}),"\n",(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsxs)(n.p,{children:["Examples on this page where tested with Serenity/JS version 3.15.0.\nTo get started with Serenity/JS have a look into the\n",(0,o.jsx)(n.a,{href:"https://serenity-js.org/handbook/getting-started/project-templates/",children:"Serenity/JS project templates"})]})}),"\n",(0,o.jsx)(n.h2,{id:"knowing-the-index-of-the-row",children:"Knowing the Index of the Row"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Example Table",src:t(7358).Z+"",width:"1980",height:"594"})}),"\n",(0,o.jsxs)(n.p,{children:["Consider a scenario where you have a simple table, like ",(0,o.jsx)(n.a,{href:"https://www.w3schools.com/html/html_tables.asp",children:"this one from w3schools.com"}),", and you know the index of the row you want to access."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-html",children:"<table>\n  <tr>\n    <th>Company</th>\n    <th>Contact</th>\n    <th>Country</th>\n  </tr>\n  <tr>\n    <td>Alfreds Futterkiste</td>\n    <td>Maria Anders</td>\n    <td>Germany</td>\n  </tr>\n  <tr>\n    <td>Centro comercial Moctezuma</td>\n    <td>Francisco Chang</td>\n    <td>Mexico</td>\n  </tr>\n  <tr>\n    <td>Ernst Handel</td>\n    <td>Roland Mendel</td>\n    <td>Austria</td>\n  </tr>\n  <tr>\n    <td>Island Trading</td>\n    <td>Helen Bennett</td>\n    <td>UK</td>\n  </tr>\n  <tr>\n    <td>Laughing Bacchus Winecellars</td>\n    <td>Yoshi Tannamuri</td>\n    <td>Canada</td>\n  </tr>\n  <tr>\n    <td>Magazzini Alimentari Riuniti</td>\n    <td>Giovanni Rovelli</td>\n    <td>Italy</td>\n  </tr>\n</table>\n"})}),"\n",(0,o.jsx)(n.p,{children:"The following example demonstrates how to use Serenity/JS to interact with the table:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-typescript",children:"import { Ensure, equals } from '@serenity-js/assertions';\nimport { describe, it } from '@serenity-js/playwright-test';\nimport { By, Navigate, PageElements, Text } from '@serenity-js/web';\n\nconst CustomersTable = () => PageElement.located(By.css('#customers'))\n    .describedAs('customer table')\n\nconst TableRows = () => PageElements.located(By.css('tr'))\n    .describedAs('all table rows').of(CustomersTable());\n\nconst TableColumns = () => PageElements.located(By.css('td'))\n    .describedAs('all table columns')\n    .of(CustomersTable())\n\nconst TableColumnsInRow = (index: number) => \n    TableColumns().of(TableRows().nth(index));\n\nconst CompanyInRow = (index: number) => TableColumnsInRow(index).nth(0)\n    .describedAs(`company column in row ${index}`);\n\nconst ContactInRow = (index: number) => TableColumnsInRow(index).nth(1)\n    .describedAs(`contact column in row ${index}`);\n\nconst CountryInRow = (index: number) => TableColumnsInRow(index).nth(2)\n    .describedAs(`country column in row ${index}`);\n\ndescribe('table selector', () => (\n    it('ensures text of columns in a row', async ({actor}) => (\n        actor.attemptsTo(\n            Navigate.to('https://www.w3schools.com/html/html_tables.asp'),\n            Ensure.that(Text.of(CompanyInRow(1)), equals('Alfreds Futterkiste')),\n            Ensure.that(Text.of(ContactInRow(1)), equals('Maria Anders')),\n            Ensure.that(Text.of(CountryInRow(1)), equals('Germany'))\n        ))\n    )\n));\n"})}),"\n",(0,o.jsx)(n.p,{children:"The output in the Serenity/JS report will look like follows:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"\u2713 Alice ensures that the text of company column in row 1 does equal 'Alfreds Futterkiste'\n\u2713 Alice ensures that the text of contact column in row 1 does equal 'Maria Anders'\n\u2713 Alice ensures that the text of country column in row 1 does equal 'Germany'\n"})}),"\n",(0,o.jsx)(n.h2,{id:"unknown-row-index-locating-rows-by-content",children:"Unknown Row Index: Locating Rows by Content"}),"\n",(0,o.jsx)(n.p,{children:'In some scenarios, the table\'s sort order might not be defined, and the index of the row under test may vary. In such cases, you can locate a row based on expected content. Let\'s say we want to ensure that the contact name for "Centro comercial Moctezuma" in Mexico equals "Francisco Chang." Here\'s how you can achieve this with Serenity/JS:'}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-typescript",children:"import { contain, Ensure, equals } from '@serenity-js/assertions';\nimport { describe, it } from '@serenity-js/playwright-test';\nimport { By, Navigate, PageElement, PageElements, Text } from '@serenity-js/web';\n\nconst CustomersTable = () => PageElement.located(By.css('#customers'))\n    .describedAs('customer table')\n\nconst TableRows = () => PageElements.located(By.css('tr'))\n    .describedAs('all table rows').of(CustomersTable());\n\nconst CompanyColumns = () => PageElements.located(By.css('td:nth-child(1)'))\n    .describedAs('company columns');\n\nconst ContactColumns = () => PageElements.located(By.css('td:nth-child(2)'))\n    .describedAs('contact columns');\n\nconst CountryColumns = () => PageElements.located(By.css('td:nth-child(3)'))\n    .describedAs('country columns');\n\nconst ContactColumByCountryAndCompany = (country: string, company: string) => \n    ContactColumns().of(\n        TableRows()\n            .where(Text.ofAll(CountryColumns()), contain(country))\n            .where(Text.ofAll(CompanyColumns()), contain(company))\n            .first())\n        .first();\n\ndescribe('table selector', () => (\n    it('ensures text of columns in a row', async ({actor}) => (\n        actor.attemptsTo(\n            Navigate.to('https://www.w3schools.com/html/html_tables.asp'),\n            Ensure.that(Text.of(ContactColumByCountryAndCompany(\n                'Mexico','Centro comercial Moctezuma')),\n            equals('Francisco Chang'))\n        ))\n    )\n));\n"})}),"\n",(0,o.jsxs)(n.p,{children:["In this example, we introduce new ",(0,o.jsx)(n.code,{children:"PageElements"})," such as ",(0,o.jsx)(n.code,{children:"CompanyColumn"}),", ",(0,o.jsx)(n.code,{children:"ContactColumn"}),", and ",(0,o.jsx)(n.code,{children:"CountryColumn"})," to represent individual columns. The ",(0,o.jsx)(n.code,{children:"ContactColumByCountryAndCompany"})," function is used to locate the contact column by matching the country and company. We utilize the ",(0,o.jsx)(n.code,{children:"where"})," method to filter rows based on the content of the country and company columns and then take the first result."]}),"\n",(0,o.jsx)(n.p,{children:"The report remains readable domain specific language:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"\u2713 Alice navigates to 'https://www.w3schools.com/html/html_tables.asp'\n\u2713 Alice ensures that the text of the first of contact columns \n    of the first of all table rows of customer table where the \n    text of country columns does contain 'Mexico' and the text \n    of company columns does contain 'Centro comercial Moctezuma' \n    does equal 'Francisco Chang'\n"})}),"\n",(0,o.jsx)(n.p,{children:"It's important to note that in this use case, we assume there is only one result for the given combination of country and company. Therefore, we always take the first result to ensure consistency."}),"\n",(0,o.jsxs)(n.p,{children:["By using Serenity/JS and the ",(0,o.jsx)(n.a,{href:"https://serenity-js.org/handbook/web-testing/page-element-query-language/",children:"Page Element Query Language (PEQL)"}),", you can create expressive and maintainable test scripts for HTML table automation. These examples showcase how to handle scenarios where you know the row index and when you need to locate rows based on their content, providing a flexible and powerful solution for web automation."]})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},7358:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/Example-Table-5e88eb1df280084919fbcfde0e60d475.png"},2418:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/SerenityJS-e0ac35fd94e6db4f0481afa86bf71b26.png"},1151:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>r});var o=t(7294);const s={},a=o.createContext(s);function r(e){const n=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),o.createElement(a.Provider,{value:n},e.children)}}}]);