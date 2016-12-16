import { ItensService } from './../services/itens.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-itens',
  templateUrl: './itens.component.html',
  styleUrls: ['./itens.component.css']
})
export class ItensComponent implements OnInit {

  constructor(private itensService: ItensService) { }

  ngOnInit() {
  }

}
