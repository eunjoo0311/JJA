/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import styled from '@emotion/styled';
import React, { useRef, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import left from '../../../assets/images/arrow-left-circle.svg';
import right from '../../../assets/images/arrow-right-circle.svg';
import menu from '../../../assets/images/menu.svg';
import titleList from '../../../data/TitleList';
import ppt from '../../../assets/images/ppt.png';
import { Rnd } from 'react-rnd';

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
        background-color: ${({ theme }) =>
            theme.colors.yellow}; /* 원하는 색상으로 변경 */
    }
`;

const Script = styled.p`
    height: 350px;
    margin-top: 42px;
    font-size: ${({ theme }) => theme.fontSize.base};
    line-height: 160%;
    overflow-y: hidden;

    ::selection {
        background-color: ${({ theme }) =>
            theme.colors.yellow}; /* 원하는 색상으로 변경 */
    }
`;

const Page = styled.p`
    position: absolute;
    bottom: 0;
    left: 0;
    font-size: ${({ theme }) => theme.fontSize.xs};
    font-weight: 600;
`;

const Box = () => (
    // <img
    //     src="https://i.ibb.co/JmRZXtw/015.png"
    //     // src=""
    //     className="box"
    //     style={{ height: '100%', backgroundColor: 'black', useSelect: 'none' }}
    // ></img>
    <div className="box" style={{ height: '100%' }}>
        <article className="media">
            <div className="media-left">
                <figure className="ppt">
                    <img
                        src="https://i.ibb.co/JmRZXtw/015.png"
                        draggable="false"
                        alt="ppt 장표"
                    />
                </figure>
            </div>
        </article>
    </div>
);

const getTitleById = id => {
    const titleInfo = titleList.find(item => item.id === id);
    return titleInfo ? titleInfo.title : '에러';
};
export default function ChapterPage() {
    const navigate = useNavigate();
    const location = useLocation();

    const titleId = 5;
    const title = getTitleById(titleId);

    const onClickMenu = () => {
        navigate('/:bookname/index');
    };

    return (
        <Bookmarked>
            <MenuBtn>
                <img src={menu} alt="menu" onClick={onClickMenu} />
            </MenuBtn>
            <Line />
            <RightBtn>
                <img src={right} alt="다음 페이지" />
            </RightBtn>
            <LeftBtn>
                <img
                    src={left}
                    alt="이전 페이지"
                    onClick={() => navigate(-1)}
                />
            </LeftBtn>
            <Contents>
                <Title>{title}</Title>
                <Script>
                    객체 리터럴을 사용하면 객체를 쉽게 만들 수 있습니다. 비슷한
                    객체를 여러 개 만들어야 하는 경우가 생길때에는 객체 리터럴
                    보다는 생성자 함수를 사용하는 것이 좋습니다. 여러개의 객체를
                    일일히 만들어 줄 필요없이 생성자 함수를 이용하여 쉽게 만들
                    수 있습니다.
                </Script>
                <Page>1/20</Page>
            </Contents>
            {/* <Ppt src={ppt} /> */}
            <div
                style={{
                    width: '800px',
                    height: '400px',
                }}
            >
                <Rnd
                    default={{
                        x: -790,
                        y: 355,
                        width: 620,
                        height: 348,
                    }}
                    minWidth={500}
                    minHeight={270}
                    bounds="window"
                >
                    <Box />
                </Rnd>
            </div>
        </Bookmarked>
    );
}
