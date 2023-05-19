export class Samochod{
    marka:string;
    model:string;
    liczba_polubien:number;
    obraz:string;

    constructor(m:string,mo:string,o:string){
        this.marka = m;
        this.model = mo;
        this.liczba_polubien = 0;
        this.obraz = o;
    }

}