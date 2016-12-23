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

  getItens(): Observable<any>{
    return this.af.database.list('itens');
  }

  editItem(item):firebase.Promise<any> {
    console.log(item);
    let key = item.$key;
    return firebase.database().ref().child('/itens/'+key).update({
      apresentacao: item.apresentacao,
      codigo: item.codigo,
      descricao: item.descricao,
      dose: item.dose,
      objeto: item.objeto,
      unidade: item.unidade
    })
  }

  removeItem(item):firebase.Promise<any> {
    return firebase.database().ref('itens/'+item.$key).remove()
  }

  saveCatalogo(catalogo):firebase.Promise<any> {
    return firebase.database().ref('catalogo/').push(catalogo);
  }

  getCatalogos():Observable<any> {
    return this.af.database.list('catalogo');
  }

  getCatalogo(key):Observable<any> {
    return this.af.database.object('catalogo/'+key);
  }

  saveUnidade(unidade):firebase.Promise<any> {
     return firebase.database().ref('unidades/').push({descricao: unidade});
  }

  getUnidades():Observable<any> {
    return this.af.database.list('unidades');
  }
  
  removeUnidade(unidade):firebase.Promise<any>{
    return firebase.database().ref('unidades/'+unidade.$key).remove();
  }

  editUnidade(unidade):firebase.Promise<any>{
    return firebase.database().ref('unidades/'+unidade.$key).update({
      descricao: unidade.descricao
    });
  }

  saveDemanda(catalogo_key, item, demanda ):firebase.Promise<any> {
    let obj = { };
    obj['descricao'] = item.descricao;
    obj['objeto_key'] = item.objeto;
    obj['objeto_descricao'] = item.objeto_descricao;
    obj['demanda'] = demanda;
    return firebase.database().ref('catalogo/'+catalogo_key+'/demandas/'+item.$key).update(obj)
  }
}
