import React from 'react'

export default function NavbarMobile() {
    return (
        <div className="mobile-navbar-container">
            <ul className="mob-nav-list">
                <span className="list-title">Main Links</span>
                <ul className="links-list inner-list">
                    <li>
                        <a href="/"><i className="fas fa-home" /> Home</a>
                    </li>
                    <li>
                        <a href="/"><i className="fas fa-sign-in-alt" /> Login</a>
                    </li>
                    <li>
                        <a href="/"><i className="fas fa-headset" /> Chat with us</a>
                    </li>
                </ul>
            </ul>
            <ul className="mob-nav-list">
                <span className="list-title">Hosting</span>
                <ul className="links-list inner-list">
                    <li>
                        <a href="/"><i className="fas fa-laptop-house" /> Web Hosting</a>
                    </li>
                    <li>
                        <a href="/"><i className="fab fa-wordpress-simple" /> Wordpress Hosting</a>
                    </li>
                    <li>
                        <a href="/"><i className="fas fa-cloud-upload-alt" /> Cloud Hosting</a>
                    </li>
                    <li>
                        <a href="/"><i className="fas fa-boxes" /> Reseller Hosting</a>
                    </li>
                    <li>
                        <a href="/"><i className="far fa-gem" /> Enterprise Hosting</a>
                    </li>
                </ul>
            </ul>
            <ul className="mob-nav-list">
                <span className="list-title">Technology</span>
                <ul className="links-list inner-list">
                    <li>
                        <a href="/"><i className="fas fa-microchip" /> Technology</a>
                    </li>
                    <li>
                        <a href="/"><i className="fas fa-map-marked-alt" /> Data Centers</a>
                    </li>
                </ul>
            </ul>
            <ul className="mob-nav-list">
                <span className="list-title">About Us</span>
                <ul className="links-list inner-list">
                    <li>
                        <a href="/"><i className="fas fa-heart" /> Company</a>
                    </li>
                    <li>
                        <a href="/"><i className="fas fa-map-marked-alt" /> Data Centers</a>
                    </li>
                    <li>
                        <a href="/"><i className="far fa-life-ring" /> Support</a>
                    </li>
                    <li>
                        <a href="/"><i className="fas fa-user-tie" /> Clients</a>
                    </li>
                    <li>
                        <a href="/"><i className="fas fa-blog" /> Blog</a>
                    </li>
                </ul>
            </ul>
            <ul className="mob-nav-list">
                <span className="list-title">Affiliates</span>
                <ul className="links-list inner-list">
                    <li>
                        <a href="/"><i className="far fa-handshake" /> Affiliates</a>
                    </li>
                </ul>
            </ul>
        </div>
    )
}
