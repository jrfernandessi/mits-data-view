import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarContratosComponent } from './pages/listar-contratos/listar-contratos.component';
import { FormularioContratoComponent } from './pages/formulario-contrato/formulario-contrato.component';

const routes: Routes = [
  { path: '', component: ListarContratosComponent },
  { path: 'novo', component: FormularioContratoComponent },
  { path: 'editar/:id', component: FormularioContratoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContratosRoutingModule {}
