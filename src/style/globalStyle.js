import { css } from '@emotion/react';

const GlobalStyle = css`
    @font-face {
        font-family: 'Hiragino Pro';
        font-weight: 300;
        font-display: swap;
        src:
            local('Hiragino Kaku Gothic Pro W3'),
            url('../assets/fonts/Hiragino\ Kaku\ Gothic\ Pro\ W3.otf')
                format('opentype');
    }
    @font-face {
        font-family: 'Hiragino Pro';
        font-weight: 600;
        font-display: swap;
        src:
            local('Hiragino Kaku Gothic Pro W6'),
            url('../assets/fonts/Hiragino\ Kaku\ Gothic\ Pro\ W6.otf')
                format('opentype');
    }

    html,
    body,
    div,
    span,
    applet,
    object,
    iframe,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    blockquote,
    pre,
    a,
    abbr,
    acronym,
    address,
    big,
    cite,
    code,
    del,
    dfn,
    em,
    img,
    ins,
    kbd,
    q,
    s,
    samp,
    small,
    strike,
    strong,
    sub,
    sup,
    tt,
    var,
    b,
    u,
    i,
    center,
    dl,
    dt,
    dd,
    ol,
    ul,
    li,
    fieldset,
    form,
    label,
    legend,
    table,
    caption,
    tbody,
    tfoot,
    thead,
    tr,
    th,
    td,
    article,
    aside,
    canvas,
    details,
    embed,
    figure,
    figcaption,
    footer,
    header,
    hgroup,
    menu,
    nav,
    output,
    ruby,
    section,
    summary,
    time,
    mark,
    audio,
    video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }
    ol,
    ul {
        list-style: none;
    }
    blockquote,
    q {
        quotes: none;
    }
    blockquote:before,
    blockquote:after,
    q:before,
    q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }

    * {
        box-sizing: border-box;
    }
    :root {
        font-size: 10px;
    }
    body {
        font-family: 'Hiragino Pro', 'Apple SD Gothic Neo', sans-serif;
        background-color: #2d2d2d;
    }
    a {
        text-decoration: none;
        color: inherit;
    }
    button {
        border: 0;
        padding: 0;
        background: transparent;
        font-family: inherit;
        color: inherit;
        cursor: pointer;
    }
    img {
        width: 100%;
        vertical-align: middle;
    }
    svg {
        vertical-align: middle;
    }
    input {
        background: unset;
        border: unset;
        font: inherit;
    }

    .a11y {
        clip: rect(1px, 1px, 1px, 1px);
        clip-path: inset(50%);
        width: 1px;
        height: 1px;
        margin: -1px;
        overflow: hidden;
        padding: 0;
        position: absolute;
    }
`;

export default GlobalStyle;
