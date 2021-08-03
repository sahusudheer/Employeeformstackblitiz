import { Component, OnInit ,ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatTable} from '@angular/material/table';

export interface Empolyee{
  name:string;
  doj:Date;
  gender:string;
  address:string;
}
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  maxdate:Date;
  formdata:Empolyee[]=[]
  displayedColumns: string[] = ['name', 'gender','doj','address'];
  @ViewChild(MatTable) table!: MatTable<Empolyee> ;


  constructor(private _snackbar:MatSnackBar) {

    this.maxdate=new Date()//returns today's date
   }

  ngOnInit(): void {

  }

  
  onSubmit(f:NgForm){//takes ng form value (which is object) converts into array 
    console.log(f.value)
    this.formdata.push(f.value);
    this.table.renderRows();
    f.reset();//resets the whole form 
    this._snackbar.open("Form Submitted Successfully", "Dismiss",{duration: 1000});
  }

  
    
  
}
