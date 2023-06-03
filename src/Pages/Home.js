import React from 'react'
import course1 from "./img/course1.webp"
import course2 from "./img/course2.webp"
import course3 from "./img/course3.webp"
import course4 from "./img/Course4.webp"
import cup from "./img/cup.webp"
import excel from "./img/excel.webp"
import photo from "./img/photo.webp"
import makeup from "./img/makeup.webp"
import stiching from "./img/stiching.webp"
import mug from "./img/mug.webp"
import { Card, Col, Row, Button, Text } from "@nextui-org/react";
function Home() {

  return (
    <>

      <div className='md:m-10 lg:m-55 lg:mx-[20%]'>
        <Card css={{ w: "100%", h: "400px", marginBottom: "20%" }}>
          <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
            <Col>
              <Text size={15} weight="bold" transform="uppercase" color="white">
                Learn the basics of photography
              </Text>
              <Text h3 color="white">
                Take your skills to the next level
              </Text>
            </Col>
          </Card.Header>
          <Card.Body css={{ p: 0 }}>
            <Card.Image
              src={course1}
              objectFit="cover"
              width="100%"
              height="100%"
              alt="Relaxing app background"
            />
          </Card.Body>
          <Card.Footer
            isBlurred
            css={{
              position: "absolute",
              bgBlur: "#0f111466",
              borderTop: "$borderWeights$light solid $gray800",
              bottom: 0,
              zIndex: 1,
            }}
          >
            <Row>
              <Col>
                <Row>
                  <Col span={3}>
                    <Card.Image
                      src={photo}
                      css={{ bg: "white", br: "50%" }}
                      height={40}
                      width={40}
                      alt="Breathing app icon"
                    />
                  </Col>
                  <Col>
                    {/* <Text color="white" size={15} style={{ fontWeight: "bold", marginLeft: "5px" }}>
                    Photography

                  </Text> */}
                    <Text color="white" size={15} style={{ fontWeight: "bold", marginLeft: "5px" }}>
                      Basics of Photography
                    </Text>
                  </Col>
                </Row>
              </Col>
              <Col>
                <Row justify="flex-end">
                  <a href="/photography">
                    <Button
                      flat
                      auto
                      rounded
                      css={{ color: "#94f9f0", bg: "#94f9f026" }}
                    >
                      <Text
                        css={{ color: "inherit" }}
                        size={12}
                        weight="bold"
                        transform="uppercase"
                      >
                        Open Course
                      </Text>
                    </Button>
                  </a>
                </Row>
              </Col>
            </Row>
          </Card.Footer>
        </Card>
        <Card css={{ w: "100%", h: "400px", marginBottom: "20%" }}>
          <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
            <Col>
              <Text size={15} weight="bold" transform="uppercase" color="white">
                Learn the basics of stitching
              </Text>
              <Text h3 color="white">
                Create your own masterpieces
              </Text>
            </Col>
          </Card.Header>
          <Card.Body css={{ p: 0 }}>
            <Card.Image
              src={course2}
              objectFit="cover"
              width="100%"
              height="100%"
              alt="Relaxing app background"
            />
          </Card.Body>
          <Card.Footer
            isBlurred
            css={{
              position: "absolute",
              bgBlur: "#0f111466",
              borderTop: "$borderWeights$light solid $gray800",
              bottom: 0,
              zIndex: 1,
            }}
          >
            <Row>
              <Col>
                <Row>
                  <Col span={3}>
                    <Card.Image
                      src={stiching}
                      css={{ bg: "white", br: "50%" }}
                      height={40}
                      width={40}
                      alt="Breathing app icon"
                    />
                  </Col>
                  <Col>
                    {/* <Text color="white" size={15} style={{ fontWeight: "bold", marginLeft: "5px" }}>
                    Photography

                  </Text> */}
                    <Text color="white" size={15} style={{ fontWeight: "bold", marginLeft: "5px" }}>
                      Basics of stitching
                    </Text>
                  </Col>
                </Row>
              </Col>
              <Col>
                <Row justify="flex-end">
                  <a href="/stiching">
                    <Button
                      flat
                      auto
                      rounded
                      css={{ color: "#94f9f0", bg: "#94f9f026" }}
                    >
                      <Text
                        css={{ color: "inherit" }}
                        size={12}
                        weight="bold"
                        transform="uppercase"
                      >
                        Open Course
                      </Text>
                    </Button>
                  </a>
                </Row>
              </Col>
            </Row>
          </Card.Footer>
        </Card>
        <Card css={{ w: "100%", h: "400px", marginBottom: "20%" }}>
          <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
            <Col>
              <Text size={15} weight="bold" transform="uppercase" color="white">
                Get Started with Computers Today
              </Text>
              <Text h3 color="white">
                Take control of your future
              </Text>
            </Col>
          </Card.Header>
          <Card.Body css={{ p: 0 }}>
            <Card.Image
              src={course3}
              objectFit="cover"
              width="100%"
              height="100%"
              alt="Relaxing app background"
            />
          </Card.Body>
          <Card.Footer
            isBlurred
            css={{
              position: "absolute",
              bgBlur: "#0f111466",
              borderTop: "$borderWeights$light solid $gray800",
              bottom: 0,
              zIndex: 1,
            }}
          >
            <Row>
              <Col>
                <Row>
                  <Col span={3}>
                    <Card.Image
                      src={excel}
                      css={{ bg: "white", br: "50%" }}
                      height={40}
                      width={40}
                      alt="Breathing app icon"
                    />
                  </Col>
                  <Col>
                    {/* <Text color="white" size={15} style={{ fontWeight: "bold", marginLeft: "5px" }}>
                    Photography

                  </Text> */}
                    <Text color="white" size={15} style={{ fontWeight: "bold", marginLeft: "5px" }}>
                      Basics of Excel
                    </Text>
                  </Col>
                </Row>
              </Col>
              <Col>
                <Row justify="flex-end">
                  <a href="/computer">
                    <Button
                      flat
                      auto
                      rounded
                      css={{ color: "#94f9f0", bg: "#94f9f026" }}
                    >
                      <Text
                        css={{ color: "inherit" }}
                        size={12}
                        weight="bold"
                        transform="uppercase"
                      >
                        Open Course
                      </Text>
                    </Button>
                  </a>
                </Row>
              </Col>
            </Row>
          </Card.Footer>
        </Card>
        <Card css={{ w: "100%", h: "400px", marginBottom: "20%" }}>
          <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
            <Col>
              <Text size={15} weight="bold" transform="uppercase" color="white">
                Master the basics of makeup
              </Text>
              <Text h3 color="white">
                Create a look that's perfect for any occasion
              </Text>
            </Col>
          </Card.Header>
          <Card.Body css={{ p: 0 }}>
            <Card.Image
              src={course4}
              objectFit="cover"
              width="100%"
              height="100%"
              alt="Relaxing app background"
            />
          </Card.Body>
          <Card.Footer
            isBlurred
            css={{
              position: "absolute",
              bgBlur: "#0f111466",
              borderTop: "$borderWeights$light solid $gray800",
              bottom: 0,
              zIndex: 1,
            }}
          >
            <Row>
              <Col>
                <Row>
                  <Col span={3}>
                    <Card.Image
                      src={makeup}
                      css={{ bg: "white", br: "50%" }}
                      height={40}
                      width={40}
                      alt="Breathing app icon"
                    />
                  </Col>
                  <Col>
                    {/* <Text color="white" size={15} style={{ fontWeight: "bold", marginLeft: "5px" }}>
                    Photography

                  </Text> */}
                    <Text color="white" size={15} style={{ fontWeight: "bold", marginLeft: "5px" }}>
                      Basics of makeup
                    </Text>
                  </Col>
                </Row>
              </Col>
              <Col>
                <Row justify="flex-end">
                  <a href="/makeup">
                    <Button
                      flat
                      auto
                      rounded
                      css={{ color: "#94f9f0", bg: "#94f9f026" }}
                    >
                      <Text
                        css={{ color: "inherit" }}
                        size={12}
                        weight="bold"
                        transform="uppercase"
                      >
                        Open Course
                      </Text>
                    </Button>
                  </a>
                </Row>
              </Col>
            </Row>
          </Card.Footer>
        </Card>
        <Card css={{ w: "100%", h: "400px", marginBottom: "20%" }}>
          <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
            <Col>
              <Text size={15} weight="bold" transform="uppercase" color="white">
                create Personalized Mugs
              </Text>
              <Text h3 color="white">
                to sell on different platforms
              </Text>
            </Col>
          </Card.Header>
          <Card.Body css={{ p: 0 }}>
            <Card.Image
              src={cup}
              objectFit="cover"
              width="100%"
              height="100%"
              alt="Relaxing app background"
            />
          </Card.Body>
          <Card.Footer
            isBlurred
            css={{
              position: "absolute",
              bgBlur: "#0f111466",
              borderTop: "$borderWeights$light solid $gray800",
              bottom: 0,
              zIndex: 1,
            }}
          >
            <Row>
              <Col>
                <Row>
                  <Col span={3}>
                    <Card.Image
                      src={mug}
                      css={{ bg: "white", br: "50%" }}
                      height={40}
                      width={40}
                      alt="Breathing app icon"
                    />
                  </Col>
                  <Col>
                    {/* <Text color="white" size={15} style={{ fontWeight: "bold", marginLeft: "5px" }}>
                    Photography

                  </Text> */}
                    <Text color="white" size={15} style={{ fontWeight: "bold", marginLeft: "5px" }}>
                      Mug press

                    </Text>
                  </Col>
                </Row>
              </Col>
              <Col>
                <Row justify="flex-end">
                  <a href="/mug">
                    <Button
                      flat
                      auto
                      rounded
                      css={{ color: "#94f9f0", bg: "#94f9f026" }}
                    >
                      <Text
                        css={{ color: "inherit" }}
                        size={12}
                        weight="bold"
                        transform="uppercase"
                      >
                        Open Course
                      </Text>
                    </Button></a>
                </Row>
              </Col>
            </Row>
          </Card.Footer>
        </Card>







      </div>

    </>
  )
}

export default Home