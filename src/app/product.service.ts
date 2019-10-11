import { Injectable } from '@angular/core';
import { Product } from './Models/product.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl= "https://localhost:44302/api/";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { 

  }

  public getAll():Observable<Product[]>{
    return this.http.get<Product[]>(baseUrl+"/products");
  }

  public add(product: Product):Observable<Product>{
    //database operations = API data
    return this.http.post<Product>(baseUrl+"/products",product);

  }
}
