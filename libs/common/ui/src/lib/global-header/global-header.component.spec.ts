import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GlobalHeaderComponent } from './global-header.component';
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

describe('GlobalComponent', () => {
  let component: GlobalHeaderComponent;
  let fixture: ComponentFixture<GlobalHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GlobalHeaderComponent],
      imports: [FontAwesomeModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
