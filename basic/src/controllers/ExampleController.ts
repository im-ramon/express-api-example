import { Request, Response } from 'express';
import { ExampleService } from '../services/ExampleService';

class ExampleController {
    async handle(req: Request, res: Response) {
        const { exampleData } = req.query; // Example type data - Check @types/express/index.d.ts
        const exampleService = new ExampleService()

        const response = await exampleService.execute(exampleData)

        return res.json(response)
    }
}

export { ExampleController };
