import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { ContratoService } from '../../services/contrato.service';
import { Router } from '@angular/router';
import { Contrato } from '../../models/contrato.model';

@Component({
  standalone: false,
  selector: 'app-listar-contratos',
  templateUrl: './listar-contratos.component.html',
  styleUrls: ['./listar-contratos.component.scss']
})
export class ListarContratosComponent implements OnInit {
  displayedColumns: string[] = ['id', 'nome', 'ipOrigem', 'ipDestino', 'acoes'];
  dataSource = new MatTableDataSource<Contrato>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private contratoService: ContratoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.contratoService.list().subscribe(data => {
      this.dataSource.data = data;
      this.dataSource.paginator = this.paginator;
    });
  }

  editar(id: number) {
    this.router.navigate(['/contratos/editar', id]);
  }

  excluir(id: number) {
    if (confirm('Deseja excluir este contrato?')) {
      this.contratoService.delete(id).subscribe(() => {
        this.dataSource.data = this.dataSource.data.filter(c => c.id !== id);
      });
    }
  }

  novo() {
    this.router.navigate(['/contratos/novo']);
  }
}
