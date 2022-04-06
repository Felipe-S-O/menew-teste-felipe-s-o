import { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { v4 as uuidv4 } from 'uuid';
import Button from "../../components/Button"
import TextField from "../../components/TextField"
import { addPro } from "./proSlice"
import Header from "../../layout/Header";
import Footer from "../../layout/Footer";
import "../../layout/styles.css"


const AddPro = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: '',
    email: ''
  });

  const handleAddPro = () => {
    setValues({ name: '', email: '' });
    dispatch(addPro({
      id: uuidv4(),
      name: values.name,
      email: values.email
    }));
    navigate('/');
  }

  return (
    <div>
      <Header className="login-form-btn" />
      <div className="container-02">
        <div className="container mx-auto px-2 max-w-5xl pt-10 md:pt-32">
          <h1 className="login-form-title text-center font-bold text-2xl text-gray-700">Adicionar Produto</h1>
          <div className="mt-10 max-w-xl mx-auto">
            <TextField
              label="Nome"
              value={values.name}
              onChange={(e) => setValues({ ...values, name: e.target.value })}
              inputProps={{ type: 'text1', placeholder: 'CB650r' }}
            />
            <br />
            <TextField
              label="URL"
              value={values.email}
              onChange={(e) => setValues({ ...values, email: e.target.value })}
              inputProps={{ type: 'url', placeholder: 'url da imagem' }}
            />
            <Button onClick={handleAddPro}>Gravar</Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default AddPro