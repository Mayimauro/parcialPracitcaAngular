import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CuchillosInterface} from '../interface/cuchillos.interface';

@Injectable({
  providedIn: 'root'
})
export class CuchillosService {

  constructor(private http: HttpClient) { }

  urlDataBase: string = 'http://localhost:3000/cuchillos';

  getCuchillos(): Observable<CuchillosInterface[]> {
    return this.http.get<CuchillosInterface[]>(this.urlDataBase);
  }
  getCuchillosById(id: string): Observable<CuchillosInterface> {
    return this.http.get<CuchillosInterface>(`${this.urlDataBase}/${id}`);
  }

  postCuchillos(cuchillo: CuchillosInterface): Observable<CuchillosInterface> {
    return this.http.post<CuchillosInterface>(this.urlDataBase, cuchillo);
  }

  putCuchillo(cuchillo: CuchillosInterface): Observable<CuchillosInterface>{
    return this.http.put<CuchillosInterface>(this.urlDataBase, cuchillo);
  }

  deleteCuchilloById(id: string): Observable<void> {
    return this.http.delete<void>(this.urlDataBase + '/' + id);
  }



}
