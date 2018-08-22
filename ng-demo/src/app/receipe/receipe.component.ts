import { Component, OnInit } from '@angular/core';

type Ingredient = {
  name: string,
  done:boolean
}
@Component({
  selector: 'app-receipe',
  templateUrl: './receipe.component.html',
  styleUrls: ['./receipe.component.css']
})
export class ReceipeComponent implements OnInit {




  constructor() { }

  ngOnInit() {
  }

  toggle(i:Ingredient){
    i.done = ! i.done;
  }

  isDone(i:Ingredient){
    return i.done;
  }
}
