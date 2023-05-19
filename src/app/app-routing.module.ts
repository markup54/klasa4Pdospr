import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SamochodyComponent } from './samochody/samochody.component';
import { TestComponent } from './test/test.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { NieznalezionyComponent } from './nieznaleziony/nieznaleziony.component';

const routes: Routes = [
  {path:'samochody', component:SamochodyComponent},
  {path:'testy', component:TestComponent},
  {path:'galeria',component:GaleriaComponent},
  {path:'**',component:NieznalezionyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
