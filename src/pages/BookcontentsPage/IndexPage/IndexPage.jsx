import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
    BookSpine,
    BookBox,
    IndexPageWrapper,
    BookCoverFront,
    BookCoverBack,
    PageBox,
    backButtonCss,
} from './IndexPageStyle';
import ArrowButton from '../../../components/ArrowButton/ArrowButton';

export default function IndexPage() {
    const { pathname, state } = useLocation();
    const { id, title, indexData, color } = state;
    const [isButtonShow, setIsButtonShow] = useState(false);
    const [isMovetoChapter, setIsMovetoChapter] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const timer = () =>
            setTimeout(() => {
                setIsButtonShow(true);
            }, 2600);
        timer();
        return clearTimeout(timer);
    }, [isButtonShow]);

    const handleClickChapterButton = chapter => {
        setIsMovetoChapter(true);
        const timer = () =>
            setTimeout(() => {
                navigate(
                    `/${pathname.split('/')[1]}/${chapter
                        .replaceAll(', ', ',')
                        .replaceAll(' ', '-')
                        .replaceAll('/', '-')}`,
                    { state: chapter },
                );
            }, 500);
        timer();
        return clearTimeout(timer);
    };

    return (
        <IndexPageWrapper>
            <BookBox isMovetoChapter={isMovetoChapter}>
                <BookSpine bgUrl={`../img/spine/spine${id}.png`}>
                    <button>
                        <span>{String(id).padStart(2, '0')}</span>
                        <h2> {title}</h2>
                    </button>
                </BookSpine>
                <BookCoverFront
                    bgUrl={`../img/cover/cover${id}.png`}
                    color={color}
                >
                    <li>
                        <h2> {title}</h2>
                        <span>{String(id).padStart(2, '0')}</span>
                    </li>
                    <li>
                        <PageBox>
                            <h2>
                                {`${String(id).padStart(2, '0')} ${title} 목차`}
                            </h2>
                            <ul>
                                {indexData?.map((item, indx) => (
                                    <li
                                        key={indx}
                                        onClick={e => {
                                            handleClickChapterButton(item);
                                        }}
                                    >{`${indx + 1}. ${item}`}</li>
                                ))}
                            </ul>
                            <ArrowButton
                                color={color}
                                ariaLabel="콘텐츠 보기 버튼"
                                onClick={e => {
                                    handleClickChapterButton(indexData[0]);
                                }}
                            />
                        </PageBox>
                    </li>
                </BookCoverFront>
                <BookCoverBack color={color}>
                    <div></div>
                </BookCoverBack>
                {isButtonShow && (
                    <ArrowButton
                        color={color}
                        ariaLabel="뒤로가기 버튼"
                        onClick={() => {
                            navigate(-1);
                        }}
                        css={backButtonCss}
                    />
                )}
            </BookBox>
        </IndexPageWrapper>
    );
}
