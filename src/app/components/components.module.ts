import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { PiepaginaComponent } from './piepagina/piepagina.component';
import { RefreshComponent } from './refresh/refresh.component';

@NgModule({
  declarations: [EncabezadoComponent, PiepaginaComponent, RefreshComponent],
  exports: [EncabezadoComponent, PiepaginaComponent, RefreshComponent],
  imports: [
    CommonModule,
    IonicModule,
  ]
})
export class ComponentsModule {}
