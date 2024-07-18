import React, { useEffect, useState } from "react";
import { database,auth } from "./firebase";
import { collection, deleteDoc, doc, getDocs, setDoc, updateDoc  } from "firebase/firestore";
import { createUserWithEmailAndPassword} from "firebase/auth";

const Register = () => {
  const defaultForm = {
    name: "",
    age: "",
    email: "",
    password: "",
    
  };
  const [form, setForm] = useState(defaultForm);
  const [val,setVal] = useState([]);
  const [show,setShow] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const collectionRef = collection(database,"users")

  const createUser = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, form.email, form.password);
      const user = userCredential.user;
      if (user) {
        // create a document reference with the user's UID
        const userDocRef = doc(collectionRef, user.uid); 
        await setDoc(userDocRef, {
          name: form.name,
          age: form.age,
          email: form.email,
          // Avoid storing the password in Firestore
        });
      }
      setForm(defaultForm);
      console.log("registered user successfully");
    } catch (error) {
      console.error("Error creating user: ", error);
    }
  };

  const getUser = async() =>{
    const res = await getDocs(collectionRef);
    setVal(res.docs.map((doc)=>({...doc.data(),id:doc.id})))
  }

  useEffect(()=>{
    getUser()
  })

  const deleteUser = async(id) =>{
    const deleteVal = doc(database,"users",id);
    await deleteDoc(deleteVal)
  }

  const UpdateUser = async(data)=>{
    setForm(data);
    setShow(true)
    
  }

  const handleUpdate = async() =>{
    console.log("id",form.id);
    const updateVal = doc(database,"users",form.id);
    console.log("updateVal",updateVal);
    await updateDoc(updateVal,{name : form.name,age : form.age,email:form.email,password:form.password})
    setForm(defaultForm);
    setShow(false)
  }

  return (
    <div className="d-flex justify-content-center">
      <div>
        <h1>Register Page</h1>
        <form onSubmit={createUser}>
          <div className="mb-3">
            <label htmlFor="nameInput" className="form-label">
              Enter Name
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              className="form-control"
              id="nameInput"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="ageInput" className="form-label">
              Enter Age
            </label>
            <input
              type="number"
              name="age"
              value={form.age}
              className="form-control"
              id="ageInput"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="emailInput" className="form-label">
              Email address
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              className="form-control"
              id="emailInput"
              aria-describedby="emailHelp"
              onChange={handleChange}
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="passwordInput" className="form-label">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={form.password}
              className="form-control"
              id="passwordInput"
              onChange={handleChange}
            />
          </div>
          {
            show 
            ?
            <button type="button" onClick={handleUpdate} className="btn btn-primary">
            update
          </button> 
          :
          <button type="submit" className="btn btn-primary">
          Submit
            </button> 
          }
        
        </form>
        {val.map((data)=>
            <div key={data.id}>
                <h1>Display Data Here</h1>
                <p>Name : {data.name}</p>
                <p>Age : {data.age}</p>
                <p>Email : {data.email}</p>
                <p>Password : {data.password}</p>
                <button onClick={()=>deleteUser(data.id)}>Delete</button>
                <button onClick={()=>UpdateUser(data)}>Update</button>
            </div>
        )}
      </div>
    </div>
  );
};

export default Register;