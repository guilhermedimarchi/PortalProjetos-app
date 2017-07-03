//Imports
import { Component } from '@angular/core';
import { Platform, NavController, LoadingController } from 'ionic-angular';
import {Validators, FormBuilder } from '@angular/forms';
import { Toast } from 'ionic-native';
import 'rxjs/Rx';
//Models
import { User } from '../../models/User';
//Providers
import { UserService } from '../../providers/user-service';
import { BaseService } from '../../providers/base-service';
import { StorageService} from '../../providers/storage-service';
//Pages
import { ProblemPage } from '../problem-page/problem-page';
import { RegisterUserPage } from '../register-user-page/register-user-page';
import { RegisterEnterprisePage } from '../register-enterprise-page/register-enterprise-page';

@Component({
  selector: 'login-page',
  templateUrl: 'login-page.html',
  providers: [UserService, BaseService]
})
export class LoginPage {
  public registerUser = RegisterUserPage;
  public registerEnterprise = RegisterEnterprisePage;
  public registrationForm:any;
  public token: string;
  public load:any;

  constructor(public loadingCtrl: LoadingController, public navCtrl: NavController, private storage: StorageService, private userService: UserService, private formBuilder: FormBuilder, public platform: Platform) {}

  ionViewDidLoad() {
    this.registrationForm = this.formBuilder.group({
      Login: ['',Validators.required],
      Password: ['',Validators.required]
    });
  }

  authentication(){
    this.showLoad("Autenticando...");
    let user = <User> this.registrationForm.value;
    this.userService.auth(user).subscribe(res => {
      console.log(res);
      this.storeToken(res);
    });
  }

  storeToken(obj:any){
    if(obj.success){
      console.log("Sucesso");
      this.storage.insertToken(obj.token, obj.type).then(
        () =>    {
          this.storage.token = obj.token;
          this.storage.type = obj.type;
          this.showToast("Sucesso na autenticação","bottom");
          this.navCtrl.setRoot(ProblemPage);
        },
        error => console.error('Error ao armazenar NativeStorage ', error)
      );
    }else{
      console.log("Falha");
      this.dismissLoad();
      this.registrationForm.reset();
      this.showToast(obj.msg, "top");
    }
  }

  showToast(message, position) {
    Toast.show(message, "short", position).subscribe(
      toast => {
        console.log(toast);
      }
    );
  }

  showLoad(msg:string) {
    this.load = this.loadingCtrl.create({
      dismissOnPageChange: true,
      content: msg
    });

    this.load.present();
  }

  dismissLoad(){
    this.load.dismiss();
  }
}
