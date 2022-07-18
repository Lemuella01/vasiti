import{ useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Useform = (callback , Validate) => {

  
  const navigate =  useNavigate()


  const[values, setValues] =useState({
   name:"",
    email:"",
    password:""
  });
   
  const [errors, setErrors]=useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) => {
    const {name, value} = event.target;
    setValues({
      ...values,[name]:value
    })
  }
   

  

const handleSubmit = (e) => {
  e.preventDefault();

  setErrors(Validate(values));
  setIsSubmitting(true);
 navigate("/success", {replace: true});
};


useEffect(
  () => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  },
  [errors]
);

  return {handleChange, handleSubmit, values, errors}
    
}


export default Useform;