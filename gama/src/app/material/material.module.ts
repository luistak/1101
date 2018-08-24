import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  MatButtonModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatSidenavModule,
  MatListModule,
  MatStepperModule,
  MatFormFieldModule,
  MatMenuModule
} from '@angular/material';

import {MatIconModule} from '@angular/material/icon';
import { LayoutModule } from '@angular/cdk/layout';
import { MatJumbotronModule } from '@angular-material-extensions/jumbotron';


@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatIconModule,
    MatJumbotronModule,
    MatStepperModule,
    MatFormFieldModule,
    MatMenuModule,
  ],
  exports: [
    CommonModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatIconModule,
    LayoutModule,
    MatSidenavModule,
    MatListModule,
    MatJumbotronModule,
    MatStepperModule,
    MatFormFieldModule,
    MatMenuModule,
  ]
})
export class MaterialModule { }
