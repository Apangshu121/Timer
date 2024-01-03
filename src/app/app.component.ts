import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'StopWatch';
  
  sec:any = '0' + 0;
  min:any = 0 +'5';
  
  startTimer:any;
  running:boolean = false;
  stopTimer:boolean = false;
  
  start():void{
    if(!this.running){
      this.running=true;

      this.startTimer = setInterval(() => {
        
        this.sec--;
        console.log(this.sec);
        
        if(this.sec === -1){
          this.min--;
          this.min = '0' + this.min;
        }

        this.sec = this.sec === -1? '59' : this.sec <= 9 ? '0'+this.sec:this.sec;

        
        if (parseInt(this.min, 10) === 0 && parseInt(this.sec, 10) === 0) {
          clearInterval(this.startTimer);
          this.running = false;
          
          this.stopTimer=true;
        }
        
      }, 1000);
    }else{
      this.stop();
    }
  }


  reset():void {
    clearInterval(this.startTimer);
    this.running=false
    this.min = 0 +'5';
    this.sec ='0' + 0;
    this.stopTimer=false
  }

  stop():void{
    clearInterval(this.startTimer);
    this.running=false
  }
}


