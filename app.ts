import * as express from "express";
import {Request, Response} from "express";

// create and setup express app
const app = express();

// register routes

app.get("/helloWorld", (req: Request, res: Response) => {
    // here we will have logic to return all users
    res.json({
        message: "Hello World"
    })
});

app.listen(3001);
