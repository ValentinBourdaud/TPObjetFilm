 

export class Trailer{
    postdate : string;
    url : string;
    type : string;
    exclusive : boolean;
    hd : boolean;    

    constructor(postdate : string, url : string, type: string, exclusive : boolean,
    hd : boolean){
        this.postdate =postdate;
        this.url = url;
        this.type = type;
        this.exclusive = exclusive;
        this.hd = hd;
    }
}
