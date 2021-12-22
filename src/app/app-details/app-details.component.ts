import { AppDetails } from './../AppDetails.model';
import { AddApplicationComponent } from './../add-application/add-application.component';
import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';


const data: AppDetails[] = [
  new AppDetails( 'abc', 'abc', 'abc', 'abc','https://www.w3.org/Provider/Style/dummy.html') ,
  new AppDetails( 'def', 'def', 'def', 'def','https://www.w3.org/Provider/Style/dummy.html') ,
  new AppDetails( 'ghi', 'ghi', 'ghi', 'ghi','https://www.w3.org/Provider/Style/dummy.html') ,
  new AppDetails( 'jkl', 'jkl', 'jkl', 'jkl','https://www.w3.org/Provider/Style/dummy.html') ,
  new AppDetails( 'mno', 'mno', 'mno', 'mno','https://www.w3.org/Provider/Style/dummy.html') ,
  new AppDetails( 'pqr', 'pqr', 'pqr', 'pqr','https://www.w3.org/Provider/Style/dummy.html') ,
  new AppDetails( 'stu', 'stu', 'stu', 'stu','https://www.w3.org/Provider/Style/dummy.html') ,
];

@Component({
  selector: 'app-app-details',
  templateUrl: './app-details.component.html',
  styleUrls: ['./app-details.component.scss'],
})
export class AppDetailsComponent  {
  displayedColumns: string[] = [
    'srNo',
    'appName',
    'developer',
    'hod',
    'client',
    'action',
    'link'
  ];

  dataSource = new MatTableDataSource<AppDetails>(data);

  @ViewChild(MatPaginator, {static: false}) paginator!: MatPaginator;
  @ViewChild(MatTable, {static: false}) table !: MatTable<AppDetails>;
  @ViewChild(MatSort, {static: false}) sort !: MatSort;

  constructor(public dialog: MatDialog) {}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openDialog(action:any,obj:any) {
    obj.action = action
    const dialogRef = this.dialog
      .open(AddApplicationComponent,{
        data: obj,
        width: '50%'
      });
    dialogRef.afterClosed()
      .subscribe((result) => {
        if( result !== undefined ){
          if (result.event == 'Add') {
          this.addApp(result.data);
        } else if (result.event == 'Update'){
          this.updateApp(result.data);
        }
        }
      });    

  }
  
  
  addApp(row:any) {  
    this.dataSource.data.unshift(row);
    this.dataSource.data = [ ...this.dataSource.data ];
    this.table.renderRows();
  }

  updateApp(res:any){
    this.dataSource.data = this.dataSource.data.filter((value,key)=>{
      if(value.appName == res.appName){
        value.appName = res.appName;
        value.developer = res.developer;
        value.hod = res.hod;
        value.client = res.client;
        value.link = res.link;
      }
      return true;
  });
}

}
