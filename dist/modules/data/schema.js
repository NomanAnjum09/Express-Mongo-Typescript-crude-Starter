"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const schema = new Schema({
    picture: [{
            name: String,
            size: String,
            type: String,
            url: String,
        }],
    owner: String,
    location: String,
    is_deleted: {
        type: Boolean,
        default: false
    },
}, { typeKey: '$type' });
exports.default = mongoose.model('pictures', schema);
