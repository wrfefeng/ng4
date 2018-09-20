import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {
  private stars: boolean[];
  @Input()
  private rating:number  = 0;
  constructor() { }

  ngOnInit() {
    this.stars = []
    for (let i = 1; i <= 5; i ++) {
      this.stars.push(i > this.rating);
    }
  }

}
