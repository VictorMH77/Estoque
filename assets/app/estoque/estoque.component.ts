
import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Estoque } from "./estoque.model";
import { EstoqueService } from "./estoque.services";

@Component({
  selector: "app-estoque",
  templateUrl: "./estoque.component.html",
  styles: [
    `
      @import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Poppins", sans-serif;
      }

      body {
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        background-color: rgb(0, 7, 22);
      }

      .container {
        display: inline-block;
        max-width: 1200px;
        padding: 0px;
        margin: 0px;
        width: auto;
      }

      .container .card {
        position: relative;
        min-width: 220px;
        height: 250px;
        background-color: rgb(1, 11, 32);
        border-radius: 20px;
        margin: 30px;
        text-align: center;
      }

      .container .card h2 {
        color: rgb(0, 197, 85);
        padding-top: 25px;
        padding-bottom: 25px;
        text-transform: uppercase;
        font-size: 20px
      }

      .container .card .subtitle {
        color: rgb(0, 197, 85);
        font-weight: 500;
        font-size: 12px;
        text-transform: uppercase;
        letter-spacing: 4px;
        padding-bottom: 0px;
      }

      .container .card .desc {
        margin-bottom: 22px;
        color: white;
        font-weight: 200;
      }

      .container .card .box a {
        color: white;
        border-radius: 20px;
        margin: 5px;
        text-align: center;
        cursor: pointer;
      }

      .container .card .box a:hover {
        color: rgb(0, 197, 85);
      }
    `,
  ],
})
export class EstoqueComponent {
  @Input() estoque: Estoque;

  constructor(private estoqueServiceObj: EstoqueService) {}

  onDelete() {
    this.estoqueServiceObj.deleteEstoque(this.estoque)
      .subscribe(
        resultado => console.log(resultado)
        );
  }
}
