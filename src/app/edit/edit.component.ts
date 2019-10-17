import { Component, OnInit } from '@angular/core';
import { Http ,Headers} from '@angular/http';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  details:any[];
  constructor(private http:Http){ }

  ngOnInit() {
    this.details=JSON.parse(localStorage.getItem('emp'));
  }
  edit(empId,firstName,lastName,email,gender,age){
      let edited_data=JSON.stringify(({empId,firstName,lastName,email,gender,age}));
      let header=new Headers({'Content-Type': 'application/json'});
      header.append('access-control-allow-origin','*');
      this.http.post('http://localhost:8888/edit',edited_data,{ headers:header}).subscribe(

      )
  }

}
