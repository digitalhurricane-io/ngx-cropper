import { NgModule } from '@angular/core';
import { NgxCropperComponent } from './ngx-cropper.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    NgxCropperComponent
  ],
  imports: [
    CommonModule,
    MatTooltipModule,
  ],
  exports: [
    NgxCropperComponent
  ]
})
export class NgxCropperModule { }
