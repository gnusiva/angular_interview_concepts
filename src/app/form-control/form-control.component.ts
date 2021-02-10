import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-control',
  templateUrl: './form-control.component.html',
  styleUrls: ['./form-control.component.scss']
})
export class FormControlComponent implements OnInit {

  arr1: any[] = [
    { name: 'siva', age: 33 },
    { name: 'divi', age: 22 },
    { name: 'shivani', age: 1 },
    { name: 'sankar', age: 18 },
  ];

  fGroup = new FormGroup({});

  constructor() { }

  ngOnInit(): void {
    this.arr1.forEach( (item: any) => {
      item.control = new FormControl();
      this.fGroup.addControl(item.name, item.control);
    });

    this.fGroup.valueChanges.subscribe( data => {
      console.log(data)
    })

  }

  onChange(): void {
    console.log('---')
  }

}
