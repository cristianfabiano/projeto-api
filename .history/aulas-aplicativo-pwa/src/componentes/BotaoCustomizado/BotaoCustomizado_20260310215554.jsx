import "./BotaoCustomizado.css";

function BotaoCustomizado({ tipo, children }) {
    const classes = ["botao-customizado__roo"]
    switch(tipo){
        case "primario":
            classes.push("botao-customizado--primario")
            break;
            case "secundario":
                classes.push("botao-customizado--secundario");
                
    }
    return <button className="botao-customizado__root">{children}</button>
}

export default BotaoCustomizado;