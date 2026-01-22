import Pessoas from "./Pessoas.js";

export default class Medico extends Pessoas {
  constructor(nome, idade, cpf, especilidade) {
    super(nome, idade, cpf);
    this.especilidade = especilidade;
  }

  agendarConsulta(pacienteNome, data) {
    return new Promise((resolve) => {
      setTimeout(
        () =>
          resolve(
            `Consulta marcada com ${this.nome} para o paciente ${pacienteNome} em ${data}`
          ),
        1000
      );
    });
  }
}
