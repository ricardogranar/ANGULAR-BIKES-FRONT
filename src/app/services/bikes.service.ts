import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, } from "@angular/common/http"
//import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BikesService {
  _url = "http://localhost:3000/bikes" 
  constructor(
    private http: HttpClient
  ) {
    console.log("servicio bicis")

  } 
  getBikes() {
    let header = new HttpHeaders()
    .set("Type-content", "aplication/json")

    return this.http.get(this._url, {
      headers: header
    });
  }
}

  

  /*constructor(private http: HttpClient) { }

  public getAllBikes(): Observable<any>{
    return this.http.get("http://localhost:3000/bikes");
  }

  public getBike(id: string): Observable<any>{
    return this.http.get("http://localhost:3000/bikes/"+ id);
  }

  public postBike(newBike:any){
    return this.http.post("http://localhost:3000/bikes/create", newBike);
  }

  public deleteBike(id: string){
    return this.http.delete("http://localhost:3000/bikes/delete/" +id)
  }

  public putBike(id: string, updatedCharacter:any){
    return this.http.put("http://localhost:3000/bikes/edit/" + id, updatedbike)*/
  


