import { CatalogoService } from './../services/catalogo.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {
  formCatalogo: FormGroup;
  formUnidade: FormGroup;
  catalogos: any;
  selectedCatalogo: any;
  ano_catalogo: string = "";
  unidades: any[];
  selectedUnidade: any;

  constructor(private formBuilder: FormBuilder, private catalogoService: CatalogoService, private router: Router) {
    this.formCatalogo = this.formBuilder.group({
      'ano': ['', [Validators.required, Validators.pattern('(199\d|200\d|201[0-9])')]]
    });

    this.formUnidade = formBuilder.group({
      'descricao': ['', Validators.required]
    });
  }

  ngOnInit() {
    this.catalogoService.getCatalogos()
      .subscribe(catalogos => {
        this.catalogos = catalogos;
      })

      this.catalogoService.getUnidades()
        .subscribe(unidades => {
          this.unidades = unidades
        })
  }

  onSelectCatalogo(catalogo){
    this.selectedCatalogo = catalogo;
    this.router.navigate(['catalogo-detail',catalogo.$key]);
  }

  onSelectUnidade(unidade){
    this.selectedUnidade = unidade;
  }

  onSubmitCatalogo(){
    this.catalogoService.saveCatalogo({ano: this.ano_catalogo})
      .then(() => {
        this.formCatalogo.reset();
        alert('Demanda cadastrada com sucesso.');
      })
      .catch(error => {
        console.log(error);
      })
  }

  onSubmitUnidade(unidade){
    this.catalogoService.saveUnidade(this.formUnidade.value.descricao)
      .then(() => {
        alert('Unidade cadastrada com sucesso.');
        this.formUnidade.reset()
      })
  }
}
