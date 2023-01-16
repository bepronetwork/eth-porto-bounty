import Head from "next/head";
import { Button } from "@taikai/rocket-kit";
import { useWeb3 } from "../hooks/useWeb3";
import { Container, Main, NavBar, BrandName, Menu , Footer, Title, SubTitle, Content}  from "../styles/home";
import ConnectModal from "../components/connect-wallet-modal";
import React, { useState } from 'react';
import ClickableEthAddress  from "../components/clickable-eth-address";

export default function Home() {

  const { connected } = useWeb3();
  const [isConnectModal, setConnectModal] = useState(false);
  return (
    <Container>
      <Head>
        <title>Web3 BoilerPlate by Lay3rX</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar>
        <BrandName> Web3 Boilerplate </BrandName>
        <Menu>
          {!connected && (
            <Button
              ariaLabel="Connect"
              className="button"
              color="green"
              value="Connect"
              variant="solid"
              action={()=> setConnectModal(true)}
            />
          )}
          { connected && <ClickableEthAddress onClick={()=> setConnectModal(true)}/>}
        </Menu>
      </NavBar>
      {isConnectModal && <ConnectModal onClose={()=> setConnectModal(false)}/>}
      <Main>
        <Content>
          <Title>Lay3rX Web3 Boilerplate</Title>
          <SubTitle>Your web3 React.js template built with <strong>Dappkit</strong> +  <strong>RocketKit</strong></SubTitle>
        </Content>        
      </Main>
      <Footer>Made with ❤️ by LayerX - 2023</Footer>
    </Container>
  );
}
