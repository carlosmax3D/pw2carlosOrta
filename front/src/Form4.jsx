import { useForm } from 'react-hook-form';
import ButtonUsage from './components/Boton';
import BasicTextFields from './components/Textos';
import MediaCard from './components/SingleCard';
import ResponsiveAppBar from './components/Menu';
function LoginForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
    <ResponsiveAppBar></ResponsiveAppBar>
    <br></br>
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Email</label>
    <input style={{"background-color": errors.email ?"blue":"green"}} type="email" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
      {errors.email && <p>Email is required and must be valid</p>}
      <label>Password</label>
      <input type="password" {...register("password", { required: true })} />
      {errors.password && <p>Password is required</p>}
      <select {...register("select", { required: true })}>
        <option value="red">Red</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
      </select>
      {errors.select && <p>select is required</p>}
      <br></br>
      <ButtonUsage variant="contained" text="Submit" funcion={()=>alert("HOLA")}/>
      <br></br>
      <ButtonUsage variant="text" text="Cancelar"/>
      <br></br>
      <ButtonUsage variant="outlined" text="Back"/>
      <br></br>
      <BasicTextFields/>
      <br></br>
      <MediaCard/>
    </form>
    </div>
  );
}
export default LoginForm;