import { Application, Request, Response } from 'express';
import { PictureController } from '../controllers/PictureController';

export class PictureRoutes {

    private picture_controller: PictureController = new PictureController();

    public route(app: Application) {
        
        app.post('/api/data', (req: Request, res: Response) => {
            this.picture_controller.add_picture(req, res);
        });

        app.get('/api/data/:id', (req: Request, res: Response) => {
            this.picture_controller.get_picture(req, res);
        });
        app.get('/api/data', (req: Request, res: Response) => {
            this.picture_controller.get_all_pictures(req, res);
        });
        app.put('/api/data/:id', (req: Request, res: Response) => {
            this.picture_controller.update_picture(req, res);
        });

        app.delete('/api/data/:id', (req: Request, res: Response) => {
            this.picture_controller.delete_picture(req, res);
        });

    }
}