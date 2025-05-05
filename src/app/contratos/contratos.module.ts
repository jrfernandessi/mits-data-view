import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/material.module'; // Criamos já já
import { ContratosRoutingModule } from './contratos-routing.module';

import { ListarContratosComponent } from './pages/listar-contratos/listar-contratos.component';
import { FormularioContratoComponent } from './pages/formulario-contrato/formulario-contrato.component';
import {routes} from '../app.routes';
import {RouterModule} from '@angular/router';
import {HttpClient, HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    ListarContratosComponent,
    FormularioContratoComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    ReactiveFormsModule,
    ContratosRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class ContratosModule { }
