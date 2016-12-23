import { ActivatedRoute } from '@angular/router';
import { CatalogoService } from './../services/catalogo.service';
import { ItensService } from './../services/itens.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demanda',
  templateUrl: './demanda.component.html',
  styleUrls: ['./demanda.component.css']
})
export class DemandaComponent implements OnInit {
  catalogo: any;
  objetos: any[];
  itens: any[];
  selectedObjetos: any[] = [];
  selectedObjetosKey: string = '';
  filteredItens: any[];
  selectedItem: any = {};
  unidades: any[];
  demandas: any[] = [];

  constructor(private itensService: ItensService, private catalogoService:CatalogoService, private route: ActivatedRoute) { 
    
    this.catalogoService.getUnidades()
      .subscribe(unidades => {
        this.unidades = unidades;
        this.unidades.forEach(unidade => {
          this.demandas.push({
            unidade: unidade.$key,
            unidade_descricao: unidade.descricao,
            quantidade: 0
          })
        })
      })
      
    this.route.params 
      .subscribe(params => {
          this.catalogoService.getCatalogo(params['id'])
            .subscribe(catalogo => {
              this.catalogo = catalogo;
            })
      })

    this.itensService.getObjetos()
      .subscribe(objetos => this.objetos = objetos);
    
    this.itensService.getItens()
      .subscribe(itens => {
        this.itens = this.filteredItens = itens;
        console.log(this.itens);
        this.setDescricaoObjeto();
      });
      
  }

  ngOnInit() {
  
  }

  console(){
    console.log(this.demandas)
  }

  onSelectItem(item: any){
    this.selectedItem['$key'] = item.$key;
    this.selectedItem['apresentacao'] = item.apresentacao;
    this.selectedItem['codigo'] = item.codigo;
    this.selectedItem['descricao'] = item.descricao;
    this.selectedItem['dose'] = item.dose;
    this.selectedItem['objeto'] = item.objeto;
    this.selectedItem['unidade'] = item.unidade;
    this.selectedItem['objeto_descricao'] = item.objeto_descricao;
    console.log(this.selectedItem)

  }

  onSelectObjeto(event){
     let keySelecionada = event.srcElement.value;
     this.selectedItem.objeto = keySelecionada;
  }

  search(search: string){
    
    let itensFilteredByObjetos = this.itens.filter(item => this.selectedObjetosKey.includes(item.objeto));

    this.filteredItens = itensFilteredByObjetos.filter( item => item.codigo.toUpperCase().includes(search.toUpperCase())           ||
                                                                item.descricao.toUpperCase().includes(search.toUpperCase())        ||
                                                                item.objeto_descricao.toUpperCase().includes(search.toUpperCase())
                                                              )
  }

  filterByObjeto(objeto_selecionado, checked){  //A variável Checked verifica se o checkbox foi marcado ou desmarcado
    if(checked){      // se o checkbox foi marcado o array de objetos vai ser percorrido para encontrar qual objeto foi selecionado
      if(this.selectedObjetos.length == this.objetos.length){  //Se o array de objetos filtrados for igual ao array de objetos original o sistema zera o selectedObjetos
        this.selectedObjetosKey = '';
        this.selectedObjetos = [];
      }

      this.objetos.map(objeto => { 
        if(objeto.$key == objeto_selecionado.$key)
          this.selectedObjetos.push(objeto)  // uma vez que o objeto foi encontrar ele é adicionado ao array de objetos selecionados
      })
    } 
  
    if(!checked){    //caso o checkbox tenha sido desmarcado o programa busca o objeto selecionado no array e o exclui
      this.selectedObjetos.splice(this.selectedObjetos.lastIndexOf(objeto_selecionado), 1)
    } 

    if(this.selectedObjetos.length == 0){      //Se o tamanho for zero o sistema considera que o usuário quer que sejam mostrados todos os objetos
      this.selectedObjetos = this.objetos.slice();
    }

    this.selectedObjetosKey = '';
    this.selectedObjetos.map(objeto => {
      this.selectedObjetosKey += ' ' + objeto.$key;   // Essa variável armazena todas as chaves dos objetos selecionados para que o sistema possa filtrar na função search
    })
    this.search('');    //após todas as atribuições, o sistema chama a função de pesquisa
  }

  setDescricaoObjeto(){ 
    this.itens.map(item => {
      this.objetos.map(objeto => {
        if (item.objeto === objeto.$key )
          item['objeto_descricao'] = objeto.descricao;
      })
    })
    this.filteredItens = this.itens;

  }

  excluirItem(){
    let confirma = confirm('Tem certeza que deseja excluir o item?');
    if (confirma)
      this.itensService.removeItem(this.selectedItem)
        .then(() => {
          alert('Item excluído com sucesso');
        })
  }

  editItem(){
    this.itensService.editItem(this.selectedItem)
      .then(() => {
        alert('Item atualizado com sucesso');
      })
  }

  onSubmitDemanda(){
    this.demandas.forEach(demanda => {
      demanda['quantidade'] = +demanda['quantidade'];
    })
    this.catalogoService.saveDemanda(this.catalogo.$key, this.selectedItem, this.demandas )
      .then(_ => {
        this.demandas.forEach(demanda => { 
          demanda['quantidade'] = 0;
        })
      })
  }
}

