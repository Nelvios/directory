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
  isRemP = false;
  isAddId = false;
  isRemId = false;

  DISABLED: boolean[] = [false, false, false, false];

  AddPointer(): void {
    this.isAddP = !this.isAddP;
    this.CheckDisabled();
  }

  RemovePointer(): void {
    this.isRemP = !this.isRemP;
    this.CheckDisabled();
  }

  CheckDisabled(): void {
    if(this.isAddP){
      this.DISABLED = [false, true, true, true];
    }
    else if(this.isRemP){
      this.DISABLED = [true, false, true, true];
    }
    else if(this.isAddId){
      this.DISABLED = [true, true, false, true];
    }
    else if(this.isRemId){
      this.DISABLED = [true, true, true, false];
    }
    else{
      this.DISABLED = [false, false, false, false];
    }
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

  DeletePointer(index: number): void {
    if(!this.isRemP) {
      return;
    }
    
    var seat: Seat = this.seats.find(() => id === index);
    const temp = this.seats.indexOf(seat);
    this.seats.splice(temp, 1);
    console.log(this.seats);
  }

  constructor() { }

  ngOnInit() {
  }
}

