import React from 'react'

// material-ui imports
import { Container } from "@material-ui/core"

// other imports
// import "../../styles/dist/owl-training.css"

export default function OwlCarouselTrainging() {
    return (
        <section className="training">
            <Container>
                <div className="section-wrapper">
                    <aside className="carousel-cards-wrapper">
                        <div className="owl-carousel-cards owl-theme">
                            <div className="item card">
                                <div className="card__box">
                                    <img className="card__box-img" src="https://kzart.com/wp-content/uploads/2019/05/Child-Portrait-Artist-Surrey-1-a.jpg" alt="cute-girl" height="120" width="120" />
                                    <h4 className="card__box-title">Cute Girl</h4>
                                    <span className="card__box-info">5 years old</span>
                                    <a href="/">Visit her</a>
                                </div>
                            </div>
                            <div className="item card">
                                <div className="card__box">
                                    <img className="card__box-img" src="https://miro.medium.com/max/1080/1*jWx9suY2k3Ifq4B8A_vz9g.jpeg" alt="cute-woman" height="120" width="120" />
                                    <h4 className="card__box-title">Cute Woman</h4>
                                    <span className="card__box-info">22 years old</span>
                                </div>
                            </div>
                        </div>
                    </aside>
                </div>
            </Container>
        </section>
    )
}
