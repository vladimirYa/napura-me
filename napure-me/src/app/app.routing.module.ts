import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { AdminComponent } from './components/pages/admin/admin.component';
import { ProductDetailsComponent } from './components/pages/product-details/product-details.component';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'admin', component: AdminComponent },
    { path: 'product/:name', component: ProductDetailsComponent },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {
            initialNavigation: 'enabledBlocking',
        }),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {}
