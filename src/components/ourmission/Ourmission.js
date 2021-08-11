import React from 'react'
import styles from './Ourmission.module.css'
import 'intersection-observer'
import IsVisible from 'react-is-visible'

const styling = (isVisible) =>({
    opacity: isVisible ? 1 : 0,
    transition:"opacity 3s ease"
})

const Ourmission = () => {
    return (
        <div>
            <div className={styles.whoarewediv}>
                <div className={styles.whowearediveng}>
                    <IsVisible>
                        {(isVisible)=> <h1 style={styling(isVisible)}>MISSION</h1>}
                    </IsVisible>
                    <IsVisible>
                        {(isVisible)=> <h4 style={styling(isVisible)}>By following the technical and architectural developments in the construction sector all over the world, to offer safe and quality projects. To provide "quality and people oriented service" with the aim of facilitating human life and increasing the quality of life.</h4>}
                    </IsVisible>
                    <IsVisible>
                        {(isVisible)=> <h1 style={styling(isVisible)}>VISION</h1>}
                    </IsVisible>
                    <IsVisible>
                        {(isVisible)=> <h4 style={styling(isVisible)}>To be one of the innovative and leading companies among engineering and construction companies.</h4>}
                    </IsVisible>
                </div>
                <div className={styles.whowearedivport}>
                    <IsVisible>
                        {(isVisible) => <h1 style={styling(isVisible)}>MISSÃO​​</h1> }
                    </IsVisible>
                    <IsVisible>
                        {(isVisible) =><h4 style={styling(isVisible)}>Promover a satisfação plena dos nossos clientes, parceiros, colaboradores e a comunidade através da execução de atividades planeadas no segmento da construção civil, colocando em primeiro plano a inovação, a qualidade do produto, a melhoria contínua dos processos e a responsabilidade social.​​</h4>}
                    </IsVisible>
                    <IsVisible>
                        {(isVisible) => <h1 style={styling(isVisible)}>VISÃO​​​</h1> }
                    </IsVisible>
                    <IsVisible>
                        {(isVisible) =><h4 style={styling(isVisible)}>Ser uma empresa de excelência em construção civil, perpetuando nosso negócio pela rentabilidade, inovação e relacionamento com a comunidade.​</h4>}
                    </IsVisible>
                </div>

            </div>
            
        </div>
    )
}

export default Ourmission
