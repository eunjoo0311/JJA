import { css, useTheme } from '@emotion/react';
import { ReactComponent as ArrowIcon } from '../../assets/images/arrow-circle.svg';
import { ReactComponent as MenuIcon } from '../../assets/images/menu-circle.svg';
import debounce from '../../utils/debounce';
import { useEffect, useState } from 'react';

const menu = css`
    position: absolute;
    top: 74px;
    right: 34px;
`;

const prev = css`
    transform: rotate(180deg);
`;
const indexMenu = css`
    position: absolute;
    top: 74px;
    right: 34px;
    transform: translateZ(2px);

    @media (max-width: 1024px) {
        top: auto;
        bottom: 20px;
        right: 34px;
    }

    @media (max-width: 1024px) {
        top: auto;
        bottom: 20px;
        right: 34px;
    }
`;
const back = css`
    position: absolute;
    top: 50%;
    left: -1186px;
    z-index: 100;
    transform: rotate(180deg) translate3d(0, 50%, 2px);
`;
const styledCss = { menu, prev, indexMenu, back };

export default function CircleButton({
    type = 'arrow',
    ariaLabel,
    onClick,
    color,
    cssType,
}) {
    const theme = useTheme();
    const selectedColor = theme.colors[color];

    const [dynamicDiameter, setDynamicDiameter] = useState();

    const handleResize = debounce(() => {
        if (window.innerWidth < 1024) {
            setDynamicDiameter(44);
        } else {
            setDynamicDiameter(64);
        }
    }, 100);

    useEffect(() => {
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <button
            type="button"
            aria-label={ariaLabel}
            onClick={onClick}
            css={cssType && `${styledCss[cssType].name}`}
        >
            {type === 'arrow' ? (
                <ArrowIcon
                    color={selectedColor}
                    width={dynamicDiameter}
                    height={dynamicDiameter}
                />
            ) : (
                <MenuIcon
                    color={selectedColor}
                    width={dynamicDiameter}
                    height={dynamicDiameter}
                />
            )}
        </button>
    );
}
