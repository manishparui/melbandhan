import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public formattedRemaningTime: string = ''

  constructor() { }

  ngOnInit(): void {

    this.formattedRemaningTime = this.getRemainingTime('May 9, 2022 12:00:00')
    setInterval( () => {
      this.formattedRemaningTime = this.getRemainingTime('May 9, 2022 12:00:00')
    }, 1000)

  }

  private getRemainingTime(endDateString: string): string {
    let endDateObject = new Date(endDateString).getTime()
    let nowObject = new Date().getTime()
    let remainingTime = endDateObject - nowObject

    let days = Math.floor(remainingTime / (1000 * 60 * 60 * 24))
    let hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    let minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60))
    let seconds = Math.floor((remainingTime % (1000 * 60)) / 1000)

    let formattedRemaningTime = `${days}days ${hours}h ${minutes}m ${seconds}s`
    return formattedRemaningTime
  }

  

}
