import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkOrderRoutingModule } from './work-order-routing.module';
import { CustonInfoComponent } from './custon-info/custon-info.component';
import { SharedModule } from '@shared';
import { LayoutModule } from 'app/layout/layout.module';

@NgModule({
  declarations: [CustonInfoComponent],
  imports: [
    CommonModule,
    WorkOrderRoutingModule,
    SharedModule,
    LayoutModule,
  ]
})
export class WorkOrderModule { }
