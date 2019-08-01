import koa from "koa"
const app = new koa()

import api from "./routes/api"

import serve from "koa-static"

app
    .use(api.routes())
    .use(api.allowedMethods())
    .use(serve("./spa"))


const URL = 5000
app.listen(URL, () => console.log("http://localhost:" + URL))