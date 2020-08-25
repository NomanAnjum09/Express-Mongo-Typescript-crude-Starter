import * as mongoose from 'mongoose';
const Schema = mongoose.Schema;

const schema = new Schema({

    picture:[ {
        name: String,
        size: String,
        type: String,
        url : String,
    }],
    owner: String,
    location: String,
    is_deleted: {
        type: Boolean,
        default: false
    },
},
{ typeKey: '$type' }
);


export default mongoose.model('pictures', schema);