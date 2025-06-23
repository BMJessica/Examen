import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ProductsComponent } from './pages/products/products.component';
import { CarritoComponent } from './carrito/carrito.component';

export const routes: Routes = [
    {path: '', component:HomeComponent },
    {path: 'nosotros', component:AboutComponent },
    {path: 'productos', component:ProductsComponent},
    {path: 'contacto', component:ContactComponent},
    { path: 'carrito', component: CarritoComponent },
    {path: '**', redirectTo: ''}
];
