const CustomExpress = require("./Config/CustomExpress");
const Conn = require("./Infra/Connection");
const Tabelas = require("./Infra/Tabelas");

Conn.connect((erro) => {
    if(erro) {
        console.log(erro)
    } else {
        console.log("Conectado ao Banco de Dados");

        //Tabelas.init(Conn);
        const App = CustomExpress();
        App.listen(3000,  () => console.log("Servidor Rodando!"));
    }
});

