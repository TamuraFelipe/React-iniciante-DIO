import { MdEmail, MdLock, MdPerson, MdSmartphone } from "react-icons/md";
import { useNavigate } from "react-router-dom";

import {Button} from "../../components/Button";
import {Header} from "../../components/Header";
import {Input} from "../../components/Input";

import {
    Column,
    Container,
    Row,
    SubtitleLogin,
    Title,
    TitleLogin,
    Wrapper,
    CriarAviso
} from "./styles"


const Cadastrar = () => {

    const navigate = useNavigate();
    const handleClickEnter = () => {
        navigate('/login');
    }

    return (<>
    <Header />
    <Container>
        <Column>
            <Title> 
                A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.
            </Title>
            
        </Column>
        <Column>
        <Wrapper>
            <TitleLogin>Comece agora grátis</TitleLogin>
            <SubtitleLogin>Crie a sua conta e make the change_</SubtitleLogin>
            <form>
                <Input placeholder='Nome Completo' leftIcon={<MdPerson />}/>
                <Input placeholder='Seu melhor @e-mail' leftIcon={<MdEmail />}/>
                <Input placeholder='Celular ex:(11)96123-4567' leftIcon={<MdSmartphone />}/>
                <Input placeholder='Senha' type='password' leftIcon={<MdLock />}/>
                <Button title='CRIAR MINHA CONTA GRÁTIS' variant="disabled" onClick={handleClickEnter} />
            </form>
            <Row>
                <CriarAviso>Ao clicar em "criar minha conta grátis", declaro que aceito as <a href="$">Políticas de Privacidade </a>e os <a href="$">Termos de Uso </a>da DIO.</CriarAviso>
                
                <CriarAviso>Já tenho conta. <a className="green" href="$">Fazer login.</a></CriarAviso>
            </Row>
        </Wrapper>
        </Column>
    </Container>
    </>)
}


export { Cadastrar }