import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutDefaultComponent } from 'app/layout/default/default.component';
import { CustonInfoComponent } from './custon-info/custon-info.component';


const routes: Routes = [
  {
    path: '',
    component: LayoutDefaultComponent,
    children: [
    {
      path: 'custom-info',
      component: CustonInfoComponent,
      data: { title: '用户信息', reuse: true },
    }
  ]
 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkOrderRoutingModule { }
