import { Component } from '@angular/core';

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

	updateOne(): any {
		
	}
}



