import './Retangle.scss'
import 'react';
import {db} from '../../../../DataFake'


export default function Retangle(){

    const result = db.filter(article => article.id);

    function abrirModal(){

       let modal = document.querySelector('.modal');

       modal.style.display = "block";
    }

    function fecharModal(){
        let modal = document.querySelector('.modal');

        modal.style.display = "none";

    }

            return(
                
                <div className="carousel-container">

                    <div className="modal">

                    <div className="modal-info">
                    <div onClick={fecharModal} className="close">X</div>
                        <img id='img-modal' src={result[0].photo} alt="" />
                        <div className="modal-infos">
                            <h2>LOREM IPSUM DOLOR SIT AMET</h2>
                            <h3>R$ {result[0].price}</h3>
                            <p>Many desktop publishing packages and web page editors now many desktop publishing</p>
                            <p><a href="#">Veja mais detalhes do produto</a></p>
                            <button id='btn' onClick={abrirModal}>Comprar</button>
                        </div>
                    </div>
                    </div>

                    <div className="carousel">

                            <div className="produtos">
                                <img src={result[0].photo} alt="" />
                                <p>{result[0].descriptionShort}</p>
                                <h2>R$ {result[0].price}</h2>
                                <button onClick={()=> abrirModal()} id='btn'>Comprar</button>
                            </div>

                            <div className="produtos">
                                <img src={result[1].photo} alt="" />
                                <p>{result[1].descriptionShort}</p>
                                <h2>R$ {result[1].price}</h2>
                                <button onClick={()=> abrirModal()} id='btn'>Comprar</button>
                            </div>

                            <div className="produtos">
                                <img src={result[2].photo} alt="" />
                                <p>{result[2].descriptionShort}</p>
                                <h2>R$ {result[2].price}</h2>
                                <button onClick={()=> abrirModal()} id='btn'>Comprar</button>
                            </div>

                            <div className="produtos">
                                <img src={result[3].photo} alt="" />
                                <p>{result[3].descriptionShort}</p>
                                <h2>R$ {result[3].price}</h2>
                                <button onClick={()=> abrirModal()} id='btn'>Comprar</button>
                            </div>
                            
                        </div>
                        <button className="prev">&#10094;</button>
                        <button className="next">&#10095;</button>
                </div>


            )
}
