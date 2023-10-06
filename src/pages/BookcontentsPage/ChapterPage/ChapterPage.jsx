import React, { useLayoutEffect, useState } from 'react';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import { Rnd } from 'react-rnd';
import {
    Title,
    Script,
    ChapterPageWrapper,
    menuButtonCss,
    LeftPage,
    PageNum,
    RightPage,
    prevButtonCss,
    BookBox,
} from './ChapterPageStyle';
import pptImg from '../../../db/pptImg.json';
import content from '../../../db/content.json';
import chapterList from '../../../db/chapter.json';
import CircleButton from '../../../components/CircleButton/CircleButton';

export default function ChapterPage() {
    const navigate = useNavigate();
    const { hash } = useLocation();
    const { bookname, chapter } = useParams();
    const realChapter = chapter.replaceAll('-', ' ');
    const pageNumber = parseInt(hash.slice(1));

    const selectedColor = chapterList.contentList.find(item =>
        item.indexData.includes(realChapter),
    )?.color;

    const pptImgString = new Map(Object.entries(pptImg)).get(realChapter);
    const [firstImageLoaded, setFirstImageLoaded] = useState(false);
    const [pptImgData, setPptImgData] = useState([]);

    const pptImgPreload = () => {
        for (let i = 0; i < pptImgString.length; i++) {
            const pptImg = new Image();
            pptImg.src = pptImgString[i];
            if (i === 0) {
                pptImg.onload = () => {
                    setFirstImageLoaded(true);
                };
            }
            setPptImgData(prev => [...prev, pptImg]);
        }
    };

    useLayoutEffect(() => {
        pptImgPreload();
    }, []);

    const contentData = new Map(Object.entries(content)).get(realChapter);
    const [isMovetoIndex, setIsMovetoIndex] = useState(false);

    const onClickMenu = () => {
        setIsMovetoIndex(true);
        const timer = () =>
            setTimeout(() => {
                navigate(`/${bookname}/index`, {
                });
            }, 400);
        timer();
        return clearTimeout(timer);
    };

    const onClickNextButton = () => {
        if (pageNumber < pptImgString.length) {
            navigate(`#${pageNumber + 1}`);
        } else {
            navigate('#1');
        }
    };
    const onClickPrevButton = () => {
        if (pageNumber > 1) {
            navigate(`#${pageNumber - 1}`);
        } else {
            navigate(`#${pptImgString.length}`);
        }
    };

    return (
        <ChapterPageWrapper>
            <BookBox color={selectedColor} isMovetoIndex={isMovetoIndex}>
                <LeftPage color={selectedColor}>
                    <CircleButton
                        type="menu"
                        color={selectedColor}
                        ariaLabel="목차 확인 버튼"
                        onClick={onClickMenu}
                        css={menuButtonCss}
                    />
                </LeftPage>
                <RightPage>
                    <Title>{realChapter}</Title>
                    <Script>{contentData[pageNumber - 1]}</Script>
                    <PageNum>
                        {pageNumber}/{pptImgString.length}
                    </PageNum>
                    <nav>
                        <CircleButton
                            color={selectedColor}
                            ariaLabel="다음 단락 버튼"
                            onClick={onClickNextButton}
                        />
                        <CircleButton
                            color={selectedColor}
                            ariaLabel="이전 단락 버튼"
                            onClick={onClickPrevButton}
                            css={prevButtonCss}
                        />
                    </nav>
                </RightPage>
                <Rnd
                    default={{
                        x: 300,
                        y: 430,
                        width: 620,
                        height: 348,
                    }}
                    minWidth={500}
                    minHeight={270}
                    maxWidth={830}
                    maxHeight={480}
                    bounds="window"
                >
                    <article>
                        {firstImageLoaded && (
                            <img
                                src={pptImgData[pageNumber - 1].src}
                                draggable="false"
                                alt="ppt 장표"
                                style={{
                                    boxShadow:
                                        ' 0px 0px 14px rgba(50, 50, 50, 0.2)',
                                }}
                            />
                        )}
                    </article>
                </Rnd>
            </BookBox>
        </ChapterPageWrapper>
    );
}
