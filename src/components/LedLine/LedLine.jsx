import React, { useEffect, useRef } from 'react';
import './LedLine.scss';

const LampLine = ({ objectRef = null, object2Ref = null, object3Ref = null }) => {
    const ledRef = useRef(null);

    useEffect(() => {
        const led = ledRef.current;
        const lightedObject = objectRef?.current;
        const lightedObjects = object2Ref?.current.querySelectorAll('.card');
        const object3 = object3Ref?.current;

        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];
            if (entry.isIntersecting) {
                led?.classList.add('light');
                lightedObject?.classList.add('brightness');
                object3?.classList.add('transform-100');
                if (lightedObjects) {
                    for (const card of lightedObjects) {
                        card.classList?.add('duration')
                    }
                }

            }
        })
        observer.observe(led)
    }, [])

    return (
        <div className='led-line'>
            <div className='led-line__light' ref={ledRef} />
        </div>
    )
}

export default LampLine;