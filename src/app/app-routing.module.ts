import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'contratos',
    loadChildren: () => import('./contratos/contratos.module').then(m => m.ContratosModule)
  },
  { path: '', redirectTo: 'contratos', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
