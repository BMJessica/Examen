import { Injectable } from '@angular/core';
import { Product } from './products.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private carrito: Product[] = [];

  getCarrito(): Product[] {
    return this.carrito;
  }

  agregarProducto(producto: Product): void {
    this.carrito.push(producto);
    console.log('Producto agregado al carrito:', producto);
  }

  quitarProducto(id: number): void {
    this.carrito = this.carrito.filter(p => p.id !== id);
  }

  vaciarCarrito(): void {
    this.carrito = [];
  }
}
