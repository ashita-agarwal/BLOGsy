import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllBlogComponent } from "./all-blog/all-blog.component";
import { BlogDetailComponent } from "./blog-detail/blog-detail.component";
import { AddBlogComponent } from "./add-blog/add-blog.component";
import { AboutUsComponent } from "./about-us/about-us.component";

const routes: Routes = [
  {
    path: "",
    component: AllBlogComponent
  },
   {
    path: "add-blog",
    component: AddBlogComponent
  },
  {
    path: "about-us",
    component: AboutUsComponent
  },
  {
    path : ":_id",
    component: BlogDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
