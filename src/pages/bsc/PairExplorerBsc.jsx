import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next';


export default function PairExplorerBsc() {

  const columns = [
    {
      dataField: 'date',
      text: 'Date',
      sort: true,
      headerClasses: 'border-dark-purple',
      classes: 'border-dark-purple text-center'
    }, 
    {
      dataField: 'type',
      text: 'Type',
      sort: true,
      headerClasses: 'border-dark-purple',
      classes: 'border-dark-purple text-center',
      formatter: (cell, row) => {
        if (cell === 'Sell') return <div className="text-red">{cell}</div>
        return <div className="text-green">{cell}</div>
      }
    },
    {
      dataField: 'priceUSD',
      text: 'Price USD',
      sort: true,
      headerClasses: 'border-dark-purple',
      classes: 'border-dark-purple',
    }, 
    {
      dataField: 'priceBNB',
      text: 'Price BNB',
      sort: true,
      headerClasses: 'border-dark-purple',
      classes: 'border-dark-purple',
    }, 
    {
      dataField: 'amount',
      text: 'Amount ADAT',
      sort: true,
      classes: 'border-dark-purple',
      headerClasses: 'border-dark-purple'
    }, 
    {
      dataField: 'totalBNB',
      text: 'totalBNB',
      sort: true,
      classes: 'border-dark-purple',
      headerClasses: 'border-dark-purple'
    }, 
    {
      dataField: 'maker',
      text: 'MAKER',
      sort: true,
      classes: 'border-dark-purple',
      headerStyle: { textAlign: 'center' },
      headerClasses: 'border-dark-purple text-center',
    },
    {
      dataField: 'id',
      text: 'Others',
      headerClasses: 'border-dark-purple',
      classes: 'border-dark-purple',
      headerStyle: { textAlign: 'center' },
      formatter: () => {
        return (
          <div className="d-flex justify-content-between">
            <div className="icon-wrapper-table ">
              <img src="/assets/icons/babydb.png" alt="icon" />
            </div>
            <div className="icon-wrapper-table mx-2">
              <img src="/assets/icons/bscscan.png" alt="icon" />
            </div>
            <div className="icon-wrapper-table me-2">
              <img src="/assets/icons/uniswap.png" alt="icon" />
            </div>
            <div className="icon-wrapper-table">
              <img src="/assets/icons/32.svg" alt="icon" />
            </div>
          </div>
        )
      }
    },
    ];
  

  const data = [
    {
      id: 1,
      date: '2021-08-04 19:55:00',
      type: 'Sell',
      priceUSD: '$0.28029358',
      priceBNB: '$0.26103948',
      amount: '1,2888.32',
      totalBNB: '$0.289301',
      maker: '0xske374...6631'
    },
    {
      id: 2,
      date: '2021-08-04 19:55:00',
      type: 'Buy',
      priceUSD: '$0.28029358',
      priceBNB: '$0.26103948',
      amount: '0.00019201.32',
      totalBNB: '$0.289301',
      maker: '0xske374...6631'
    },
    {
      id: 3,
      date: '2021-08-04 19:55:00',
      type: 'Buy',
      priceUSD: '$0.28029358',
      priceBNB: '$0.26103948',
      amount: '0.00019201.32',
      totalBNB: '$0.289301',
      maker: '0xske374...6631'
    },
    {
      id: 4,
      date: '2021-08-04 19:55:00',
      type: 'Buy',
      priceUSD: '$0.28029358',
      priceBNB: '$0.26103948',
      amount: '0.00019201.32',
      totalBNB: '$0.289301',
      maker: '0xske374...6631'
    },
    {
      id: 5,
      date: '2021-08-04 19:55:00',
      type: 'Buy',
      priceUSD: '$0.28029358',
      priceBNB: '$0.26103948',
      amount: '0.00019201.32',
      totalBNB: '$0.289301',
      maker: '0xske374...6631'
    },
    {
      id: 6,
      date: '2021-08-04 19:55:00',
      type: 'Buy',
      priceUSD: '$0.28029358',
      priceBNB: '$0.26103948',
      amount: '0.00019201.32',
      totalBNB: '$0.289301',
      maker: '0xske374...6631'
    },
    {
      id: 7,
      date: '2021-08-04 19:55:00',
      type: 'Sell',
      priceUSD: '$0.28029358',
      priceBNB: '$0.26103948',
      amount: '0.00019201.32',
      totalBNB: '$0.289301',
      maker: '0xske374...6631'
    },
    {
      id: 8,
      date: '2021-08-04 19:55:00',
      type: 'Sell',
      priceUSD: '$0.28029358',
      priceBNB: '$0.26103948',
      amount: '0.00019201.32',
      totalBNB: '$0.289301',
      maker: '0xske374...6631'
    },
    {
      id: 9,
      date: '2021-08-04 19:55:00',
      type: 'Buy',
      priceUSD: '$0.28029358',
      priceBNB: '$0.26103948',
      amount: '0.00019201.32',
      totalBNB: '$0.289301',
      maker: '0xske374...6631'
    },
    {
      id: 10,
      date: '2021-08-04 19:55:00',
      type: 'Sell',
      priceUSD: '$0.28029358',
      priceBNB: '$0.26103948',
      amount: '0.00019201.32',
      totalBNB: '$0.289301',
      maker: '0xske374...6631'
    },
    {
      id: 11,
      date: '2021-08-04 19:55:00',
      type: 'Sell',
      priceUSD: '$0.28029358',
      priceBNB: '$0.26103948',
      amount: '0.00019201.32',
      totalBNB: '$0.289301',
      maker: '0xske374...6631'
    },
    {
      id: 12,
      date: '2021-08-04 19:55:00',
      type: 'Buy',
      priceUSD: '$0.28029358',
      priceBNB: '$0.26103948',
      amount: '0.00019201.32',
      totalBNB: '$0.289301',
      maker: '0xske374...6631'
    },
    {
      id: 13,
      date: '2021-08-04 19:55:00',
      type: 'Sell',
      priceUSD: '$0.28029358',
      priceBNB: '$0.26103948',
      amount: '0.00019201.32',
      totalBNB: '$0.289301',
      maker: '0xske374...6631'
    },
    {
      id: 14,
      date: '2021-08-04 19:55:00',
      type: 'Sell',
      priceUSD: '$0.28029358',
      priceBNB: '$0.26103948',
      amount: '0.00019201.32',
      totalBNB: '$0.289301',
      maker: '0xske374...6631'
    },
    {
      id: 15,
      date: '2021-08-04 19:55:00',
      type: 'Buy',
      priceUSD: '$0.28029358',
      priceBNB: '$0.26103948',
      amount: '0.00019201.32',
      totalBNB: '$0.289301',
      maker: '0xske374...6631'
    },
    {
      id: 16,
      date: '2021-08-04 19:55:00',
      type: 'Sell',
      priceUSD: '$0.28029358',
      priceBNB: '$0.26103948',
      amount: '0.00019201.32',
      totalBNB: '$0.289301',
      maker: '0xske374...6631'
    },
    {
      id: 17,
      date: '2021-08-04 19:55:00',
      type: 'Sell',
      priceUSD: '$0.28029358',
      priceBNB: '$0.26103948',
      amount: '0.00019201.32',
      totalBNB: '$0.289301',
      maker: '0xske374...6631'
    },
    {
      id: 18,
      date: '2021-08-04 19:55:00',
      type: 'Buy',
      priceUSD: '$0.28029358',
      priceBNB: '$0.26103948',
      amount: '0.00019201.32',
      totalBNB: '$0.289301',
      maker: '0xske374...6631'
    },
    {
      id: 19,
      date: '2021-08-04 19:55:00',
      type: 'Sell',
      priceUSD: '$0.28029358',
      priceBNB: '$0.26103948',
      amount: '0.00019201.32',
      totalBNB: '$0.289301',
      maker: '0xske374...6631'
    },
    {
      id: 20,
      date: '2021-08-04 19:55:00',
      type: 'Sell',
      priceUSD: '$0.28029358',
      priceBNB: '$0.26103948',
      amount: '0.00019201.32',
      totalBNB: '$0.289301',
      maker: '0xske374...6631'
    },
    {
      id: 21,
      date: '2021-08-04 19:55:00',
      type: 'Buy',
      priceUSD: '$0.28029358',
      priceBNB: '$0.26103948',
      amount: '0.00019201.32',
      totalBNB: '$0.289301',
      maker: '0xske374...6631'
    },
    {
      id: 22,
      date: '2021-08-04 19:55:00',
      type: 'Sell',
      priceUSD: '$0.28029358',
      priceBNB: '$0.26103948',
      amount: '0.00019201.32',
      totalBNB: '$0.289301',
      maker: '0xske374...6631'
    },
    {
      id: 23,
      date: '2021-08-04 19:55:00',
      type: 'Sell',
      priceUSD: '$0.28029358',
      priceBNB: '$0.26103948',
      amount: '0.00019201.32',
      totalBNB: '$0.289301',
      maker: '0xske374...6631'
    },
  ]
  
  
  return (
    <div className="body-body pb-5">

      <div className="container">
        <div className="d-flex justify-content-between align-items-center pt-4">
          <h6 className="text-white">PANCAKESWAP SWAP {'>'} 
            <span className="text-blue ">
              PAIR EXPLORER
            </span>
          </h6>
          <div className="search-wrapper">
            <div className="refresh-div-search">
              <span className="material-icons refresh-icon">autorenew</span>
            </div>
            <div className="input-wrapper">
              <input type="text" className="form-control input-dark " placeholder="Search pair" />
              <i className="material-icons">search</i>
            </div>
          </div>
        </div>
        
        <div className="row py-3">

          <div className="col-5">

            <div className="d-flex justify-content-end">
              <div className="icons-tab">
                <i className="material-icons me-2">share</i>
                <i className="material-icons">star</i>
              </div>
              <div className="trade-tab">TRADE</div>
            </div>

            <div className="card card-dark mb-4">
              <div className="d-flex card-adat card-body">
                <div className="icon-wrapper-white-big me-3">
                  <img src="/assets/logo_gram_dark.png" alt="logo" />
                </div>
                <div className="card-adat-right card-title">
                  <div>
                    <p className="text">
                      WBNB / 
                      <span className="fw-bolder">ADAT</span>
                    </p>
                    <span className="sub-text">(ADATools)</span>
                  </div>
                  
                  <div className="text-2">
                    <p className="text-white">Token contract: </p>
                    <p className="blue-color ms-2">0xfb7b45...c75a </p>
                    <i className="material-icons blue-color pointer">content_copy</i>
                    <p className="text-white">- Pair</p>
                    <i className="material-icons blue-color pointer">content_copy</i>
                  </div>

                  <hr />

                  <div className="d-flex justify-content-start">
                    <div className="icon-wrapper-table me-2 pointer">
                      <img src="/assets/icons/bscscan.png" alt="icon" />
                    </div>
                    <div className="icon-wrapper-table mx-2 pointer">
                      <img src="/assets/icons/babydb.png" alt="icon" />
                    </div>
                    
                    <div className="icon-wrapper-table mx-2 pointer">
                      <img src="/assets/icons/07.svg" alt="icon" />
                    </div>
                    <div className="icon-wrapper-table mx-2 pointer">
                      <img src="/assets/icons/08.svg" alt="icon" />
                    </div>
                    <div className="icon-wrapper-table mx-2 pointer">
                      <img src="/assets/icons/21.svg" alt="icon" />
                    </div>
                  </div>

                </div>
              </div>
            </div>

            <div className="d-flex justify-content-between">

              <div className="favorites">
                <div className="card card-dark card-favorites">
                  <div className="card-body">
                    <h5 className="fw-bolder">FAVORITES</h5>
                    <hr />
                    <div className="pe-2 list-code">
                      <div className="d-flex justify-content-between">
                        <p className="fw-bolder">META</p>
                        <p>$0.04003121</p>
                      </div>
                      <div className="d-flex justify-content-between color-aqua">
                        <p className="fw-bolder">ADAT</p>
                        <p>$0.04003121</p>
                      </div>
                      <div className="d-flex justify-content-between selected">
                        <p className="fw-bolder">RALPH</p>
                        <p>$0.04003121 <span className="x-code color-aqua">x</span> </p>
                      </div>
                      <div className="d-flex justify-content-between">
                        <p className="fw-bolder">SOTU</p>
                        <p>$0.04003121</p>
                      </div>
                      <div className="d-flex justify-content-between">
                        <p className="fw-bolder">MIMETIC</p>
                        <p>$0.04003121</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="info">
                <div className="card card-dark card-info-code">
                  <div className="card-body">

                    <div className="centering-element">
                      <h4 className="fw-bolder">$0.27772691</h4>
                      <i className="material-icons up ms-2 f20">double_arrow</i>
                    </div>

                    <hr />

                    <div className="centering-element">
                      <p className="text-red">(24h: -2.36%)</p>
                      <p className="text-green">0.00011046 BNB</p>
                    </div>

                    <div>
                      <div className="d-flex justify-content-between">
                        <p className="fw-bolder my-2">Total liquidity :</p>
                        <p>$3,300,722,40</p>
                      </div>
                      <div className="d-flex justify-content-between">
                        <p className="fw-bolder mb-2">Daily volume : </p>
                        <p>$3,300,722,40</p>
                      </div>
                      <div className="d-flex justify-content-between">
                        <p className="fw-bolder mb-2">Pooled WBNB :</p>
                        <p>$3,300,722,40</p>
                      </div>
                      <div className="d-flex justify-content-between">
                        <p className="fw-bolder mb-2">Pooled ADAT :</p>
                        <p>$3,300,722,40</p>
                      </div>
                      <div className="d-flex justify-content-between">
                        <p className="fw-bolder mb-2">Total tx :</p>
                        <p>$3,300,722,40</p>
                      </div>
                      <div className="d-flex justify-content-between">
                        <p className="fw-bolder mb-2">Holders</p>
                        <p>$3,300,722,40</p>
                      </div>
                      <div className="d-flex justify-content-between">
                        <p className="fw-bolder mb-2">Market cap :</p>
                        <p>$3,300,722,40</p>
                      </div>
                      <div className="d-flex justify-content-between">
                        <p className="fw-bolder mb-2">Diluted market cap:</p>
                        <p>$3,300,722,40</p>
                      </div>
                      <div className="text-center color-aqua">View more info</div>
                    </div>

                  </div>
                </div>
              </div>

            </div>

          </div>

          <div className="col-7">
            <div className="card" style={{ border: '1px solid #1b0f23', borderRadius: 25, backgroundColor: '#1b0f23', marginTop: 30 }}>
              <div className="card-body">
                <img src="/assets/charts_img.png" alt="charts" style={{ border: 'none', width: '100%' }} />
              </div>
            </div>
          </div>

        </div>

        <div className="d-flex justify-content-between">

          <div className="contract-detail w200px">
            {/* contract detail  */}
            <div className="card card-dark mb-3">
              <div className="card-body">
                <p className="fw-bolder">Contract Details</p>
                <div className="mt-2 d-flex justify-content-start">
                <div className="icon-wrapper-table ">
                  <img src="/assets/icons/21.svg" alt="icon" />
                </div>
                <div className="icon-wrapper-table mx-2">
                  <img src="/assets/icons/20.svg" alt="icon" />
                </div>
                <div className="icon-wrapper-table me-2">
                  <img src="/assets/icons/19.svg" alt="icon" />
                </div>
                <div className="icon-wrapper-table">
                  <img src="/assets/icons/18.svg" alt="icon" />
                </div>
              </div>

              <hr />

              <div className="d-flex">
                <p className="fw-bolder me-2 mb-2">Community Trust</p>
                <i className="material-icons color-purple ask-small">help</i>
              </div>

              <div className="d-flex">
                <div className="sip-ic">
                  <i className="material-icons">thumb_up</i>
                </div>
                <div className="hr-wrapper">
                  <hr />
                </div>
                <div className="sip-ic">
                  <i className="material-icons">thumb_down</i>
                </div>
              </div>

              <div className="d-flex justify-content-between">
                <p className="text-grey">95%</p>
                <p className="text-grey">(545 votes)</p>
                <p className="text-grey">5%</p>
              </div>


              </div>
            </div>
          
            {/* adat score  */}
            <div className="card card-dark mb-3">
              <div className="card-body">
                <div className="d-flex justify-content-between">
                  <h5 >ADAT <span className="fw-bolder">SCORE</span> </h5>
                  <h5 >99</h5>
                </div>

                <hr />

                <div>
                  <div className="d-flex justify-content-between">
                    <p className="fw-bolder mb-2">Information</p>
                    <p className="text-grey">99</p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <p className="fw-bolder mb-2">Transaction</p>
                    <p className="text-grey">99</p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <p className="fw-bolder mb-2">Holder</p>
                    <p className="text-grey">99</p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <p className="fw-bolder mb-2">Creation</p>
                    <p className="text-grey">99</p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <p className="fw-bolder mb-2">Pool</p>
                    <p className="text-grey">99</p>
                  </div>
                </div>
              </div>
            </div>


            {/* top sponsor  */}
            <div className="card card-dark mb-3">
              <div className="card-body">
                <div className="d-flex justify-content-between">
                  <h5 >TOP <span className="fw-bolder">SPONSOR</span> </h5>
                  <i className="material-icons color-purple ask-small">help</i>
                </div>

                <hr />

                <div className="up-featured mb-2">
                  <div className="d-flex">
                    <div>
                      <h4 className="mb-0">MFM</h4>
                      <p>MoonFarmer</p>
                    </div>
                    <i className="material-icons text-green">fiber_manual_record</i>
                  </div>
                </div>
                <div className="soc-icon mt-3 ">
                  <div className="icon-wrapper-soc me-2 pointer">
                    <img src="/assets/icons/logo-mail.png" alt="logo" />
                  </div>
                  <div className="icon-wrapper-soc mx-2 pointer">
                    <img src="/assets/icons/logo-medium.png" alt="logo" />
                  </div>
                  <div className="icon-wrapper-soc ms-2 pointer">
                    <img src="/assets/icons/logo-twitter.png" alt="logo" />
                  </div>
                </div> 
                <div className="mt-2">
                  Join ICO of the marketing platform made to promote blockchain
                </div>
              </div>
            </div>

            {/* faraland */}
            <div className="card card-purple mb-3">
              <div className="card-body text-center">
                <h4 className="fw-bolder mb-0">FARALAND</h4>
                <p>backed by <span className="fw-bolder">ADAT Force</span></p>
              </div>
            </div>

            {/* token news  */}
            <div className="card card-dark">
              <div className="card-body">
                <div className="d-flex justify-content-between">
                  <h5>TOKEN <span className="fw-bolder">NEWS</span></h5>
                  <i className="material-icons color-purple ask-small">help</i>
                </div>

                <hr />

                <div className="text-center text-grey mb-3">No news</div>

                <hr className="after-no-news" />

                <div >
                  If you want your news to appear in this section, please contact us
                </div>
                <div className="soc-icon mt-3 ">
                  <div className="icon-wrapper-soc me-2 pointer">
                    <img src="/assets/icons/logo-mail.png" alt="logo" />
                  </div>
                  <div className="icon-wrapper-soc mx-2 pointer">
                    <img src="/assets/icons/logo-medium.png" alt="logo" />
                  </div>
                  <div className="icon-wrapper-soc ms-2 pointer">
                    <img src="/assets/icons/logo-twitter.png" alt="logo" />
                  </div>
                </div> 

              </div>
            </div>

          </div>

          <div className="ps-3" style={{ flex: 1, maxHeight: 1087 }}>
            <div className="d-flex">
              <div className="trade-bottom-tab">Trade History</div>
              <div className="positions-tab">My Positions</div>
              <div className="rest-tab">
                <p>ADAT <span style={{ fontSize: 12 }}>(last 526 trades)</span></p>
                <div className="sip-ic ms-3">
                  <i className="material-icons">filter_alt</i>
                </div>
              </div>
            </div>
            <BootstrapTable 
              keyField='id' 
              data={ data } 
              columns={ columns } 
              bordered={ false }
            />
          </div>

        </div>
      </div>
    </div>

  );
}
