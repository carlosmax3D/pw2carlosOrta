import { useState } from "react";
export default function Multiple() {
  const [formData, setFormData] = useState({name: "",email: "",message: ""});
  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "name"){
        console.log("llegue")
        if (!/[A-Z ]/.test(value)){
            console.log("llegueeee")
            return;
        }
    }
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Name: ${formData.name}, Email: ${formData.email}, Message: ${formData.message}`
    );
    console.log(formData);
};
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name" value={formData.name} onChange={handleChange}/>
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" value={formData.email} onChange={handleChange}/>
      <label htmlFor="message">Message:</label>
      <textarea id="message" name="message" value={formData.message} onChange={handleChange}/>
      <button type="submit">Submit</button>
    </form>
  );
}
