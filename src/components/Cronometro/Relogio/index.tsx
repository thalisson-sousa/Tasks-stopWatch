import Style from './Relogio.module.scss';

interface props {
    tempo: number | undefined
}

export default function Relogio({ tempo = 0 } : props ) {

    const minutos = Math.floor(tempo / 60);
    const segundos = tempo % 60;

    const [minutosDezena, minutoUnidade] = String(minutos).padStart(2, "0");
    const [segundoDezana, segundoUnidade] = String(segundos).padStart(2, "0");

    return (
        <>
            <span className={Style.relogioNumero}>{ minutosDezena }</span>
            <span className={Style.relogioNumero}>{ minutoUnidade }</span>
            <span className={Style.relogioDivisao}>:</span>
            <span className={Style.relogioNumero}>{ segundoDezana }</span>
            <span className={Style.relogioNumero}>{ segundoUnidade }</span>
        </>
    )
}