import { NextFunction, Request, Response } from "express";

export function exampleMiddleware(req: Request, res: Response, next: NextFunction) {
    /*
    
        interface PayLoad {
            sub: string;
    
        }
    
        const authToken = req.headers.authorization;
    
        if (!authToken) {
            return res.status(401).end();
        }
    
        const [, token] = authToken.split(' ')
    
        try {
            // Valida o token
            const { sub } = verify(token, process.env.JWT_SECRET) as PayLoad;
    
            // Recupara Id Token e coloca em uma variável no request
            req.user_id = sub;
    
            return next()
        } catch {
            return res.status(401).end()
        }
    */

    console.log('Middleware funcionando')
    return next()
}