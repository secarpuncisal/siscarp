import { ItensService } from './../services/itens.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-itens-cadastro',
  templateUrl: './itens-cadastro.component.html',
  styleUrls: ['./itens-cadastro.component.css']
})
export class ItensCadastroComponent implements OnInit {

  formItem: FormGroup;
  objetos: any[]; //lista de todos os objetos cadastrados
  objetoSelected: any;  //Variável utilizada para alterar a UI de acordo com o Objeto selecionado.
  medicamento: string = "-KZ72cZIQoZwiVB2Z4DM";  //Guarda a chave do objeto medicamento

  
  constructor(private formBuild: FormBuilder, private itensService: ItensService) {
    this.itensService.getObjetos()
      .subscribe(objetos => this.objetos = objetos);

    this.formItem = this.formBuild.group({
      'objeto': ['', Validators.required],
      'codigo': ['', Validators.required],
      'descricao': ['', Validators.required],
      'forma': ['' ],
      'dose': [''],
      'apresentacao': [''],
      'unidade': [''],
    })
  }

  ngOnInit() {
  
  }


  onSelectObjeto(event){
    let keySelecionada = event.srcElement.value;
    this.objetos.map(objeto => { 
      if(objeto.$key === keySelecionada ){
        this.objetoSelected = objeto;
        console.log('objeto selecionado', this.objetoSelected) 
      }
    })
  }

  onSubmit(){
    this.itensService.saveItem(this.formItem.value)
      .then(() => { 
        alert('Item salvo com sucesso');
        this.formItem.reset();
      })
  }
}
