import { Component, OnInit, OnDestroy } from '@angular/core';
import { BlogService } from "../service/blog.service";
import { ActivatedRoute, Router } from "@angular/router";
import { Blog } from "../model/blog";
import { Subscription } from "rxjs";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit{

  id!: string ;
  blog!: Blog;
  blogSub$!: Subscription;
  showForm!: boolean;
  
  editBlogForm = new FormGroup({
    title: new FormControl("", [Validators.required]),
    snippet: new FormControl("", [Validators.required]),
    body: new FormControl("", [Validators.required]),
    
  });

  constructor(
    private blogService: BlogService,
    private route: ActivatedRoute,
    private router: Router

  ) { }

  ngOnInit(){    
    this.route.params.subscribe(blog =>{ this.id= blog._id;  });
    this.blogService.getBlog(this.id).subscribe(blog =>{this.blog=blog; })
  }
  
  showEdit() {
    this.showForm = !this.showForm;
  }

  editBlog() {     
    this.route.params.subscribe(blog =>{this.id= blog._id;});
    if (this.editBlogForm.valid) {
      this.blogService
        .editBlog(this.editBlogForm.value, this.id)
        .subscribe(res => {
          this.editBlogForm.reset();
          this.router.navigate(["/blogs"]);
        });
    }
  }

  removeBlog() {    
    this.route.params.subscribe(blog =>{this.id= blog._id;});
    this.blogService.deleteBlog(this.id).subscribe(res => {
      console.log(res);
      this.router.navigate(["/blogs"]);
    });
  }
}
