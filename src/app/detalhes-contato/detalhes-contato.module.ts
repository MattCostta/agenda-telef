import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalhesContatoPageRoutingModule } from './detalhes-contato-routing.module';

import { DetalhesContatoPage } from './detalhes-contato.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalhesContatoPageRoutingModule
  ],
  declarations: [DetalhesContatoPage]
})
export class DetalhesContatoPageModule {}
