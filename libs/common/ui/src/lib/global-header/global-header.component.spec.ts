import { MatToolbarModule } from '@angular/material/toolbar';
import { Component, OnInit, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

@Component({
  selector: 'razroo-angular-starter-header',
  templateUrl: './global-header.component.html',
  styleUrls: ['./global-header.component.scss'],
})
export class GlobalHeaderComponent implements OnInit {
  constructor() { }

  ngOnInit(): void { }
}

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    FontAwesomeModule
  ],
  declarations: [GlobalHeaderComponent],
  exports: [MatToolbarModule, GlobalHeaderComponent],
})
export class GlobalHeaderModule { }
