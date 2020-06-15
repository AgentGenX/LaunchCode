import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'buttons',
   templateUrl: './buttons.component.html',
   styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {
   buttonHeading: string = "Buttons"
   active: boolean = true;
   buttonState: boolean[] = [true, true, true];

   constructor() { }

   ngOnInit() { }

   reactivateButtons() {
      for (let buttons in this.buttonState) {
         this.buttonState[buttons] = true;
      }
      return this.buttonState;
   }

}
