import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Ingrediente} from "./ingrediente.model";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment.prod";
import {FactoryEndpointService} from "../../shared/services/factory-endpoint.service";

@Injectable({
    providedIn: 'root'
})
export class IngredientesService {

    private urlBase: string = `${environment.apiUrl}${environment.urlIngredientes}`;

    httpOptions = {
        headers: new HttpHeaders({'Content-Type': 'application/json'})
    }

    constructor(private httpClient: HttpClient, private factoryEndpointService: FactoryEndpointService) {
    }

    public cadastrarIngredientes(ingrediente: Ingrediente): Observable<any> {
        return this.httpClient.post<Ingrediente>(
            this.urlBase + `${environment.createNew}`,
            JSON.stringify(ingrediente),
            this.factoryEndpointService.httpOptions)
    }
}
