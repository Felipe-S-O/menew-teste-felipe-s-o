import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import Button from "../../components/Button"
import TextField from "../../components/TextField"
import { editPro } from "./proSlice"
import Header from "../../layout/Header";
import Footer from "../../layout/Footer";
import "../../layout/styles.css"

const EditPro = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const users = useSelector(store => store.users);
  const navigate = useNavigate();
  const existingUser = users.filter(user => user.id === params.id);
  const { name, email } = existingUser[0];
  const [values, setValues] = useState({
    name,
    email
  });

  const handleEditPro = () => {
    setValues({ name: '', email: '' });
    dispatch(editPro({
      id: params.id,
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
          <h1 className="login-form-title text-center font-bold text-2xl text-gray-700">Editar Produto</h1>
          <div className="mt-10 max-w-xl mx-auto">
            <TextField
              label="Name"
              value={values.name}
              onChange={(e) => setValues({ ...values, name: e.target.value })}
              inputProps={{ type: 'text', placeholder: 'CB650r' }}
            />
            <br />
            <TextField
              label="URL"
              value={values.email}
              onChange={(e) => setValues({ ...values, email: e.target.value })}
              inputProps={{ type: 'text', placeholder: 'url da imagem' }}
            />
            <Button onClick={handleEditPro}>Editar</Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default EditPro