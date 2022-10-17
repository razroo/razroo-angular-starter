import { async, TestBed } from '@angular/core/testing';
import { DataGraphqlModule } from './data-graphql.module';

describe('DataGraphqlModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [DataGraphqlModule],
    }).compileComponents();
  }));

  // TODO: Add real tests here.
  //
  // NB: This particular test does not do anything useful.
  //     It does NOT check for correct instantiation of the module.
  it('should have a module definition', () => {
    expect(DataGraphqlModule).toBeDefined();
  });
});
