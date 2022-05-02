import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CdkElementsRoutingModule } from './cdk-elements-routing.module';
import { CdkPageComponent } from './pages/cdk-page/cdk-page.component';
import { TableComponent } from './components/table/table.component';

import { CdkTableModule } from '@angular/cdk/table';

@NgModule({
  declarations: [CdkPageComponent, TableComponent],
  imports: [CommonModule, CdkElementsRoutingModule, CdkTableModule],
})
export class CdkElementsModule {}
