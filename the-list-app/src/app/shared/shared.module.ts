import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LimitLivesPipe } from './limit-lives.pipe';

@NgModule({
  exports: [
    CommonModule
  ],
  declarations: [LimitLivesPipe]
})
export class SharedModule {}
