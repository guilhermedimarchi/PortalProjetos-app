import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { NativeStorage } from 'ionic-native';

/*
  Generated class for the StorageService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class StorageService {

  public storage;
  public token : any;
  public type: string;

  constructor(public http: Http) {
    console.log('Hello StorageService Provider');
  }

  getToken():any {
    console.log("Buscando token");
    return NativeStorage.getItem('token');
  }

  insertToken(token: string, type: string):any {
    console.log("Inserindo token");
   return NativeStorage.setItem('token', {tk: token, type: type});
 }

}
