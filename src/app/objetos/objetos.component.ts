import { ItensService } from './../services/itens.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'

@Component({
  selector: 'app-objetos',
  templateUrl: './objetos.component.html',
  styleUrls: ['./objetos.component.css']
})
export class ObjetosComponent implements OnInit {

  formObjeto: FormGroup
  constructor(private formBuilder: FormBuilder, private itensService: ItensService) {
    this.formObjeto = this.formBuilder.group({
      'descricao': ['', Validators.required]
    })
  }

  ngOnInit() {
  
  }

  onSubmit(){
    this.itensService.saveObjeto(this.formObjeto.value)
      .then(() =>{
        alert('Objeto salvo com sucesso!')
        this.formObjeto.reset();
      })
    
  }

}
