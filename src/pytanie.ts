export class Pytanie {
    tresc: string;
    czydobrze: boolean;
    odpowiedzi: string[];
    dobra: number;
    constructor(tr: string, odp: string[], dobra: number) {
        this.tresc = tr;
        this.czydobrze = false;
        this.odpowiedzi = odp;
        this.dobra = dobra;
    }
}