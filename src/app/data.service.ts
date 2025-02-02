import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  //Fetch one month based on format/route i.e "/digital/japan"
  getData(route: string): Observable<any> {
    
    return this.http.get<any>('assets/data.json').pipe(
      map(data => data[route])  // Extract the page data based on the route i.e /aug23

    );

  }
  // NOT USED ATM
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
  //Get all data from data.json
  getAll(){
    const allImages: any[] = [];
    
    return this.http.get<any>('assets/data.json').pipe(
      
      map(data => {        
         Object.values(data).forEach((section: any) => {
          if (section.images && Array.isArray(section.images)) {
            allImages.push(...section.images);
          }});
        // Initialize an empty object to accumulate the result
//console.log(allImages)
        return allImages;})  // Extract the page data based on the route i.e /aug23

    );
  }
  // NOT USED ATM - get all where the format is specified i.e /analogue
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
  // get all months that match the format from the url "/digital/japan"
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
  //NOT USED ATM
  getNavTitleFromRoute(route: string): Observable<any> {
    return this.http.get<any>('assets/data.json').pipe(

      map(data => JSON.stringify(data[route].navbarTitle))


    );

  }
}
