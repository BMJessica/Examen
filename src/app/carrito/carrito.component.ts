import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Product } from '../services/products.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carrito',
  standalone: true,
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css'],
  imports: [CommonModule] // ✅ Esto permite usar *ngIf y *ngFor
})
export class CarritoComponent {
  carrito: Product[] = [];

  constructor(private cartService: CartService) {
    this.carrito = this.cartService.getCarrito();
  }

  quitar(id: number) {
    this.cartService.quitarProducto(id);
    this.carrito = this.cartService.getCarrito(); // refrescar
  }

  vaciar() {
    this.cartService.vaciarCarrito();
    this.carrito = [];
  }

  total(): number {
    return this.carrito.reduce((sum, item) => sum + item.precio, 0);
  }
}
