import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer``;

const FooterTop = styled.div`
  background: #e8efee;
  padding: 20px;
  color: #484848;
`;

const Info = styled.div`
  display: flex;
    margin-right: 16px;
  font-size: 16px;
`;

const InfoContent = styled.div`
  margin-buttom: 10px;
`;

const InfoIcon = styled.a`
  margin: 0 5px;
`;

const FooterBottom = styled.div`
  background: #1C2C58;
  padding: 12px;
  text-align: center;
  color: white;
  font-size: 16px;
`;

export default function Footer() {
  return (
    <FooterContainer>
      <FooterTop>
        <Info>
            <InfoContent>WendyL</InfoContent>
            <InfoIcon href="mailto:lwy12993@gmail.com"><box-icon name='mail-send'></box-icon></InfoIcon>
            <InfoIcon href="https://github.com/rkcfkrrt"><box-icon type='logo' name='github'></box-icon></InfoIcon>
        </Info>
      </FooterTop>
      <FooterBottom>
        Copyright © 2021 WendyL All Rights Reserved. WendyL 版權所有
      </FooterBottom>
    </FooterContainer>
  );
}


