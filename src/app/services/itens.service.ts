import { FireService } from './fire.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ItensService {

  constructor(private fireService: FireService) {
    console.log('itens service')
  }

  saveObjeto(objeto: any):firebase.Promise<any>  {
    return this.fireService.saveObjeto(objeto)
  }

  saveItem(item: any):firebase.Promise<any>  {
    return this.fireService.saveItem(item)
  }

  getObjetos(): Observable<any>{
    return this.fireService.getObjetos()  
  }

  getItens(): Observable<any>{
    return this.fireService.getItens();
  }

  editItem(item):firebase.Promise<any> {
    return this.fireService.editItem(item);
  }

  removeItem(item):firebase.Promise<any> {
    return this.fireService.removeItem(item);
  }
}
