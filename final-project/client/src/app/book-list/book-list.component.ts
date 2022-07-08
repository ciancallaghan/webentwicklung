import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { BookFormComponent } from '../book-form/book-form.component';
import { BookService } from '../services/book.service';


@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit{

  booksDisplayedColumns: string[] = ["title", "author", "genre", "owned", "read", "id", "action"];
  bookDataSource!: MatTableDataSource<any>;

  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    public bookService : BookService,
    public bookForm : MatDialog,
  ) { }

  ngOnInit(): void {
    this.getBooks();
  }

  getBooks(){
    this.bookService.getBooks()
    .subscribe({
      next:(res)=>{
        this.bookDataSource = new MatTableDataSource(res);
        this.bookDataSource.sort = this.sort;
      }
    })
  }

  openBookForm(){
    this.bookForm.open(BookFormComponent)
    .afterClosed().subscribe(val=>{
      this.getBooks();
    })
  }

  editBook(row: any){
    this.bookForm.open(BookFormComponent, {
      data:row
    })
    .afterClosed().subscribe(val=>{
      this.getBooks();
    })
  }

  deleteBook(id: string){
    this.bookService.deleteBook(id)
    .subscribe({
      next:(res)=>{
        this.getBooks();
      },
      error:()=>{
        alert("Error while deleting");
      }
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.bookDataSource.filter = filterValue.trim().toLowerCase();
  }

}
