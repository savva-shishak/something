import Router from "koa-router"
import koaBody from "koa-body"

const router = new Router()

import Users from "./../db/index"

router.post("/api/login", koaBody(), async ctx => {
    
    ctx.body = await Users.findOne({where: ctx.request.body})
})

router.post("/api/sigin", koaBody(), async ctx => {
    await Users
        .create(ctx.request.body)
        .then(res => ctx.body = true)
        .catch(err => ctx.body = false)
})

module.exports = router