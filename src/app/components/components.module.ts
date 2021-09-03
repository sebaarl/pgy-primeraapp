import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { PiepaginaComponent } from './piepagina/piepagina.component';

@NgModule({
  declarations: [EncabezadoComponent, PiepaginaComponent],
  exports: [EncabezadoComponent, PiepaginaComponent],
  imports: [
    CommonModule,
    IonicModule,
  ]
})
export class ComponentsModule {}
