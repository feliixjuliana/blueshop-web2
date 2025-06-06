import { Link } from "react-router-dom";

function Footer(){
    return (
        <>
                       <footer className="w-full bg-green-700   p-4 text-white font-bold grid gap-4 " id="footer">
                    <a href="#greenShop"><button className="bg-green-700 roudend-full w-full">Voltar ao início</button></a>

                    <h1 className="flex justify-center align-center">Mais informações:</h1>

                    <nav className="grid grid-cols-2 md:grid-cols-3 gap-4 m-6">
                    <div>
                        <h3 >Conheça-nos:</h3>
                        <p className="font-normal"><Link to="">Instagram</Link></p>
                        <p className="font-normal"><Link target="_blank" to="https://www.linkedin.com/in/feliixjuliana/">LinkedIn</Link></p>
                        <p className="font-normal"><Link target="_blank" to="https://github.com/feliixjuliana">Github</Link></p>
                    </div>
                    <div>
                        <h3>Meios de Pagamentos:</h3>
                        <p className="font-normal"><Link to="">Crédito</Link></p>
                        <p className="font-normal"><Link to="">Debito</Link></p>
                        <p className="font-normal"><Link to="">Pix</Link></p>
                    </div>
                    <div>
                        <h3>Deixe-nos ajudar você:</h3>
                        <p className="font-normal"><Link to="">Criar Conta</Link></p>
                        <p className="font-normal"><Link to="">Acessar Conta</Link></p>
                        <p className="font-normal"><Link to="">Suporte</Link></p>
                    </div>
                    </nav>

                </footer>
        </>
    )
}

export default Footer;