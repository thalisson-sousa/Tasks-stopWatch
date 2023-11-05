import Form from '../components/Form';
import List from '../components/Lista';
import Style from './style.module.scss';
import Cronometro from '../components/Cronometro';

import { useState } from 'react';
import { ITarefa } from '../types/tarefa';

function App() {

  const [ tarefas, setTarefas]  = useState<ITarefa[]>([]);
  const [ selecionado, setSelecionado ] = useState<ITarefa>();

  function selecionaTarefa(tarefaSelecionada: ITarefa) {
    setSelecionado(tarefaSelecionada);
    setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => ({
      ...tarefa,
      selecionado: tarefa.id === tarefaSelecionada.id ? true : false
    })));
  }

  function finalizarTarefa() {
    if(selecionado) {
      setSelecionado(undefined);
      setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => {
        if(tarefa.id == selecionado.id) {
          return {
            ...tarefa,
            selecionado: false,
            completado: true
          }
        }
        return tarefa;
      }))
    }
  }

  return (
    <div className={Style.AppStyle}>
      <Form setTarefas={setTarefas} />
      <List 
      tarefas={tarefas}
      selecionaTarefa={selecionaTarefa}
      />
      <Cronometro selecionado={selecionado} finalizarTarefa={finalizarTarefa} />
    </div>
  );
}

export default App;
