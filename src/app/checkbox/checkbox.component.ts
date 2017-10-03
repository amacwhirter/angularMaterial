import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent {

  isChecked = true;

  onChange($event) {
    console.log($event);
  }

}
