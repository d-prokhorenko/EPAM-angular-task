import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CdkElementsRoutingModule } from './cdk-elements-routing.module';
import { CdkPageComponent } from './pages/cdk-page/cdk-page.component';


@NgModule({
  declarations: [
    CdkPageComponent
  ],
  imports: [
    CommonModule,
    CdkElementsRoutingModule
  ]
})
export class CdkElementsModule { }
