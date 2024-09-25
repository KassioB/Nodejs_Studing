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

const server = http.createServer((req, res) =>{
  const {method, url} = req

  if(method == "GET" && url == '/users') {
    return res.end('Listagem de usuários')
  }

  if(method == "POST" && url == '/users') {
    return res.end('Criação de usuário')
  }
  return res.end('HELLO WORLD')
})

server.listen(3333)


