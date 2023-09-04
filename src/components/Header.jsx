/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import React from 'react';
import github from '../assets/images/github.svg';
import logo from '../assets/images/JJA.svg';
import styled from '@emotion/styled';

const Wrapper = styled.nav`
    display: flex;
    background-color: ${({ theme }) => theme.colors.darkGray};
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
    return (
        <Wrapper>
            <Logo src={logo} alt="Logo" />
            <div>
                <TextBtn>INFO</TextBtn>
                <ImgBtn>
                    <img src={github} alt="GitHub" />
                </ImgBtn>
            </div>
        </Wrapper>
    );
}
