import './Header.scss'
import { CiSearch } from "react-icons/ci";
import { PiShieldCheckBold } from "react-icons/pi";
import { PiTruck } from "react-icons/pi";
import { ImCreditCard } from "react-icons/im";
import { BsBoxSeam } from "react-icons/bs";
import { IoMdHeartEmpty } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";
import { BsCart2 } from "react-icons/bs";
import { PiCrownSimpleLight } from "react-icons/pi";

export default function Header (){
    return(
        <header>
            <div className="security">
                <div className="info-header">
                    <PiShieldCheckBold id='icon-top' />
                    <h3>Compra <span>100% segura</span></h3>
                </div>

                <div className="info-header">
                    <PiTruck id='icon-top' />
                    <h3><span>Frete gratis acima de R$200,00</span></h3>
                </div>

                <div className="info-header">
                    <ImCreditCard id='icon-top' />
                    <h3><span>Parcele</span> suas compras</h3>
                </div>
            </div>
            
            <div className="header">
                <img src="../../../images/Group 35.png" alt="" />
                <form className='pesquisar' action="submit">
                <input type="text" placeholder='O que voce procura?'></input>
                <CiSearch id='search' />
                </form>
                <BsBoxSeam id='options' />
                <IoMdHeartEmpty id='options' />
                <FaRegUserCircle id='options' />
                <BsCart2 id='options' />
            </div>
            <div className="categories">
                <ul className='list'>
                    <li>TODAS CATEGORIAS</li>
                    <li>SUPERMERCADO</li>
                    <li>LIVROS</li>
                    <li>MODA</li>
                    <li>LANÇAMENTOS</li>
                    <li><span>OFERTAS DO DIA</span></li>
                    <li id='premium'><PiCrownSimpleLight /> ASSINATURA</li>
                </ul>
            </div>
        </header>
    )
}
