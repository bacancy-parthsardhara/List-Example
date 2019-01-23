import { Component, OnInit } from '@angular/core';
import { CrudService } from "../crud.service";
import { Listinterface, UserDataInterface } from "../listinterface";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  userdata: Listinterface[] = [];
  useri: UserDataInterface;

  array: any = [];
  i: number;
  obj:number ;

  flagbtn: boolean = false;
  pleaseWait: boolean = false;
  Displaytable: boolean = false;
  addUser: boolean = false;
  fetchData: boolean = false;

  constructor(private CrudService: CrudService) {

  }

  showDataPage(pageNo) {
    if (pageNo == 1) {
      setTimeout(() => { this.pleaseWait = !this.pleaseWait }, 0);

      setTimeout(() => {
        this.CrudService.getdata(1).subscribe(response => {
          this.useri = response
          this.obj = this.useri.page;
          console.log("i am obj",this.obj);
          for (this.i = 0; this.i < this.useri.total_pages; this.i++) {
            this.array[this.i] = (this.i) + 1;
          }
          console.log(this.array);

          this.pleaseWait = !this.pleaseWait;
          this.Displaytable = true;
          this.addUser = false;
        });
      }, 10);
    }
    else {
      setTimeout(() => { this.fetchData = true }, 0);

      setTimeout(() => {

        this.CrudService.getdata(pageNo).subscribe(response => {
          this.useri = response
          this.obj = this.useri.page;

          this.flagbtn = false;
          this.userdata = this.useri.data;
          this.fetchData = false;
          this.Displaytable = true;
          this.addUser = false;
          console.log("useri : ", this.useri);
          console.log("userdata : ", this.userdata);
        });
      }, 10);
    }
  }

  addData() {
    setTimeout(() => { this.addUser = true }, 0);
    this.Displaytable = false;
  }

  edit(post) {
    this.CrudService.edit(post)
      .subscribe(response => {
        console.log("Edited data is :", response);
      });
  }

  delete(post) {
    this.userdata = this.userdata.filter(i => i !== post);
    this.CrudService.delete(post).subscribe();
  }

  ngOnInit() {
    this.showDataPage(1);
    this.flagbtn = true;
  }
}
