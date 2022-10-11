import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-regis',
  templateUrl: './regis.component.html',
  styleUrls: ['./regis.component.css']
})
export class RegisComponent implements OnInit {

  constructor(private renderer: Renderer2) { 
    this.renderer.addClass(document.body, "login-page");
  }

  ngOnInit(): void {
  }

}
