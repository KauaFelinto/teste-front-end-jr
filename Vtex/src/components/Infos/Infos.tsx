import './Infos.scss'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";


export default function Infos(){
    return(
        <section className='about-footer'>

        <div className="about">
            <h3>Sobre nós</h3>
            <ul>
                <li><a href="#">Conheça</a></li>
                <li><a href="#">COMO COMPRAR</a></li>
                <li><a href="#">INDICACAO E DESCONTO</a></li>
            </ul>

            <div className="socials">
                <ul className='social'>
                    <li><FaFacebookF /></li>
                    <li><FaInstagram /></li>
                    <li><FaYoutube /></li>
                </ul>
            </div>
        </div>

        <div className="info">
            <h3>INFORMAÇÕES ÚTEIS</h3>
            <ul>
                <li>FALE CONOSCO</li>
                <li>DUVIDAS</li>
                <li>PRAZOS DE ENTREGA</li>
                <li>FORMAS DE PAGAMENTO</li>
                <li>POLITICAS DE PRIVACIDADE</li>
                <li>TROCAS E DEVOLUCOES</li>
            </ul>
        </div>

        <div className="pay">
            <h3>FORMAS DE PAGAMENTO</h3>
            <img src="../../../images/pagamentos.svg" alt="" />
        </div>

        <div className="cadastro">
            <h2>Cadastre-se e Receba nossas <br /> novidades e promoções</h2>
            <p>Excepteur sint occaecat cudatat non ent, sunt in culpa qui officia lorem ipsum</p>
            <form>
                <input type="text" placeholder='Seu e-mail' />
                <button id='submit'>OK</button>
            </form>
        </div>
        
        </section>
    )
}