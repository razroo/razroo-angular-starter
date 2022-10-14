import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from "./home/home.component";
import { HomeRoutingModule } from "./routing/home-routing.module";

@NgModule({
  imports: [CommonModule, HomeRoutingModule],
  exports: [HomeComponent],
  declarations: [HomeComponent]
})
export class HomeModule { }
