import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GraficasService {

  constructor(private http: HttpClient) {}

  getUsauariosRedes(){
    return this.http.get('http://localhost:3000/grafica')
  }
  
}
