import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Ingrediente} from "./ingrediente.model";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment.prod";

@Injectable({
  providedIn: 'root'
})
export class IngredientesService {

  private urlBase: string = `${environment.apiUrl}${environment.urlIngredientes}`;
  private listAll: string = this.urlBase + `${environment.listAll}`;

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }

  constructor(private httpClient: HttpClient) {
  }

  public cadastrarIngredientes(ingrediente: Ingrediente): Observable<Ingrediente> {
    return this.httpClient.post<Ingrediente>(
      this.urlBase,
      ingrediente,
      this.httpOptions)
  }

  public buscarTodosingredientes(): Observable<Ingrediente[]> {
    return this.httpClient.get<Ingrediente[]>(this.listAll);
  }
}
