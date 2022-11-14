import { Component, OnInit } from '@angular/core';
import { Villain } from '../villain';
@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})

export class MyComponentComponent implements OnInit{
  villain : Villain = 
  {
    title:'ddddddddddddddddddd'
  }
  constructor() { }

  ngOnInit(): void {
  }

};
