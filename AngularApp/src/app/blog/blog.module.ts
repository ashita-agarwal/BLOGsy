import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { AllBlogComponent } from './all-blog/all-blog.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { AddBlogComponent } from './add-blog/add-blog.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AllBlogComponent,
    BlogDetailComponent,
    AddBlogComponent,
    AboutUsComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule
    , ReactiveFormsModule
  ]
})
export class BlogModule { }
