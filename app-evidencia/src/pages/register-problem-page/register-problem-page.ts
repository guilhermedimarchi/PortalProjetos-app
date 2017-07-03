import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Validators, FormBuilder } from '@angular/forms';
import{ ProblemService } from '../../providers/problem-service';
import {BaseService} from '../../providers/base-service';

import{ Problem } from '../../models/Problem';

@Component({
  selector: 'page-register-problem-page',
  templateUrl: 'register-problem-page.html',
  providers: [ProblemService, BaseService]
})
export class RegisterProblemPage {

public registrationForm:any;

  constructor(public navCtrl: NavController, private formBuilder: FormBuilder, private problemService: ProblemService) {
    console.log("Register problem");
    problemService.get().subscribe(res => {
      console.log("subscribe");
      console.log(res);
    });
  }

  ionViewDidLoad() {
    this.registrationForm = this.formBuilder.group({
      Name: ['', Validators.required],
      Description: ['',Validators.required],
      MaxCost: ['',Validators.required],
      Categories: ['',Validators.required],
    });
  }
  logForm(){
    console.log(this.registrationForm.value);
    let problem = new Problem();
    problem.Name = this.registrationForm.value.Name;
    problem.Description = this.registrationForm.value.Description;
    problem.MaxCost = this.registrationForm.value.MaxCost;
    problem.Categories = this.registrationForm.value.Categories;
    this.problemService.post(problem);
  }

}
