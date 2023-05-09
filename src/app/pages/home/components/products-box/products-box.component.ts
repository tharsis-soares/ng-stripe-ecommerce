import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-products-box',
  templateUrl: './products-box.component.html',
  styleUrls: ['./products-box.component.css']
})
export class ProductsBoxComponent implements OnInit {
@Input() fullWidthMode = false
@Input() product: Product | undefined
@Output() addToCart = new EventEmitter();


ngOnInit(): void {

}

onAddToCart(): void {
  this.addToCart.emit(this.product)
}
}
