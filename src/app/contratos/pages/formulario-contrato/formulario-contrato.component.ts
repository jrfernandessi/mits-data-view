import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ContratoService } from '../../services/contrato.service';
import { Contrato } from '../../models/contrato.model';

import{ MaterialModule} from '../../../shared/material.module';

@Component({
  selector: 'app-formulario-contrato',
  templateUrl: './formulario-contrato.component.html',
  standalone: false,
  styleUrls: ['./formulario-contrato.component.scss'],
})
export class FormularioContratoComponent implements OnInit {
  form!: FormGroup;
  id?: number;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private contratoService: ContratoService
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      idContrato: ['', Validators.required],
      nome: ['', Validators.required],
      ipOrigem: ['', Validators.required],
      ipDestino: ['', Validators.required],
      diretorioDestino: [''],
      chaveCriptografia: [0],
      usuarioOrigem: [''],
      senhaOrigem: [''],
      usuarioDestino: [''],
      senhaDestino: [''],
      mapeamento: [''],
      periodo: ['DIARIO', Validators.required]
    });

    const paramId = this.route.snapshot.paramMap.get('id');
    if (paramId) {
      this.id = +paramId;
      this.contratoService.findById(this.id).subscribe(contrato => this.form.patchValue(contrato));
    }
  }

  salvar(): void {
    const contrato = this.form.value as Contrato;

    if (this.id) {
      contrato.id = this.id;
      this.contratoService.update(contrato).subscribe(() => this.router.navigate(['/contratos']));
    } else {
      this.contratoService.create(contrato).subscribe(() => this.router.navigate(['/contratos']));
    }
  }

  cancelar(): void {
    this.router.navigate(['/contratos']);
  }
}
