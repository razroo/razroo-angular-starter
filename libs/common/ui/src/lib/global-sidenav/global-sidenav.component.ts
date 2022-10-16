import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';

@Component({
  selector: 'razroo-angular-starter-global-sidenav',
  templateUrl: './global-sidenav.component.html',
  styleUrls: ['./global-sidenav.component.scss']
})
export class GlobalSidenavComponent {
  events: string[] = [];
  opened = false;
    
  constructor() {}
}

@NgModule({
  imports: [
    CommonModule,
    MatSidenavModule
  ],
  declarations: [GlobalSidenavComponent],
  exports: [GlobalSidenavComponent],
})
export class GlobalSidenavModule {}
