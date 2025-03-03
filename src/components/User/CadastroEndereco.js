import React, { useState } from 'react';
import styled from 'styled-components'
import '../../styles/global.css';
import { useAuth } from '../../providers/auth';
import '../../styles/global.css';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import MaskedInput from '../User/MaskedInput';
import { Link } from 'react-router-dom';
import axios from 'axios';



const Text = styled.span`
    display: flex;
    justify-content: center;
    color: #666666;
    font-size: 20pt;
`

const LinkPersonalization = styled(Link)`
    text-decoration: none;
    color: #fff;
`

function FormCadastroEndereco() {
  
    const { Usuario, setUsuario } = useAuth();

    const [input, setInput] = useState({
        Email: Usuario.Email,
        Password: Usuario.Password,
        ConfirmPassword: Usuario.ConfirmPassword,
        NotifyEmail: Usuario.NotifyEmail,
        Nome: Usuario.Nome,
        Sobrenome: Usuario.Sobrenome,
        Documento: Usuario.Documento,
        DataNascimento: Usuario.DataNascimento,
        TipoUsuario: Usuario.TipoUsuario,
        Sexo: Usuario.Sexo,
        CEP: Usuario.CEP,
        UF: Usuario.UF,
        Cidade:  Usuario.Cidade,
        Logradouro: Usuario.Logradouro,
        Complemento: Usuario.Complemento,
        Apelido: Usuario.Apelido,
        SituacaoTributaria: Usuario.SituacaoTributaria,
        Formacao: Usuario.Formacao,
        UFEmpresa: Usuario.UFEmpresa,
        InscricaoEstadual: Usuario.InscricaoEstadual,
        Celular: Usuario.Celular
    });

    function onChange(ev) {
        const { name, value } = ev.target;

        if ([name] == 'CEP') {
            setInput({ ...input, CEP: value });
            if(value.length > 7)
            {
                const cep = value.replace(/\D/g, '');
                fetch(`https://viacep.com.br/ws/${cep}/json/`)
                    .then(res => res.json()).then(data => {
                        console.log(data);
                        setInput({ ...input, UF: data.uf });
                        setInput({ ...input, Cidade: data.Cidade });
                        setInput({ ...input, Logradouro: data.Logradouro });
                    })
            }
        }
        else if ([name] == 'UF') {
            setInput({ ...input, UF: value });
        }
        else if ([name] == 'Cidade') {
            setInput({ ...input, Cidade: value });
        }
        else if ([name] == 'Logradouro') {
            setInput({ ...input, Logradouro: value });
        }
        else if ([name] == 'Complemento') {
            setInput({ ...input, Complemento: value });
        }
        else if ([name] == 'Apelido') {
            setInput({ ...input, Apelido: value });
        }
        setUsuario(input);
        }

    const handleSubmit = (event) => {
        event.preventDefault();
    
        const endereco = {
            cep: Usuario.CEP,
            uf: Usuario.UF,
            cidade:  Usuario.Cidade,
            logradouro: Usuario.Logradouro,
            complemento: Usuario.Complemento,
            apelido : Usuario.Apelido,
            principal : true
        }
        debugger;
        const user = {
            username: Usuario.Email,
            password: Usuario.Password,
            tipoPessoa: Usuario.TipoUsuario,
            nome: Usuario.Nome,
            sobrenome: Usuario.Sobrenome,
            nDoc: Usuario.Documento,
            dataNasc: Usuario.DataNascimento,          
            genero: Usuario.Sexo,       
            celular: Usuario.Celular,
            email : Usuario.Email,
            foto : 'asdf',
            razaoSocial: Usuario.RazaoSocial,
            nomeFantasia:Usuario.NomeFantasia,
            ie:Usuario.InscricaoEstadual,
            endereco: endereco
        };

        console.log(user);

        axios.post(`http://localhost:9999/open/cadastro/usuario`,JSON.stringify(user),{headers: {  'Content-Type': 'application/json'}})
          .then(res => {
            console.log(res);
            console.log(res.data);  
            alert("Usuario cadastrado com sucesso!");
            window.location.href = "/profile"; 
          })
          .catch((error) => {
            // Trate o erro aqui.
            alert(error.message);
            console.log('Whoops! Houve um erro.', error.message || error)
          })
       
      };

    const checkCEP = (e) => {
        console.log("teste cep");
        const cep = e.target.value.replace(/\D/g, '');
        fetch(`https://viacep.com.br/ws/${cep}/json/`)
            .then(res => res.json()).then(data => {
                console.log(data);
                setInput({ ...input, UF: data.UF });
                setInput({ ...input, Cidade: data.Cidade });
                setInput({ ...input, Logradouro: data.Logradouro });
            })
    };


    return (

        <div >
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Text>Endereço</Text>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', m: 1 }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <MaskedInput name="CEP" mask="99999-999" value={(input.CEP)} onChange={onChange} label="CEP" />
                    <TextField name="UF" required id="outlined-required" label="UF" onChange={onChange} value={(input.UF)}/>
                    <TextField name="Cidade" required id="outlined-required" label="Cidade" onChange={onChange} value={(input.Cidade)} />
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <TextField name="Logradouro" required id="outlined-required" label="Logradouro" onChange={onChange} value={(input.Logradouro)} />
                    <TextField name="Complemento" required id="outlined-required" label="Complemento" onChange={onChange} value={(input.Complemento)} />
                    <TextField name="Apelido" required id="outlined-required" label="Apelido" onChange={onChange} value={(input.Apelido)} />
                </Box>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                {/* <Button name="One" variant="contained" sx={{ borderRadius: 100, borderWidth: 1, backgroundColor: "#5BB159" }} onClick={() => imprimeUsuario()}>
                    <LinkPersonalization to={"/profile"}>Cadastrar</LinkPersonalization>
                </Button> */}
                <Button name="One" variant="contained" onClick={handleSubmit} sx={{ borderRadius: 100, borderWidth: 1, backgroundColor: "#5BB159" }}>Cadastrar</Button>    
            </Box>
        </div >
    );
}
export default FormCadastroEndereco;