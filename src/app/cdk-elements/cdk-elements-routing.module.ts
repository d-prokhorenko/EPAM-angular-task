import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CdkPageComponent } from './pages/cdk-page/cdk-page.component';

const routes: Routes = [{ path: '', component: CdkPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CdkElementsRoutingModule {}
