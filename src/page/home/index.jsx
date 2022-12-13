import { useNavigate } from "react-router-dom";

import {Header} from "../../components/Header";
import {Button} from "../../components/Button";

import bannerImage from "../../assets/banner.png"

import {
    Container,
    TextContent,
    Title,
    TitleHhighlight
} from "./style"


const Home = () => {

    const navigate = useNavigate();
    const handleClickSignIn = () => {
        navigate('/login')
    }

    return (<>
    <Header />
    <Container>
        <div>
            <Title> 
                <TitleHhighlight>
                    Implemente
                    <br />
                </TitleHhighlight>
                o seu futuro global agora!
            </Title>
            <TextContent>Domine as tecnologias utilizadas pelas empresas mais inovadoras do mundo e encare seu novo desafiio profissional, evoluindo em comunidade com os melhores experts.</TextContent>
            <Button title='Começar agora' variant='secondary' onClick={handleClickSignIn}/>
        </div>
        <div>
            <img src={bannerImage} alt="Banner Principal" />
        </div>
    </Container>
    </>)
}
export { Home }