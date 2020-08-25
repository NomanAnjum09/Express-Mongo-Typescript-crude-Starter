"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PictureController = void 0;
const service_1 = require("../modules/common/service");
const service_2 = require("../modules/data/service");
let pictureObj = {
    name: "",
    size: "",
    type: "",
    url: "",
};
class PictureController {
    constructor() {
        this.picture_service = new service_2.default();
    }
    add_picture(req, res) {
        // this check whether all the filds were send through the erquest or not
        if (req.body.location && req.body.owner && req.body.picture.length > 0) {
            let pictureArray = [{}];
            pictureArray.pop();
            let pictureObj;
            req.body.picture.forEach(element => {
                pictureArray.push({
                    name: element.name,
                    size: element.size,
                    type: element.type,
                    url: element.url,
                });
            });
            const picture_params = {
                picture: pictureArray,
                owner: req.body.owner,
                location: req.body.location
            };
            console.log(picture_params);
            this.picture_service.addPicture(picture_params, (err, user_data) => {
                if (err) {
                    service_1.mongoError(err, res);
                }
                else {
                    service_1.successResponse('create user successfull', user_data, res);
                }
            });
        }
        else {
            // error response if some fields are missing in request body
            service_1.insufficientParameters(res);
        }
    }
    get_picture(req, res) {
        if (req.params.id) {
            const picture_filter = { _id: req.params.id };
            this.picture_service.filterPicture(picture_filter, (err, picture_data) => {
                if (err) {
                    service_1.mongoError(err, res);
                }
                else {
                    service_1.successResponse('get picture successfull', picture_data, res);
                }
            });
        }
        else {
            service_1.insufficientParameters(res);
        }
    }
    get_all_pictures(req, res) {
        this.picture_service.getAllPicture((err, picture_data) => {
            if (err) {
                service_1.mongoError(err, res);
            }
            else {
                service_1.successResponse('get picture successfull', picture_data, res);
            }
        });
    }
    update_picture(req, res) {
        if (req.params.id &&
            req.body.owner || req.body.location || req.body.picture.length > 0) {
            const picture_filter = { _id: req.params.id };
            this.picture_service.filterPicture(picture_filter, (err, picture_data) => {
                if (err) {
                    service_1.mongoError(err, res);
                }
                else if (picture_data) {
                    let pictureArray = [{}];
                    pictureArray.pop();
                    req.body.picture.forEach(element => {
                        pictureArray.push({
                            name: element.name,
                            size: element.size,
                            type: element.type,
                            url: element.url,
                        });
                    });
                    const user_params = {
                        _id: req.params.id,
                        picture: req.body.picture.length > 0 ? pictureArray : picture_data.picture,
                        owner: req.body.owner ? req.body.owner : picture_data.owner,
                        location: req.body.location ? req.body.location : picture_data.location,
                    };
                    this.picture_service.updatePicture(user_params, (err) => {
                        if (err) {
                            service_1.mongoError(err, res);
                        }
                        else {
                            service_1.successResponse('update Picture successfull', user_params, res);
                        }
                    });
                }
                else {
                    service_1.failureResponse('invalid Picture Id', null, res);
                }
            });
        }
        else {
            service_1.insufficientParameters(res);
        }
    }
    delete_picture(req, res) {
        if (req.params.id) {
            this.picture_service.deletePicture(req.params.id, (err, delete_details) => {
                if (err) {
                    service_1.mongoError(err, res);
                }
                else if (delete_details.deletedCount !== 0) {
                    service_1.successResponse('Delete Picture successfull', null, res);
                }
                else {
                    service_1.failureResponse('Invalid Picture', null, res);
                }
            });
        }
        else {
            service_1.insufficientParameters(res);
        }
    }
}
exports.PictureController = PictureController;
