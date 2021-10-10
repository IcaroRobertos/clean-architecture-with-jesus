import express from "express"
import { Route, routes } from "./routes"

const webserver = (port: number) => {
    const app = express()
    const router = express.Router();
    routes.forEach(({ method, path, fun }: Route) => {
        router[method](path, fun);
    });
    app.use(router);
    app.listen(port, () => {
        console.log(`Example app listening at http://localhost:${port}`)
    })
}

export const init = () => {
    const port = 3000;
    webserver(port)
};



