import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IdentityRoutingModule } from './identity-routing.module';
import { UserComponent } from './user/user.component';
import { SharedModule } from '@shared';

@NgModule({
  declarations: [UserComponent],
  imports: [
    CommonModule,
    IdentityRoutingModule,
    SharedModule
  ]
})
export class IdentityModule { }
