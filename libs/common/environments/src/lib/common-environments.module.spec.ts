import { async, TestBed } from '@angular/core/testing';
import { CommonEnvironmentsModule } from './common-environments.module';

describe('CommonEnvironmentsModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CommonEnvironmentsModule],
    }).compileComponents();
  }));

  // TODO: Add real tests here.
  //
  // NB: This particular test does not do anything useful.
  //     It does NOT check for correct instantiation of the module.
  it('should have a module definition', () => {
    expect(CommonEnvironmentsModule).toBeDefined();
  });
});
