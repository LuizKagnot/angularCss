import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormularioComponent } from './formulario/formulario.component';
import { RodapeComponent } from './rodape/rodape.component';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { MeioComponent } from './meio/meio.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    RodapeComponent,
    CabecalhoComponent,
    MeioComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
