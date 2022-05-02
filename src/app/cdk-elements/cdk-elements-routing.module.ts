import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableComponent } from './components/table/table.component';
import { CdkPageComponent } from './pages/cdk-page/cdk-page.component';

const routes: Routes = [
  {
    path: '',
    component: CdkPageComponent,
    children: [{ path: 'table', component: TableComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CdkElementsRoutingModule {}
