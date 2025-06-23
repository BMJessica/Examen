import { Component } from '@angular/core';
import { Product, Products } from '../../services/products.service';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  imports: [CommonModule] // ⬅️ Aquí importas ngIf y ngFor

})
export class ProductsComponent {
  productos: Product[] = [];
  productoSeleccionado: Product | null = null;
  mostrarModal: boolean = false;

  constructor(private productService: Products, private cartService: CartService) {
    this.productos = this.productService.getProducts();
      this.productos = this.productService.getProducts();

  }

  verMas(producto: Product) {
  this.productoSeleccionado = producto;
  this.mostrarModal = true;
}
agregarAlCarrito(producto: Product) {
  this.cartService.agregarProducto(producto);
}

  cerrarModal() {
    this.mostrarModal = false;
  }
}
