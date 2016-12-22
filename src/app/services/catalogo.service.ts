import { Observable } from 'rxjs/Observable';
import { FireService } from './fire.service';
import { Injectable } from '@angular/core';

@Injectable()
export class CatalogoService {

  constructor(private fireService: FireService) { }

  saveCatalogo(catalogo): firebase.Promise<any>{
    return this.fireService.saveCatalogo(catalogo);
  }


  getCatalogos():Observable<any> {
    return this.fireService.getCatalogos();
  }
  
  getCatalogo(key):Observable<any> {
    return this.fireService.getCatalogo(key);
  }

  saveUnidade(unidade):firebase.Promise<any> {
    return this.fireService.saveUnidade(unidade);
  }

   getUnidades():Observable<any> {
    return this.fireService.getUnidades();
  }

}
