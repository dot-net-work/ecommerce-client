import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Product } from '../Models/product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'product-entry',
  templateUrl: './product-entry.component.html',
  styleUrls: ['./product-entry.component.css']
})
export class ProductEntryComponent implements OnInit {

  constructor(private productService:ProductService) { 
    this.onSaved = new EventEmitter<Product>();
  }

  ngOnInit() {
    
  }

  @Output() onSaved: EventEmitter<Product>;

  product: Product = new Product();
  message: string;

  isSaved: boolean;

  public save(){
    //productmanager -> add(product)
    this.productService.add(this.product).subscribe(p=>{
      this.isSaved = true;
      this.product.id = p.id;
      if(this.isSaved && this.onSaved!=null){
        this.onSaved.emit(this.product);
        this.product = new Product();
      }
    });
   
    
    
  }
}
