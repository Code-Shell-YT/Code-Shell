
class Video{

    _title
    _description
    _link
    _img

    constructor(title, link, img, description){
        this._title = title;
        this._description = description;
        this._link = link;
        this._img = img;
    }

    getTitle(){
        return this._title;
    }

    getDescription(){
        return this._description;
    }

    getLink(){
        return this._link;
    }

    getImg(){
        return this._img;
    }

}