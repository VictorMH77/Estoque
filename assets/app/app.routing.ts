import { Routes, RouterModule } from '@angular/router';
import { InputComponent } from './estoque/estoque-input.component';
import { EstoqueListComponent } from './estoque/estoque-list.component';
import { EstoqueComponent } from './estoque/estoque.component';

const APP_ROUTES: Routes = [
    {path: '', redirectTo: '/addProduto', pathMatch: 'full'},
    {path: 'addProduto', component: InputComponent},
    {path: 'listaEstoque', component: EstoqueListComponent}
];

export const myrouting = RouterModule.forRoot(APP_ROUTES);