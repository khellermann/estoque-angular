import { Observable } from 'rxjs';

export interface IService<T> {

  save(objeto: T): void;
  update(objeto: T): void;
  delete(id: string): void;
  list(): Observable<T[]>;
  get(id: string): Observable<T>;


}
