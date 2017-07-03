import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { StorageService} from './storage-service';
import 'rxjs/Rx';

@Injectable()
export class BaseService{
  private data:any;
  private error:any;

  constructor(private http:Http, private storage: StorageService){}

  public headerAuth(header){
    header.append('Authorization', this.storage.token.tk );
  }

  public getById(url:string, id:any) : any{
    return  this.http.get(url + id);
  }

  public get(url:string) : any{
    let headers = new Headers({ 'Accept': 'application/json' });
    headers.append('Authorization', `Bearer ${this.storage.token.tk}`);

    let options = new RequestOptions({ headers: headers });
    return this.http.get(url, options);

  }

  public post(url:string, data:any) : any{
    //console.log(data);
    //var options = {'Content-Type': ['application/json']};
    return this.http.post(url,data).map(res => res.json());
  }

  public put(url:string, data:any) : any{
    return this.http.put(url,data).map(res => res.json());
  }

  public delete(url:string) : any{
    return this.http.delete(url).map(res => res.json());
  }
}
