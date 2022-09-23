import { ethers } from 'ethers';
import { useState } from 'react';
import { useRouter } from 'next/router';
import GDAOCollection from '../engine/GDAOCollection.json'
import { nftcollection } from '../engine/configuration';
import { Button, Input, Col, Row, Spacer, Container, Text } from '@nextui-org/react';
import 'sf-font'
import { toast } from 'react-toastify';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import { useSigner, useAccount, useNetwork } from 'wagmi';





export default function createMarket() {
  const { address } = useAccount()
  const { chain } = useNetwork()
  const { data: signer, isError, isLoading } = useSigner()

  const [formInput, updateFormInput] = useState({ amount: '' })

  const router = useRouter()

  async function mintNFT() {

    try {
      const { amount } = formInput
      //Chigag update TOKEN URI here
      const tokenUri = 'https://bafybeibsj2kao3qxfnasff56jeyww6kpr7ooylta2cqyujkwx44fo5stiu.ipfs.nftstorage.link/metadata/1.json';
      const quantity = Number(amount);

      // Chigag Network Logic - LyghtCode
      let network = chain.name;
      console.log("Connected network is: " + chain.name);
      if (network === 'Polygon') {
        console.log("Preparing Mint...")
        // Alchemy Logic - LyghtCode
        let contract = new ethers.Contract(nftcollection, GDAOCollection, signer);
        let transaction = await contract.safeMint(address, tokenUri, quantity);
        await transaction.wait();
        router.push('/portal');
      }
      else {
        toast.error("Switch to Polygon");

      }


    } catch (error) {
      //Chigag Add error toasts stupid!!!
      // console.log(error.message);
      // console.log(error.code);
      // console.log(error.reason);
      toast.error(error.reason);
    }

  }

  return (
    <div>
      <Spacer></Spacer>
      <Container display='flex' justify='center' alignContent='center' lg gap={2} css={{ fontFamily: 'Space Grotesk', fontWeight: '300' }}>
        <Text h2>Minter Portal</Text>
        <Row gap={4}>
          <Col css={{ marginRight: '$7' }}>
            <Spacer></Spacer>
            <Box
              component="ul"
              sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', p: 0, m: 0 }}
            >
              <Card component="li" sx={{ minWidth: 420, minHeight: 400, flexGrow: 1 }}>
                <CardCover>
                  <video
                    autoPlay
                    loop
                    muted
                    poster="GOLDDAOSTILL.png"
                  >
                    <source
                      src="gdao.mp4"
                      type="video/mp4"
                    />
                  </video>
                </CardCover>
              </Card>
            </Box>
          </Col>
          <Col>
            <Spacer></Spacer>
            {/* <Text h3>Mint Dashboard</Text> */}
            <Card display='flex' justify='center' style={{ maxWidth: '300px', background: '#000000', boxShadow: '0px 0px 5px #ffffff60' }}>
              <Container css={{ marginBottom: '$2' }}>
                <Input
                  css={{ marginTop: '$5' }}
                  placeholder="Set Quantity - MAX 4"
                  aria-label="Set Quantity - MAX 4"
                  onChange={e => updateFormInput({ ...formInput, amount: e.target.value })}
                />
                <Button size="sm" style={{ fontSize: '20px' }} onPress={mintNFT} css={{ marginTop: '$2', marginBottom: '$5', color: '$gradient' }}>
                  MINT
                </Button>
              </Container>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
