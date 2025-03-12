import { Component, inject, Input } from '@angular/core';
import { EnviaFormuladrioService } from '../../services/envia-formulario.service';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  private enviaFormularioService =inject(EnviaFormuladrioService);
  name = "";
  idButton = "abcd";
  deveMostrarTitulo = false;
  listItems = ["Item 1", "Item 2", "Item 3"];

  @Input("name") minhaPropsDeFora!: string;

  submit() {
    this.enviaFormularioService.enviaInforacaoParaBackend("Informação enviada");
  }
}