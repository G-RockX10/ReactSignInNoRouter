import "./App.css";
import { Formik } from "formik";
import * as Yup from "yup";


const schema = Yup.object().shape({ //Main schema for validation
  email: Yup.string()
    .required("Your email is required")
    .email("Invalid email format"),
  password: Yup.string()
    .required("Your password is required")
    .min(8, "Password must be at least 8 characters")
});

function App() {
  return (
    <>
      // Wrapping form inside formik tag and passing our schema to validationSchema prop
      <Formik
        validationSchema={schema}
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => {
         
          alert(JSON.stringify(values)); {/*Alerting input values of form that was filled*/}
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit
        }) => (
          <div className="login">
            <div className="form">
              {/* Passing handleSubmit parameter tohtml form onSubmit property */}
              <form noValidate onSubmit={handleSubmit}>
                <span>Project Hermes</span>
                {/* Our input html with passing formik parameters like handleChange, values, handleBlur to input properties */}
                <input
                  type="email"
                  name="email"
                  placeholder="Enter email "
                  className="form-control inp_text"
                  id="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                {/* Showing errors */}
                <p className="error">
                  {errors.email && touched.email && errors.email}
                </p>
                {/* Our input html with passing formik parameters like handleChange, values, handleBlur to input properties */}
                <input
                  type="password"
                  name="password"
                  
                  placeholder="Enter password"
                  className="form-control"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />
                {/* If validation is not passed show errors */}
                <p className="error">
                  {errors.password && touched.password && errors.password}
                </p>
                
                <button type="submit">Login!</button> {/*Submit button*/}
              </form>
            </div>
          </div>
        )}
      </Formik>
    </>
  );
}

export default App;
