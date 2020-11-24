class Tabelas {
    init(conn) {
        this.conn = conn;
        this.CriarTabelaAlunos();
    }

    CriarTabelaAlunos() {
        const sql = "";

        this.conn.query(sql, erro => {
            if (erro) {
                console.log(erro);
            } else  {
                console.log("Tabela Alunos criado!");
            }
        });
    }
}

module.exports = new Tabelas;