import Style from './style.module.scss';

interface prop {
    type?: "button" | "submit" | "reset" | undefined,
    texto: string,
    onClick?: () => void,
}

export default function ButtonDefault(props : prop){
    const { type = "button", onClick } = props;
    return <button onClick={onClick} type={type} className={Style.botao}>{props.texto} </button>
}