import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';

//pages
import { ProblemPage } from '../pages/problem-page/problem-page';
import { ProjectPage } from '../pages/project-page/project-page';
import { RegisterUserPage } from '../pages/register-user-page/register-user-page';
import { RegisterEnterprisePage } from '../pages/register-enterprise-page/register-enterprise-page';
import { LoginPage } from '../pages/login-page/login-page';
import { RegisterProblemPage } from '../pages/register-problem-page/register-problem-page';
import { RegisterProjectPage } from '../pages/register-project-page/register-project-page';
import {ProblemDetails} from '../pages/problem-details/problem-details';
import {ProjectDetails} from '../pages/project-details/project-details';

//Providers
import { StorageService } from '../providers/storage-service';

@NgModule({
  declarations: [
    MyApp,
    ProblemPage,
    ProjectPage,
    RegisterUserPage,
    RegisterEnterprisePage,
    LoginPage,
    RegisterProblemPage,
    RegisterProjectPage,
    ProblemDetails,
    ProjectDetails
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ProblemPage,
    ProjectPage,
    RegisterUserPage,
    RegisterEnterprisePage,
    LoginPage,
    RegisterProblemPage,
    RegisterProjectPage,
    ProblemDetails,
    ProjectDetails
  ],
  providers: [StorageService]
})
export class AppModule {}
