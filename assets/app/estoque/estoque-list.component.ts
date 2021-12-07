import { Component, OnInit } from "@angular/core";
import { Estoque } from "./estoque.model";
import { EstoqueService } from "./estoque.services";

@Component({
    selector: 'app-estoque-list',
    template: `
        <div class="lista">
            <app-estoque
                [estoque]="estoq"
                *ngFor="let estoq of estq">
            </app-estoque>
        </div>
    `
    //providers: [EstoqueService]
})

export class EstoqueListComponent implements OnInit{
    estq: Estoque[];

    constructor (private estoqueService: EstoqueService){}

    ngOnInit(): void{
        
        this.estoqueService.getEstoque()
            .subscribe(
                (dadosSucesso: Estoque[]) => {
                    this.estq = dadosSucesso;
                    console.log(dadosSucesso)
                },
                dadosErro => console.log(dadosErro)
            );
        }
}