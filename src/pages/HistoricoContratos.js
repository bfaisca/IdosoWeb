import React from "react";

import styled from 'styled-components'

import Header from "../components/Header/";
import SearchField from "../components/SearchField/";
import Profile from "../components/Profile/";

import karina from '../assets/FavoritosAndProfile/Profiles/karina.png'
import leonardo from '../assets/FavoritosAndProfile/Profiles/leonardo.png'
import sergio from '../assets/FavoritosAndProfile/Profiles/sergio.png'
import heartImg from '../assets/listaOfertas/heart.png';

import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import IconButton from '@mui/material/IconButton';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';

import style from './../styles/Favoritos.css';
import styleAvaliacaoModal from './../styles/modalAvaliacao.css';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

const DivBody = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 40px;
`

const DivSearch = styled.div`
    width: 70%;
    height: 100px;
    align-items: center;
    flex-direction: row;
    display: flex;
    justify-content: center;
`

const Items = styled.div`
    width: 100%;
    overflow-wrap: break-word;
    display: flex;
`

const SpanHistorico = styled.span`
    display: flex;
    justify-content: center;
    color: #666666;
    font-size: 20pt;
`

const DivProfiles = styled.div`
    width: 75%;
    height: 200px;
    align-items: center;
    display: flex;
    justify-content: center;
    margin-left: 100px;
    flex-direction: column;
`

const DivProfileItem = styled.div`
    width: 100%;
    height: 100%;
    overflow-wrap: break-word;
    display: flex;
    margin-top: 60px;
`

const SpanNome = styled.span`
    margin-top: 300px;
    margin-left: -1250px;
    color: black;
    font-size: 18pt;
`

const ProfileImage = styled.img`
    width: 130px;
    height: 130px;
    border-radius: 65px;
    margin-top: 265px;
    margin-left: 40px;
    position: absolute;
`

const HeartImage = styled.img`
    width: 30px;
    margin-top: 270px;
    margin-left: 1358px;
    position: absolute;
`

const DivButton = styled.div`
    margin-top: 350px;
    margin-left: 1260px;
    position: absolute;
`

const SpanData = styled.span`
    margin-top: 370px;
    margin-left: 200px;
    color: black;
    font-size: 11pt;
    position: absolute;
    font-weight: 100;
`

const SpanHorario = styled.span`
    margin-top: 390px;
    margin-left: 200px;
    color: black;
    font-size: 11pt;
    position: absolute;
    font-weight: 100;
`
const SpanNomeIdoso = styled.span`
    margin-top: 300px;
    margin-left: 830px;
    color: black;
    font-size: 11pt;
    position: absolute;
    font-weight: 100;
`

const SpanValor = styled.span`
    margin-top: 320px;
    margin-left: 1265px;
    color: black;
    font-size: 15pt;
    position: absolute;
`
const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 550,
    height: 550,
    bgcolor: 'background.paper',
    p: 4,
    borderRadius: 3,
};


const SpanAvaliacao = styled.span`
    margin-left: 110px;
    margin-top: 60px;
    margin-bottom: 40px;
    font-size: 25pt;
    color: #858484;
    font-weight: 100;
  `

const DivIcone = styled.div`
    margin-top: -50px;
    margin-left: 510px;
  `

const DivNomeAvaliado = styled.div`
    margin-top: 20px;
  `

const SpanNomeAvaliado = styled.span`
    margin-left: 140px;
    font-size: 18pt;
    font-weight: 100;
    color: black;
  `

const DivRating = styled.div`
    margin-left: 220px;
    margin-top: 19px;
`

const DivComentario = styled.div`
    margin-top: 40px;
`

const SpanComentario = styled.span`
    font-size: 18pt;
    font-weight: 100;
    color: black;
`

const DivTextField = styled.div`
    margin-top: 10px;
`

const SpanTexto = styled.span`
  width: 500px;
  margin-top: -220px;
  margin-left: 30px;
  font-size: 12pt;
  font-weight: 100;
  color: black;
  position: absolute;
  

`
const DivEnviarAvaliacao = styled.div`
    margin-left: 180px; 
    margin-top: 20px;
