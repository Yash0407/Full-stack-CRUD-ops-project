import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FundsDataServiceService {

  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}


  /**
   * Fetches all fund items from the backend
   * @returns Observable with all fund items
   */
  getAllItems(): Observable<any> {
    return this.http.get(`${this.baseUrl}/getAllItems`);
  }

  /**
   * Fetches a single fund item by name
   * @param name Name of the fund to fetch (CASE SENSITIVE)
   * @returns Observable with the requested fund item
   */
  getItem(name: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/getItem/${name}`);
  }

  /**
   * Updates a fund item with new/edited data
   * @param name Name of the fund to update
   * @param data Updated fund data
   * @returns Observable with the update response
   */
  updateItem(name: string, data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/updateItem/${name}`, data);;
  }

  /**
   * Deletes a fund item by name
   * @param name Name of the fund to delete
   * @returns Observable with the delete response
   */
  deleteItem(name: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/deleteItem/${name}`);;
  }
  
}
