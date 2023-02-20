import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { SobremiComponent } from './sobremi/sobremi.component';
import { ExperienciasLaboralesComponent } from './experiencias-laborales/experiencias-laborales.component';
import { EstudiosCursadosComponent } from './estudios-cursados/estudios-cursados.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EncabezadoComponent,
    SobremiComponent,
    ExperienciasLaboralesComponent,
    EstudiosCursadosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
