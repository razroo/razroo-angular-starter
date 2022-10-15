import { MatToolbarModule } from '@angular/material/toolbar';
import { Component, OnInit, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { faBell, faQuestionCircle, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

@Component({
  selector: 'razroo-angular-starter-header',
  templateUrl: './global-header.component.html',
  styleUrls: ['./global-header.component.scss'],
})
export class GlobalHeaderComponent implements OnInit {
  faUserCircle = faUserCircle;
  faQuestionCircle = faQuestionCircle;
  faBell = faBell;

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
