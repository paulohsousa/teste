import { ProdutosComponent } from './src/app/produtos/produtos.component';
import { HomeComponent } from './src/app/home/home.component';
import {Routes} from '@angular/router';
    export const ROUTES: Routes = [
        {path: '', component: HomeComponent},
        {path:'',component:ProdutosComponent}
    ]