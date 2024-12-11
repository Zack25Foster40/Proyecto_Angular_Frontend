import { Component } from '@angular/core';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.scss'
})
export class ProductoComponent {
  products:any[]=[
    {id:1, nombre: "Teclado Corsair Strafe Mx Silent Laaca", precio: 130, categoria_id: 3, stock: 25, estado:"COMPLETO"},
    {id:1, nombre: "Teclado Corsair Strafe Mx Silent Laaca", precio: 130, categoria_id: 3, stock: 25, estado:"COMPLETO"},
    {id:1, nombre: "Teclado Corsair Strafe Mx Silent Laaca", precio: 130, categoria_id: 3, stock: 25, estado:"COMPLETO"},
    {id:1, nombre: "Teclado Corsair Strafe Mx Silent Laaca", precio: 130, categoria_id: 3, stock: 25, estado:"COMPLETO"},
    {id:1, nombre: "Teclado Corsair Strafe Mx Silent Laaca", precio: 130, categoria_id: 3, stock: 25, estado:"COMPLETO"},
    {id:1, nombre: "Teclado Corsair Strafe Mx Silent Laaca", precio: 130, categoria_id: 3, stock: 25, estado:"COMPLETO"},
    {id:1, nombre: "Teclado Corsair Strafe Mx Silent Laaca", precio: 130, categoria_id: 3, stock: 25, estado:"COMPLETO"},
    {id:1, nombre: "Teclado Corsair Strafe Mx Silent Laaca", precio: 130, categoria_id: 3, stock: 25, estado:"COMPLETO"},
    {id:1, nombre: "Teclado Corsair Strafe Mx Silent Laaca", precio: 130, categoria_id: 3, stock: 25, estado:"COMPLETO"},
    {id:1, nombre: "Teclado Corsair Strafe Mx Silent Laaca", precio: 130, categoria_id: 3, stock: 25, estado:"COMPLETO"},
    {id:1, nombre: "Teclado Corsair Strafe Mx Silent Laaca", precio: 130, categoria_id: 3, stock: 25, estado:"COMPLETO"},
    {id:1, nombre: "Teclado Corsair Strafe Mx Silent Laaca", precio: 130, categoria_id: 3, stock: 25, estado:"COMPLETO"},
    {id:1, nombre: "Teclado Corsair Strafe Mx Silent Laaca", precio: 130, categoria_id: 3, stock: 25, estado:"COMPLETO"},
    {id:1, nombre: "Teclado Corsair Strafe Mx Silent Laaca", precio: 130, categoria_id: 3, stock: 25, estado:"COMPLETO"},
    {id:1, nombre: "Teclado Corsair Strafe Mx Silent Laaca", precio: 130, categoria_id: 3, stock: 25, estado:"COMPLETO"},
    {id:1, nombre: "Teclado Corsair Strafe Mx Silent Laaca", precio: 130, categoria_id: 3, stock: 25, estado:"COMPLETO"},
  ];
  cols: any[]=[];


  openNew(){

  }
  editProduct(prod:any){

  }

  deleteProduct(prod:any){

  }


}
