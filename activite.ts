export class Activite{
    private _id :number; //un attribut privé de type number.
private _title : string; //un attribut privé de type string.
private _Description : string; // un attribut privé de type string.
private _urlYoutube :string; //un attribut privé de type string.


    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get title(): string {
        return this._title;
    }

    set title(value: string) {
        this._title = value;
    }

    get Description(): string {
        return this._Description;
    }

    set Description(value: string) {
        this._Description = value;
    }

    get urlYoutube(): string {
        return this._urlYoutube;
    }

    set urlYoutube(value: string) {
        this._urlYoutube = value;
    }

    constructor(id: number, title: string, Description: string, urlYoutube: string) {
        this._id = id;
        this._title = title;
        this._Description = Description;
        this._urlYoutube = urlYoutube;
    }
}
