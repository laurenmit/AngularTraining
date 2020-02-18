import { Component, OnChanges, Input, EventEmitter, Output } from '@angular/core';

 @Component({
   selector: 'pm-star',
   templateUrl: './star.component.html',
   styleUrls: ['./star.component.css']

})

  export class StarComponent implements OnChanges{
    @Input() rating: number;
    starWidth: number=50;
    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

    ngOnChanges(): void{
      this.starWidth = this.rating * 75/5;
      console.log('this executed');
    }
    onClick(): void{
      this.ratingClicked.emit(`The rating ${this.rating} was clicked!`);
    }
}
