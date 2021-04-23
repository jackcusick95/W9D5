import { htmlGenerator } from "./warmup";

class Clock {
  constructor() {
    const currentTime = new Date();
    this.hours = currentTime.getHours();
    this.minutes = currentTime.getMinutes();
    this.seconds = currentTime.getSeconds();
  }

  printTime() {
    const timeString = [this.hours, this.minutes, this.seconds].join(":");
    return timeString;
  }

  _updateHours() {
    this.hours += 1;
    if (this.hours === 24) {
      this.hours = 0;
    }
  }

  _updateMinutes() {
    this.minutes += 1;
    if (this.minutes === 60) {
      this.minutes = 0;
      this._updateHours();
    }
  }

  _updateSeconds() {
    this.seconds += 1;
    if (this.seconds === 60) {
      this.seconds = 0;
      this._updateMinutes();
    }
  }

  tick() {
    this._updateSeconds();
    return this.printTime();
  }

}

let clockElement = document.querySelector("#clock");
let clock = new Clock();

setInterval(() => {
  htmlGenerator(clock.tick.bind(clock)(),clockElement);
},1000);



