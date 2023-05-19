import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent implements OnInit {

  constructor() { }
  napis:string = "Pokaż";
  pokazany:boolean = false;
  ngOnInit(): void {
  }
  zmiana():void{
    if(this.pokazany){
      this.napis = "Pokaż";
      this.pokazany = false;
    }
    else{
      this.napis ="Ukryj";
      this.pokazany = true;
    }
  }
}
