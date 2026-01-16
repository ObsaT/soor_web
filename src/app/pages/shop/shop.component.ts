import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
interface Product { id: string; title: string; price: number; image?: string; }
@Component({
  selector: 'app-shops',
  imports: [CommonModule],
  templateUrl: './shops.component.html',
  styleUrl: './shop.component.css'
})
export class ShopComponent implements OnInit {
products: Product[] = [];
cart: Product[] = [];
ngOnInit(): void {
this.products = [
{ id: 'p1', title: 'Official Marathon Shirt', price: 25, image: 'assets/shirt.jpg' },
{ id: 'p3', title: 'Cap', price: 15, image: 'assets/cap.jpg' },
{ id: 'p2', title: 'Training Shoes', price: 120, image: 'assets/shoe.jpg' },
{ id: 'p3', title: 'Cap', price: 15, image: 'assets/cap1.jpg' },
{ id: 'p1', title: 'Official Marathon Shirt', price: 25, image: 'assets/shirt1.jpg' },
];
}
addToCart(p: Product) { this.cart.push(p); }
}
