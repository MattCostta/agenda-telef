import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'lista-contatos',
    pathMatch: 'full'
  },
  {
    path: 'lista-contatos',
    loadChildren: () => import('./lista-contatos/lista-contatos.module').then( m => m.ListaContatosPageModule)
  },
  {
    path: 'detalhes-contato/:id',
    loadChildren: () => import('./detalhes-contato/detalhes-contato.module').then( m => m.DetalhesContatoPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
