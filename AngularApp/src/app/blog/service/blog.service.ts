import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from "@angular/common/http";
import { Observable } from "rxjs";
import { Blog } from "../model/blog";

@Injectable({
  providedIn: 'root'
  
})
export class BlogService {
  private ROOT_URL = "http://localhost:3000/api/blogs";
  
  // Http Options
  private httpOptions = {
    headers: new HttpHeaders()
      .set("Content-Type", "application/json")
       
  };
  constructor(private http: HttpClient) { }

  getBlogs(): Observable<Blog[]> {
    return this.http.get<Blog[]>(this.ROOT_URL);
  }
  getBlog(id: string) {
    return this.http.get<Blog>(`${this.ROOT_URL}/${id}`);
  }
  addBlog(blog: any) {
    return this.http.post<any>(this.ROOT_URL, blog, this.httpOptions);
  }
  editBlog(blog:any, id: string) {
    return this.http.put<any>(
      `${this.ROOT_URL}/${id}`,
      blog,
      this.httpOptions
    );
  }
  deleteBlog(id: string) {
    return this.http.delete(`${this.ROOT_URL}/${id}`, 
    this.httpOptions);
  }
}


