import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { BookService } from '../services/book.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {

  actionBtn: string = "Add";

  bookForm!: FormGroup;

  genres = [
    "Autobiography",
    "Biography",
    "Childrens", "Comedy", "Cooking", "Crime",
    "Fantasy", "Fiction",
    "History", "Horror",
    "Non-Fiction",
    "Science-Fiction",
    "Thriller",
    "Other"
  ]

  constructor(
    private bookService: BookService,
    private formBuilder: FormBuilder,
    private dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public editData : any,
  ) { }

  ngOnInit(): void {
    this.bookForm = this.formBuilder.group({
      title: ['', Validators.required],
      author: ['', Validators.required],
      genre: [''],
      owned: [null, Validators.required],
      read: [null, Validators.required],
    })

    if(this.editData) {
      this.actionBtn = "Update";
      this.bookForm.controls['title'].setValue(this.editData.title);
      this.bookForm.controls['author'].setValue(this.editData.author);
      this.bookForm.controls['genre'].setValue(this.editData.genre);
      this.bookForm.controls['owned'].setValue(this.editData.owned);
      this.bookForm.controls['read'].setValue(this.editData.read);
    }
  }

  addBook(){
    if(!this.editData){
      if(this.bookForm.valid) {
        this.bookService.createBook(this.bookForm.value)
        .subscribe({
          next:(res)=>{
            this.bookForm.reset();
            this.dialog.closeAll();
          }
        })
      }
    } else {
      this.editBook();
    }    
  }

  editBook(){
    this.bookService.updateBook(this.editData._id, this.bookForm.value)
    .subscribe({
      next:(res)=>{
        this.bookForm.reset();
        this.dialog.closeAll();
      }
    })
  }

}
