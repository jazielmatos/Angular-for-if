import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './paginas/home/home.component';
import { SobreComponent } from './paginas/sobre/sobre.component';
import { TabelasComponent } from './paginas/tabelas/tabelas.component'; //IMPORTANDO AS ROTAS

const routes: Routes = [ //ROTAS DECLARADAS

{ path: '', component: HomeComponent },
{ path: 'sobre', component: SobreComponent },
{ path: 'tabela', component: TabelasComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], //MODULO DO ROUTER
  exports: [RouterModule] //EXPORTAR MODULO DO ROUTER
})
export class AppRoutingModule { }
