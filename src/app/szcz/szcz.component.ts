import { Component, OnInit, Input } from '@angular/core';
import { Samochod } from '../samochod';

@Component({
  selector: 'app-szcz',
  templateUrl: './szcz.component.html',
  styleUrls: ['./szcz.component.css']
})
export class SzczComponent implements OnInit {

  @Input() aktualnySamochod?:Samochod;
  constructor() { }

  ngOnInit(): void {
  }
  
}