`

function HistoricoContratos() {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Header
                one="MEU PERFIL"
                two="FAVORITOS"
                three="HISTÓRICO DE CONTRATOS"
                four="LOGOUT"
                linkOne="/profile"
                linkTwo="/favoritos"
                linkThree="/criacaoanuncio"
                linkFour="/"
            />
            <DivBody>
                <DivSearch>
                    <Items>
                        <SpanHistorico>
                            Histórico de contratos
                        </SpanHistorico>
                    </Items>
                    <Items>
                        <SearchField />
                    </Items>
                </DivSearch>
                <DivProfiles>
                    <DivProfileItem>
                        <Profile />
                        <SpanNome>
                            Karina Alves
                        </SpanNome>
                        <ProfileImage src={karina} />
                        <HeartImage src={heartImg} />
                        <DivButton>
                            <Button id="avaliadoButton" variant="contained" disabled>Avaliado</Button>
                        </DivButton>
                        <SpanData>
                            10/05/2022
                        </SpanData>
                        <SpanHorario>
                            Das 09:00 às 12:00
                        </SpanHorario>
                        <SpanValor>
                            R$ 250,00
                        </SpanValor>
                        <SpanNomeIdoso>
                            Alice Doles dos Santos
                        </SpanNomeIdoso>
                    </DivProfileItem>
                    <DivProfileItem>
                        <Profile />
                        <SpanNome>
                            Leonardo Machado Junior
                        </SpanNome>
                        <ProfileImage src={leonardo} />
                        <HeartImage src={heartImg} />
                        <DivButton>
                            <Button onClick={handleOpen} id="avaliarButton" variant="contained">Avaliar</Button>
                        </DivButton>
                        <SpanData>
                            12/05/2022
                        </SpanData>
                        <SpanHorario>
                            Das 08:00 às 11:30
                        </SpanHorario>
                        <SpanValor>
                            R$ 275,00
                        </SpanValor>
                    </DivProfileItem>
                    <DivProfileItem>
                        <Profile />
                        <SpanNome>
                            Sergio Jessé Garcia
                        </SpanNome>
                        <ProfileImage src={sergio} />
                        <HeartImage src={heartImg} />
                        <DivButton>
                            <Button id="avaliadoButton" variant="contained" disabled>Avaliado</Button>
                        </DivButton>
                        <SpanData>
                            11/03/2022
                        </SpanData>
                        <SpanHorario>
                            Das 07:00 às 12:20
                        </SpanHorario>
                        <SpanValor>
                            R$ 300,00
                        </SpanValor>
                    </DivProfileItem>
                </DivProfiles>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={modalStyle}>
                        <Button id="buttonDenunciar" variant="outlined">Denunciar</Button>
                        <SpanAvaliacao>
                            Avaliação
                        </SpanAvaliacao>
                        <DivIcone>
                            <IconButton onClick={handleClose} id="iconeFechar">
                                <HighlightOffIcon id="iconClose" fontSize="large" />
                            </IconButton>
                        </DivIcone>
                        <DivNomeAvaliado>
                            <SpanNomeAvaliado>
                                Leonardo Machado Junior
                            </SpanNomeAvaliado>
                        </DivNomeAvaliado>
                        <DivRating>
                            <Stack spacing={1}>
                                <Rating id="estrelasIcon" name="half-rating-read" defaultValue={4.5} precision={0.5} />
                            </Stack>
                        </DivRating>
                        <DivComentario>
                            <SpanComentario>
                                Comentário
                            </SpanComentario>
                        </DivComentario>
                        <DivTextField>
                            <TextField
                                id="outlined-multiline-static"
                                multiline
                                rows={10}
                            />
                        </DivTextField>
                        <SpanTexto>
                            A atenção e cuidado que o Leonardo teve com a minha mãe foi o diferencial, muito atencioso. Sem dúvida o contratarei mais vezes.
                        </SpanTexto>
                        <DivEnviarAvaliacao>
                            <Button onClick={handleOpen} id="avaliarButton" variant="contained">Enviar Avaliação</Button>
                        </DivEnviarAvaliacao>
                    </Box>
                </Modal>
            </DivBody>

        </div>
    )
}

export default HistoricoContratos;