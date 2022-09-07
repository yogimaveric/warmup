import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { DialogmodelComponent } from '../dialogmodel/dialogmodel.component';
import { SharedserivceService } from '../shared/sharedserivce.service';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDatepicker } from "@angular/material/datepicker";
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  @ViewChild('datepickerFooter', { static: false })
  datepickerFooter!: ElementRef;
  @ViewChild('datepickerFooter1', { static: false })
  datepickerFooter1!: ElementRef;
  @ViewChild('picker', { static: false })
  picker!: MatDatepicker<any>;
  startDate:Date | null = null;
  endDate:Date | null = null;
  selectedValue : Date | null = null;
  userData:any[]=[]
  activePage = 0;
  start=0; 
  end=6; 
  limit=6;
  public daterange: any = {};
   options: any = {
    locale: { format: 'YYYY-MM-DD' },
    alwaysShowCalendars: false,
  };
  dateRange = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });
  constructor(public dialog:MatDialog,private sharedSerivce:SharedserivceService) {
    this.getallData()
   }
  showFirstLastButtons= true
  title='CMP Details'
  search:any;
  ngOnInit(): void {
  }

  //For open DialogmodelComponent
  openDialog(){
    this.dialog.open(DialogmodelComponent)
  }
  today(){
   this.startDate=new Date();
    this.endDate=new Date()
    this.picker.close()
  }
  yestarday(){
    let today=new Date()
    this.startDate=new Date( today.setDate(today.getDate()-1));
    this.endDate=new Date()
    this.picker.close()
  }
  lmonth(){
    let today=new Date()
    let lastmonthstart=new Date(today.getFullYear(),today.getMonth()-1,1)
    let lastmonthend=new Date(today.getFullYear(),today.getMonth(),0)
    this.startDate=lastmonthstart;
    this.endDate=lastmonthend;
    this.picker.close()
  }
  thismonth(){
    let today=new Date()
    let currentmonthstart=new Date(today.getFullYear(),today.getMonth(),1);
    let currentmonthend=new Date(today.getFullYear(),today.getMonth() +1,0)
    this.startDate=currentmonthstart;
    this.endDate=currentmonthend;
    this.picker.close();

  }
  last_7_days(){
    let today=new Date()
    this.startDate=new Date(today.setDate(today.getDate()-7))
    this.endDate=new Date();
    this.picker.close();
  }
  onOpen() {
    this.appendFooter();
  }
  cancel(){
    this.picker.close();
  }
private appendFooter() {
  const matCalendar = document.getElementsByClassName('mat-datepicker-content')[0] as HTMLElement;
  matCalendar.appendChild(this.datepickerFooter.nativeElement);
  matCalendar.appendChild(this.datepickerFooter1.nativeElement);
 
  
}
submit(){}

  getallData(){
    this.sharedSerivce.getAllData().subscribe(data => {
      if(data!=null){
        console.log(data)
        
        this.userData = data;
      }else{
        console.log("error")
      }
     
    })
  }

  selectedDate(value: any, datepicker?: any) {
    // this is the date  selected
    console.log(value);
 
    // any object can be passed to the selected event and it will be passed back here
    datepicker.start = value.start;
    datepicker.end = value.end;
 
    // use passed valuable to update state
    this.daterange.start = value.start;
    this.daterange.end = value.end;
    this.daterange.label = value.label;
  }

  displayActivePage(activePageNumber: number){
    this.activePage = activePageNumber;
    this.activePage = activePageNumber;
     this.end = activePageNumber*this.limit;
    this.start=this.end-this.limit;
    
  }
  generateRandomColor(){
    var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    return randomColor;
  }

}
