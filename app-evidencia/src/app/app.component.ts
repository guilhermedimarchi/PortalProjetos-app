import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from 'ionic-native';

//pages
import { ProblemPage } from '../pages/problem-page/problem-page';
import { ProjectPage } from '../pages/project-page/project-page';
import { RegisterUserPage } from '../pages/register-user-page/register-user-page';
import { RegisterEnterprisePage } from '../pages/register-enterprise-page/register-enterprise-page';
import { LoginPage } from '../pages/login-page/login-page';
import { RegisterProblemPage } from '../pages/register-problem-page/register-problem-page';
import { RegisterProjectPage } from '../pages/register-project-page/register-project-page';
import {ProblemDetails} from '../pages/problem-details/problem-details';
//Providers
import { StorageService } from '../providers/storage-service';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, private storageService:StorageService) {
    this.initializeApp();
    this.platform = platform;
    this.session();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Problemas', component: ProblemPage },
      { title: 'Meus Projetos', component: ProjectPage },
      { title: 'Cadastro Aluno', component: RegisterUserPage },
      { title: 'Cadastro Empresa', component: RegisterEnterprisePage },
      { title: 'Login', component: LoginPage },
      { title: 'Cadastro de Problema', component: RegisterProblemPage },
      { title: 'Cadastro de Projeto', component: RegisterProjectPage },
      {title: 'Detalhes do problema', component : ProblemDetails}
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  session(){
    this.storageService.getToken().then(
        data => {
          this.storageService.token = data.tk;
          this.storageService.type = data.type;
          console.log("TOKEN: " + data.tk + "TIPO: " + data.type);
          this.openPage(ProblemPage);
        },
        error =>{
          console.error(error);
          this.openPage(LoginPage);
        }
      );
  }

}
