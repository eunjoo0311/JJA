/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import React from 'react';
import github from '../../assets/images/github.svg';
import logo from '../../assets/images/JJA.svg';
import styled from '@emotion/styled';
import { useNavigate, useLocation } from 'react-router-dom';

const Wrapper = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 58px 120px 0 120px;
`;

const Logo = styled.img`
    width: 90px;
    cursor: pointer;
`;

const TextBtn = styled.button`
    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.fontSize.base};
    font-weight: 600;
    margin-right: 56px;
`;

const ImgBtn = styled.button`
    width: 46px;
`;

export default function Header() {
    const navigate = useNavigate();
    const location = useLocation();

    function goHome() {
        navigate('/');
    }

    function goInfo() {
        if (location.pathname === '/info') {
            navigate(-1);
        } else {
            navigate('/info');
        }
    }

    function goGithub() {
        const githubURL = 'https://github.com/Jobs-Js/JavaScript-Study';
        window.open(githubURL, '_blank');
        console.log('깃허브 이동?');
    }

    return (
        <Wrapper>
            <Logo src={logo} alt="Logo" onClick={goHome} />
            <div>
                <TextBtn onClick={goInfo}>
                    {location.pathname === '/info' ? 'CLOSE' : 'INFO'}
                </TextBtn>
                <ImgBtn onClick={goGithub}>
                    <img src={github} alt="GitHub" />
                </ImgBtn>
            </div>
        </Wrapper>
    );
}
