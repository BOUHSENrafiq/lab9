/**
 *@author rafiq BOUHSEN
 */
export class Activite {
    /** id
     * @type {number}
     */
    private _id: number; //un attribut privé de type number.
    /** title
     * @type {string}
     */
    private _title: string; //un attribut privé de type string.
    /** Description
     * @type {string}
     */
    private _Description: string; // un attribut privé de type string.
    /** urlYoutube
     * @type {string}
     */
    private _urlYoutube: string; //un attribut privé de type string.

    /**
     *  Les getters et les setters.
     */
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

    /**Constructor
     *
     * @param id
     * @param title
     * @param Description
     * @param urlYoutube
     */
    constructor(id: number, title: string, Description: string, urlYoutube: string) {
        this._id = id;
        this._title = title;
        this._Description = Description;
        this._urlYoutube = urlYoutube;
    }
}
