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
            
            <InfoIcon href="mailto:lwy12993@gmail.com"><img alt="mail icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAXpJREFUSEvtluExBEEQhd9FQAhCIAJkIANE4ETgZEAEiIAMkAEZuAyIwNV3Na3a1M5sz9ae9ePm3+7O9NfvdffUzjTRmk3E1Rb8Z86XrN6VdCfpZKRMPiRdS7q3eCXwi6TDkaA+zIGkN16UwN9u97ukp4FJ4NyFO4vqRRTMPiy6lPTZkMCRpEdJwG01gzmIRedmVU8CqLrq2BMG30rad/VGMcp/miQLjjpUopb1JWmeGpXnMNg25gq6rM+tpTfOkkPWM81gsiUwTbaT1Hjr88QeklLriTCYcbKm8rZiJXAbNQIzo5TDW5uXIgzua96u5vHW5uer4FIn+iDHkswNb31u7UbBBMf6vcCIVRWjwMagZDW1o6atK1xjEvDXpgctB8DD4BL01yXQIPv/g2u1psZWZzq85o6ZYvG4bm94GfnnomtPM1upM40WgdpR7m0umnXSETDZPmfg1zQBNtN95QaG0vVPwBjgPmDxe0Tx4OC1g1vwRmztCjqZ1SvUJ2sf7qrHuwAAAABJRU5ErkJggg=="/></InfoIcon>
            <InfoIcon href="https://github.com/rkcfkrrt"><img alt="github icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAiZJREFUSEvllt01BUEQhOtGgAgQASJABkSACBABIkAEiIAMEAEiQASIgPPt2d7T2+Zndz3cB/1yz92dmerqrqnemeYUsznhagrwlqQFSett0s+SPiU9jiExFHhF0omkHUmLGQDA7yRdSiKZYtSAATmXtF87KLy/lnTcViK5tQRMKa9cSUdi603Sbo59DhjQ+0JZhyZB+bdT4ClgyguoieddarLfHIj20q5ba3/ZuxHLngKmP3sOhIwfJCEw3pEY4uFAguckCTu0wHP+P7kzbqJOIjCHvAZmqw5kIOlm2XdYDOtO7RH4QtJh2GCMx4BGxuztsY7AlGnZIdBfK+MYYGuHP4tWLNkhHjiV5UHb1zGgtpZ+cx19dNXzwFghavbR68tIdFh/hD3ca9yt59VHrUv5tTVnq+USBXYm6XQI8BRhWTKpG5IETpX6Lz1moNyGknTn+VKmMsQ4YD0lohFxRqeZ2EMkz6z1MYV1StFf3vtLBsIdtnuIIJizJFYKlIwBNQIKUTQQX26kb8PdqkDpSaC5Ei7wAOY2OslF0TLZRLZ8bRD0l2S8EaS8O3VnfQIky3XtIjcWYcZYM3HBCJVi8pGtHZbSB+8Yk1Si16acQcASEEqMOhFYLUgyzmwEBeivb7CSMwEOOxvobKaklDoVkTFMUXfyw69miQDRG+s5gLk93h7pKVrJ3oIasDGDPQnwS69TQUsAYqbb10m2PUOBa/0d/f7/Af8A+YtyH9j17mQAAAAASUVORK5CYII="/></InfoIcon>
        </Info>
      </FooterTop>
      <FooterBottom>
        Copyright © 2021 WendyL All Rights Reserved. WendyL 版權所有
      </FooterBottom>
    </FooterContainer>
  );
}


