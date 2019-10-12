import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Product } from '../Models/product.model';
import { ProductService } from '../product.service';
import { Category } from '../Models/cateogry.model';
import { CategoryService } from '../category.service';

@Component({
  selector: 'product-entry',
  templateUrl: './product-entry.component.html',
  styleUrls: ['./product-entry.component.css']
})
export class ProductEntryComponent implements OnInit {

  constructor(private productService:ProductService, private categoryService: CategoryService) { 
    this.onSaved = new EventEmitter<Product>();
  }

  ngOnInit() {
    this.categoryService.getAll().subscribe(c=>this.categories=c);
  }

  @Output() onSaved: EventEmitter<Product>;

  product: Product = new Product();
  categories: Category[];
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
