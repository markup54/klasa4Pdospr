import { Component, OnInit } from '@angular/core';
import { Pytanie } from 'src/pytanie';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor() { }
udzielonaOdpowiedz?:number;
zdobytePunkty:number =0;
  ngOnInit(): void {
  }
  aktualnePytanie:number = 0;
  pytania:Pytanie [] =[
    new Pytanie("Stolicą Polski jest",["Zabrze","Warszawa","Bytom"],1),
    new Pytanie("Stolicą Polski było",["Zabrze","Bytom","Gniezno"],2),
    new Pytanie("Stolicą Polski nie było",["Zabrze","Gniezno","Kraków"],0),
  ]

  dalej():void{
    console.log(this.udzielonaOdpowiedz);
    if(this.udzielonaOdpowiedz == this.pytania[this.aktualnePytanie].dobra)
    {
      this.zdobytePunkty++;
    }

    this.aktualnePytanie++;
  }
}
