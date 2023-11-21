import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaComponent } from './component/lista/lista.component';
import { AutoresComponent } from './component/autores/autores.component';
import { EliminarComponent } from './component/eliminar/eliminar.component';
import { EditarComponent } from './component/editar/editar.component';
import { MostrarComponent } from './component/mostrar/mostrar.component';
import { AddBookComponent } from './component/add-book/add-book.component';
import { AgregarComponent } from './component/agregar/agregar.component';

const routes: Routes = [
  {path:"ppal",component:ListaComponent},
  {path:"autores",component:AutoresComponent},
  {path:"eliminar", component:EliminarComponent},
  {path:"editar",component:EditarComponent},
  {path:"mostrar",component:MostrarComponent},
  {path:"agregar",component:AddBookComponent},
  {path:"agregado", component:AgregarComponent},
  {path:"**",component:ListaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
