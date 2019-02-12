import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Frete } from 'src/app/models/Frete';
import { Marca } from 'src/app/models/Marca';
import { Modelo } from './models/Modelo';
import { Ano } from './models/Ano';
import { Veiculo } from './models/Veiculo';

@Injectable()
export class FreteService {
  
    
    private urlApi = 'http://fipeapi.appspot.com/api/1/carros/';
    private urlApiMarcas = 'http://fipeapi.appspot.com/api/1/carros/marcas.json';


    constructor(private httpClient: HttpClient) { }
    
    getFrete(cep: string) : Observable<Frete> {
        return this.httpClient.get<Frete>(this.urlApi)
    }

    getMarcas() : Observable<Marca> {
        return this.httpClient.get<Marca>(this.urlApiMarcas)
    }

    getModelos(marca) : Observable<Modelo> {
        return this.httpClient.get<Modelo>(this.urlApi+'/veiculos/'+marca+'.json')
    }

    getAnos(marca, modelo) : Observable<Ano> {
        return this.httpClient.get<Ano>(this.urlApi+'veiculo'+'/'+marca+'/'+modelo+'.json')
    }

    getResumo(marca: string, modelo: string, ano: any): Observable<Veiculo> {
        return this.httpClient.get<Veiculo>(this.urlApi+'veiculo'+'/'+marca+'/'+modelo+'/'+ano+'.json')
      }

}