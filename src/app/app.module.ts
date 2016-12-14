import { routing } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProcessoComponent } from './processo/processo.component';
import { LoginComponent } from './login/login.component';
import { ProcessoCadastroComponent } from './processo-cadastro/processo-cadastro.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProcessoComponent,
    LoginComponent,
    ProcessoCadastroComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
