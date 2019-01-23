import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { Button } from 'protractor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  ngOnInit(){
  //   $(document).ready(function(){
  //     $('#recordList').click(function(){
  //             $("#recordList").css("color", "black");
  //             $("#addRecord").css("color", "gray");
  //       });
    
  //     $('#addRecord').click(function(){
  //             $("#addRecord").css("color", "black");
  //             $("#recordList").css("color", "gray");
  //       });
  //   });
  // }
  }

  title = 'app';
}
