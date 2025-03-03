import React from "react";
import styled from 'styled-components';


import { AiFillStar } from "react-icons/ai";


import { Link } from "react-router-dom";
import aliceImage from '../../assets/listaOfertas/ofertas/alice.png';





const WrapperCard = styled.div`
    min-width: 100%;
    min-height: 100%;
    display: flex;
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;
`

const CardDiv = styled.div`
    width: 90%;
    height: 39%;
    border: solid 1px #E7E7E7;
    border-radius: 19px;
    margin: 10px 0;
`

const DivPhoto = styled.div`
    min-width: 100%;
    min-height: 30%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-radius: 10px;
    margin: 10px 0;
    gap: 7px;
`

const ImageProfile = styled.img`
    image-resolution: initial;
    width: 30%;
    margin: 0 10px;
`

const DivText = styled.div`
    min-width: 50%;
`

const DivValuation = styled.div`
    width: 80%;
    height: 40%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const DivStars = styled.div`
    width: 70%;
    height: 20%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`
const DivTextStar = styled.div`
    width: 71%;
    height: 20%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400; 
    font-size: 15px;
`
const DivTextKm = styled.div`
    width: 55%;
    height: 20%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400; 
    font-size: 15px;
    color: #000;
`
const DivFormação = styled.div`
    width: 68%;
    height: 20%;
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: center;
    margin: 10px 0;
`
const DivTextFormacao = styled.text`
    width: 30%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #76BE74;
    border-radius: 10px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400; 
    font-size: 11px;
`

const DivPrice = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    flex-direction: row;   
    color: #000;
    font-family: 'Montserrat';
    font-style: bold;
    font-weight: 500; 
`

const DivWhatsApp = styled.button`
    width: 20%;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    border: solid 1px #A9F0A6;
    border-radius: 50px;
    background-color: #A9F0A6;
`

const DivWhatsAppPai = styled.div`
    width: 150%;
    display: flex;
    margin: 5px 0;
`

const DivTitle = styled.h1`
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`



function CardPeople() {

    return (
        <WrapperCard>

            <DivTitle>
                <h3>Ofertas em Aberto</h3>
            </DivTitle>


            <CardDiv>
                <DivPhoto>

                    <ImageProfile src={aliceImage} />

                    <DivText>Alice Dolores</DivText>

                    <DivPrice>
                        250,00
                    </DivPrice>

                </DivPhoto>
                <DivValuation>

                    <DivStars>
                        <AiFillStar size={30} fill={"#FFC700"} />
                        <AiFillStar size={30} fill={"#FFC700"} />
                        <AiFillStar size={30} fill={"#FFC700"} />
                        <AiFillStar size={30} fill={"#FFC700"} />
                        <AiFillStar size={30} fill={"#FFC700"} />
                    </DivStars>

                    <DivTextStar>(5,0 em avaliação)</DivTextStar>
                    <DivTextKm>15Km</DivTextKm>

                    <DivFormação>
                        <DivTextFormacao>
                            Enfermeira
                        </DivTextFormacao>
                    </DivFormação>
                </DivValuation>

                <DivWhatsAppPai>
                    <DivWhatsApp>
                        WhatsApp
                    </DivWhatsApp>
                </DivWhatsAppPai>
            </CardDiv>

            <CardDiv>
                <DivPhoto>

                    <ImageProfile src={aliceImage} />

                    <DivText>Alice Dolores</DivText>

                    <DivPrice>
                        250,00
                    </DivPrice>

                </DivPhoto>
                <DivValuation>

                    <DivStars>
                        <AiFillStar size={30} fill={"#FFC700"} />
                        <AiFillStar size={30} fill={"#FFC700"} />
                        <AiFillStar size={30} fill={"#FFC700"} />
                        <AiFillStar size={30} fill={"#FFC700"} />
                        <AiFillStar size={30} fill={"#FFC700"} />
                    </DivStars>

                    <DivTextStar>(5,0 em avaliação)</DivTextStar>
                    <DivTextKm>15Km</DivTextKm>

                    <DivFormação>
                        <DivTextFormacao>
                            Aux. Enfermagem
                        </DivTextFormacao>
                    </DivFormação>
                </DivValuation>

                <DivWhatsAppPai>
                    <DivWhatsApp>
                        WhatsApp
                    </DivWhatsApp>
                </DivWhatsAppPai>
            </CardDiv>

        </WrapperCard>
    )
}

export default CardPeople;