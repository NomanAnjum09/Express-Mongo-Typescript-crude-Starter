"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const environment_1 = require("../environment");
const routes_1 = require("../routes/routes");
const comonRoutes_1 = require("../routes/comonRoutes");
const user_routes_1 = require("../routes/user_routes");
const picture_routes_1 = require("../routes/picture_routes");
class App {
    constructor() {
        this.mongoUrl = 'mongodb://localhost/' + environment_1.default.getDBName();
        this.picture_routes = new picture_routes_1.PictureRoutes();
        this.user_routes = new user_routes_1.UserRoutes();
        this.test_routes = new routes_1.Routes();
        this.common_routes = new comonRoutes_1.CommonRoutes();
        this.app = express();
        this.config();
        this.mongoSetup();
        this.picture_routes.route(this.app);
        this.user_routes.route(this.app);
        this.test_routes.route(this.app);
        this.common_routes.route(this.app);
    }
    config() {
        // support application/json type post data
        this.app.use(bodyParser.json());
        //support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }
    mongoSetup() {
        mongoose.connect(this.mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false });
    }
}
exports.default = new App().app;
