import {Component, OnInit} from '@angular/core';
import {LoginService} from "../../login/login.service";
import {Observable} from "rxjs";
import {Router} from "@angular/router";

@Component({
    selector: 'app-cabecalho',
    templateUrl: './cabecalho.component.html',
    styleUrls: ['./cabecalho.component.scss']
})
export class CabecalhoComponent implements OnInit {

    isLogado!: Observable<boolean>;

    constructor(private loginService: LoginService,
                private router: Router) {
    }

    ngOnInit(): void {
        this.isLogado = this.loginService.isLoggedIn;
    }

    desconectar(): void {
        this.loginService.logout();
        this.router.navigate(['/login']);
    }


}
