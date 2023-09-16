import styled from '@emotion/styled';

const Bookmarked = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    width: 1295px;
    height: 640px;
    background-color: ${({ theme }) => theme.colors.white};
    border-width: 19px 26px 19px 0;
    border-color: ${({ theme }) => theme.colors.yellow};
    border-style: solid;
    border-radius: 0px 12px 12px 0px;
    margin-top: 55px;
`;

const Btn = styled.button`
    width: 54px;
    position: absolute;
`;
const MenuBtn = styled(Btn)`
    content: '';
    top: 74px;
    left: 108px;
`;

const RightBtn = styled(Btn)`
    content: '';
    top: 74px;
    right: 44px;
`;

const LeftBtn = styled(Btn)`
    content: '';
    top: 142px;
    right: 44px;
`;
const Line = styled.span`
    position: relative;
    display: block;
    width: 1px;
    height: 100%;
    margin-left: 221px;

    &::before {
        background: linear-gradient(
            to right,
            transparent 0%,
            rgba(0, 0, 0, 0.2) 46%,
            rgba(0, 0, 0, 0.5) 49%,
            rgba(0, 0, 0, 0.6) 50%,
            rgba(0, 0, 0, 0.5) 51%,
            rgba(0, 0, 0, 0.2) 52%,
            transparent 100%
        );
        bottom: 0;
        content: '';
        left: 50%;
        position: absolute;
        top: 0;
        transform: translate(-50%, 0);
        width: 4em;
        z-index: 1;
    }
`;

const Contents = styled.section`
    position: relative;
    margin: 79px 129px 73px 100px;
    width: 835px;
    height: 488px;
`;
const Title = styled.h1`
    font-size: ${({ theme }) => theme.fontSize.large};
    font-weight: 600;

    ::selection {
        background-color: ${({ theme }) => theme.colors.yellow};
    }
`;

const Script = styled.p`
    height: 350px;
    margin-top: 42px;
    font-size: ${({ theme }) => theme.fontSize.base};
    line-height: 160%;
    overflow-y: hidden;

    ::selection {
        background-color: ${({ theme }) => theme.colors.yellow};
    }
`;

const Page = styled.p`
    position: absolute;
    bottom: 0;
    left: 0;
    font-size: ${({ theme }) => theme.fontSize.xs};
    font-weight: 600;
`;

export {
    Bookmarked,
    Btn,
    MenuBtn,
    RightBtn,
    LeftBtn,
    Line,
    Contents,
    Title,
    Script,
    Page,
};
