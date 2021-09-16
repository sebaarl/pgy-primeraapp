import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.page.html',
  styleUrls: ['./inputs.page.scss'],
})
export class InputsPage implements OnInit {

  n1 : number = 0
  n2 : number = 0

  constructor(public alertController: AlertController) {}

  ngOnInit() {
  }

  async onClick() {

    let resultado = this.n1 + this.n2;

    const alert = await this.alertController.create({
      header: 'Resultado de la suma es:',
      message: resultado.toString(),
      buttons: ['Aceptar']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

}
