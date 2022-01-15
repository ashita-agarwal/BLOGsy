import { Component, OnInit } from '@angular/core';
import { BlogService } from "../service/blog.service";
import { Observable } from "rxjs";
import { Blog } from "../model/blog";

@Component({
  selector: 'app-all-blog',
  templateUrl: './all-blog.component.html',
  styleUrls: ['./all-blog.component.css']
})

export class AllBlogComponent implements OnInit {
  
  blogs$!: Observable<Blog[]> ;
  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
     this.blogs$ = this.blogService.getBlogs();
  }

}
