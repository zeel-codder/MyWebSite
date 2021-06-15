---
title: "Mongoose Modal OverwriteModelError"
keywords: "OverwriteModelError: Cannot overwrite `name of schema` model once compiled."
---


# Mongoose Modal OverwriteModelError

While working with mongoose in next js with mongodb you get one error while creating modal in mongoose. The error name is OverwriteModelError.


## Code for creating modal in mongoose

```javascript
const BlogInfo=mongoose.model(process.env.BLOG_INFO, Blog);
const UserInfo= mongoose.model(process.env.User, User);
```

## Error log is given bellow

```bash
OverwriteModelError: Cannot overwrite `MyIntrosuction.BlogInfo` model once compiled.
    at Mongoose.model (/home/zeel/Desktop/web/My_Introduction/my-intro-nextjs/node_modules/mongoose/lib/index.js:549:13)
    at eval (webpack-internal:///./server/database/DataBaseOperationsBlogInfo.js:22:25)
    at Object../server/database/DataBaseOperationsBlogInfo.js (/home/zeel/Desktop/web/My_Introduction/my-intro-nextjs/.next/server/pages/api/bloginfoone.js:126:1)
    at __webpack_require__ (/home/zeel/Desktop/web/My_Introduction/my-intro-nextjs/.next/server/pages/api/bloginfoone.js:23:31)
    at eval (webpack-internal:///./pages/api/bloginfoone.js:7:16)
    at Module../pages/api/bloginfoone.js (/home/zeel/Desktop/web/My_Introduction/my-intro-nextjs/.next/server/pages/api/bloginfoone.js:104:1)
    at __webpack_require__ (/home/zeel/Desktop/web/My_Introduction/my-intro-nextjs/.next/server/pages/api/bloginfoone.js:23:31)
    at /home/zeel/Desktop/web/My_Introduction/my-intro-nextjs/.next/server/pages/api/bloginfoone.js:91:18
    at Object.<anonymous> (/home/zeel/Desktop/web/My_Introduction/my-intro-nextjs/.next/server/pages/api/bloginfoone.js:94:10)
    at Module._compile (internal/modules/cjs/loader.js:778:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:789:10)
    at Module.load (internal/modules/cjs/loader.js:653:32)
    at tryModuleLoad (internal/modules/cjs/loader.js:593:12)
    at Function.Module._load (internal/modules/cjs/loader.js:585:3)
    at Module.require (internal/modules/cjs/loader.js:692:17)
    at require (internal/modules/cjs/helpers.js:25:18)
    at DevServer.handleApiRequest (/home/zeel/Desktop/web/My_Introduction/my-intro-nextjs/node_modules/next/dist/next-server/server/next-server.js:66:181)
```


## Solution

```javascript
const BlogInfo=mongoose.models[process.env.BLOG_INFO] || mongoose.model(process.env.BLOG_INFO, Blog);
const UserInfo=mongoose.models[process.env.User] ||  mongoose.model(process.env.User, User);
```
