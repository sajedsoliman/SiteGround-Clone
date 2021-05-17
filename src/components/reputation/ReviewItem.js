import React from 'react'

export default function ReviewItem({ img, name, social, body, isLink = false }) {
    let socialInteractive;

    if (isLink) socialInteractive = <a href={social} className="reviewer__info-social">{social}</a>;
    else socialInteractive = <span className="reviewer__info-social">{social}</span>

    return (
        <div className="item review">
            <div className="reviewer">
                <img src={img} />
                <div className="reviewer__info">
                    <h4 className="reviewer__info-name">{name}</h4>
                    {socialInteractive}
                </div>
            </div>
            <q className="reviewer__message"><i>{body}</i></q>
        </div>
    )
}
