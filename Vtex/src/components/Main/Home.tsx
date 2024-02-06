import './Home.scss';
import { IoStorefrontOutline } from "react-icons/io5";

export default function Home(){
    return(
        <section>
            <main className='main'>
                <div className="call-action">
                <h1>Venha conhecer nossas <br></br> promoções</h1>
                <h2>50% Off nos produtos</h2>
                <button id='btn'>Ver produtos</button>
                </div>
            </main>

            <div className="categories">
                <ul>
                    <li><img src="../../../images/tecnology.svg" alt="" />Tecnologia</li>
                    <li><IoStorefrontOutline id='icon' />Supermercado</li>
                    <li><img src="../../../images/drinks.svg" alt="" />Bebidas</li>
                    <li><img src="../../../images/tools.svg" alt="" />Ferramentas</li>
                    <li><img src="../../../images/saude.svg" alt="" />Saude</li>
                    <li><img src="../../../images/run.svg" alt="" />Esporte</li>
                    <li><img src="../../../images/moda.svg" alt="" />Moda</li>
                </ul>
            </div>
        </section>
    )
}