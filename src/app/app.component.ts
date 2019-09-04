import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  private noOfItemsToShowInitially: number = 12;
   private itemsToLoad: number = 12;  
  images = [];
  randomtext='Random Text';
  
  constructor() {
    for (let i = 0; i < 50; i++) {
        const url = 'https://loremflickr.com/640/480?random=' + (i +1);
        this.images[i] = {
          url: url,
          show: false
      };
     
     
    }
    
  }
  
  
  onScroll() {
    if (this.noOfItemsToShowInitially <= this.images.length) {
        this.noOfItemsToShowInitially += this.itemsToLoad;
        console.log("scrolled");
    } 

}
}
