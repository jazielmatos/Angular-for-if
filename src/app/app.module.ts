import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './paginas/home/home.component';
import { SobreComponent } from './paginas/sobre/sobre.component';
import { TabelasComponent } from './paginas/tabelas/tabelas.component';
import { PipeCpfPipe } from './pipes/pipe-cpf.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SobreComponent,
    TabelasComponent,
    PipeCpfPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
