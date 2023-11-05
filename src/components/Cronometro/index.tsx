import ButtonDefault from "../Button";
import Relogio from "./Relogio";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Style from "./Cronometro.module.scss";
import { tempoParaSegundos } from "../../common/utils/date";
import { ITarefa } from "../../types/tarefa";
import { useState, useEffect } from "react";

interface props {
    selecionado: ITarefa | undefined,
    finalizarTarefa: () => void
}

export default function Cronometro({ selecionado, finalizarTarefa } : props) {

    const [tempo, setTempo] = useState<number>()

    useEffect(() => {
        if(selecionado?.tempo) {
            setTempo(tempoParaSegundos(selecionado.tempo));
        }
    }, [selecionado])

    const showToastMessage = () => {
        toast.success('Tempo Finalizado!', {
            position: toast.POSITION.TOP_RIGHT
        });
    };

    // função recursiva, o contador recebe o valor do tempo, emquanto for maior que 0
    // chamada a função regressiva passando o valor do contador - 1
    function regressiva(contador: number = 0) {
        setTimeout(() => {
            if(contador > 0) {
                setTempo(contador - 1);
                return regressiva(contador - 1);
            }
            finalizarTarefa();
            showToastMessage();
        }, 1000)
    }

    return (
        <div className={Style.cronometro}>
            <p className={Style.titulo}>Escolha um card e inicie o cronômetro</p>
            <div className={Style.relogioWrapper}>
                <Relogio tempo={tempo} />
            </div>
            <ButtonDefault texto="Começar" onClick={() => regressiva(tempo)} />
            <ToastContainer />
        </div>
    )
}