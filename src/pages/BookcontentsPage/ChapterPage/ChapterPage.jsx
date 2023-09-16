import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import left from '../../../assets/images/arrow-left-circle.svg';
import right from '../../../assets/images/arrow-right-circle.svg';
import menu from '../../../assets/images/menu.svg';
import { Rnd } from 'react-rnd';
import {
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
} from './ChapterPageStyle';

const Box = () => (
    <div className="box" style={{ height: '100%' }}>
        <article className="ppt">
            <img
                src="https://i.ibb.co/JmRZXtw/015.png"
                draggable="false"
                alt="ppt 장표"
            />
        </article>
    </div>
);

export default function ChapterPage() {
    const navigate = useNavigate();
    const location = useLocation();

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
                <Title>this</Title>
                <Script>
                    객체 리터럴을 사용하면 객체를 쉽게 만들 수 있습니다. 비슷한
                    객체를 여러 개 만들어야 하는 경우가 생길때에는 객체 리터럴
                    보다는 생성자 함수를 사용하는 것이 좋습니다. 여러개의 객체를
                    일일히 만들어 줄 필요없이 생성자 함수를 이용하여 쉽게 만들
                    수 있습니다.
                </Script>
                <Page>1/20</Page>
            </Contents>
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
                    maxWidth={830}
                    maxHeight={480}
                    bounds="window"
                >
                    <Box />
                </Rnd>
            </div>
        </Bookmarked>
    );
}
