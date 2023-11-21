import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaComponent } from './component/lista/lista.component';
import { CabeceraComponent } from './component/cabecera/cabecera.component';
import { FooterComponent } from './component/footer/footer.component';
import { HttpClientModule } from "@angular/common/http";
import { AddBookComponent } from './component/add-book/add-book.component';
import { EliminarComponent } from './component/eliminar/eliminar.component';
import { EditarComponent } from './component/editar/editar.component';
import { AutoresComponent } from './component/autores/autores.component';
import { MostrarComponent } from './component/mostrar/mostrar.component';
import { AgregarComponent } from './component/agregar/agregar.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaComponent,
    CabeceraComponent,
    FooterComponent,
    AddBookComponent,
    EliminarComponent,
    EditarComponent,
    AutoresComponent,
    MostrarComponent,
    AgregarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
