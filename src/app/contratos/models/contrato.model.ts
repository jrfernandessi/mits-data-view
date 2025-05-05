export interface Contrato {
  id?: number;
  idContrato: number;
  nome: string;
  ipOrigem: string;
  ipDestino: string;
  diretorioDestino: string;
  chaveCriptografia: number;
  usuarioOrigem: string;
  senhaOrigem: string;
  usuarioDestino: string;
  senhaDestino: string;
  mapeamento: string;
  periodo: 'DIARIO' | 'SEMANAL' | 'MENSAL';
  certificadoDigitalId?: number;
}
