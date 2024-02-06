import './Products.scss'
import Retangle from '../Retangle/Retangle'

export default function Products(){
    return(
        <div className="products">
            <h2>Produtos relacionados</h2>
            <div className="options">
                <ul>
                    <li>CELULAR</li>
                    <li>ACESSORIOS</li>
                    <li>TABLETS</li>
                    <li>NOTEBOOKS</li>
                    <li>TVS</li>
                    <li>VER TODOS</li>
                </ul>
            </div>

            <div className="carousel-products">
                <Retangle />
            </div>
        </div>
    )
}