import { ProcessoCadastroComponent } from './processo-cadastro/processo-cadastro.component';
import { ProcessoComponent } from './processo/processo.component';
import { LoginComponent } from './login/login.component';

import { ModuleWithProviders, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


//configurando as rotas 
const appRoutes: Routes = [
    {path: '', component: LoginComponent},
    {path: 'processos', component: ProcessoComponent},
    {path: 'processo_cadastro', component: ProcessoCadastroComponent}
]


export const routing = RouterModule.forRoot(appRoutes);