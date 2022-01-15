import { Component, OnInit } from '@angular/core';
import { BlogService } from "../service/blog.service";
import { Router } from "@angular/router";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css']
})
export class AddBlogComponent implements OnInit {
  
  blogForm = new FormGroup({
    title: new FormControl("", [Validators.required]),
    snippet: new FormControl("", [Validators.required]),
    body: new FormControl("", [Validators.required]),
    
  });
  constructor(private blogService: BlogService, private router: Router) { }

  ngOnInit(): void {
  }
  newBlog() {
    if (this.blogForm.valid) {
      this.blogService.addBlog(this.blogForm.value).subscribe(res => {
        this.blogForm.reset();
        this.router.navigate(["/blogs"]);
      });
    }
  }
}
