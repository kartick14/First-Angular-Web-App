import { Component, OnInit } from '@angular/core';
import { faMugHot } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-highlightcard',
  templateUrl: './highlightcard.component.html',
  styleUrls: ['./highlightcard.component.css']
})
export class HighlightcardComponent implements OnInit {
	
	title = 'myangapp';
  	constructor() { }

  	ngOnInit() {
  	}

  	faMugHot = faMugHot;
}
