import { Component, Input, OnInit } from '@angular/core';
import { TagModel } from '../shared/models/Tag.model';
import { Food } from '../services/food/food';

@Component({
  selector: 'app-tags',
  standalone: false,
  templateUrl: './tags.html',
  styleUrl: './tags.css'
})
export class Tags implements OnInit{

  @Input()
  foodPageTags?:string[];

  @Input()
  justifyContent:string = 'center';
  
  tags:TagModel[] = [];
  constructor (private foodService: Food) {};

  ngOnInit(): void {
    if(!this.foodPageTags)
      this.tags = this.foodService.getAllTags();
  }
}
