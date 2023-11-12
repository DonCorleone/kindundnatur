import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map, Observable} from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ImagesService {
  constructor(private http: HttpClient) {}

  listAssets(): Observable<Netlifile[]>{
    // console.log(`getAlbum`);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization:
          `Bearer ${environment.API_KEY_NETLIFY}`,
      }),
    };

    return this.http.get<Netlifile[]>(
      'https://api.netlify.com/api/v1' + `/sites/${environment.SITE_ID}/files/`,
      httpOptions
    ).pipe(map(p => p.filter(f => f.path.startsWith('/assets/carousel'))));
  }
}

export interface Card {
  title: string;
  description: string;
  url: string;
}
export interface Netlifile {
  id: string;
  path: string;
  sha: string;
  mime_type: string;
  size: number;
  site_id: string;
  deploy_id: string;
}


export interface File {
  folder: string;
  orginal_name: string;
  name: string;
  size: number;
  format: string;
  width: number;
  height: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface Image4Response {
  folders: any[];
  files: File[];
}
