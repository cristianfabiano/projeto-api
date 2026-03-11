import "./BotaoCustomizado.css";

function BotaoCustomizado({ children }) {
    const classes = ["botao-customizado__roo"]
    return <button className="botao-customizado__root">{children}</button>
}

export default BotaoCustomizado;