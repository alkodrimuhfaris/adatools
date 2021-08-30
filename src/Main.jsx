import React from 'react'
import { Container, Nav, Navbar, Button, Row, Col, Card } from 'react-bootstrap'


export default function Main() {
    const goToDashboard = () => {
        window.location.href = '/app/bsc/main'
    }
    return (
        <>
        <div className="bg-purple pt-3">

            {/* navbar  */}
          <Container>
            <Navbar expand="lg" >
              <Container>
                <Navbar.Brand href="#home">
                  <img
                    src="/assets/logo.png"
                    height="30"
                    className="d-inline-block align-top"
                    alt="ADA Logo"
                  />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
                  <Nav >
                    <Nav.Link href="#home" className="text-white mx-1 fw-bolder" onClick={goToDashboard}>App ADA Tools</Nav.Link>
                    <Nav.Link href="#features" className="text-white mx-1 fw-bolder">Manifesto</Nav.Link>
                    <Nav.Link href="#pricing" className="text-white mx-1 fw-bolder">ADAT Token</Nav.Link>
                    <Nav.Link href="#pricing" className="text-white mx-1 fw-bolder">Contact</Nav.Link>
                    <Button className="button-blue mx-1 fw-bolder" onClick={goToDashboard}>Launch App</Button>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </Container>
    
          <div className="container layout-resp">
            <div className="left-side ">
              <h1 className="big-text mb-3">
                BOOST YOUR EXCHANGE EXPERIENCE
              </h1>
              <p className="mb-0">
                Real time data analysis at the tips of your fingers:
              </p>
              <p className="mb-4">
                Create unique trading strategies, anticipate market movements, search for big spreads, track and copy the most profitable wallets and much more.
              </p>
              <Button className="button-blue mx-1 fw-bolder" onClick={goToDashboard}>Launch App</Button>
            </div>
            <div className="right-side">
              <img
                src="/assets/hero_illustration.png"
                alt="Illustration"
                className="img-illustration"
              />
            </div>
          </div>
        
          <div className="expand-more">
            <i className="material-icons text-white">expand_more</i>
          </div>
    
          <div className="text-white text-center container p-5">
            If you are an ADA user, and you want to be able to anticipate market movements and develop better trading strategies, ADA Tools will help you in a very simple way
          </div>
        
          <div className="how-wrap">
            <div className="how-wrapper">
              <div className="mx-2">
                <img
                  src="/assets/how_5.png"
                  alt="responsive"
                />
                <h4>RESPONSIVE</h4>
                <p>ADA Tools works on any device: desktop, tablet or mobile.</p>
              </div>
              <div className="mx-2">
                <img
                  src="/assets/how_4.png"
                  alt="responsive"
                />
                <h4>SUBSCRIPTION</h4>
                <p>Purchase ADAT via exchanges to enable ADAT subscriptions.</p>
              </div>
              <div className="mx-2">
                <img
                  src="/assets/how_3.png"
                  alt="responsive"
                />
                <h4>STORE YOUR DATA</h4>
                <p>Save your data and access it from any device.</p>
              </div>
              <div className="mx-2">
                <img
                  src="/assets/how_2.png"
                  alt="responsive"
                />
                <h4>NOTIFICATIONS</h4>
                <p>Set up your live notifications.</p>
              </div>
              <div className="mx-2">
                <img
                  src="/assets/how_1.png"
                  alt="responsive"
                />
                <h4>BOTS</h4>
                <p>Create unique trading strategies for maximum profitability.</p>
              </div>
            </div>
          </div>
    
        </div>
    
        <Container>
            <p className="features-title">FEATURES</p>
            <div className="features-wrap">
                <div className="f-left pe-2">
                    <div className="pool p-2">
                        <img src="/assets/icons/11.svg" alt="icons" className="p-img" />
                        <span className="ps-2">Pool Explorer</span>
                    </div>
                    <div className="pool-exp ps-2">
                        <img src="/assets/features_image.png" alt="feature" className="f-img" />
                    </div>
                    <p className="text-only ps-4 py-2">
                        Search for new pools, add or remove liquidity in a pair, find the best gems and avoid the scams.
                    </p>

                    <hr  className="m-0"/>

                    <div className="pair p-2">
                        <img src="/assets/icons/12.svg" alt="icons" />
                        <span className="ps-2">Pair Explorer</span>
                    </div>

                    <hr  className="m-0"/>

                    <div className="pair p-2">
                        <img src="/assets/icons/03.svg" alt="icons" />
                        <span className="ps-2">Big Swap Explorer</span>
                    </div>

                    <hr  className="m-0"/>

                    <div className="pair p-2">
                        <img src="/assets/icons/13.svg" alt="icons" />
                        <span className="ps-2">Multiswap Explorer</span>
                    </div>

                    <hr  className="m-0"/>

                    <div className="pair p-2">
                        <img src="/assets/icons/01.svg" alt="icons" />
                        <span className="ps-2">Wallet Info</span>
                    </div>

                </div>
                <div className="f-right ps-2">
                    <img src="/assets/features_image.png" alt="feature" className="f-img" />
                </div>
            </div>
        </Container>

        <div className="bg-purple user-plan-wrap">
            <div className="bg1">
                <img src="/assets/bg1.png" alt="background" />
            </div>
            <Container className="user-plan-wrap-2" >

                {/* <div className="material-icons arrow-down-white text-center">arrow_drop_down</div> */}

                <p className="sub-size text-center pt-5 mb-0 text-white">USER PLANS</p>
                <p className="text-center text-white mb-4 mt-2">Choose your subscription tier and upgrade now!</p>

                <Row >
                    <Col xs={10} md={4} className="pe-2 my-3 mx-auto">
                        <Card className="card-radius">
                            <Card.Body className="card-wrapper">
                                <h4 className="text-purple">FREE</h4>
                                <hr className="text-purple" />
                                <div>
                                    <span className="material-icons check-purple"> done</span>
                                    <span className="vertical-super">Real time data and chart</span> 
                                </div>
                                <div>
                                    <span className="material-icons check-purple"> done</span>
                                    <span className="vertical-super">Pool explorer</span>
                                </div>
                                <div>
                                    <span className="material-icons check-purple"> done</span>
                                    <span className="vertical-super">Pair explorer</span>
                                </div>
                                <div>
                                    <span className="material-icons check-purple"> done</span>
                                    <span className="vertical-super"> Big swap explorer</span>    
                                </div>
                                <div>
                                    <span className="material-icons check-purple"> done</span>
                                    <span className="vertical-super">Multiswap windows</span>
                                </div>
                                <div>
                                    <span className="material-icons check-purple"> done</span>
                                    <span className="vertical-super">10 favourite pairs</span>    
                                </div>
                                <div>
                                    <span className="material-icons check-purple"> done</span>
                                    <span className="vertical-super">Desktop price alerts</span>    
                                </div>
                                <div>
                                    <span className="material-icons check-purple"> done</span>
                                    <span className="vertical-super">Stable coin pairs</span>    
                                </div>
                                <div>
                                    <span className="material-icons check-purple"> done</span>
                                    <span className="vertical-super">Token / token pairs</span>    
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={10} md={4} className="px-2 my-3 mx-auto">
                        <Card className="card-radius">
                            <Card.Body className="card-wrapper">
                                <h4 className="text-purple">Standard</h4>
                                <p>$100 paid in ADAT/Monthly subscription -or- 1,000 ADAT/Hold*</p>
                                <hr className="text-purple" />
                                <div>
                                    <span className="material-icons check-purple"> done</span>
                                    <span className="vertical-super">Real time data and chart</span> 
                                </div>
                                <div>
                                    <span className="material-icons check-purple"> done</span>
                                    <span className="vertical-super">Pool explorer</span>
                                </div>
                                <div>
                                    <span className="material-icons check-purple"> done</span>
                                    <span className="vertical-super">Pair explorer</span>
                                </div>
                                <div>
                                    <span className="material-icons check-purple"> done</span>
                                    <span className="vertical-super"> Big swap explorer</span>    
                                </div>
                                <div>
                                    <span className="material-icons check-purple"> done</span>
                                    <span className="vertical-super">Multiswap windows</span>
                                </div>
                                <div>
                                    <span className="material-icons check-purple"> done</span>
                                    <span className="vertical-super">No limit favourite pairs</span>    
                                </div>
                                <div>
                                    <span className="material-icons check-purple"> done</span>
                                    <span className="vertical-super">My positions (P&L tracker)</span>    
                                </div>
                                <div>
                                    <span className="material-icons check-purple"> done</span>
                                    <span className="vertical-super">Trade analytics</span>    
                                </div>
                                <div>
                                    <span className="material-icons check-purple"> done</span>
                                    <span className="vertical-super">Wallet info and tracker</span>    
                                </div>
                                <div>
                                    <span className="material-icons check-purple"> done</span>
                                    <span className="vertical-super">Desktop/Mail/Telegram price alerts</span>    
                                </div>
                                <div>
                                    <span className="material-icons check-purple"> done</span>
                                    <span className="vertical-super">No advertisements</span>    
                                </div>
                                <div>
                                    <span className="material-icons check-purple"> done</span>
                                    <span className="vertical-super">Stable coin pairs</span>    
                                </div>
                                <div>
                                    <span className="material-icons check-purple"> done</span>
                                    <span className="vertical-super">Token/token pairs</span>    
                                </div>
                                <div>
                                    <span className="material-icons check-purple"> done</span>
                                    <span className="vertical-super">Limit order & trading bot</span>    
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={10} md={4} className="pe-2 mt-3 mx-auto">
                        <Card className="card-radius">
                            <Card.Body className="card-wrapper">
                                <h4 className="text-purple">Premium</h4>
                                <p>1,000 ADAT/Hold*</p>
                                <hr className="text-purple" />
                                <div>
                                    <span className="material-icons check-purple"> done</span>
                                    <span className="vertical-super">Real time data and chart</span> 
                                </div>
                                <div>
                                    <span className="material-icons check-purple"> done</span>
                                    <span className="vertical-super">Pool explorer</span>
                                </div>
                                <div>
                                    <span className="material-icons check-purple"> done</span>
                                    <span className="vertical-super">Pair explorer</span>
                                </div>
                                <div>
                                    <span className="material-icons check-purple"> done</span>
                                    <span className="vertical-super"> Big swap explorer</span>    
                                </div>
                                <div>
                                    <span className="material-icons check-purple"> done</span>
                                    <span className="vertical-super">Multiswap windows</span>
                                </div>
                                <div>
                                    <span className="material-icons check-purple"> done</span>
                                    <span className="vertical-super">No limit favourite pairs</span>    
                                </div>
                                <div>
                                    <span className="material-icons check-purple"> done</span>
                                    <span className="vertical-super">My positions (P&L tracker)</span>    
                                </div>
                                <div>
                                    <span className="material-icons check-purple"> done</span>
                                    <span className="vertical-super">Trade analytics</span>    
                                </div>
                                <div>
                                    <span className="material-icons check-purple"> done</span>
                                    <span className="vertical-super">Wallet info and tracker</span>    
                                </div>
                                <div>
                                    <span className="material-icons check-purple"> done</span>
                                    <span className="vertical-super">Desktop/Mail/Telegram price alerts</span>    
                                </div>
                                <div>
                                    <span className="material-icons check-purple"> done</span>
                                    <span className="vertical-super">No advertisements</span>    
                                </div>
                                <div>
                                    <span className="material-icons check-purple"> done</span>
                                    <span className="vertical-super">Stable coin pairs</span>    
                                </div>
                                <div>
                                    <span className="material-icons check-purple"> done</span>
                                    <span className="vertical-super">Token/token pairs</span>    
                                </div>
                                <div>
                                    <span className="material-icons check-purple"> done</span>
                                    <span className="vertical-super text-purple fw-bolder">ADATshare</span>    
                                </div>
                                <div>
                                    <span className="material-icons check-purple"> done</span>
                                    <span className="vertical-super text-purple fw-bolder">ADATforce & ADATforce Ventures</span>    
                                </div>
                                <div>
                                    <span className="material-icons check-purple"> done</span>
                                    <span className="vertical-super">More exclusive upcoming features</span>    
                                </div>
                                <div>
                                    <span className="material-icons check-purple"> done</span>
                                    <span className="vertical-super">Limit order & trading bot</span>    
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                <div className="f-small text-white text-center mt-5 pb-5">
                    *Hold means that you must have the neccessary token in your wallet at the time of sign in and login, this process will be done through any compatible wallet.
                </div>

            </Container>
        </div>
    
        <div className="bg-black roadmap-wrap">
            <div className="bg2">
                <img src="/assets/bg2.png" alt="background" />
            </div>
            <Container className="roadmap-wrap-2">
                <div className="roadmap-title">ROADMAP</div>
                <Row>
                    <Col xs={10} md={3} className="pe-2 mt-5 mx-auto">
                        <Card className="card-bg-purple">
                            <div className="text-center bg-purple text-white top py-2 fw-bolder">2021 Q1</div>
                            <Card.Body>
                                <ul>
                                    <li>Technical improvements</li>
                                    <li>Websockets</li>
                                    <li>SushiSwap integration</li>
                                    <li>Multiexchange support</li>
                                    <li>Velox bots and limit orders integration</li>
                                    <li>UX/UI redesign</li>
                                </ul>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={10} md={3} className="px-2 mt-5 mx-auto">
                        <Card className="card-bg-purple">
                            <div className="text-center bg-purple text-white top py-2 fw-bolder">2021 Q2</div>
                            <Card.Body>
                                <ul>
                                    <li>NFT marketing promotion tool</li>
                                    <li>Presale promotion tools</li>
                                    <li>Binance smart chain integration (Pencakeswap)</li>
                                    <li>UI/UX redesign</li>
                                    <li>Pencake listing</li>
                                    <li>Improvements based on community feedback</li>
                                </ul>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={10} md={3} className="px-2 mt-5 mx-auto">
                        <Card className="card-bg-purple">
                            <div className="text-center bg-purple text-white top py-2 fw-bolder">2021 Q3</div>
                            <Card.Body>
                                <ul>
                                    <li>CEX tools</li>
                                    <li>PAdvanced public API releases</li>
                                    <li>More ADA integration</li>
                                </ul>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={10} md={3} className="pe-2 mt-5 mx-auto">
                        <Card className="card-bg-purple">
                            <div className="text-center bg-purple text-white top py-2 fw-bolder">2021 Q4</div>
                            <Card.Body>
                                <ul>
                                    <li>More ADA integration</li>
                                    <li>Improvements based on community feedback</li>
                                </ul>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                <div className="mt-5 f-small text-white text-center pb-5">
                    This is a floating roadmap, so timelines are flexible. This is beacouse we must be agile and responsive to industry, technological and community needs. In fact, many of our existing and feature features are community requests. So please do understand that this roadmap, espescially for items outside of imminent release, is subject to charge.
                </div>

            </Container>
        </div>
        
        <div className="bg-grey">

            <div className="adat-token-title container">ADAT TOKEN</div>

            <div className="container adat-wrapper">
                <div className="adat-left">
                    <div className="wrapper">
                        <p className="name">Token Name:</p>
                        <p className="contain">ADAT</p>
                    </div>
                    <div className="wrapper">
                        <p className="name">Contract:</p>
                        <p className="contain">0xvdclwha72v3j29..</p>
                    </div>
                    <div className="wrapper">
                        <p className="name">Total Supply:</p>
                        <p className="contain">150,000,000 ADAT</p>
                    </div>
                    <div className="wrapper">
                        <p className="name">Circulating Supply:</p>
                        <p className="contain">150,000,000 ADAT</p>
                    </div>
                    <div className="my-4 desc">
                        ADAT Token is neccessary to access subscription tiers and benefit from unlocking all of the features of the ADAT ecosystem.
                    </div>

                    <Button className="button-blue mx-1 fw-bolder shadow">Buy ADAT Tokens</Button>

                    <div className="mt-4 pb-5 desc-sm">*Marketing, developments and ADATshare tokens are locked</div>

                </div>
                <div className="adat-right" style={{ height: ' 90%' }} >
                    <Card className="shadow h-100">
                        <img className="h-100" src="/assets/adat_token.png" alt="token"  />
                    </Card>
                </div>
            </div>

        </div>

        <div className="bg-purple pt-5">
            <Container>
                <p className="footer-text">
                    All contents are available on our website, on hyperlinked websites, and on applications, forums, blogs, social media accounts, and other platform associated with ADA Tools is intended solely to provide you with general information. We make no warranties of any kind with respect to our content, including but not limited to, the accuracy and currency of the information. None of the content we provide should be construed as financial, legal, or any other type of advice on which you may spesifically rely on any purpose. Any use or reliance you place of our content is solely at your own risk. What you should do is conduct your our research, review and analysis, and verify our content before relying on it. Trading is a high-risk activity that can result in significant losses. So you should consult with your financial advisor before making any decisions. Nothing on our site should be considered an invitation or offer to take any action.
                </p>

                <div className="footer-wrapper">
                    <p className="footer-text">
                        <span className="material-icons">copyright</span>
                        <span className="vertical-super ms-1">ADA Tools 2021 - info@adatools.com | Ads & Marketing: marketing@adatools.com</span>    
                    </p>

                    <div className="soc-icon ">
                        <div className="icon-wrapper-soc me-2">
                            <img src="/assets/icons/logo-telegram.png" alt="logo" />
                        </div>
                        <div className="icon-wrapper-soc mx-2">
                            <img src="/assets/icons/logo-medium.png" alt="logo" />
                        </div>
                        <div className="icon-wrapper-soc ms-2">
                            <img src="/assets/icons/logo-twitter.png" alt="logo" />
                        </div>
                    </div>  
                </div>
                
            </Container>
        </div>


        </>
      );
}
