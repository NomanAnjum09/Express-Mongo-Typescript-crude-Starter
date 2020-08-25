import { IPicture } from './model';
import Picture from './schema';

export default class PictureService {
    
    public addPicture(user_params: IPicture, callback: any) {
        const _session = new Picture(user_params);
        _session.save(callback);
    }

    public filterPicture(query: any, callback: any) {
        Picture.findOne(query, callback);
        
    }


    public getAllPicture(callback: any){
        Picture.find(callback);
    }

    public updatePicture(user_params: IPicture, callback: any) {
        const query = { _id: user_params._id };
        Picture.findOneAndUpdate(query, user_params, callback);
    }
    
    public deletePicture(_id: String, callback: any) {
        const query = { _id: _id };
        Picture.deleteOne(query, callback);
    }

}