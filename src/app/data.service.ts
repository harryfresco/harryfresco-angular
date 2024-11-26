import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getData(route: string): Observable<any> {
    // Fetch the entire JSON file
    return this.http.get<any>('assets/data.json').pipe(
      map(data => data[route])  // Extract the page data based on the route i.e /aug23

    );

  }
  getNav(): Observable<any> {
    
    const regex = new RegExp("/analogue/aug23", 'i');  // 'i' for case-insensitive search
    // Fetch the entire JSON file
    return this.http.get<any>('assets/data.json').pipe(

     map(data => {

      const filteredData = Object.keys(data)
      .filter(key => key.startsWith('/analogue'))  // Match keys that start with '/analogue'
      .reduce((obj, key) => {
        obj.push(data[key].navbarTitle);  // Add the matching key-value pairs to the result object
        return obj;
      }, []);  // Initialize an empty object to accumulate the result
      
    return filteredData;

      })

    );

  }
}
