const path = require('path');
const express = require('express'); 
const mongoose = require('mongoose');
const uri = 'mongodb://useradmin:grupo52PW2_AD2024@kvm.xorgx11.com:27017/';
const app = express(); 
const port = process.env.PORT || 3001;
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ extended: true }));
app.use('/static',express.static("node_modules"))
app.use('/static',express.static("public"))
app.use(express.static(path.resolve(__dirname, './client/build')));
const users= require('./routerUsuarios.js');
app.use('/api/users', users)
app.get('/api', (req, res) => {
    res.send('Esta es otra prueba!')
  })
app.get('/api', (req, res) => {
  res.send('Hello World!')
})
app.get(/\/api\/.*test$/, function(req, res) {
    res.send('<h1>Entraste usando el patron test!</h1>');
  });
app.get(/\/api\/.*gato*$/, function(req, res) {
    res.send('<h1>Entraste usando el patron gato!</h1>');
  });

// Todas las peticiones GET que no hayamos manejado en las líneas anteriores retornaran nuestro app React
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './client/build', 'index.html'));
});

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
    .then(() => {
      console.log('Connection success');
      const users = [ { id: 1, Name: 'Hadi Soufan' }, { id: 2, Name: 'Melia Malik' }, { id: 3, Name: 'Zayn Cerny' }];
      const { getUser, getUsers, createUser, updateUser, deleteUser } = 
      require('./usuarios.js');
      for (let i = 0; i < users.length;i++){
        user = users[i];
//        createUser(user);
      }
      app.listen(port, () => {
        console.log(`Example app listening on port ${port}`)
      })
    })
    .catch(error => {
      console.error('Connection fail', error);
    });
  
