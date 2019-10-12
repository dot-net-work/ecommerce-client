import { Component, OnInit, Input, EventEmitter,Output } from '@angular/core';
import { Product } from '../Models/product.model';

@Component({
  selector: 'product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.css']
})
export class ProductInfoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() product: Product
  @Output() onEdited:EventEmitter<Product> = new EventEmitter<Product>();

  onEdit(){
    console.log('On edit clicked in product-info');
    if(this.onEdited!=null){
      this.onEdited.emit(this.product);
    }
  }

}
