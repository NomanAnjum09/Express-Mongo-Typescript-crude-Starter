export interface IPicture {
    _id?: String;
    picture:[ {
        name: String;
        size: String;
        type: String;
        url : String;
    }];
    owner: String;
    location: String;
    is_deleted?: Boolean;
}