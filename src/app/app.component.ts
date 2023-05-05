import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  name:any='Nuriddin';
  age = 22;
  count: number = 0
  color = ''
  changeBg() {
    const arr: string[] = ['#777','#123','#345']
    document.body.style.background = `${arr[this.count]}`
    this.color = arr[this.count]
    this.count++
    if(this.count === arr.length){
      this.count = 0;
    }
  }

  increse():void{
    this.age++
  }


}
