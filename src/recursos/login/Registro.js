import React from "react";
import { useState } from "react";
import LogoIMG from "../../assets/menew-linx.png"
import { Link, useNavigate } from "react-router-dom";
import "../../styles.css";

export default function Registro() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("")
    const [cpf, setCpf] = useState("")
    const navegar = useNavigate();


    const TelaLogin = () => {
        navegar('/login');
    }

    return (

        <div className="container-01">
            <div className="container-login">
                <div className="wrap-login">
                    <form className="login-form">
                        <span className="login-form-title"> Criar Conta </span>
                        <span className="login-form-title">
                            <img src={LogoIMG} alt="Jovem Programador" />
                        </span>


                        <div className="wrap-input">
                            <input
                                className={name !== "" ? "has-val input" : "input"}
                                type="email"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            <span className="focus-input" data-placeholder="Nome"></span>
                        </div>

                        <div className="wrap-input">
                            <input
                                className={cpf !== "" ? "has-val input" : "input"}
                                type="email"
                                value={cpf}
                                onChange={(e) => setCpf(e.target.value)}
                            />
                            <span className="focus-input" data-placeholder="CPF"></span>
                        </div>

                        <div className="wrap-input">
                            <input
                                className={email !== "" ? 'has-val input' : "input"}
                                type='email'
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                            />
                            <span className="focus-input" data-placeholder="Email"></span>
                        </div>

                        <div className="wrap-input">
                            <input
                                className={password !== "" ? 'has-val input' : "input"}
                                type='password'
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                            />
                            <span className="focus-input" data-placeholder="Senha"></span>
                        </div>

                        <div
                            className="container-login-form-btn">
                            <button className="login-form-btn" onClick={TelaLogin}>Enviar</button>
                        </div>

                        <div className="text-center">
                            <span className="txt1">Já possui conta?</span>
                            <Link className="txt2" to="/login">Conecte-se.</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}