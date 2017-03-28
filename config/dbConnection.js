/* importar o mongodb */
var mongo = require("mongodb");

var connMongoDB = function(){
	console.log("Entrou na função de conexão");

	// got é o nome do banco de dados que será criado
	// segundo parametro é o objeto de conexão com o servidor
	// terceiro parametro é o objeto com configurações adicionais
	var db = new mongo.Db(
			"got",
			new mongo.Server(
				"localhost", // string contendo o endereço do servidor
				27017, // porta de conexao
				{} // objeto com opções de configuração do servidor
			),
			{}
		);
		return db;

}

module.exports = function(){
	return connMongoDB;
}