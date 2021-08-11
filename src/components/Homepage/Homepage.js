import React, { useState } from 'react'
import styles from './homepage.module.css'
import 'intersection-observer'
import IsVisible from 'react-is-visible'
import bankimage from '../../assets/bankimage.jpg'
import coffeeimg from '../../assets/coffeeimage.jpg'
import handshake from '../../assets/handshake.jpg'
import homeimage from '../../assets/homeimage.jpg'
import office from '../../assets/office.jpg'
import data from '../../api.js'
import { Carousel, Accordion } from 'react-bootstrap'

const styling = (isVisible) =>({
    opacity: isVisible ? 1 : 0,
    transition:"opacity 2s ease"
})


console.log(data)
const Homepage = () => {
    // eslint-disable-next-line no-unused-vars
    const [ourprojectsdata, setOurprojectsdata] = useState(data)



    return (
        <div className ={styles.OuterDiv}>
            <div className={styles.napiyoruzdiv}>
                <IsVisible>
                    {(isVisible) => <h1 style={styling(isVisible)} className={styles.ourprojects}>What we do</h1>}
                </IsVisible>
                <div className={styles.gridDiv}>
                    <div >
                        <img src={bankimage} alt="RESIDENTIAL BUILDINGS"/>
                        <h3>RESIDENTIAL BUILDINGS</h3>
                  
                        <img src={homeimage} className={styles.div1} alt="PUBLIC BUILDINGS​"/>
                        <h3>PUBLIC BUILDINGS​</h3>
                    </div>
                    <div className={styles.div3}>
                        <img src={handshake} alt="SHOPPING CENTER​"/>
                        <h3>SHOPPING CENTER​S</h3>
                    
                        <img src={coffeeimg} className={styles.div3} alt="HOTEL​S"/>
                        <h3>HOTEL​</h3>
                    </div>
                    <div >
                        <img src={office} className={styles.div5} alt="OFFICES​"/>
                        <h3>OFFICES​</h3>
                    </div>
                </div>

                
            </div>
            <IsVisible>
                {(isVisible) =><h1 style={styling(isVisible)} className={styles.ourprojects}>Our Projects</h1>}
            </IsVisible>
            <div fluid="sm">
                {ourprojectsdata.map((element)=>{
                    return(
                            <div className="w-70" >
                            <Carousel className="w-70 ml-5 mr-5 mt-5" fluid="true">
                               {element.image.map((image)=>{
                                   return(
                                    <Carousel.Item>
                                    <img
                                      className="w-100"
                                      src={image}
                                      alt="Third slide"
                                    />
                                    </Carousel.Item>
                                )
                               })}
                            </Carousel>
                            <Accordion defaultActiveKey="0" flush>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header className="bg-dark">Name</Accordion.Header>
                                    <Accordion.Body>
                                    {element.name}
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>Location</Accordion.Header>
                                    <Accordion.Body>
                                    {element.city}
                                    </Accordion.Body>
                                 </Accordion.Item>
                                <Accordion.Item>
                                    <Accordion.Header>Type</Accordion.Header>
                                    <Accordion.Body>{element.type}</Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item>
                                    <Accordion.Header>Land</Accordion.Header>
                                    <Accordion.Body>{element.land}</Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item>
                                    <Accordion.Header>Construction Area</Accordion.Header>
                                    <Accordion.Body>{element.carea}</Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item>
                                    <Accordion.Header>Start Date/Conclusion Date</Accordion.Header>
                                    <Accordion.Body>{element.startdate}/{element.enddate}</Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item>
                                    <Accordion.Header>Completion Status</Accordion.Header>
                                    <Accordion.Body>{element.state}</Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                            </div>
                    )
                })
                }
            </div>
            
        </div>
    )
}
export default Homepage
