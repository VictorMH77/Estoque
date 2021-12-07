import { EventEmitter, Injectable } from "@angular/core";
import { Http, Response, Headers } from "@angular/http";
import { Estoque } from "./estoque.model";
import { Observable } from "rxjs/Observable";
import 'rxjs/Rx';
import { HttpClient, HttpErrorResponse, HttpResponse, HttpResponseBase } from "@angular/common/http";

@Injectable()
export class EstoqueService {
    estoqueService: Estoque[] = [];

    estoqueEditado = new EventEmitter<Estoque>();

    constructor(private httpClient: HttpClient, private http: Http) {}

    addEstoque(estoque: Estoque): Observable<Estoque>{
        
        let url: string = 'http://localhost:3000/estoque';

        return this.httpClient.post<Estoque>(url, estoque)
            .map((dados: any)  => {
                const estoqueAux = new Estoque(dados.objEstoqueSave.produtonome, dados.objEstoqueSave.categoria, dados.objEstoqueSave.quantidade);
                this.estoqueService.push(estoqueAux);
                return estoqueAux;
            })
            .catch((error: HttpErrorResponse) => Observable.throw(error));
    }


    getEstoque(){
        return this.http.get('http://localhost:3000/estoque')
            .map((response: Response) => {
                const responseEmJSON = response.json();
                const stq = responseEmJSON.objEstoqueSave;

                let transformedEstoque: Estoque[] = [];
                    for(let estoq of stq){
                        transformedEstoque.push(new Estoque(
                            estoq.produtonome,
                            estoq.categoria,
                            estoq.quantidade,
                            estoq._id));
                    }
                    this.estoqueService = transformedEstoque;
                    return transformedEstoque;
            })
            .catch((error: Response) => Observable.throw(error));
    }

    /*getEstoque(): Observable<Estoque[]>{
        
        let url: string = 'http://localhost:3000/estoque';
        return this.httpClient.get<Estoque[]>(url)
            .map((response: any) => {
                const responseAux = response.objEstoqueSave;
                console.log(responseAux)
                let transformedEstoque: Estoque[] = [];
                for(let estq of responseAux) {
                    transformedEstoque.push(new Estoque(
                        estq.produtonome,
                        estq.categoria,
                        estq.quantidade)
                    );
                }
                this.estoqueService = transformedEstoque;
                return transformedEstoque;
            })
            .catch((error: HttpErrorResponse) => Observable.throw(error));
    }*/

       
    deleteEstoque(estoque: Estoque): Observable<Estoque>{
        this.estoqueService.splice(this.estoqueService.indexOf(estoque), 1);

        let url: string = 'http://localhost:3000/estoque/';            

        return this.httpClient.delete<Estoque>(url + estoque.produtoId)
            .catch((error: HttpErrorResponse) => Observable.throw(error));
    }
}