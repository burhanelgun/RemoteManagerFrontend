import { Component, OnInit, ViewChild } from '@angular/core';
 
import { MatDialog, MatTable } from '@angular/material';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';
import { Client } from '../Client';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../services/auth.service';
import { IpService } from '../services/ip.service';




@Component({
  selector: 'app-manage-clients',
  templateUrl: './manage-clients.component.html',
  styleUrls: ['./manage-clients.component.scss']
})
export class ManageClientsComponent implements OnInit {


  displayedColumns: string[] = ["ip", 'name','jobCount', 'action'];
  dataSource:Client[] =[];
 
  @ViewChild(MatTable,{static:true}) table: MatTable<any>;

  counter:number;

  constructor(public ipService: IpService,public dialog: MatDialog,private httpClient: HttpClient,private authService: AuthService) { 

    this.getClients();

  }

  ngOnInit() {
    
    this.counter=1;
  }

  getClients(){
      this.httpClient.get(`http://${this.ipService.ip}:52440/clients`).subscribe((res : Client[])=>{

        this.dataSource = res;
      });

  }

  openDialog(action,obj) {
    obj.action = action;
    const dialogRef = this.dialog.open(DialogBoxComponent, {
      width: '250px',
      data:obj
    });
 
    dialogRef.afterClosed().subscribe(result => {
      if(result.event == 'Add'){
        this.addRowData(result.data);
      }else if(result.event == 'Update'){
        this.updateRowData(result.data);
      }else if(result.event == 'Delete'){
        this.deleteRowData(result.data);
      }
    });
  }
 
  addRowData(row_obj){
    row_obj.jobCount=0;
    this.dataSource.push({
      name:row_obj.name,
      ip:row_obj.ip,
      jobCount:0
    });

    this.httpClient.post(`http://${this.ipService.ip}:52440/client/add`,row_obj).subscribe(
      (data:any)=>{
        if(data=="Signed in"){


        }
        else{

        }

  
      });





    this.table.renderRows();
    
  }
  updateRowData(row_obj){
    this.dataSource = this.dataSource.filter((value,key)=>{
      if(value.name == row_obj.name || value.ip == row_obj.ip){

        const formData = new FormData();
        formData.append('clientBeforeName',value.name );
        formData.append('clientBeforeIP',value.ip );

        formData.append('clientAfterName', row_obj.name);
        formData.append('clientAfterIP', row_obj.ip);

      

        this.httpClient.post(`http://${this.ipService.ip}:52440/client/update`,formData).subscribe(
          (data:any)=>{
            if(data=="Signed in"){
    
    
            }
            else{
    
            }
    
      
          });




        value.name = row_obj.name;
        value.ip = row_obj.ip;

      }
      return true;
    });
  }
  deleteRowData(row_obj){
    this.dataSource = this.dataSource.filter((value,key)=>{



      this.httpClient.post(`http://${this.ipService.ip}:52440/client/delete`,row_obj).subscribe(
        (data:any)=>{
          if(data=="Signed in"){
  
  
          }
          else{
  
          }
  
    
        });
  




      return value.ip != row_obj.ip;
    });
  }

}
