import React from 'react'
import styles from './Whoweare.module.css'
import 'intersection-observer'
import IsVisible from 'react-is-visible'
const styling = (isVisible) =>({
    opacity: isVisible ? 1 : 0,
    transition:"opacity 3s ease"
})

const Whoweare = () => {
    return (
        <div className={styles.outerdiv}>
            <div className={styles.whoarewediv}>
                <div className={styles.whowearediveng}>
                    <IsVisible>
                        {(isVisible)=> <h1 style={styling(isVisible)}>About Us </h1>}
                    </IsVisible>
                    <IsVisible>
                        {(isVisible)=> <h4 style={styling(isVisible)}>Ata Construction Limited, operating in Mozambique Construction Market since 2009, is established by people who have international business experince for around 30 years. The founders of ATA, who are civil Engineers and Architects, have been operated in European Market (especially in Turkey) and Russian geography since 1980s. Management Team of ATA has a high reputation about Real Estate Development within the markets they operate. ATA differentiates itself in the construction industry by having advanced project management capabilities, using the best-qualified teams  and providing high quality state-of-the-art products for the markets. The Management team of ATA has significant technical and management experience in all aspects of the operational environment. Their unrivalled expertise together with a centrally managed Project Management Programme drives a common set of “best practice” standards, systems, processes, and procedures, ensuring reliability and continous improvement to quality of products. They have already completed many residential, comercial and infrastructure projects. As a result, Team of ATA has achieved many prestigious real estate development projects successfully in different geographies since 1980s and continuing to achive in Mozambique market since 2009.</h4>}
                    </IsVisible>
                </div>
                <div className={styles.whowearedivport}>
                    <IsVisible>
                        {(isVisible) => <h1 style={styling(isVisible)}>NOSSA HISTÓRIA e FUNDO DE GESTÃO​</h1> }
                    </IsVisible>
                    <IsVisible>
                        {(isVisible) =><h4 style={styling(isVisible)}>ATA Construções Limitada (ATA), está a operar no mercado de construção em Moçambique desde 2009, é estabelecida por pessoas que têm experiência internacional há mais de 35 anos. Desde os anos 1980, os fundadores da ATA, que são engenheiros civis e arquitetos, têm estado a operar no mercado europeu (especialmente na Turquia) e na geografia russa. A equipe de gerenciamento da ATA têm uma grande reputação em relação ao parque imobiliário nos mercados em que opera. A ATA se destaca no sector de construção pelo facto de usar recursos avançados de gerenciamento de projectos, utilizando as equipes mais qualificadas e fornecendo produtos de última geração de alta qualidade para o mercado. A equipe de gerenciamento da ATA possui experiência técnica e administrativa significativa em todos os aspectos do ambiente operacional. Sua experiência incomparável, juntamente com um Programa de Projetos gerenciado centralmente, conduz um conjunto comum de “melhores práticas” de padrões, sistemas, processos e procedimentos, assegurando confiabilidade e melhoria contínua para a qualidade dos produtos. Já concluímos muitos projectos residenciais, comerciais e de infraestrutura. Como resultado, a Equipa da ATA alcançou muitos projectos prestigiados de desenvolvimento imobiliário com sucesso em diferentes geografias desde os anos 80 e continua focada no fornecimento de serviços de mais alto nível de padrões que o mercado Moçambicano é promissor.​</h4>}
                    </IsVisible>
                </div>

            </div>

            <form method='POST' action="#" autoComplete="Off" className={styles.formelement}>
                <h1 className={styles.contactustext}>Contact Us</h1>
                <h2> Phone: +258 87 1200000</h2>
                <h2> Email: info@ataconstrucoes.com</h2>
            </form>
        </div>
    )
}

export default Whoweare
