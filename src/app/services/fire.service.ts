import { Injectable } from '@angular/core';
import { AngularFire } from 'angularfire2';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase';


@Injectable()
export class FireService {
  database = firebase.database();
  itensRef = firebase.database().ref('itens/');

  constructor(private af: AngularFire) {
  }

  saveItem(item: any):firebase.Promise<any> {
    return this.itensRef.push(item);  
  }

  saveObjeto(objeto: any):firebase.Promise<any>  {
    return this.database.ref('objetos').push(objeto);
  }

  getObjetos(): Observable<any>{
    return this.af.database.list('objetos');
  }
}
