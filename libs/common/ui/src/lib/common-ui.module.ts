import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from "./layout/layout.component";
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  imports: [CommonModule, MatCardModule, RouterModule],
  exports: [LayoutComponent],
  declarations: [LayoutComponent]
})
export class CommonUiModule { }
