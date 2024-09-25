import http from 'node:http'


//-crirar usuarios 
//-listagem de usuarios 
//-edicao de usuarios 
//-remoçao de usuarios 

//--http 
//-metodo http
//-url

//GET, POST, PUT, PATCH, DELETE

//GET - Buscar uma informação do back-end
//POST - Criar uma informação no back-end
//PUT - Atualizar um recurso no back-end
//PATCH - Atualizar uma informação especifica de um recuroso no back-end
//DELETE - Deletar um recurso do back-end

//GET /users - Buscando usuarios do back-end
//POST /users - Criar um usuario no back-end

//Stateful - Stateless

//JSON - JavaScript Object Notation

//Cabeçalhos (Requisição/resposta) => Metadados


 
const users = []

const server = http.createServer((req, res) =>{
  const {method, url} = req

  if (method == 'GET' && url == '/users') {
    return res
      .setHeader('Content-type', 'application/json')
      .end(JSON.stringify(users))
  }
  
  if (method == 'POST' && url == '/users') {
    users.push({
      id: 1,
      name: 'Kassio bezerra',
      email: 'kassiobcunha@gmail.com',
    })

    return res.writeHead(201).end()
  }

  return res.writeHead(404).end()
})

server.listen(3333)


