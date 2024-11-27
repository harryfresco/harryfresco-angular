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
  getSeperatedFormatData(): Observable<any> {
    let analogue=[]
    let digital = []
    let mixed=[]
    return this.http.get<any>('assets/data.json').pipe(

      map(data => {

        const filteredData = data
          .filter(key => key.startsWith("/analogue"));
        analogue.push(filteredData);
        const filteredData2 = data
        .filter(key => key.startsWith("/digital"));
      digital.push(filteredData2);
        mixed[0]=filteredData;
        mixed[1]=filteredData2;
        return mixed;

      })
      
    );

  }
  //Get all but omitting the keys
  getAll(){
    return this.http.get<any>('assets/data.json').pipe(
      map(data => {        
        const filteredData = Object.values(data)
        // Initialize an empty object to accumulate the result

        return filteredData;})  // Extract the page data based on the route i.e /aug23

    );
  }
  // get all where the format is specified i.e /analogue
  getAllFromFormat(format: string){
    return this.http.get<any>('assets/data.json').pipe(

      map(data => {

        const filteredData = Object.keys(data)
          .filter(key => key.startsWith(format))  // Match keys that start with '/analogue'
          .reduce((obj, key) => {
            obj.push(data[key]);  // Add the matching key-value pairs to the result object
            return obj;
          }, []);  // Initialize an empty object to accumulate the result

        return filteredData;

      })

    );
  }
  // get one from xx
  getNavFromFormat(route: string): Observable<any> {

   

    var url = route.split("/");
    var page = "/" + url[1]
    //console.log(page)
    return this.http.get<any>('assets/data.json').pipe(

      map(data => {

        const filteredData = Object.keys(data)
          .filter(key => key.startsWith(page))  // Match keys that start with '/analogue'
          .reduce((obj, key) => {
            obj.push(data[key]);  // Add the matching key-value pairs to the result object
            return obj;
          }, []);  // Initialize an empty object to accumulate the result

        return filteredData;

      })

    );

  }
  getNavTitleFromRoute(route: string): Observable<any> {
    return this.http.get<any>('assets/data.json').pipe(

      map(data => JSON.stringify(data[route].navbarTitle))


    );

  }
}
