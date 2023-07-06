import { useEffect, useRef, useState } from 'react';
import './index.css';

export default function Tooltip({
    position, 
    btnLabel = "Hover me!", 
    tooltipText="Thanks for hovering! I'm a tooltip"
}) {
    const [ alignment, setAlignment ] = useState({});
    const containerRef = useRef(null);
    const tooltipRef = useRef(null);
    const arrowOffset = 6;

    useEffect(() => {
        let tempAlignment = {};
        const containerWidth = containerRef.current.offsetWidth + arrowOffset;
        const containerHeight = containerRef.current.offsetHeight + arrowOffset;

        switch (position) {
            case 'top':
                tempAlignment = { 
                    bottom: containerHeight,
                    left: '50%',
                    transform: 'translateX(-50%)'
                }
                break;
            case 'bottom':
                tempAlignment = { 
                    top: containerHeight,
                    left: '50%',
                    transform: 'translateX(-50%)'
                }
                break;
            case 'right':
                tempAlignment = { 
                    left: containerWidth,
                    top: '50%',
                    transform: 'translateY(-50%)'
                }
                break;
            case 'left':
                tempAlignment = {
                    right: containerWidth,
                    top: '50%',
                    transform: 'translateY(-50%)'
                }
                break;
            default:
                break;
        }
        setAlignment(tempAlignment);
    }, [position]);

    return <div className='tooltip-container' ref={containerRef}>
        <button className='tooltip-btn'>{btnLabel}</button>
        <div className="tooltip" style={{...alignment}} ref={tooltipRef}>
            <div className="tooltip-content">
                <div className="text">{tooltipText}</div>
                <div className={`arrow ${position}`}></div>
            </div>
        </div>
    </div>
}