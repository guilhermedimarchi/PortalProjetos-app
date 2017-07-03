import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Validators, FormBuilder } from '@angular/forms';
import {BaseService} from '../../providers/base-service';
import {EnterpriseService} from '../../providers/enterprise-service';
import {Enterprise} from '../../models/Enterprise';
@Component({
  selector: 'page-register-enterprise-page',
  templateUrl: 'register-enterprise-page.html',
  providers: [BaseService,EnterpriseService]
})
export class RegisterEnterprisePage {

  public registrationForm:any;

    constructor(private formBuilder: FormBuilder, private enterpriseService : EnterpriseService) {
        this.enterpriseService.get().subscribe(res => {
          console.log(res);
        });
    }

    ionViewDidLoad() {
      this.registrationForm = this.formBuilder.group({
        CNPJ: ['', Validators.required],
        Name: ['',Validators.required],
        Login: ['',Validators.required],
        Password: ['',Validators.required],
        Description: ['',Validators.required],
        Categories: ['', Validators.required],
        Website: ['',Validators.required],
        RegistrationDate: [new Date()]
      });
    }
    logForm(){
      console.log(this.registrationForm.value);
      let enterprise = new Enterprise();
      enterprise.Name = this.registrationForm.value.Name;
      enterprise.CNPJ = this.registrationForm.value.CNPJ;
      enterprise.Login = this.registrationForm.value.Login;
      enterprise.Password = this.registrationForm.value.Password;
      enterprise.Description = this.registrationForm.value.Description;
      enterprise.Categories = this.registrationForm.value.Categories;
      enterprise.Website = this.registrationForm.value.Website;
      this.enterpriseService.post(enterprise);
    }

}
