import 'sf-font';
import { Text, Row, Spacer, Container, Col } from '@nextui-org/react';

export default function Footer() {
  const footer1 = [
    {
      id: 1,
      img: "discord-svgrepo-com.svg",
      url: "https://discord.gg/sxp3QxpnTU",
    },
    {
      id: 2,
      img: "telegram-svgrepo-com.svg",
      url: "https://t.me/GolfDAO",
    },
    {
      id: 3,
      img: "twitter-svgrepo-com.svg",
      url: "https://twitter.com/GolfDAO1",
    },
    {
      id: 4,
      img: "instagram-svgrepo-com.svg",
      url: "https://www.instagram.com/golfdao1/",
    },
    {
      id: 5,
      img: "linkedin-svgrepo-com.svg",
      url: "https://www.linkedin.com/in/golfdao/",
    },
  ];

  const footer2 = [
    {
      id: 1,
      img: "polygon-matic-logo.png",
    },
  ];

  return (
    <div>
      <Container>
        <Spacer></Spacer>
        <Row gap={2}>
          {/* Polygon Logo */}
          {/* <Col>
            <Text h3
                style={{
                  color: "#ffffff",
                  fontSmooth: "always",
                  textShadow: "-0px 0px 3px #ffffff",
                  fontFamily: "SF Pro Display",
                  fontWeight: "200",
                }}>Deployed on</Text>
            <ul>
              {footer2.map((item, idx) => {
                return (
                  <img
                    key={idx}
                    src={item.img}
                    style={{ marginRight: "5px" }}
                    width="50px"
                    height="50px"
                  ></img>
                );
              })}
            </ul>
          </Col> */}
          {/* Alchmey Logo */}
          {/* <Col style={{ marginLeft: "5px" }}>
            <Text h3
                style={{
                  color: "#ffffff",
                  fontSmooth: "always",
                  textShadow: "-0px 0px 3px #ffffff",
                  fontFamily: "SF Pro Display",
                  fontWeight: "200",
                }}>Powered by</Text>
            <a href="">
              <img
                src="alchemyblue.png"
                style={{
                  width: "50px",
                }}
              />
            </a>
          </Col> */}
          {/* Socials */}
          <Col>
            <Text h3
                style={{
                  color: "#ffffff",
                  fontSmooth: "always",
                  textShadow: "-0px 0px 3px #ffffff",
                  fontFamily: "SF Pro Display",
                  fontWeight: "200",
                }}>
              Follow Us!
            </Text>
            <ul>
              {footer1.map((item, idx) => {
                return (
                  <a key={idx} href={item.url}>
                    <img
                      src={item.img}
                      style={{ marginRight: "1px" }}
                      width="33px"
                      height="33px"
                    ></img>
                  </a>
                );
              })}
            </ul>
          </Col>
          {/* Chigag Branding */}
          <Col>
            <a href="https://chigag-studio.vercel.app/">
              <Text
                h3
                style={{
                  color: "#ffffff",
                  fontSmooth: "always",
                  textShadow: "-0px 0px 3px #ffffff",
                  fontFamily: "SF Pro Display",
                  fontWeight: "200",
                }}
              >
                Web3 by
              </Text>
              <Text
                h3
                style={{
                  color: "#ff750c",
                  fontSmooth: "always",
                  textShadow: "-0px 0px 3px #ffffff",
                  fontFamily: "SF Pro Display",
                  fontWeight: "260",
                }}
              >
                Chi'Gag Studio
              </Text>
            </a>
          </Col>
        </Row>

      </Container>
    </div>
  );
}