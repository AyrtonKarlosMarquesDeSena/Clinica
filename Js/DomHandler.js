export default class DomHandler {
  static atualizarListaPacientes(pacientes) {
    const selectPaciente = document.getElementById("selectPaciente");
    selectPaciente.innerHTML =
      "<option value =''> ---Selecione um paciente--- </option>";

    pacientes.forEach((paciente) => {
      const option = document.createElement("option");
      option.value = paciente.nome;
      option.textContent = paciente.nome;
      selectPaciente.appendChild(option);
    });
  }

  static atualizarListaMedicos(medico) {
    const selectMedico = document.getElementById("selectMedico");
    selectMedico.innerHTML =
      "<option value='' >---Selecione um Médico---</option>";

    medico.forEach((medico) => {
      const option = document.createElement("option");
      option.value = medico.nome;
      option.textContent = medico.nome;
      selectMedico.appendChild(option);
    });
  }

  static exibirConsulta(mensagem) {
    const listaConsultas = document.getElementById("listaConsulta");

    const consultas = Array.from(listaConsultas.getElementsByTagName("li"));
    const consultaExiste = consultas.some((li) => li.textContent.includes(mensagem))
    if(consultaExiste){
        alert("esta consulta já foi marcada.")
        return
    }

    const li = document.createElement("li");
    li.classList.add("consulta-item");
    li.innerHTML = `${mensagem}`;

    const btnCancela = document.createElement("button");
    btnCancela.textContent = "Cancelar";
    btnCancela.classList.add("btn-cancelar");

    btnCancela.addEventListener("click", () => {
      li.remove();
    });
    li.appendChild(btnCancela);
    listaConsultas.appendChild(li);


  }
}
