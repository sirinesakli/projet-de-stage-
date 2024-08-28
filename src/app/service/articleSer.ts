import { Injectable } from "@angular/core";
import { article } from "../module/article";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn:'root'
})

export class serviceArt{
    private configUrl = 'produit.json';
    constructor(private http: HttpClient) {}
    getConfig(): Observable<any> {
        return this.http.get<any>(this.configUrl);
      }
}