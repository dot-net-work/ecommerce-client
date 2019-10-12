import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from './Models/cateogry.model';

const apiUrl = "https://localhost:44302/api/";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) {

   }

   public getAll():Observable<Category[]>{
     return this.http.get<Category[]>(apiUrl+"/categories");
   }

   


}
