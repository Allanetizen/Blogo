import { create, router as _router, defaults } from "json-server";
const server= create();
const router = _router("./data/db.json");
const middlewares=defaults({
    static: "./build"
})

const port = process.env.PORT ||5000;
server.use(middlewares);
server.use(
    jsonServer.rewriter({
        "/api/*":"/$1",
    })
);
server.use(router);
server/listen(port,()=>{ console.log(`Server is running on ${port}`);
} );