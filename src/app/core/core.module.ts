import { NgModule, SkipSelf, Optional } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    HttpClientModule
  ],
  exports: [
    BrowserAnimationsModule
  ],
  declarations: []
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() private coreModule: CoreModule) {
    if (coreModule) {
      throw new Error('Core module cannot be imported more than once');
    }
  }
  static forRoot() {
    return {
      ngModule: CoreModule,
      providers: [
      ]
    };
  }
}
