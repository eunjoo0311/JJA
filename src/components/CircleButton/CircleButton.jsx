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
}) {
    const theme = useTheme();
    const selectedColor = theme.colors[color];

    return (
        <button
            type="button"
            aria-label={ariaLabel}
            onClick={onClick}
            css={css}
        >
            {type === 'arrow' ? (
                <ArrowIcon color={selectedColor} />
            ) : (
                <MenuIcon color={selectedColor} />
            )}
        </button>
    );
}
