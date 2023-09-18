/** @jsx jsx */
import { jsx, useTheme } from '@emotion/react';
import { ReactComponent as ArrowIcon } from '../../assets/images/arrow-circle.svg';

export default function ArrowButton({ ariaLabel, onClick, color, css }) {
    const theme = useTheme();
    const selectedColor = theme.colors[color];

    return (
        <button
            type="button"
            aria-label={ariaLabel}
            onClick={onClick}
            css={css}
        >
            <ArrowIcon color={selectedColor} />
        </button>
    );
}
