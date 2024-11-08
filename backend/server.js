const path = require('path');
const express = require('express'); 
const fileupload = require('express-fileupload'); 
const mongoose = require('mongoose');
const uri = 'mongodb://'+process.env.mongousr+':'+process.env.mongopwd+'@kvm.xorgx11.com:27017/';
const app = express(); 
const port = process.env.PORT || 3001;
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ extended: true }));
app.use(fileupload());
app.use(express.static(path.resolve(__dirname, 'dist')));
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

function encodeBase64Bytes(bytes) {
  return btoa(
    bytes.reduce((acc, current) => acc + String.fromCharCode(current), "")
  );
}

app.post('/api/formImage', function(req, res){
  if (!req.files){
    return res.status(400).send("No selecciono archivos");
  }
  var fileup = req.files.imagen;
  var ext = path.extname(fileup.name);
  const ext_permitidas = ['.png', '.jpg', '.jpeg', '.gif']
  if (!ext_permitidas.includes(ext)){
    var resj = { mensaje: " ", mimetype: ""}
    resj.mensage += "El archivo " + fileup.name + " es un archivo no valido";
    resj.mimetype = fileup.mimetype
    return res.status(200).json(resj);
  }
  ext = ext.replace(".","");
  var encodedFile = 'data:image/' + ext + ';base64, '+encodeBase64Bytes(fileup.data);
  console.dir(ext);
  console.dir(req.body);
  return res.status(200).send(encodedFile);
});

// Todas las peticiones GET que no hayamos manejado en las líneas anteriores retornaran nuestro app React
app.get('*', (req, res) => {
//  res.status(200).json({ path: path.resolve(__dirname, 'dist', 'index.html')});
  res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
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
  
