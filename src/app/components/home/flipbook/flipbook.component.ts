import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-flipbook',
  templateUrl: './flipbook.component.html',
  styleUrls: ['./flipbook.component.scss']
})
export class FlipbookComponent implements OnInit {

  showBook: boolean = true;
  showQr:boolean = false;
  hideAlert: boolean = false;
  audio = new Audio();

  constructor() { }

  ngOnInit(): void {
    this.pauseAudio();

  }

  public toggleBook(){
    this.showBook = !this.showBook;
  }

  
  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) { 
    if(event.key == 'g' || event.key == 'G'){
      this.toggleBook();
    }
  }

  playAudio(){
    this.audio.src = "../../assets/audio/Infy-Talk.m4a";
    this.audio.load();
    this.audio.volume = 0.5;
    this.audio.play();
  }

  pauseAudio(){
      this.audio.pause();
  }

}
