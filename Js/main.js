import Medico from "./Medico.js";
import Paciente from "./Paciente.js";
import DomHandler from "./DomHandler.js";

let medicos = [];
let pacientes = [];

async function carregarDados() {
  try {
    const responseMedicos = await fetch("./data/medicos.json");
    const responsePacientes = await fetch("./data/pacientes.json");

    const listaMedicos = await responseMedicos.json();
    const listaPacientes = await responsePacientes.json();

    

    medicos = listaMedicos.map(
      (medico) =>
        new Medico(medico.nome, medico.idade, medico.cpf, medico.especialidade)
    );

    pacientes = listaPacientes.map(
      (paciente) => new Paciente(paciente.nome, paciente.idade, paciente.cpf)
    );

    DomHandler.atualizarListaPacientes(pacientes);
    DomHandler.atualizarListaMedicos(medicos);
  } catch (error) {
    console.error("Erro ao carregar os dados:", error);
  }
}

    function formatarData(data) {
        const [ano, mes, dia] = data.split("-")
        return `${dia}/${mes}/${ano}`
    }

function agendarConsulta() {
  const selectMedico = document.getElementById("selectMedico").value;
  const selectPaciente = document.getElementById("selectPaciente").value;
  const inputData = document.getElementById("inputData").value;

  if(!selectMedico || !selectPaciente || !inputData){
    alert ("Por favor, preencha todos os campos para agendar a consulta.")
  }
  
  const paciente = pacientes.find((p) => {
   return p.nome === selectPaciente
  })
console.log(paciente)
    const medico = medicos.find((m) => {
    return m.nome === selectMedico
  })

  if(paciente && medico){
    medico.agendarConsulta(selectPaciente, formatarData(inputData)).then((mensagem) => {
        DomHandler.exibirConsulta(mensagem)
    })
  }

}

document.addEventListener("DOMContentLoaded", () => {
  carregarDados();
  document.getElementById("btnAgendar").addEventListener("click", agendarConsulta)
  
});
