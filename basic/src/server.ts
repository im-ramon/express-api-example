import * as dotenv from 'dotenv';
dotenv.config()

import cors from 'cors';
import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors'; // Keep always after express import

import { router } from './routes';

const app = express()
app.use(express.json())

// CORS allow all origins
app.options('*', cors())
app.use(cors())

app.use(router)

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {

    // If it's a known error
    if (err instanceof Error) {
        return res.status(400).json({
            error: err.message
        })
    }

    // If it's an unknown error
    return res.status(500).json({
        status: 'error',
        message: 'Internal server error.'
    })
})

app.listen(process.env.PORT, () => console.log("Server started. Port: " + process.env.PORT))