import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EstoqueComponent } from './estoque/estoque.component';

import { AppComponent } from "./app.component";
import { HeaderComponent } from './header.component';
import { myrouting } from './app.routing';
import { EstoqueService } from './estoque/estoque.services';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { InputComponent } from './estoque/estoque-input.component';
import { FormsModule } from '@angular/forms';
import { EstoqueListComponent } from './estoque/estoque-list.component';
import { HttpModule } from '@angular/http';


@NgModule({
    declarations: [
        AppComponent,
        EstoqueComponent,
        HeaderComponent,
        InputComponent,
        EstoqueListComponent,
        

    ],
    imports: [BrowserModule, myrouting, HttpClientModule, FormsModule, HttpModule],
    providers:[EstoqueService],
    bootstrap: [AppComponent]
})
export class AppModule {

}