import React from "react";
import { useState } from "react";
import LogoIMG from "../../assets/menew-linx.png"
import { Link, useNavigate } from "react-router-dom";
import "../../styles.css";


export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navegar = useNavigate();


    const TelaList = () => {
        navegar('/');
    }
    return (
       
        <div className="container-01">
            <div className="container-login">
                <div className="wrap-login">
                    <form className="login-form">
                        <span className="login-form-title"> Bem vindo </span>
                        <span className="login-form-title">
                            <img src={LogoIMG} alt="Jovem Programador" />
                        </span>

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
                            <button className="login-form-btn" onClick={TelaList}>Entra</button>
                        </div>


                        <div className="text-center">
                            <span className="txt1">Não possui conta? </span>
                            <Link className="txt2" to="/regis">Criar Conta</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}