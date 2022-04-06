import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../layout/Header";
import Button from "../../components/Button";
import { deletePro } from "./proSlice";
import Footer from "../../layout/Footer";
import "../../layout/styles.css"

const ProList = () => {
  const dispatch = useDispatch();
  const users = useSelector(store => store.users);
  const navegar = useNavigate();

  const handleRemovePro = (id) => {
    dispatch(deletePro({ id }));
  }

  const TelaAddProduto = () => {
    navegar('/add-pro');
  }

  const renderCard = () => users.map(user => (
    <div className="bg-gray-300 p-5 flex items-center justify-between" key={user.id}>
      <div>
        <h3 className="font-bold text-lg text-gray-700">{user.name}</h3>
        <img src={user.email}></img>
      </div>
      <div className="flex gap-4">
        <Link to={`edit-pro/${user.id}`}>
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
            </svg>
          </button>
        </Link>
        <button
          onClick={() => handleRemovePro(user.id)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
        </button>
      </div>
    </div>
  ))

  return (
    <div>
      <Header className="login-form-btn"/>
      <div className="container-02">
        <div className="container mx-auto px-2 max-w-5xl pt-10 md:pt-32">
          <h1 className=" login-form-title text-center font-bold text-2xl text-gray-700">Lista de Produtos</h1>
          <Button onClick={TelaAddProduto}>Adicionar Produto</Button>
          <div className="grid gap-5 md:grid-cols-2">
            {users.length ? renderCard() : <p className="login-form-title2 text-center col-span-2 text-gray-700 font-semibold">Nenhum produto</p>}
          </div>
        </div>
      </div>
      <Footer />
    </div>
    

  )
}

export default ProList