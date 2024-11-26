1. Structure the JSON file
For this solution, your data.json file will contain different sections or objects for each route, identified by a unique id or slug. Here’s an example of how your data.json might look:

json
Copy code
```json 
{
  "pages": {
    "1": {
      "title": "Page 1",
      "content": "This is the content for page 1.",
      "items": [
        { "name": "Item A", "description": "Description for item A" },
        { "name": "Item B", "description": "Description for item B" }
      ]
    },
    "2": {
      "title": "Page 2",
      "content": "This is the content for page 2.",
      "items": [
        { "name": "Item X", "description": "Description for item X" },
        { "name": "Item Y", "description": "Description for item Y" }
      ]
    },
    "3": {
      "title": "Page 3",
      "content": "This is the content for page 3.",
      "items": [
        { "name": "Item 1", "description": "Description for item 1" },
        { "name": "Item 2", "description": "Description for item 2" }
      ]
    }
  }
}
```
In this example, the pages object contains data for different pages (identified by their id).

2. Update the Service to Load Data Based on Route
Modify the DataService to fetch the entire data.json file, and then extract the specific data for the page using the route parameter.

Here’s how you can modify your data.service.ts:

```typescript
Copy code
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getData(pageId: string): Observable<any> {
    // Fetch the entire JSON file
    return this.http.get<any>('assets/data.json').pipe(
      map(data => data.pages[pageId])  // Extract the page data based on the pageId
    );
  }
}
```
3. Update Routing to Handle Dynamic URL Parameters
In your app-routing.module.ts, set up a route that includes a dynamic parameter, such as id, which corresponds to the page identifier in the JSON file.

```typescript
Copy code
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: 'page/:id', component: AppComponent },
  { path: '', redirectTo: '/page/1', pathMatch: 'full' }  // Default route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
```
In this case, the route /page/:id will load different content based on the id parameter in the URL (e.g., /page/1, /page/2, etc.).

4. Access the Route Parameter in the Component
In the app.component.ts, use the ActivatedRoute service to capture the route parameter (id) from the URL, and then use that to fetch the appropriate data from the DataService.

```typescript
Copy code
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  pageData: any = {};

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // Get the route parameter 'id' from the URL
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        // Fetch data based on the 'id' from the JSON file
        this.dataService.getData(id).subscribe((data) => {
          this.pageData = data;
        });
      }
    });
  }
}
```
5. Update the HTML Template to Display Data
Finally, bind the pageData to the template to display the content dynamically:

```html
Copy code
<div *ngIf="pageData">
  <h1>{{ pageData.title }}</h1>
  <p>{{ pageData.content }}</p>

  <ul>
    <li *ngFor="let item of pageData.items">
      <h3>{{ item.name }}</h3>
      <p>{{ item.description }}</p>
    </li>
  </ul>
</div>
```
6. Test the Application
Now you can test the application. The routes /page/1, /page/2, /page/3, etc., will load different data from the same data.json file based on the id parameter.

For example:

http://localhost:4200/page/1 will load data from data.pages["1"].
http://localhost:4200/page/2 will load data from data.pages["2"].
Summary:
Single JSON file: Store all the pages' data in one JSON file, with each page identified by a unique key (like 1, 2, etc.).
Dynamic route: Use Angular routing to create a dynamic route (/page/:id).
Service modification: Fetch the entire JSON file, and extract the relevant data based on the route parameter (id).
Component updates: Access the route parameter in the component, and display the appropriate content.
This solution allows you to use only one JSON file for all dynamic data, making it easier to manage and extend.