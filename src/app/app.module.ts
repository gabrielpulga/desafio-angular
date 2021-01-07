import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './navegacao/menu/menu.component';
import { LoginComponent } from './navegacao/login/login.component';
import { ListaDeFotosComponent } from './navegacao/lista-de-fotos/lista-de-fotos.component';
import { ListaDeUsuariosComponent } from './navegacao/lista-de-usuarios/lista-de-usuarios.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LoginComponent,
    ListaDeFotosComponent,
    ListaDeUsuariosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
