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
    const location = useLocation();

    const onClickMenu = () => {
        navigate('/:bookname/index');
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
                    <PageNum>
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
                    </article>
                </Rnd>
            </BookBox>
        </ChapterPageWrapper>
    );
}
