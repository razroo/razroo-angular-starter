import { MatToolbarModule } from '@angular/material/toolbar';
import { Component, OnInit, NgModule, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { faBell, faQuestionCircle, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";

@Component({
  selector: 'razroo-angular-starter-global-header',
  templateUrl: './global-header.component.html',
  styleUrls: ['./global-header.component.scss'],
})
export class GlobalHeaderComponent implements OnInit {
  @Output() sideNavToggle: EventEmitter<any> = new EventEmitter();
  faUserCircle = faUserCircle;
  faQuestionCircle = faQuestionCircle;
  faBell = faBell;

  constructor() { }

  ngOnInit(): void { }

  emitSideNavToggle(): void {
    this.sideNavToggle.emit();
  }
}

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    FontAwesomeModule,
    MatIconModule,
    MatButtonModule
  ],
  declarations: [GlobalHeaderComponent],
  exports: [MatToolbarModule, GlobalHeaderComponent],
})
export class GlobalHeaderModule { }
