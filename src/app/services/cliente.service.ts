import { Cliente } from './../models/cliente.model';
import { IService } from './iservice';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestoreCollection } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ClienteService implements IService<Cliente> {



  constructor() { }
  save(objeto: any): void {
    throw new Error("Method not implemented.");
  }
  update(objeto: any): void {
    throw new Error("Method not implemented.");
  }
  delete(id: string): void {
    throw new Error("Method not implemented.");
  }
  list(): Observable<any[]> {
    throw new Error("Method not implemented.");
  }
  get(id: string): Observable<any> {
    throw new Error("Method not implemented.");
  }
}
