import { ObjetosComponent } from './objetos/objetos.component';
import { ItensCadastroComponent } from './itens-cadastro/itens-cadastro.component';
import { ItensComponent } from './itens/itens.component';
import { ProcessoCadastroComponent } from './processo-cadastro/processo-cadastro.component';
import { ProcessoComponent } from './processo/processo.component';
import { LoginComponent } from './login/login.component';

import { ModuleWithProviders, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


//configurando as rotas 
const appRoutes: Routes = [
    {path: '', component: LoginComponent},
    {path: 'processos', component: ProcessoComponent},
    {path: 'processo_cadastro', component: ProcessoCadastroComponent},
    {path: 'itens', component: ItensComponent},
    {path: 'itens_cadastro', component: ItensCadastroComponent},
    {path: 'objetos', component: ObjetosComponent}
    
]


export const routing = RouterModule.forRoot(appRoutes);