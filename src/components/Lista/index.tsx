import { ITarefa } from '../../types/tarefa';
import Item from './item';
import Style from './style.module.scss';

interface props {
  tarefas: ITarefa[]
  selecionaTarefa: (tarefaSelecionada: ITarefa) => void
}

export default function List({ tarefas, selecionaTarefa } : props) {

  return (
    <aside className={Style.listaTarefas}>
      <h2>Estudos do Dia</h2>
      <ul>
        {tarefas.map((item) => (
          <Item
            selecionaTarefa={selecionaTarefa}
            key={item.id}
            tarefa={item.tarefa}
            tempo={item.tempo} 
            selecionado={item.selecionado} 
            completado={item.completado} 
            id={item.id}          
            />
        ))}
      </ul>
    </aside>
  );
}
