import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  MatButtonModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatSidenavModule,
  MatListModule,
<<<<<<< HEAD
  MatStepperModule,
  MatFormFieldModule,
=======
  MatMenuModule
>>>>>>> a0cd63573c241e39381321ed3778e1a77e4970c9
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
<<<<<<< HEAD
    MatStepperModule,
    MatFormFieldModule
=======
    MatMenuModule
>>>>>>> a0cd63573c241e39381321ed3778e1a77e4970c9
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
<<<<<<< HEAD
    MatStepperModule,
    MatFormFieldModule
=======
    MatMenuModule
>>>>>>> a0cd63573c241e39381321ed3778e1a77e4970c9
  ]
})
export class MaterialModule { }
