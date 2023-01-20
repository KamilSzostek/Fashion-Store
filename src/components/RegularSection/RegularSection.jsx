import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import SectionCard from './subcomponents/SectionCard';
import LedLine from '../LedLine/LedLine';
import './RegularSection.scss'

const RegularSection = ({ collection = null, title, promo = '' }) => {
    const containerRef = useRef(null);
    const cardsRef = useRef(null);
    const gateRef = useRef(null);

    const titleSplited = title.split(' ');

    const cards =
        collection != null &&
        [...collection].map((item) => {
            const path = `/shop/product/${item.name}`;
            return (
                <Link className="link" key={item.name} to={path}>
                    <img key={item.id} src={item.images[0]} alt={item.name} />
                </Link>
            );
        });

    const sectionClassess = `regular ${title}`
    const containerClassess = `regular__container__cards ${title}`
    return (
        <section className={sectionClassess}>
            <div className='regular__title'>
                <h2>{titleSplited[0]}<span>{titleSplited[1]}</span></h2>
                <div className='regular__title-image' />
            </div>
            <div className='regular__container' ref={containerRef}>
                <LedLine objectRef={containerRef} object2Ref={cardsRef} object3Ref={gateRef} />
                <div className={containerClassess} ref={cardsRef}>
                    {collection ? cards : (
                        <>
                            <SectionCard title={titleSplited} />
                            <SectionCard title={titleSplited} />
                            <SectionCard title={titleSplited} />
                            <SectionCard title={titleSplited} />
                        </>)}

                </div>
                <LedLine />
            </div>
            <div className='regular__promo'>
                <div className='regular__promo-gate' ref={gateRef} />
                <h3>-{promo}<span>%</span></h3>
                <p>on all products in this section</p>
            </div>
        </section>
    )
}

export default RegularSection;