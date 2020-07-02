import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';


// confirguracion para el idioma
import {registerLocaleData} from '@angular/common';
import LocalEs from '@angular/common/locales/es';
registerLocaleData(LocalEs);


import { AppComponent } from './app.component';
import { CapitalizadoPipe } from './pipes/capitalizado.pipe';
import { DomseguroPipe } from './pipes/domseguro.pipe';
import { ContrasenaPipe } from './pipes/contrasena.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CapitalizadoPipe,
    DomseguroPipe,
    ContrasenaPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    // este provide tambien se agrega para el idioma, previa importacion arriba del LOCAL_ID
   // aca estamos diciendo que el idioma por defecto de nuestra aplicacion sera el espaniol
    {provide: LOCALE_ID,
    useValue: 'es'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
