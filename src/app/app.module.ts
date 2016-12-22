import { CatalogoService } from './services/catalogo.service';
import { ItensService } from './services/itens.service';
import { FireService } from './services/fire.service';
import { routing } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProcessoComponent } from './processo/processo.component';
import { LoginComponent } from './login/login.component';
import { ProcessoCadastroComponent } from './processo-cadastro/processo-cadastro.component';
import { ItensComponent } from './itens/itens.component';
import { ItensCadastroComponent } from './itens-cadastro/itens-cadastro.component';
import { ObjetosComponent } from './objetos/objetos.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { CatalogoDetailComponent } from './catalogo-detail/catalogo-detail.component';
import { UnidadesComponent } from './unidades/unidades.component';

const config = {
    apiKey: "AIzaSyAx9-6mKVyEc7HqlpeczGm8mZWHJ2fONqs",
    authDomain: "siscarp-7990a.firebaseapp.com",
    databaseURL: "https://siscarp-7990a.firebaseio.com",
    storageBucket: "siscarp-7990a.appspot.com",
    messagingSenderId: "42924668149"
  }

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProcessoComponent,
    LoginComponent,
    ProcessoCadastroComponent,
    ItensComponent,
    ItensCadastroComponent,
    ObjetosComponent,
    CatalogoComponent,
    CatalogoDetailComponent,
    UnidadesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(config)
  ],
  providers: [
    FireService,
    ItensService,
    CatalogoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
