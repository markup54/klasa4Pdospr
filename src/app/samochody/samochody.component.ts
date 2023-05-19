import { Component, OnInit } from '@angular/core';
import { Samochod } from '../samochod';

@Component({
  selector: 'app-samochody',
  templateUrl: './samochody.component.html',
  styleUrls: ['./samochody.component.css']
})
export class SamochodyComponent implements OnInit {

  constructor() { }
  samochody:Samochod[]=[
    new Samochod("Renault","Clio","../../assets/sam1.jpg"),
    new Samochod("Skoda","Fabia","../../assets/sam2.jpg"),
    new Samochod("Jaguar","XJS","../../assets/sam3.jpg")
  ]
  ngOnInit(): void {
  }
  aktualnySamochod?:Samochod;
  pokaz(samochod:Samochod):void{
    this.aktualnySamochod = samochod;
  }
}
