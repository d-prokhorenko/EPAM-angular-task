import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccordionComponent } from './components/accordion/accordion.component';
import { DateComponent } from './components/date/date.component';
import { DragAndDropComponent } from './components/drag-and-drop/drag-and-drop.component';
import { PortalComponent } from './components/portal/portal.component';
import { TableComponent } from './components/table/table.component';
import { TreeComponent } from './components/tree/tree.component';
import { VirtualScrollComponent } from './components/virtual-scroll/virtual-scroll.component';
import { CdkPageComponent } from './pages/cdk-page/cdk-page.component';

const routes: Routes = [
  {
    path: '',
    component: CdkPageComponent,
    children: [
      { path: 'table', component: TableComponent },
      { path: 'accordion', component: AccordionComponent },
      { path: 'tree', component: TreeComponent },
      { path: 'portal', component: PortalComponent },
      { path: 'drag-and-drop', component: DragAndDropComponent },
      { path: 'virtual-scroll', component: VirtualScrollComponent },
      { path: 'date', component: DateComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CdkElementsRoutingModule {}
