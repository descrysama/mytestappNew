import { Component, EventEmitter, OnInit, Output} from '@angular/core';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  
  @Output() newItemEvent = new EventEmitter<any>();

  addToCart() {
    this.newItemEvent.emit()
  }

  values:any[] = [
    {id: '1', name: 'Mug JS', price: 15, description: "Buvez du sirop de corps d'homme ou l'eau de mon bain." ,imageUrl: 'https://ih1.redbubble.net/image.457255839.8215/mug,standard,x1000,right-pad,750x1000,f8f8f8.u3.jpg'},
    {id: '2', name: 'Mug RGB color', price: 19, description: "Buvez du sirop de corps d'homme ou l'eau de mon bain." ,imageUrl: 'https://ih1.redbubble.net/image.973013983.7752/mug,standard,x1000,right-pad,750x1000,f8f8f8.jpg'},
    {id: '3', name: 'Mug Github (Octopus)', price: 12, description: "Buvez du sirop de corps d'homme ou l'eau de mon bain." ,imageUrl: 'https://ih1.redbubble.net/image.722281344.9045/mug,standard,x1000,right-pad,750x1000,f8f8f8.u2.jpg'},
    {id: '4', name: 'Mug React', price: 9, description: "Buvez du sirop de corps d'homme ou l'eau de mon bain." ,imageUrl: 'https://ih1.redbubble.net/image.951631107.5742/mug,standard,x1000,right-pad,750x1000,f8f8f8.jpg'},   
    {id: '5', name: 'Mug Pytoune', price: 100, description: "Buvez du sirop de corps d'homme ou l'eau de mon bain." ,imageUrl: 'https://ih1.redbubble.net/image.452049715.1381/mug,standard,x1000,right-pad,750x1000,f8f8f8.u5.jpg'},   
    {id: '6', name: 'Mug Stephy', price: 23, description: "Buvez du sirop de corps d'homme ou l'eau de mon bain." ,imageUrl: 'https://ih1.redbubble.net/image.2167279856.9174/mug,standard,x1000,right-pad,750x1000,f8f8f8.jpg'}
  ]
  
  

  constructor() {

  }

  async ngOnInit() {
      
  }
}
