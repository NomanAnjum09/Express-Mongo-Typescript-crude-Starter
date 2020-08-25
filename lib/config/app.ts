import * as express from "express";
import * as bodyParser from "body-parser";
import * as mongoose from 'mongoose';
import environment from "../environment";

import { Routes } from "../routes/routes";
import {CommonRoutes} from "../routes/comonRoutes"
import {UserRoutes} from "../routes/user_routes"
import {PictureRoutes} from "../routes/picture_routes"

class App {
   public app: express.Application;
   public mongoUrl: string = 'mongodb://localhost/' + environment.getDBName();

   private picture_routes: PictureRoutes = new PictureRoutes();
   private user_routes: UserRoutes = new UserRoutes();
   private test_routes: Routes = new Routes();
   private common_routes: CommonRoutes = new CommonRoutes();

   constructor() {
      this.app = express();
      this.config();
      this.mongoSetup();

      this.picture_routes.route(this.app);
      this.user_routes.route(this.app);
      this.test_routes.route(this.app);
      this.common_routes.route(this.app);
      
   }
private config(): void {
      // support application/json type post data
      this.app.use(bodyParser.json());
      //support application/x-www-form-urlencoded post data
      this.app.use(bodyParser.urlencoded({ extended: false }));
   }

private mongoSetup(): void {
      mongoose.connect(this.mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false });
   }
}
export default new App().app;