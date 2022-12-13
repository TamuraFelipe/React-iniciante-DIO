import React from 'react'
import { Card } from '../../components/Card';
import { UserInfo } from '../../components/UserInfo';

import { Header } from '../../components/Header';

import { Container, Column, Title, TitleHighlight } from './styles';

const Feed = () => {
  return (
    <>
        <Header autenticado={true}/>
        <Container>
            <Column flex={3}>
                <Title>Feed</Title>
                <Card />
                <Card />
                <Card />
            </Column>
            <Column flex={1}>
              <TitleHighlight> # RANKING 5 TOP DA SEMANA </TitleHighlight>
                <UserInfo nome="Felipe Diego Tamura" image="https://avatars.githubusercontent.com/u/54502911?s=400&u=7b630a1f772ca768d003f05f893c34c06642d7fa&v=4" percentual={25}/>
                <UserInfo nome="Steffi Yumi" image="https://avatars.githubusercontent.com/u/102275682?v=4" percentual={65}/>
                <UserInfo nome="Gustavo Guanabara" image="https://avatars.githubusercontent.com/u/8683378?v=4" percentual={45}/>
                <UserInfo nome="Pablo " image="https://avatars.githubusercontent.com/u/45184516?v=" percentual={72}/>
            </Column>
        </Container>
    </>
  )
}

export { Feed }; 