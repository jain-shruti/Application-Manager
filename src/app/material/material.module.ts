import { NgModule } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatSortModule } from '@angular/material/sort';
import {MatPaginatorModule } from '@angular/material/paginator';
import {MatIconModule} from '@angular/material/icon';



const material = [
  MatFormFieldModule,
  MatInputModule,
  MatCheckboxModule,
  MatButtonModule,
  MatTableModule,
  MatDialogModule,
  MatToolbarModule,
  MatSortModule,
  MatPaginatorModule,
  MatIconModule,
];

@NgModule({
  imports: [ material ],
  exports: [ material ]
})
export class MaterialModule { }
