import { Request, Response } from 'express';
import { insufficientParameters, mongoError, successResponse, failureResponse } from '../modules/common/service';
import { IPicture } from '../modules/data/model';
import PictureService from '../modules/data/service';
import e = require('express');

let pictureObj = {
    name:"",
    size: "",
    type: "",
    url : "",
        
    }



export class PictureController {

    private picture_service: PictureService = new PictureService();

    public add_picture(req: Request, res: Response) {

        // this check whether all the filds were send through the erquest or not
        if (req.body.location && req.body.owner && req.body.picture.length > 0
             
            ) {
            let pictureArray=[{}] as IPicture["picture"];
            pictureArray.pop();
            let pictureObj:IPicture["picture"]
         
            req.body.picture.forEach(element => {
                pictureArray.push
                (
                    {
                    name:element.name,
                    size: element.size,
                    type: element.type,
                    url : element.url,
                }   
                )
            });
            const picture_params: IPicture = {
              
                picture : pictureArray,
                owner: req.body.owner,
                location: req.body.location
               
            };
            console.log(picture_params);
            this.picture_service.addPicture(picture_params, (err: any, user_data: IPicture) => {
                if (err) {
                    mongoError(err, res);
                } else {
                    successResponse('create user successfull', user_data, res);
                }
            });
        } else {
            // error response if some fields are missing in request body
            insufficientParameters(res);
        }
    }

    public get_picture(req: Request, res: Response) {
        if (req.params.id) {
            const picture_filter = { _id: req.params.id };
            this.picture_service.filterPicture(picture_filter, (err: any, picture_data: IPicture) => {
                if (err) {
                    mongoError(err, res);
                } else {
                    successResponse('get picture successfull', picture_data, res);
                }
            });
        } else {
            insufficientParameters(res);
        }
    }


    public get_all_pictures(req: Request, res: Response) {
        
            this.picture_service.getAllPicture((err: any, picture_data: IPicture[]) => {
                if (err) {
                    mongoError(err, res);
                } else {
                    successResponse('get picture successfull', picture_data, res);
                }
            });
        } 
    


    public update_picture(req: Request, res: Response) {
        if (req.params.id &&
            req.body.owner || req.body.location || req.body.picture.length>0
        )
            {
            const picture_filter = { _id: req.params.id };
            this.picture_service.filterPicture(picture_filter, (err: any, picture_data: IPicture) => {
                if (err) {
                    mongoError(err, res);
                } else if (picture_data) {
                    
            let pictureArray=[{}] as IPicture["picture"];
            pictureArray.pop();
            req.body.picture.forEach(element => {
                pictureArray.push
                (
                    {
                    name:element.name,
                    size: element.size,
                    type: element.type,
                    url : element.url,
                }   
                )
            });
                    const user_params: IPicture = {
                        _id: req.params.id,
                        picture: req.body.picture.length>0 ? pictureArray : picture_data.picture,
                        owner: req.body.owner ? req.body.owner : picture_data.owner,
                        location: req.body.location ? req.body.location : picture_data.location,
                       
                    };
                    this.picture_service.updatePicture(user_params, (err: any) => {
                        if (err) {
                            mongoError(err, res);
                        } else {
                            successResponse('update Picture successfull', user_params, res);
                        }
                    });
                } else {
                    failureResponse('invalid Picture Id', null, res);
                }
            });
        } else {
            insufficientParameters(res);
        }
    }

    public delete_picture(req: Request, res: Response) {
        if (req.params.id) {
            this.picture_service.deletePicture(req.params.id, (err: any, delete_details) => {
                if (err) {
                    mongoError(err, res);
                } else if (delete_details.deletedCount !== 0) {
                    successResponse('Delete Picture successfull', null, res);
                } else {
                    failureResponse('Invalid Picture', null, res);
                }
            });
        } else {
            insufficientParameters(res);
        }
    }
}