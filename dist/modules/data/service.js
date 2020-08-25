"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = require("./schema");
class PictureService {
    addPicture(user_params, callback) {
        const _session = new schema_1.default(user_params);
        _session.save(callback);
    }
    filterPicture(query, callback) {
        schema_1.default.findOne(query, callback);
    }
    getAllPicture(callback) {
        schema_1.default.find(callback);
    }
    updatePicture(user_params, callback) {
        const query = { _id: user_params._id };
        schema_1.default.findOneAndUpdate(query, user_params, callback);
    }
    deletePicture(_id, callback) {
        const query = { _id: _id };
        schema_1.default.deleteOne(query, callback);
    }
}
exports.default = PictureService;
