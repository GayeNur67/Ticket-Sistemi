import { AppItem } from "./app.item";
import { ModelItem } from "./model-item";

export class Model {
    name: string;
    items: AppItem[];
    url: string;
    children?: ModelItem[];

    constructor() {
        this.name = "Ticket";
        this.items = [
            { id: 1, talepCesidi: 'Kahvalti', yapildi:true, tesis: 'meksika', bolum: 'No', talepTipi: 'No', isinTuru: 'No', talepEden: 'No' ,acilDurum:'acil', description:'mesaj', fileName: null , assignedPerson: ''},
            { id: 2, talepCesidi: 'Kahvalti', yapildi:false ,tesis: 'gebze', bolum: 'No', talepTipi: 'No', isinTuru: 'No', talepEden: 'No' ,acilDurum:'normal', description:'mesaj', fileName: null , assignedPerson: ''},
            { id: 3, talepCesidi: 'Kahvalti', yapildi:true, tesis: 'sirbistan', bolum: 'No', talepTipi: 'No', isinTuru: 'No', talepEden: 'No' ,acilDurum:'normal', description:'mesaj', fileName: null , assignedPerson:''}
        ];
    }
}

const m = new Model();
