import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReusableTableComponent } from './reusable/table/reusable-table.component';
import { ReusableStateComponent } from './reusable/reusable-state/reusable-state.component';
import { ReusableToolbarComponent } from './reusable/toolbar/reusable-toolbar.component';



@NgModule({
  declarations: [    ReusableTableComponent,
    ReusableStateComponent,
    ReusableToolbarComponent],
  imports: [
    CommonModule
  ],
  exports:[
    ReusableTableComponent,
    ReusableStateComponent,
    ReusableToolbarComponent
  ]
})
export class SharedModule { }
