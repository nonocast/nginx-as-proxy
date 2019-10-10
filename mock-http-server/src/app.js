import Koa from "koa";
import koaLogger from "koa-logger";
import Router from "koa-router";
import Debug from "debug";
const debug = Debug("app");

export default class App {
  constructor() {
    this.app = new Koa();

    let router = new Router();

    router.get("/", ctx => {
      ctx.body = "hello world";
    });

    router.get("/foo", ctx => {
      ctx.body = "/foo";
    });

    router.get("/bar", ctx => {
      ctx.body = "/bar";
    });

    this.app
      .use(koaLogger())
      .use(router.routes())
      .use(router.allowedMethods());
  }

  open() {
    this.server = this.app.listen(3000);
  }

  close() {
    this.server.close();
  }
}
