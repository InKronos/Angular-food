import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-not-found',
  standalone: false,
  templateUrl: './not-found.html',
  styleUrl: './not-found.css'
})
export class NotFound implements OnInit{
  @Input() visible:boolean = false;
  @Input() notFoundMessage:string= "Nothing Found!";
  @Input() resetLinkText:string = "Reset";
  @Input() resetLinkRoute: string = "/";

  ngOnInit():void {

  }
}
