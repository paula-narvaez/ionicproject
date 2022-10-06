import { Component, OnInit } from '@angular/core';
import { ModalController, NavController, NavParams } from '@ionic/angular';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage  {
    
  pageTitle='login';
  isNotHome= true;
  box = document.getElementById('pantalla');

  //Modelo
  user : any = {
    email:'',
    password:''    
  }

  field : string = '';

  constructor(
    public modalCtrl: ModalController, private toastCtrl: ToastController, private router:Router

  ) { }

  ngOnInit() {
  }

  salida(){
    
    this.box.style.setProperty('visibility', 'hidden');
  }


  async dismiss(){
    await this.modalCtrl.dismiss();
  }

  login(){
    if(this.validarModelo(this.user)){
      this.presentToast('Bienvenido ' + this.user.email);
      this.router.navigate(['/inicio']);
      this.user.username = '';
      this.user.password = '';
      this.salida();
    }
    else{
      this.presentToast("Error al ingresar datos");

    }
  }

  validarModelo(model:any){
    for(var[key,value] of Object.entries(model)){
      if(value == ''){
        this.field = key;
        return false;
      }
    }
    return true;
  }

  async presentToast(message:string, duration?:number) {
    const toast = await this.toastCtrl.create({
      message: message,
      duration: duration?duration:2000,
      position: 'bottom'
    });
    await toast.present();
  }
  

}
