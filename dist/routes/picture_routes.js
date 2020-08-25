"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PictureRoutes = void 0;
const PictureController_1 = require("../controllers/PictureController");
class PictureRoutes {
    constructor() {
        this.picture_controller = new PictureController_1.PictureController();
    }
    route(app) {
        app.post('/api/data', (req, res) => {
            this.picture_controller.add_picture(req, res);
        });
        app.get('/api/data/:id', (req, res) => {
            this.picture_controller.get_picture(req, res);
        });
        app.get('/api/data', (req, res) => {
            this.picture_controller.get_all_pictures(req, res);
        });
        app.put('/api/data/:id', (req, res) => {
            this.picture_controller.update_picture(req, res);
        });
        app.delete('/api/data/:id', (req, res) => {
            this.picture_controller.delete_picture(req, res);
        });
    }
}
exports.PictureRoutes = PictureRoutes;
