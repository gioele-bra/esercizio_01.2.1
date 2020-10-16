import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Product } from './product.model';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
data: Object;
   loading: boolean;
   o : Observable<Object>;

   productData : Product[];
   oProduct : Observable<Product[]>;

   constructor(public http: HttpClient) {}

  ngOnInit(): void {
  }

makeRequest() : void
 {
   //oFoo : Observable<Foo[]>; va dichiarato tra gli attributi della classe
   this.oProduct = this.http.get<Product[]>('https://3000-f4598ab7-9512-436c-ae24-262edf5dfb7b.ws-eu01.gitpod.io/api/products');
   this.oProduct.subscribe(data => {this.productData = data;});
 }

   //Il metodo che notifica la risposta (nota che usiamo una "arrow function")
   getData = (d : Object) =>
   {
     this.data = d; //Notifico l’oggetto ricevuto dal server
     this.loading = false;  // Notifico che ho ricevuto i dati
   }





}
