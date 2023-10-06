import styled from '@emotion/styled';
import { css, keyframes } from '@emotion/react';

export const ChapterPageWrapper = styled.div`
    @media screen and (min-height: 925px) {
        height: calc(100vh - 104px);
        width: 100vw;
        display: flex;
        flex-wrap: wrap;
        align-content: center;
    }
`;

const bookSlide = keyframes`
    0%{
        transform: translateX(64px);
    }
    100%{
        transform: translateX(1098px);
    }
`;

const bookSlideAnimate = p => css`
    animation: ${p.isMovetoIndex &&
    css`
        ${bookSlide} 0.4s forwards;
    `};
`;

export const BookBox = styled.div`
    position: relative;
    margin: 60px auto;
    width: 1098px;
    height: 680px;
    padding: 20px 26px 20px 0;
    background-color: ${p => p.theme.colors[p.color]};
    border-radius: 0px 12px 12px 0px;
    transform: translateX(64px);
    ${bookSlideAnimate};
`;

const PageBox = styled.section`
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.white};
    box-shadow:
        inset 0px -1px 4px rgba(50, 50, 50, 0.1),
        inset -1px 0px 4px rgba(150, 150, 150, 0.2),
        0px 0px 14px rgba(50, 50, 50, 0.2);
`;

export const LeftPage = styled(PageBox)`
    position: absolute;
    height: calc(100% - 40px);
    right: 100%;

    &::before {
        position: absolute;
        content: '';
        top: -20px;
        width: 100%;
        height: calc(100% + 40px);
        background: ${p => p.theme.colors[p.color]};
        border-radius: 12px 0 0 12px;
        z-index: -1;
    }

    &::after {
        position: absolute;
        content: '';
        top: 0;
        right: 0;
        width: 40px;
        height: 100%;
        background: linear-gradient(
            270deg,
            rgba(217, 217, 217, 0.3) 0%,
            rgba(217, 217, 217, 0) 100%
        );
    }
`;

export const menuButtonCss = css`
    position: absolute;
    top: 74px;
    right: 34px;
`;

export const RightPage = styled(PageBox)`
    position: relative;
    padding: 74px 116px;

    &::before {
        position: absolute;
        content: '';
        top: 0;
        left: 0;
        width: 40px;
        height: 100%;
        background: linear-gradient(
            90deg,
            rgba(217, 217, 217, 0.3) 0%,
            rgba(217, 217, 217, 0) 100%
        );
    }

    nav {
        position: absolute;
        top: 74px;
        right: 68px;

        button {
            display: block;
            margin-bottom: 4px;
        }
    }
`;
export const highlight = p => css`
    ::selection {
        background-color: ${p.theme.colors.yellow};
    }
`;
export const Title = styled.h2`
    font-size: ${({ theme }) => theme.fontSize.large};
    font-weight: 600;
    ${highlight}
`;

export const Script = styled.p`
    width: 800px;
    margin-top: 42px;
    font-size: ${({ theme }) => theme.fontSize.base};
    line-height: 160%;
    overflow-y: hidden;
    ${highlight}
`;

export const PageNum = styled.p`
    font-size: ${({ theme }) => theme.fontSize.xs};
    font-weight: 600;
    position: absolute;
    bottom: 74px;
`;

export const prevButtonCss = css`
    transform: rotate(180deg);
`;
