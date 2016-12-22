import { ItensService } from './../services/itens.service';
import { CatalogoService } from './../services/catalogo.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

declare var jQuery: any;

@Component({
  selector: 'app-catalogo-detail',
  templateUrl: './catalogo-detail.component.html',
  styleUrls: ['./catalogo-detail.component.css']
})
export class CatalogoDetailComponent implements OnInit {
  key: string;
  catalogo: any;
  objetos: any[];

  constructor(private route: ActivatedRoute, private catalogoService: CatalogoService, private itensService: ItensService) {
    this.itensService.getObjetos()
      .subscribe(objetos => {
        this.objetos = objetos;
        this.objetos.map(objeto => {
          jQuery('#'+ objeto.$key + 'a').click(function (e) {
            e.preventDefault()
            jQuery(this).tab('show')
          })
        })

      })
  }

  ngOnInit() {
    this.route.params
      .subscribe(params => {
        this.key = params['id'];

        this.catalogoService.getCatalogo(this.key)
          .subscribe(catalogo => {
            this.catalogo = catalogo;
            console.log(this.catalogo);
          })
      });
  }

}
