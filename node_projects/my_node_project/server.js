const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// Configuração da conexão com o banco de dados
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '', // XAMPP default password
  database: 'my_database'
});

// Conectar ao banco de dados
connection.connect(error => {
  if (error) {
    console.error('Erro ao conectar ao banco de dados: ' + error.stack);
    return;
  }
  console.log('Conectado ao banco de dados com ID ' + connection.threadId);
});

// // Endpoint para adicionar um usuário (POST)
// app.post('/users', (req, res) => {
//   const { user_name, user_email, user_password } = req.body;
//   const sql = 'INSERT INTO users (user_name, user_email, user_password) VALUES (?, ?, ?)';
//   connection.query(sql, [user_name, user_email, user_password], (error, results) => {
//     if (error) {
//       res.status(500).send('Erro ao adicionar usuário.');
//       return;
//     }
//     res.status(201).send('Usuário adicionado com sucesso.');
//   });
// });

// ----------------------------------------------------------------------------------------------------------------------
// Callback function to INSERT user:
function addUserCallback(error, results, res) {
  if (error) {
    res.status(500).send('Error adding user.');
    return;
  }
  res.status(201).send('User added succesfully.')
}
// Function for the POST route:
function addUser(req, res) {
  const { user_name, user_email, user_password } = req.body;
  const sql = 'INSET INTO users (user_name, user_email, user_password) VALUES (?, ?, ?)';
  connection.query(sql, [user_name, user_email, user_password], function (error, results) {
    addUserCallback(error, results, res)
  });
}
// Route to add a user:
app.post('/users', addUser);
// ----------------------------------------------------------------------------------------------------------------------

// Endpoint para obter todos os usuários (GET)
app.get('/users', (req, res) => {
  connection.query('SELECT * FROM users', (error, results) => {
    if (error) {
      res.status(500).send('Erro ao obter usuários.');
      return;
    }
    res.json(results);
  });
});

// Endpoint para obter um usuário por ID (GET)
app.get('/users/:id', (req, res) => {
  const { id } = req.params;
  connection.query('SELECT * FROM users WHERE id = ?', [id], (error, results) => {
    if (error) {
      res.status(500).send('Erro ao obter usuário.');
      return;
    }
    res.json(results[0]);
  });
});

// Endpoint para atualizar um usuário (PUT)
app.put('/users/:id', (req, res) => {
  const { id } = req.params;
  const { user_name, user_email, user_password } = req.body;
  const sql = 'UPDATE users SET user_name = ?, user_email = ?, user_password = ? WHERE id = ?';
  connection.query(sql, [user_name, user_email, user_password, id], (error, results) => {
    if (error) {
      res.status(500).send('Erro ao atualizar usuário.');
      return;
    }
    res.send('Usuário atualizado com sucesso.');
  });
});

// Endpoint para deletar um usuário (DELETE)
app.delete('/users/:id', (req, res) => {
  const { id } = req.params;
  connection.query('DELETE FROM users WHERE id = ?', [id], (error, results) => {
    if (error) {
      res.status(500).send('Erro ao deletar usuário.');
      return;
    }
    res.send('Usuário deletado com sucesso.');
  });
});

// Iniciar o servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});