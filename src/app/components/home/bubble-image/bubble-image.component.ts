import { Component, Input, OnInit } from '@angular/core';
import { FileUploadService } from 'src/app/services/file-upload.service';
import { map } from 'rxjs/operators';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-bubble-image',
  templateUrl: './bubble-image.component.html',
  styleUrls: ['./bubble-image.component.scss'],
})
export class BubbleImageComponent implements OnInit {
  @Input() fileUploads: any[];
  clickedIndex: number = -1;

  constructor(
  ) {}

  ngOnInit(): void {


  }

  public getClassName(num: number) {
    while (num > 10) {
      num = num - 10;
    }
    return num;
  }
  public getRandomNumber(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  public animateMe(index: number) {
    if (this.clickedIndex == index) {
      this.clickedIndex = -1;
    } else {
      this.clickedIndex = index;
    }
    console.log('clicked on index ' + index);
  }
}
