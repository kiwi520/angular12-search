import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpParams} from "@angular/common/http";
import {environment} from "../../environments/environment.prod";
import {APIResponse, Game} from "../models";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getGameList(
    ordering:string,
    search?: string
  ): Observable<APIResponse<Game>>{
    let params = new HttpParams().set('ordering',ordering);

    if (params) {
      params.set('search',search!)
    }


    return this.http.get<APIResponse<Game>>(
      `${environment.BASE_URL}/games`,{
        params: params
      }
    )
  }
}
