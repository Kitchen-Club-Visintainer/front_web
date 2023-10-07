import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Ingrediente} from "./entity/ingrediente.model";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment.prod";
import {IngredienteDto} from "./entity/ingredienteDto.model";

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

  public buscarTodosingredientes(): Observable<IngredienteDto[]> {
    return this.httpClient.get<IngredienteDto[]>(this.listAll);
  }

  public buscarIngrediente(id: number): Observable<IngredienteDto> {
    const url: string = this.urlBase + '/' + id;
    return this.httpClient.get<IngredienteDto>(url);
  }

  public atualizarIngrediente(ingrediente: Ingrediente, id: number): Observable<Ingrediente> {
    const url: string = `${this.urlBase}/${id}`;

    return this.httpClient.put<Ingrediente>(
      url,
      ingrediente,
      this.httpOptions
    )
  }

  public excluirIngrediente(id: number): Observable<any> {
    const url: string = `${this.urlBase}/${id}`;

    return this.httpClient.delete<Ingrediente>(
      url,
      this.httpOptions
    )
  }
}
