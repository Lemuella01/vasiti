import { useState, useEffect } from "react";
import './Log.css'
import { FaFacebook, FaTwitter, FaPhone, FaUserCircle, FaEnvelope, FaLock, FaBuilding} from 'react-icons/fa'


const LaginnForm = ({Login, error}) => {
  const initialValues = { username: "", email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

  //function to validate the error
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.username) {
      errors.username = "Username is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }
    return errors;
  };

  return (
    // <div className="containa1">

    //   <form onSubmit={handleSubmit}>
    //     <h1>Login Form</h1>
    //     <div className="ui divider"></div>
    //     <div className="ui form">
          
    //       <div className="field">
    //         <label>Username</label>
    //         <input
    //           type="text"name="username"placeholder="Username"value={formValues.username}onChange={handleChange}
    //         />
    //       </div>
    //       <p>{formErrors.username}</p>
          
    //       <div className="fields">
    //         <label>Email</label>
    //         <input
    //           type="text" name="email"placeholder="Email"value={formValues.email}onChange={handleChange}/>
    //       </div>
    //       <p>{formErrors.email}</p>
          
    //       <div className="field">
    //         <label>Password</label>
    //         <input
    //           type="password"name="password"placeholder="Password"value={formValues.password}onChange={handleChange}/>
    //       </div>
          
    //       <p>{formErrors.password}</p>
          
    //       <button className="fluid">Submit</button>
    //     </div>
    //   </form>
    // </div>

    <div>
    <div className="container">
      <br />
      <p className="text-center">
        {/* More bootstrap 4 components on{" "}
        <a href="http://bootstrap-ecommerce.com/"> Bootstrap-ecommerce.com</a> */}
      </p>
      <hr />

      <div className="card bg-light">
        <article className="card-body mx-auto" style={{maxWidth: '400px'}}>
          
      <p>Account has been created for lemuella</p>

          <h4 className="card-title mt-3 text-center">Create Account</h4>
          <p className="text-center">Get started with your free account</p>
          <p>
            <a href="" className="btn btn-block btn-twitter">
              {" "}
              <FaTwitter />   Login via Twitter
            </a>
            <a href="" className="btn btn-block btn-facebook">
              {" "}
              <FaFacebook />   Login via facebook
            </a>
          </p>
          <p className="divider-text">
            <span className="bg-light">OR</span>
          </p>
          <form>
            <div className="form-group input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  {" "}
                  <FaUserCircle/>{" "}
                </span>
              </div>
              <input
                name=""
                className="form-control"
                placeholder="Full name"
                type="text"
                // value={data.name}
                // onChange={(e)=>{setData({...data, name:e.target.value})}}
              />
            </div>
            {/* <!-- form-group// --> */}
            <div className="form-group input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  {" "}
                  <FaEnvelope />{" "}
                </span>
              </div>
              <input
                name=""
                className="form-control"
                placeholder="Email address"
                type="email"
                // value={data.email}
                // onChange={(e)=>{setData({...data, email:e.target.value})}}
              />
            </div>
            {/* <!-- form-group// --> */}
            <div className="form-group input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  {" "}
                  <FaPhone/>{" "}
                </span>
              </div>
              <select className="custom-select" style={{maxWidth: '120px'}} 
              // value={data.countryCode} onChange={(e)=>{setData({...data, countryCode: e.target.value})}}
              >
                <option >+971</option>
                <option value="+972">+972</option>
                <option value="+198">+198</option>
                <option value="+701">+701</option>
              </select>
              <input
                name=""
                className="form-control"
                placeholder="Phone number"
                type="text"
                // value={data.tel}
                // onChange={(e)=>{setData({...data, tel:e.target.value})}}
                />
            </div>
            {/* <!-- form-group// --> */}
            <div className="form-group input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  {" "}
                  <FaBuilding/>{" "}
                </span>
              </div>
              <select className="form-control" >
                <option > Select job type</option>
                <option>Designer</option>
                <option>Manager</option>
                <option>Accaunting</option>
              </select>
            </div>
            {/* <!-- form-group end.// --> */}
            <div className="form-group input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  {" "}
                  <FaLock/>{" "}
                </span>
              </div>
              <input
                className="form-control"
                placeholder="Create password"
                type="password"
              />
            </div>
            {/* <!-- form-group// --> */}
            <div className="form-group input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  {" "}
                  <FaLock/>{" "}
                </span>
              </div>
              <input
                className="form-control"
                placeholder="Repeat password"
                type="password"
              />
            </div>
            {/* <!-- form-group// -->                                       */}
            <div className="form-group mt-2 px-5">
              <button type="submit" className="btn btn-primary btn-block">
                {" "}
                Create Account{" "}
              </button>
            </div>
            {/* <!-- form-group// -->       */}
            <p className="text-center">
              Have an account? <a href="">Log In</a>{" "}
            </p>
          </form>
        </article>
      </div>
    </div>


  </div>
  );
}


export default LaginnForm;