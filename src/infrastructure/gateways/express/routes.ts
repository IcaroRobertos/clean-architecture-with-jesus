import { taskController } from "../../ports/http/controllers/task_controller"
import { Request, Response } from "express"

export interface Route {
    fun: any,
    method: 'get' | 'post' | 'put' | 'delete' | 'patch' | 'options',
    path: string,
}

export const routes: Array<Route> = [
    {
        method: "post",
        path : "/task",
        fun: taskController.create
    },
    {
        method: "get",
        path : "/",
        fun: (req: Request, res: Response) => {
            res.send('Hello World!');
        },
    }
]