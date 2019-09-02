import { NgModule } from '@angular/core';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductGetComponent } from './product-get/product-get.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'product/create', component: ProductAddComponent },
  { path: 'edit/:id', component: ProductEditComponent },
  { path: 'products', component: ProductGetComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
