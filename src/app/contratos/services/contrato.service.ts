import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contrato } from '../models/contrato.model';

@Injectable({ providedIn: 'root' })
export class ContratoService {
  private readonly API = 'http://localhost:8090/api/contratos';

  constructor(private http: HttpClient) {}

  list(): Observable<Contrato[]> {
    return this.http.get<Contrato[]>(this.API);
  }

  findById(id: number): Observable<Contrato> {
    return this.http.get<Contrato>(`${this.API}/${id}`);
  }

  create(contrato: Contrato): Observable<Contrato> {
    return this.http.post<Contrato>(this.API, contrato);
  }

  update(contrato: Contrato): Observable<Contrato> {
    return this.http.put<Contrato>(`${this.API}/${contrato.id}`, contrato);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.API}/${id}`);
  }
}
