import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { FileUploadService } from '../../services/file-upload.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  isLoading: boolean = true;
  fileUploads: any[];

  constructor(private uploadService: FileUploadService) {}

  ngOnInit(): void {
    this.uploadService
      .getFiles(50)
      .snapshotChanges()
      .pipe(
        map((changes) =>
          // store the key
          changes.map((c) => ({ key: c.payload.key, ...c.payload.val() }))
        )
      )
      .subscribe((fileUploads) => {
        this.fileUploads = fileUploads;
        this.isLoading = false;
      });
  }
}
