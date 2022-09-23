import { createTheme, NextUIProvider } from "@nextui-org/react";
import 'sf-font';
import { Text, Navbar, Image, Link } from '@nextui-org/react';
import Footer from './footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Typography from '@mui/joy/Typography';
import '@rainbow-me/rainbowkit/styles.css';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import {
  getDefaultWallets,
  RainbowKitProvider,
  midnightTheme
} from '@rainbow-me/rainbowkit';
import {
  chain,
  configureChains,
  createClient,
  WagmiConfig,
} from 'wagmi';
import { infuraProvider } from 'wagmi/providers/infura';
import { publicProvider } from 'wagmi/providers/public';

const { chains, provider } = configureChains(
  [chain.polygon],
  [
    infuraProvider({ apiKey: process.env.NEXT_PUBLIC_INFURA_KEY }),
    publicProvider()
  ]
);

const { connectors } = getDefaultWallets({
  appName: 'Golf DAO',
  chains
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider
})

const theme = createTheme({
  type: 'dark',
  theme: {
    fontFamily: 'SF Pro Display',
    colors: {
      primaryLight: '#a1c245',
      primaryLightHover: '#a1c245',
      primaryLightActive: '#a1c245',
      primaryLightContrast: '$green600',
      primary: '#a1c245',
      primaryBorder: '$green500',
      primaryBorderHover: '$green600',
      primarySolidHover: '$green700',
      primarySolidContrast: '$white',
      primaryShadow: '$white500',
      transparent: '#00000000',
      secondary: '$purple500',

      gradient: 'linear-gradient(112deg, $blue100 -25%, $green500 -10%, $purple300 90%)',
      link: '#5E1DAD',

      myColor: '#00000030'

    },
    space: {},
    fonts: {}
  }
})
const collapseItems = [
  "Fiat",
  "Mint",
  "Market",
  "Gallery",
];

function MyApp({ Component, pageProps }) {
  //******LyghtC0des NFT Marketplace******//

  return (
    // the magic sauce
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider coolMode theme={midnightTheme({
        accentColor: '#a1c245',
        borderRadius: 'small',
        overlayBlur: 'small',
      })}
        modalSize="compact" chains={chains}>
        {/* Next U.I. */}
        <NextUIProvider theme={theme}>
          <Navbar isBordered variant="floating">
            {/* Branding */}
            <Navbar.Brand>
              <Navbar.Toggle aria-label="toggle navigation" />
              <Image src="letrascut.png" style={{ maxWidth: '260px', marginRight: '0px' }}  ></Image>
              {/* <Text color="inherit" hideIn="xs" size={36} css={{ fontWeight: "300", textShadow: '0px 0px 3px #a1c245' }}>
                Clubhouse
              </Text> */}
            </Navbar.Brand>
            {/* Nav Menu */}
            <Navbar.Content enableCursorHighlight activeColor="secondary" hideIn="xs" variant="solid-rounded">

              <Navbar.Link style={{ fontFamily: 'SF Pro Display', fontSize: '33px', color: '#a1c245', fontWeight: '200' }} href="/">Home</Navbar.Link>
              {/* <Navbar.Link style={{fontFamily:'SF Pro Display', fontSize:'25px', color:'white', fontWeight:'500'}} href="/create">
              Create
            </Navbar.Link> */}
              <Navbar.Link style={{ fontFamily: 'SF Pro Display', fontSize: '33px', color: '#a1c245', fontWeight: '260' }} href="/fiat">Fiat</Navbar.Link>
              <Navbar.Link style={{ fontFamily: 'SF Pro Display', fontSize: '33px', color: '#a1c245', fontWeight: '260' }} href="/mint">Mint</Navbar.Link>
              <Navbar.Link style={{ fontFamily: 'SF Pro Display', fontSize: '33px', color: '#a1c245', fontWeight: '260' }} href="/market">Market</Navbar.Link>
              <Navbar.Link style={{ fontFamily: 'SF Pro Display', fontSize: '33px', color: '#a1c245', fontWeight: '260' }} href="/gallery">Gallery</Navbar.Link>
            </Navbar.Content>
            {/* Mobile Menu */}
            <Navbar.Collapse>
              {collapseItems.map((item, index) => (
                <Navbar.CollapseItem key={item}>
                  <Link
                    color="primary"
                    css={{
                      minWidth: "100%",
                    }}
                    href={"/" + item.toLowerCase()}
                  >
                    {item}
                  </Link>
                </Navbar.CollapseItem>
              ))}
            </Navbar.Collapse>
            {/* Rainbow Kit Button */}
            <ConnectButton showBalance={false} accountStatus={{
              smallScreen: 'avatar',
              largeScreen: 'full',
            }} />
          </Navbar>
          {/* Main Site Pages */}
          <Component {...pageProps} />
          {/* Footer Starts Here */}
          <Footer>
            <Footer />
          </Footer>
          {/* Toastsss P: */}
          <ToastContainer theme='dark' />
        </NextUIProvider>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default MyApp;
