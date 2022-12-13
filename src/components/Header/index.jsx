import { useNavigate } from 'react-router-dom';

import React from 'react';
import logo from '../../assets/logo-dio.svg'
import { Button } from '../../components/Button';

import{
    BuscarInputContainer,
    Container,
    Input,
    Menu,
    MenuRight,
    Row,
    Wrapper,
    UserPicture
} from './styles';

const Header = ({autenticado}) => {

    const navigate = useNavigate();
    const handleClickSignIn = () => {
        navigate('/login')
    }
    const handleClickRegister = () => {
        navigate('/cadastrar')
    };
    return(
        <Wrapper>
            <Container>
                <Row>
                    <img src={logo} alt="Logo DIO" />
                    {autenticado ? (
                        <>
                        <BuscarInputContainer>
                            <Input placeholder='Buscar...'/>
                        </BuscarInputContainer>
                            <Menu>Live Code</Menu>
                            <Menu>Global</Menu>
                        </>
                    ) : null}
                </Row>
                <Row>
                    {autenticado ? (
                        <>
                            <MenuRight href="/">Home</MenuRight>
                            <UserPicture src="https://avatars.githubusercontent.com/u/54502911?s=400&u=7b630a1f772ca768d003f05f893c34c06642d7fa&v=4"/>
                        </>
                    ) : (
                    <>
                        <MenuRight href="/">Home</MenuRight>
                        <Button title="Entrar" onClick={handleClickSignIn}/>
                        <Button title="Cadastrar" onClick={handleClickRegister}/>
                    </>)}
                </Row>
            </Container>
        </Wrapper>
    )
}

export {Header}