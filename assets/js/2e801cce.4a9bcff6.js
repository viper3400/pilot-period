"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[450],{6029:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"automation-vs-test-tool","metadata":{"permalink":"/automation-vs-test-tool","source":"@site/blog/2022-11-12-automation-vs-test-tool.mdx","title":"Automation vs. Testframework","description":"In the discussion about the right framework for the automatic execution of tests","date":"2022-11-12T00:00:00.000Z","formattedDate":"November 12, 2022","tags":[{"label":"testing","permalink":"/tags/testing"},{"label":"automation","permalink":"/tags/automation"},{"label":"serenity-js","permalink":"/tags/serenity-js"}],"readingTime":1.125,"hasTruncateMarker":false,"authors":[{"name":"Jan Graefe","title":"Maintainer","url":"https://jangraefe.de","imageURL":"https://static.vecteezy.com/system/resources/thumbnails/006/487/917/small_2x/man-avatar-icon-free-vector.jpg","key":"jang"}],"frontMatter":{"slug":"automation-vs-test-tool","title":"Automation vs. Testframework","authors":["jang"],"tags":["testing","automation","serenity-js"]}},"content":"In the discussion about the right framework for the automatic execution of tests\\nfor web applications can quickly lead to clashes. It is indicative of this \\nthat it is often about the technical aspects of a framework or tool. \\nThe more heated the discussion, the more the aspect of testing slips into the background. \\nLet\'s take a buzzword and take it apart: **Test automation**. \\nThis word consists of the Share **Test** and **Automation**. \\nLet\'s take a look at an example. We have a number of d\u2202irectories. \\nWe look for files in these directories. \\nIs a file older than 60 days, we delete them. The code in an automation script might look like this:\\n\\n```ts\\nvar folders = [ \'pictures\', \'documents\', \'desktop\' ];\\n\\nforeach(folder in folders) {\\n    var files = folder.getFiles();\\n    foreach (file in files) {\\n        var fileAge = file.getAge();\\n        if (fileAge > Days(60))\\n          delete(file)\\n    }\\n}\\n```\\n\\nSo we have automated the deletion of old files. But have we **tested** that the files have been deleted? Let\'s move on to **Browser Automation**. Here, too, we have a Automation job: Open a search engine and find how to needs to boil an egg.\\n\\n```ts\\nvar webpage = browser.getUrl(\'https://duckduckgo.com\');\\n\\nwebpage.enterSearchValue(\'how to boil an egg\');\\nwebpage.click(searchButton);\\n\\n```\\n\\nAgain: We have the search **automated**t, **not** but the search result **checked**. So we don\'t know if our search actually worked."}]}')}}]);