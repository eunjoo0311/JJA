/** @jsx jsx */
import { jsx, useTheme } from '@emotion/react';
import { ReactComponent as ArrowIcon } from '../../assets/images/arrow-circle.svg';
import { ReactComponent as MenuIcon } from '../../assets/images/menu-circle.svg';

export default function CircleButton({
    type = 'arrow',
    ariaLabel,
    onClick,
    color,
    css,
    diameter = 64,
}) {
    const theme = useTheme();
    const selectedColor = theme.colors[color];

    if (window.innerWidth < 1024) {
        diameter = 44;
    }

    return (
        <button
            type="button"
            aria-label={ariaLabel}
            onClick={onClick}
            css={css}
        >
            {type === 'arrow' ? (
                <ArrowIcon
                    color={selectedColor}
                    width={diameter}
                    height={diameter}
                />
            ) : (
                <MenuIcon color={selectedColor} />
            )}
        </button>
    );
}
