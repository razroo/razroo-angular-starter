import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { GlobalSidenavComponent } from './global-sidenav.component';

describe('GlobalSidenavComponent', () => {
  let component: GlobalSidenavComponent;
  let fixture: ComponentFixture<GlobalSidenavComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [GlobalSidenavComponent],
      imports: [
        NoopAnimationsModule,
        MatSidenavModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
