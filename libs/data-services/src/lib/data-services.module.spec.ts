import { async, TestBed } from '@angular/core/testing';
import { DataServicesModule } from './data-services.module';

describe('DataServicesModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [DataServicesModule],
    }).compileComponents();
  }));

  // TODO: Add real tests here.
  //
  // NB: This particular test does not do anything useful.
  //     It does NOT check for correct instantiation of the module.
  it('should have a module definition', () => {
    expect(DataServicesModule).toBeDefined();
  });
});
