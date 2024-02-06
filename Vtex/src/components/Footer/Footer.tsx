import './Footer.scss'


export default function Footer(){
    return(
        <footer>
            <hr />
            <div className="footer">
            <p>Copyright © 2019. Todos os direitos reservados. Todas as marcas e suas imagens são de propriedade de seus respectivos donos. <br />
            É vedada a reprodução, total ou parcial, de qualquer conteúdo sem expressa autorização.</p>

            <img id='footer-img' src="../../../images/footer.svg" alt="" />
            </div>
        </footer>
    )
}