import { CoreModule } from './core.module';

describe('CoreModule', () => {
  let coreModule: CoreModule;


  it('should create an instance', () => {
    coreModule = new CoreModule(undefined);
    expect(coreModule).toBeTruthy();
  });
  it('should not create if already exist in a heigher level', () => {
    expect(() => {
      coreModule = new CoreModule({} as CoreModule);
    }).toThrowError();
  });
});
