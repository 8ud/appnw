import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MtestRoutingModule } from './mtest-routing.module';
import { Cmp1Component } from './cmp1/cmp1.component';
import { StestService } from './stest.service';
import { Srv2 } from './classes/srv2';
import { M1Component } from './m1/m1.component';
import { M2Component } from './m2/m2.component';
import { S1Component } from './s1/s1.component';
import { S2Component } from './s2/s2.component';

@NgModule({
  declarations: [Cmp1Component, M1Component, M2Component, S1Component, S2Component],
  exports: [Cmp1Component, M1Component, M2Component, S1Component, S2Component],  // a rajouter
  imports: [
    CommonModule,
    MtestRoutingModule
  ],
  providers:[   // rajout du provider StestService
   //   StestService
   {provide: StestService, useClass : Srv2}  // ajout provide
]
})
export class MtestModule { }
