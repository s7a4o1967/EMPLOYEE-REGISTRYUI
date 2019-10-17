import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  testdata: any[];
  data: string;
  private allItems:any[];
  pagedItems:any[];
  pager:any={};
  // data:Observable<Array<any>>;
  // public apps: Applications[];
  constructor(private http: Http) {
    this.http = http;

  }

  ngOnInit() {
    // console.log('details component');
    let createdBy = localStorage.getItem('userName');
    this.http.get('http://localhost:8888/details/' + createdBy).subscribe(
      data => {
      this.testdata = data.json() as Applications[] ;
     
      }

    );
  }
 

}
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

