import { useForm } from 'react-hook-form';
function LoginForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    console.log(JSON.stringify(data));
    alert(JSON.stringify(data));
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Email</label>
    <input type="email" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
      {errors.email && alert('Email is required and must be valid')}
      <label>Password</label>
      <input type="password" {...register("password", { required: true })} />
      {errors.password && <p>Password is required</p>}
      <button type="submit">Submit</button>
    </form>
  );
}
export default LoginForm;
