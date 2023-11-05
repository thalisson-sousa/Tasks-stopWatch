import { useState } from "react";
import ButtonDefault from "../Button";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Style from "./style.module.scss";
import { ITarefa } from "../../types/tarefa";

import { v4 as uuidv4 } from "uuid";

export default function Form({
  setTarefas,
}: {
  setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>;
}) {
  // Estado que armazena o valor dos inputs
  const [state, setState] = useState({
    tarefa: "",
    tempo: "00:00:00",
  });

  // Função que adiciona o valor dos inputs na lista
  function adicionarTarefa(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

        const showToastMessage = () => {
            toast.success("Tarefa Adicionada!", {
                position: toast.POSITION.TOP_RIGHT,
            });
        };

        // essa função veio por meio de props do component pai, e está fazendo uma copia do estado antigo
        // e adicionando o valor dos inputs adicionando mais um item a lista, e adicionando selecionado e completo
        setTarefas((tarefasAntigas) => [
        ...tarefasAntigas,
        { ...state, selecionado: false, completado: false, id: uuidv4() },
        ]);
        console.log(state);
        // Zerando o valor dos Inputs
        setState({ tarefa: "", tempo: "00:00:00" });
        showToastMessage();
  }

  return (
    <form className={Style.novaTarefa} onSubmit={adicionarTarefa}>
      <div className={Style.inputContainer}>
        <label htmlFor="tarefa">Adicione um novo estudo</label>
        <input
          type="text"
          name="tarefa"
          id="tarefa"
          value={state.tarefa}
          onChange={(e) => setState({ ...state, tarefa: e.target.value })}
          placeholder="O que você quer estudar?"
          required
        />
      </div>

      <div className={Style.inputContainer}>
        <label htmlFor="tempo">Tempo</label>
        <input
          type="time"
          step="1"
          name="tempo"
          id="tempo"
          value={state.tempo}
          onChange={(e) => setState({ ...state, tempo: e.target.value })}
          min="00:00:00"
          max="01:30:00"
          required
        />
      </div>
      <ButtonDefault type="submit" texto="Adicionar" />
    </form>
  );
}
