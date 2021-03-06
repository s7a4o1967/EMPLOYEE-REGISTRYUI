import { Component, OnInit, ViewChild } from '@angular/core';
import { Http } from '@angular/http';
import { ActivatedRoute, Router } from '@angular/router';
import { DetailsService } from '../services/details.service';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  config: any;
  testdata: any[];
  data: string;
  currentpage: number;
  private allItems: any[];
  pagedItems: any[];
  pager: any = {};
  // noOfRecords = 1;
  response: any = [];
  totalelements: number;
  // collection={count:20,data:[]};
  displayedColumns: string[] = ['empId', 'firstName', 'lastName', 'email', 'Gender', 'age'];
  // data:Observable<Array<any>>;
  // public apps: Applications[];
  
  constructor( private details_service: DetailsService,
    private route: ActivatedRoute
,private    router: Router ) {
  }
  ngOnInit() {
    this.details_service.getFirstDetails().subscribe(res => {
      this.totalelements = res.json().totalElements
      this.response = res.json().content as Applications[];
      this.config = {
        currentPage: 1,
        itemsPerPage: 5,
      };
    })
    // let createdBy = localStorage.getItem('userName');

    //     this.http.get('http://localhost:8888/details/'+createdBy+'/0')
    //     .subscribe(res=>{
    //       this.totalelements = res.json().totalElements
    //       this.response=res.json().content as Applications[];

    //   //     this.config = {
    //   //       currentPage:1,
    //   // itemsPerPage:5,
    //   // totalElements: noOfRecords
    //   //     };
    //      // console.log(this.config)
    //     })

  }
  pageChange(event) {
    this.currentpage = event;
    event = event - 1;
    // let createdBy = localStorage.getItem('userName');
    // this.http.get('http://localhost:8888/details/' + createdBy + '/' + event)
    //   .subscribe(res => {
    //     this.response = res.json().content as Applications[];
    //   })
    this.details_service.pageChange(event).subscribe(res=>{
      this.response=res.json().content as Applications[];
    })
  }
}
// ngOnInit() {
//   // console.log('details component');
//   let createdBy = localStorage.getItem('userName');

// }
//  }

interface Applications {
  empId: string;
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
  age: string;
  createdBy: string;
  timeStamp: string;
}


