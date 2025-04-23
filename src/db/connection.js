
//Importar o Mysql
require('dotenv').config();
const mysql = require("mysql2")

//Configuração de conexão
const conexao = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

conexao.connect((err) => {
  if (err) throw err;
  console.log('✅ Conectado ao MySQL!');
});

conexao.end((err)=>{
  if(err){
      console.log("Erro ao finalizar",err)
      return;
  }

})

module.exports = conexao;

