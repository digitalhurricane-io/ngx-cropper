import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { NgxCropperComponent, CroppedEvent } from 'ngx-cropper';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('photoEditor', { static: false }) photoEditor!: NgxCropperComponent;

  base64: any;
  fileChangedEvent: any;
  imageUrl: any;

  constructor(private cd: ChangeDetectorRef) { }

  fileChangeEvent(event: any) {
    this.fileChangedEvent = event;
  }


  imageCropped(event: CroppedEvent) {
    console.log(event);
    this.base64 = event.base64;
    this.cd.detectChanges();
  }

  export() {
    this.photoEditor.export();
  }
}
