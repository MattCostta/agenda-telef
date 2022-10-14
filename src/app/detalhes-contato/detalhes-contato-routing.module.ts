import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalhesContatoPage } from './detalhes-contato.page';

const routes: Routes = [
  {
    path: '',
    component: DetalhesContatoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalhesContatoPageRoutingModule {}
