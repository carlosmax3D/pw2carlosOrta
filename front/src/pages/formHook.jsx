import { useForm } from 'react-hook-form';
import axios from "axios";
import { useState } from 'react';

function LoginForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [imagen , setImagen ] = useState('')
  const [apires, setApires ] = useState('')
  const onSubmit = (data) => {
  const formData = new FormData();
 
  formData.append("imagen", imagen);
  data = { ...data, imagen: imagen.name };
  for ( var key in data ) {
      formData.append(key, data[key]);
  }
  console.log(JSON.stringify(data));
  alert(JSON.stringify(data));
  axios
      .post('/api/formImage', formData)
      .then((response) => {
        setApires(response.data);
        console.dir(apires);
      });
  };
  const handleUploadedFile = (event) => {
   const file = event.target.files[0];
   setImagen(file);
  };
 return (<>
   <img src={apires}></img>
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Email</label>
    <input type="email" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
      {errors.email && alert('Email is required and must be valid')}
      <label>Password</label>
      <input type="password" {...register("password", { required: true })} />
      {errors.password && <p>Password is required</p>}
      <input type="file" onChange={handleUploadedFile} name="imagen" id="imagen"/>
      <button type="submit">Submit</button>
    </form></>
  );
}
export default LoginForm;
