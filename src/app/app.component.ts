import { Component } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	comments = [
		{author:'Bob: ', comment: 'first comment!'},
		{author:'Phil: ', comment: 'nice work!'},
		{author: 'Bill: ', comment: 'I would also like to congratulate you!'}
	];

	newAuthor: string = "";
	newComment: string = "";

	edit_value = true;

  addOne(): any {
  	// console.log(this);
  	console.log(typeof this.newAuthor);
  	console.log(this.newAuthor);
  	console.log(this.newComment);
  	this.comments.push({author: this.newAuthor , comment: this.newComment});
	}

	deleteOne(comment): any {
		let commentNum = this.comments.indexOf(comment);
		this.comments.splice(commentNum, 1);
		console.log(commentNum);
		console.log('hello')
		console.log(comment);
	}

	editOne(comment): any {
		this.edit_value = null;
		let commentToUpdate = this.comments.indexOf(comment);
		console.log(commentToUpdate);
		//need to turn the name and comment to input boxes
		//add a hidden input box that is only appeneded when update is hit
		//hide the name and comment

		
	}
}



