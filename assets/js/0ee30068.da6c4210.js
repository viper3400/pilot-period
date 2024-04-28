"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8695],{5043:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var i=t(5893),s=t(1151);const r={slug:"ai-requirements-first",title:"Testing in the Age of AI - Requirements First",authors:["jang"],tags:["testing","automation","BDD","TDD"]},o=void 0,a={permalink:"/ai-requirements-first",source:"@site/blog/2024-03-03-ai-requirements-first.mdx",title:"Testing in the Age of AI - Requirements First",description:"Did you know that many software defects arise from unclear requirements?",date:"2024-03-03T00:00:00.000Z",tags:[{label:"testing",permalink:"/tags/testing"},{label:"automation",permalink:"/tags/automation"},{label:"BDD",permalink:"/tags/bdd"},{label:"TDD",permalink:"/tags/tdd"}],readingTime:5.8,hasTruncateMarker:!1,authors:[{name:"Jan Graefe",title:"Maintainer",url:"https://jangraefe.de",imageURL:"https://www.pilot-period.org/img/jan.jpg",key:"jang"}],frontMatter:{slug:"ai-requirements-first",title:"Testing in the Age of AI - Requirements First",authors:["jang"],tags:["testing","automation","BDD","TDD"]},unlisted:!1,prevItem:{title:"Reuse Component Test Code with BDD Scenarios using Serenity/JS and Playwright",permalink:"/sjs-playwright-ct-cucumber"},nextItem:{title:"Component Testing with React/Next.js, Playwright, and Serenity/JS",permalink:"/sjs-playwright-ct"}},d={authorsImageUrls:[void 0]},l=[{value:"Don&#39;t test your implementation",id:"dont-test-your-implementation",level:2},{value:"Align your tests with your requirements",id:"align-your-tests-with-your-requirements",level:2},{value:"Conclusion",id:"conclusion",level:2}];function c(e){const n={admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",img:"img",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Did you know that many software defects arise from unclear requirements?"}),"\n",(0,i.jsx)(n.strong,{children:"What we're seeing today is AI attempting to assist in test creation,"}),"\n",(0,i.jsx)(n.strong,{children:"promising to increase code coverage. However, this approach often"}),"\n",(0,i.jsx)(n.strong,{children:"emphasizes testing our implementations rather than testing against"}),"\n",(0,i.jsx)(n.strong,{children:"our requirements, which I believe has its value but also carries"}),"\n",(0,i.jsx)(n.strong,{children:"certain risks that must be carefully considered."})]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"dont-test-your-implementation",children:"Don't test your implementation"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"AI cannot predict the unknown",src:t(7367).Z+"",width:"1024",height:"1024"})}),"\n",(0,i.jsx)(n.p,{children:"To illustrate, let's conduct an experiment using our familiar chatbots. I'll present a simple function implementation suitable for our demonstration, intentionally flawed."}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"This is a TS function. Can you generate me a jest test spec for it?"})}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"function addTwoNumbers(a: number, b: number): number {\n    return a / b\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Here's, what ",(0,i.jsx)(n.strong,{children:"ChatGPT 3.5"})," responded:"]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"Sure, here's a Jest test spec for the addTwoNumbers function:"})}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"import { addTwoNumbers } from './yourFileName';\n\ndescribe('addTwoNumbers', () => {\n    it('should correctly add two numbers', () => {\n        // Arrange\n        const a = 5;\n        const b = 3;\n        \n        // Act\n        const result = addTwoNumbers(a, b);\n\n        // Assert\n        expect(result).toEqual(8);\n    });\n\n    it('should handle negative numbers correctly', () => {\n        // Arrange\n        const a = -10;\n        const b = 7;\n\n        // Act\n        const result = addTwoNumbers(a, b);\n\n        // Assert\n        expect(result).toEqual(-3);\n    });\n\n    it('should handle zero correctly', () => {\n        // Arrange\n        const a = 0;\n        const b = 5;\n\n        // Act\n        const result = addTwoNumbers(a, b);\n\n        // Assert\n        expect(result).toEqual(0);\n    });\n\n    // Add more test cases as needed\n});\n"})}),"\n",(0,i.jsx)(n.p,{children:"The generated tests do not account for my implementation; they assume I want to add numbers as the function title suggests. The test will fail. However, this allows me to challenge my code."}),"\n",(0,i.jsxs)(n.p,{children:["Here's, what ",(0,i.jsx)(n.strong,{children:"Gemini 1.0"})," answered:"]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"I'd be glad to provide a Jest test spec for the addTwoNumbers function, incorporating the valuable insights from the ratings and addressing the identified issues:"})}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"import { addTwoNumbers } from './path/to/your/function'; // Replace with the actual path\n\ndescribe('addTwoNumbers', () => {\n  // Test case 1: Basic addition with positive numbers\n  it('should add two positive numbers correctly', () => {\n    expect(addTwoNumbers(5, 3)).toBe(5 / 3); // Corrected the expected result\n  });\n\n  // Test case 2: Addition with negative numbers\n  it('should handle addition with negative numbers', () => {\n    expect(addTwoNumbers(-2, 4)).toBe(-2 / 4); // Corrected the expected result\n  });\n\n  // Test case 3: Division by zero (error handling)\n  it('should throw an error when dividing by zero', () => {\n    expect(() => addTwoNumbers(5, 0)).toThrowError('Division by zero'); // Handle division by zero appropriately\n  });\n\n  // Test case 4: Data type validation (optional)\n  it('should only accept numbers as arguments (optional)', () => {\n    expect(() => addTwoNumbers('five', 3)).toThrowError(\n      'addTwoNumbers: Arguments must be numbers' // Customized error message\n    );\n\n    expect(() => addTwoNumbers(5, 'three')).toThrowError(\n      'addTwoNumbers: Arguments must be numbers' // Customized error message\n    );\n  });\n});\n"})}),"\n",(0,i.jsx)(n.p,{children:"Gemini generated tests that pass. The test reads like an addition is tested, but effectively, it's the division."}),"\n",(0,i.jsx)(n.p,{children:"To be fair, sometimes the bots detect inconsistencies between the function name and implementation."}),"\n",(0,i.jsx)(n.p,{children:"However, we miss the point here:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"What's unknown is if our customer was requiring an addition or a division."})}),"\n",(0,i.jsxs)(n.p,{children:["Either the function implementation is incorrect and should be ",(0,i.jsx)(n.code,{children:"a + b"}),",\nor there's a naming issue, and it should be named ",(0,i.jsx)(n.code,{children:"divideTwoNumbers()"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"So, what are the takeaways?"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"1. Testing should align with requirements and expected behavior"})}),"\n",(0,i.jsx)(n.p,{children:"This is crucial to ensure that code functions as intended and potential issues are identified."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"2. Importance of human judgment"})}),"\n",(0,i.jsx)(n.p,{children:"It's essential for humans to analyze the information provided by large language models and make informed decisions based on context and domain knowledge."}),"\n",(0,i.jsx)(n.h2,{id:"align-your-tests-with-your-requirements",children:"Align your tests with your requirements"}),"\n",(0,i.jsx)(n.p,{children:"While I don't want to leave you without a solution to this problem,\nit's worth noting that you should utilize AI to assist in testing."}),"\n",(0,i.jsx)(n.p,{children:"However, it's important to focus on explaining the purpose of the test\nand the problem you want to solve, rather than just testing the\nmplementation itself."}),"\n",(0,i.jsx)(n.p,{children:"While this principle is not new, it's crucial to remember,\nas it's something that can be overlooked when rushing into the use of AI."}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"Can you write me a jest test spec that test test a typescript function that takes two numbers and divide them. Please cover edge cases."})}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"import { divideNumbers } from './yourDivideFunction'; // Import your divide function\n\ndescribe('divideNumbers function', () => {\n  it('should divide two positive numbers correctly', () => {\n    expect(divideNumbers(10, 2)).toBe(5);\n  });\n\n  it('should divide a positive number by zero and return Infinity', () => {\n    expect(divideNumbers(10, 0)).toBe(Infinity);\n  });\n\n  it('should divide a negative number by a positive number correctly', () => {\n    expect(divideNumbers(-10, 2)).toBe(-5);\n  });\n\n  it('should divide zero by a positive number and return 0', () => {\n    expect(divideNumbers(0, 10)).toBe(0);\n  });\n\n  it('should return NaN if divided by zero', () => {\n    expect(divideNumbers(0, 0)).toBe(NaN);\n  });\n\n  it('should divide a large number by a small number correctly', () => {\n    expect(divideNumbers(1000000, 0.000001)).toBe(1e+12);\n  });\n\n  it('should handle decimal precision properly', () => {\n    expect(divideNumbers(1, 3)).toBeCloseTo(0.333, 3); // Rounded to 3 decimal places\n  });\n\n  // Add more test cases as needed for your specific requirements\n});\n"})}),"\n",(0,i.jsx)(n.p,{children:"With the right input, you can even get out BDD scenarios in Gherkin:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"Feature: Division of Two Numbers\n  As a user\n  I want to divide two numbers\n  So that I can perform mathematical operations accurately\n\n  Scenario Outline: Divide two numbers\n    Given I have two numbers <numerator> and <denominator>\n    When I divide <numerator> by <denominator>\n    Then the result should be <result>\n\n    Examples:\n      | numerator | denominator | result |\n      | 6         | 3           | 2      |\n      | 10        | 2           | 5      |\n      | 0         | 5           | 0      |\n      | 8         | 4           | 2      |\n      | 15        | 5           | 3      |\n\n  Scenario: Divide by zero\n    Given I have a number\n    When I try to divide the number by zero\n    Then the operation should fail with an error message\n\n  Scenario Outline: Divide by a number close to zero\n    Given I have a number <numerator>\n    And I have a very small positive number <denominator>\n    When I divide <numerator> by <denominator>\n    Then the result should be positive infinity\n\n    Examples:\n      | numerator | denominator |\n      | 10        | 0.0001      |\n      | 100       | 0.00001     |\n\n"})}),"\n",(0,i.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,i.jsx)(n.p,{children:"While AI-generated tests can be a great tool for initial test coverage or catching basic errors, relying solely on them can lead us down the wrong path if we're not careful.  The true power lies in combining AI's capabilities with human expertise.  By guiding AI with clear requirements and leveraging its strengths in areas like data analysis and automation, we can create a more efficient and effective testing process."}),"\n",(0,i.jsx)(n.admonition,{title:"Disclaimer",type:"note",children:(0,i.jsx)(n.p,{children:"This blog post focuses on the limitations of AI-generated tests for a specific example involving a simple mathematical function. The potential benefits and limitations of AI testing in more complex scenarios are vast and warrant further exploration. Additionally, it's important to acknowledge the potential for biases inherent in the training data used for AI models, which can impact the results generated."})})]})}function u(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},7367:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/ai-requirements-first-0b5d54e951fdc0fbf9037f97d5f15dad.jpeg"},1151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>o});var i=t(7294);const s={},r=i.createContext(s);function o(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);