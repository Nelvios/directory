import { Component, OnInit } from '@angular/core';
import { SEATS } from "./mock-seats";
import * as $ from 'jquery';
import { Seat } from './seat';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'it-directory';

  seats = SEATS;

  isAddP = false;

  AddPointer(): void {
    this.isAddP = !this.isAddP;
  }

  getPosition(event: any): void {
    if(!this.isAddP) {
      return;
    }

    var x: number = event.pageX;
    var y: number = event.pageY;
    var w: number = $('.seats').width();
    var h: number = $('.seats').height();
    var pos: any = $('.seats').position();

    var temp: number = SEATS[SEATS.length-1].id+1;

    var seat: Seat = {
      id: temp,
      name: "TestName",
      x: (x-pos.left)/w*100,
      y: (y-pos.top)/h*100,
      isVacant: true,
      isCubicle: true,
    }

    this.seats.push(seat);
  }

  constructor() { }

  ngOnInit() {
  }
}

