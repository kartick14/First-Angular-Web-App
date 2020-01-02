import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Blog }    from '../blog';

@Component({
  selector: 'app-addmember',
  templateUrl: './addmember.component.html',
  styleUrls: ['./addmember.component.css']
})
export class AddmemberComponent implements OnInit {

	authors = ['Adam', 'Smith', 'Kartick', 'Admin'];	
	submitted = false;

  	constructor(private http: HttpClient) { }
  	blogModel = new Blog();
  	ngOnInit() {   	
      	this.blogModel = new Blog('Dr IQ', 'message', this.authors[2], '12/26/2019');
      	this.getval();
  	}

 	onSubmit() { this.submitted = true; 
 		this.save();
  		//this.blogModel = new Blog(this.blogModel.blogTitle, this.blogModel.blogContent, this.blogModel.blogAuthor, this.blogModel.blogDate);
  	}

  	save()
  	{
	    this.http.post('http://localhost:3000/addblog',{
	      blogTitle: this.blogModel.blogTitle,
	      blogContent: this.blogModel.blogContent,
	      blogAuthor: this.blogModel.blogAuthor,
	      blogDate: this.blogModel.blogDate
	    }, {headers: new HttpHeaders('')}).subscribe(v => {
	      this.blogModel = v.param
	    })
  	}

  	getval()
  	{
	    this.http.get('http://localhost:3000/getblog',
	    	{headers: new HttpHeaders('')}).subscribe(v => {
	      	this.blogModel = v;
	    })
  	}

  	// TODO: Remove this when we're done
  	//get diagnostic() { return JSON.stringify(this.blogModel); }

}
