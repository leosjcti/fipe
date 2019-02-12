import { Observable } from 'rxjs';
import { FreteService } from './app.service';
import { Frete } from './models/Frete';
import { Component } from '@angular/core';
import { Marca } from './models/Marca';
import { Modelo } from './models/Modelo';
import { Ano } from './models/Ano';
import { Veiculo } from './models/Veiculo';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private freteService: FreteService) { }

  marca: Marca;
  modelo: Modelo;
  ano: Ano;
  veiculo: Veiculo;

  marcaView: string;
  modeloView: string;
 
  ngOnInit() {
   this.getMarcas();
  }
  

  getMarcas(): void {
    this.freteService.getMarcas()
      .subscribe(
        (data: Marca) => this.marca = data, error => console.log(error));
  }

  getModelos(marcaView): void {
    this.marcaView = marcaView;
    this.freteService.getModelos(marcaView)
      .subscribe(
        (data: Modelo) => this.modelo = data, error => console.log(error));
  }

  getAnos(modeloView): void {
    this.modeloView = modeloView;
    this.freteService.getAnos(this.marcaView, modeloView)
      .subscribe(
        (data: Ano) => this.ano = data, error => console.log(error));
  }

  getResumo(anoView): void {
    this.freteService.getResumo(this.marcaView, this.modeloView, anoView)
      .subscribe(
        (data: Veiculo) => this.veiculo = data, error => console.log(error));
  }

}
