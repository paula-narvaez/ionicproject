import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage {

  pageTitle = 'inicio';
  isNotInicio = false;
  loading: HTMLIonLoadingElement;

  constructor(private loadingCtrl:LoadingController) {}

  ngOnInit(){
    this.cargarLoading('Bienvenido a RegistApp');
    console.log('ngOnInit');
  }

  ngOnDestroy(){
    this.cargarLoading('Cargando');
    console.log('ngOnDestroy');
  }

  ionViewWillEnter(){
    console.log('ionViewWillEnter');
  }

  ionViewDidEnter(){
    console.log('ionViewDidEnter');
  }

  ionViewWillLeave(){
    console.log('ionViewWillLeave');
  }

  ionViewDidLeave(){
    console.log('ionViewDidLeave');
  }

  cargarLoading(message:string){
    this.presentLoading(message);

    setTimeout(() => {
      this.loading.dismiss();
    }, 2000);
  }

  async presentLoading(message:string){
    this.loading = await this.loadingCtrl.create({
      message,
    });
    await this.loading.present();
  }

}
