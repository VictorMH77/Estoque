import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Estoque } from "./estoque.model";
import { EstoqueService } from "./estoque.services";

@Component({
  selector: "app-input-component",
  templateUrl: "./estoque-input.component.html",
  styles: [
    `
      @import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      body {
        background-color: rgb(0, 7, 22);
        padding: 0 10px;
      }

      .teste {
        max-width: 500px;
        justify-content: center;
        width: 100%;
        background-color: rgb(1, 11, 32);
        margin: 20px auto;
        padding: 30px;
        box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.125);
        border-radius: 20px;
      }

      .teste .title {
        font-size: 30px;
        text-transform: uppercase;
        font-weight: 700;
        font-family: "Poppins", sans-serif;
        margin-bottom: 25px;
        text-align: center;
        color: rgb(0, 197, 85);
      }

      .teste .form .form-group {
        margin-bottom: 15px;
        display: flex;
        align-items: center;
      }

      .teste .form .form-group label {
        width: 200px;
        color: white;
        margin-right: 10px;
        font-size: 14px;
        font-family: "Poppins", sans-serif;
        font-weight: 400;
      }

      .teste .form .form-group .form-control {
        width: 100%;
        outline: none;
        border: 1px solid #d5dbd9;
        font-size: 15px;
        padding: 8px 10px;
        border-radius: 6px;
        transition: all 0.3s ease;
      }

      .teste .form .form-group .form-control:focus {
        border: 1px solid rgb(0, 197, 85);
      }

      .teste .form .form-group .btn {
        width: 100%;
        padding: 8px 10px;
        font-size: 20px;
        font-family: "Poppins", sans-serif;
        border: 0;
        background: rgb(0, 197, 85);
        color: white;
        cursor: pointer;
        border-radius: 20px;
        outline: none;
      }

      .teste .form .form-group:last-child {
        margin-bottom: 0;
      }

      .teste .form .form-group .btn:hover {
        background: rgb(0, 85, 37);
      }
    `,
  ],
})
export class InputComponent {
  constructor(private estoqueService: EstoqueService) {}

  onSubmit(form: NgForm) {
    const estoque = new Estoque(
      form.value.produtonome,
      form.value.categoria,
      form.value.quantidade
    );
    this.estoqueService.addEstoque(estoque)
      .subscribe(
        dadosSucesso => console.log(dadosSucesso),
        dadosErro => console.log(dadosErro)
    );
    form.resetForm();
  }
}
