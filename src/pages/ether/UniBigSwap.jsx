import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next';


export default function UniBigSwap() {
  const columns = [
  {
    dataField: 'token',
    text: 'Token',
    sort: true,
    headerClasses: 'border-dark-purple',
    headerStyle: { textAlign: 'center' },
    classes: 'border-dark-purple text-center'
  }, 
  {
    dataField: 'listed',
    text: 'Listed Since',
    sort: true,
    headerClasses: 'border-dark-purple',
    headerStyle: { textAlign: 'center' },
    classes: 'border-dark-purple text-center'
  }, 
  {
    text: 'Actions',
    dataField: 'id',
    headerClasses: 'border-dark-purple',
    headerStyle: { textAlign: 'center' },
    classes: 'border-dark-purple text-center',
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
  {
    dataField: 'contract',
    text: 'Contract Details',
    headerClasses: 'border-dark-purple',
    headerStyle: { textAlign: 'center' },
    classes: 'border-dark-purple text-center',
    formatter: () => {
      return (
        <div className="d-flex justify-content-between">
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
      )
    }
  }, 
  {
    dataField: 'tokenPrice',
    text: 'Token Price: BNB',
    sort: true,
    headerClasses: 'border-dark-purple',
    headerStyle: { textAlign: 'center' },
    classes: 'border-dark-purple text-center'
  }, 
  {
    dataField: 'liquidity',
    text: 'Total Liquidity',
    sort: true,
    headerClasses: 'border-dark-purple',
    headerStyle: { textAlign: 'center' },
    classes: 'border-dark-purple text-center'
  }, 
  {
    dataField: 'poolAmount',
    text: 'Pool Amount',
    sort: true,
    headerClasses: 'border-dark-purple',
    headerStyle: { textAlign: 'center' },
    classes: 'border-dark-purple text-center'
  }, 
  {
    dataField: 'poolVariation',
    text: 'Pool Variation',
    sort: true,
    headerClasses: 'border-dark-purple',
    headerStyle: { textAlign: 'center' },
    classes: 'border-dark-purple text-center',
    formatter: (cell, row) => {
      if (cell === "0%") return (
        <div className="grey-0 text-center">
          <p className="text-center m-0"> {cell}</p>
        </div>
      )
      if (cell === "531.32%") return (
        <div className="green-0 text-center">
          <p className="text-center m-0"> {cell}</p>
        </div>
      )
      if (cell === "-100%") return (
        <div className="red-0 text-center">
          <p className="text-center m-0"> {cell}</p>
        </div>
      )
      return null
    }
  }, 
  {
    dataField: 'poolRemaining',
    text: 'Pool Remaining',
    sort: true,
    headerClasses: 'border-dark-purple',
    headerStyle: { textAlign: 'center' },
    classes: 'border-dark-purple text-center'
  }, 
];

  const data = [
    {
      id: 0,
      token: "META",
      listed: "48 m 13 s",
      contract: 0,
      tokenPrice: "$0.040041221",
      liquidity: "$133,911.9",
      poolAmount: "4.5 BNB",
      poolVariation: "0%",
      poolRemaining: "4.5 BNB"
    },
    {
      id: 1,
      token: "RALPH",
      listed: "1 h 48 m 13 s",
      contract: 2,
      tokenPrice: "$0.03099911",
      liquidity: "$296,911.9",
      poolAmount: "52.48111293 ETH",
      poolVariation: "531.32%",
      poolRemaining: "52.48111293 ETH"
    },
    {
      id: 2,
      token: "MIMETIC",
      listed: "2 h 48 m 13 s",
      contract: 1,
      tokenPrice: "$0.030399911",
      liquidity: "$296,911.9",
      poolAmount: "4.5 BNB",
      poolVariation: "-100%",
      poolRemaining: "4.5 BNB"
    },
    {
      id: 3,
      token: "META",
      listed: "48 m 13 s",
      contract: 0,
      tokenPrice: "$0.040041421",
      liquidity: "$133,911.9",
      poolAmount: "4.5 BNB",
      poolVariation: "0%",
      poolRemaining: "4.5 BNB"
    },
    {
      id: 4,
      token: "RALPH",
      listed: "1 h 48 m 13 s",
      contract: 2,
      tokenPrice: "$0.035099911",
      liquidity: "$296,911.9",
      poolAmount: "52.48111293 ETH",
      poolVariation: "531.32%",
      poolRemaining: "52.48111293 ETH"
    },
    {
      id: 5,
      token: "MIMETIC",
      listed: "2 h 48 m 13 s",
      contract: 1,
      tokenPrice: "$0.0233099911",
      liquidity: "$296,911.9",
      poolAmount: "4.5 BNB",
      poolVariation: "-100%",
      poolRemaining: "4.5 BNB"
    },
    {
      id: 6,
      token: "META",
      listed: "48 m 13 s",
      contract: 0,
      tokenPrice: "$0.0411004121",
      liquidity: "$133,911.9",
      poolAmount: "4.5 BNB",
      poolVariation: "0%",
      poolRemaining: "4.5 BNB"
    },
    {
      id: 7,
      token: "RALPH",
      listed: "1 h 48 m 13 s",
      contract: 2,
      tokenPrice: "$0.0313099911",
      liquidity: "$296,911.9",
      poolAmount: "52.48111293 ETH",
      poolVariation: "531.32%",
      poolRemaining: "52.48111293 ETH"
    },
    {
      id: 8,
      token: "MIMETIC",
      listed: "2 h 48 m 13 s",
      contract: 1,
      tokenPrice: "$0.030909911",
      liquidity: "$296,911.9",
      poolAmount: "4.5 BNB",
      poolVariation: "-100%",
      poolRemaining: "4.5 BNB"
    },
    {
      id: 9,
      token: "META",
      listed: "48 m 13 s",
      contract: 0,
      tokenPrice: "$0.0400412121",
      liquidity: "$133,911.9",
      poolAmount: "4.5 BNB",
      poolVariation: "0%",
      poolRemaining: "4.5 BNB"
    },
    {
      id: 10,
      token: "RALPH",
      listed: "1 h 48 m 13 s",
      contract: 2,
      tokenPrice: "$0.0013099911",
      liquidity: "$296,911.9",
      poolAmount: "52.48111293 ETH",
      poolVariation: "531.32%",
      poolRemaining: "52.48111293 ETH"
    },
    {
      id: 11,
      token: "MIMETIC",
      listed: "2 h 48 m 13 s",
      contract: 1,
      tokenPrice: "$0.0309129911",
      liquidity: "$296,911.9",
      poolAmount: "4.5 BNB",
      poolVariation: "-100%",
      poolRemaining: "4.5 BNB"
    },
    {
      id: 12,
      token: "META",
      listed: "48 m 13 s",
      contract: 0,
      tokenPrice: "$0.0492004121",
      liquidity: "$133,911.9",
      poolAmount: "4.5 BNB",
      poolVariation: "0%",
      poolRemaining: "4.5 BNB"
    },
    {
      id: 13,
      token: "RALPH",
      listed: "1 h 48 m 13 s",
      contract: 2,
      tokenPrice: "$0.0309999911",
      liquidity: "$296,911.9",
      poolAmount: "52.48111293 ETH",
      poolVariation: "531.32%",
      poolRemaining: "52.48111293 ETH"
    },
    {
      id: 14,
      token: "MIMETIC",
      listed: "2 h 48 m 13 s",
      contract: 1,
      tokenPrice: "$0.0308799911",
      liquidity: "$296,911.9",
      poolAmount: "4.5 BNB",
      poolVariation: "-100%",
      poolRemaining: "4.5 BNB"
    },
    {
      id: 15,
      token: "META",
      listed: "48 m 13 s",
      contract: 0,
      tokenPrice: "$0.042004121",
      liquidity: "$133,911.9",
      poolAmount: "4.5 BNB",
      poolVariation: "0%",
      poolRemaining: "4.5 BNB"
    },
    {
      id: 16,
      token: "RALPH",
      listed: "1 h 48 m 13 s",
      contract: 2,
      tokenPrice: "$0.030996911",
      liquidity: "$296,911.9",
      poolAmount: "52.48111293 ETH",
      poolVariation: "531.32%",
      poolRemaining: "52.48111293 ETH"
    },
    {
      id: 17,
      token: "MIMETIC",
      listed: "2 h 48 m 13 s",
      contract: 1,
      tokenPrice: "$0.0309992911",
      liquidity: "$296,911.9",
      poolAmount: "4.5 BNB",
      poolVariation: "-100%",
      poolRemaining: "4.5 BNB"
    },
    {
      id: 18,
      token: "META",
      listed: "48 m 13 s",
      contract: 0,
      tokenPrice: "$0.040024121",
      liquidity: "$133,911.9",
      poolAmount: "4.5 BNB",
      poolVariation: "0%",
      poolRemaining: "4.5 BNB"
    },
    {
      id: 19,
      token: "RALPH",
      listed: "1 h 48 m 13 s",
      contract: 2,
      tokenPrice: "$0.0309933911",
      liquidity: "$296,911.9",
      poolAmount: "52.48111293 ETH",
      poolVariation: "531.32%",
      poolRemaining: "52.48111293 ETH"
    },
    {
      id: 20,
      token: "MIMETIC",
      listed: "2 h 48 m 13 s",
      contract: 1,
      tokenPrice: "$0.0309449911",
      liquidity: "$296,911.9",
      poolAmount: "4.5 BNB",
      poolVariation: "-100%",
      poolRemaining: "4.5 BNB"
    },
    {
      id: 21,
      token: "META",
      listed: "48 m 13 s",
      contract: 0,
      tokenPrice: "$0.0405504121",
      liquidity: "$133,911.9",
      poolAmount: "4.5 BNB",
      poolVariation: "0%",
      poolRemaining: "4.5 BNB"
    },
    {
      id: 22,
      token: "RALPH",
      listed: "1 h 48 m 13 s",
      contract: 2,
      tokenPrice: "$0.033099911",
      liquidity: "$296,911.9",
      poolAmount: "52.48111293 ETH",
      poolVariation: "531.32%",
      poolRemaining: "52.48111293 ETH"
    },
    {
      id: 23,
      token: "MIMETIC",
      listed: "2 h 48 m 13 s",
      contract: 1,
      tokenPrice: "$0.03091119911",
      liquidity: "$296,911.9",
      poolAmount: "4.5 BNB",
      poolVariation: "-100%",
      poolRemaining: "4.5 BNB"
    },
    {
      id: 24,
      token: "META",
      listed: "48 m 13 s",
      contract: 0,
      tokenPrice: "$0.0400904121",
      liquidity: "$133,911.9",
      poolAmount: "4.5 BNB",
      poolVariation: "0%",
      poolRemaining: "4.5 BNB"
    },
    {
      id: 25,
      token: "RALPH",
      listed: "1 h 48 m 13 s",
      contract: 2,
      tokenPrice: "$0.0304499911",
      liquidity: "$296,911.9",
      poolAmount: "52.48111293 ETH",
      poolVariation: "531.32%",
      poolRemaining: "52.48111293 ETH"
    },
    {
      id: 26,
      token: "MIMETIC",
      listed: "2 h 48 m 13 s",
      contract: 1,
      tokenPrice: "$0.0309549911",
      liquidity: "$296,911.9",
      poolAmount: "4.5 BNB",
      poolVariation: "-100%",
      poolRemaining: "4.5 BNB"
    },
    {
      id: 27,
      token: "META",
      listed: "48 m 13 s",
      contract: 0,
      tokenPrice: "$0.0400324121",
      liquidity: "$133,911.9",
      poolAmount: "4.5 BNB",
      poolVariation: "0%",
      poolRemaining: "4.5 BNB"
    },
    {
      id: 28,
      token: "RALPH",
      listed: "1 h 48 m 13 s",
      contract: 2,
      tokenPrice: "$0.0323099911",
      liquidity: "$296,911.9",
      poolAmount: "52.48111293 ETH",
      poolVariation: "531.32%",
      poolRemaining: "52.48111293 ETH"
    },
    {
      id: 29,
      token: "MIMETIC",
      listed: "2 h 48 m 13 s",
      contract: 1,
      tokenPrice: "$0.0314099911",
      liquidity: "$296,911.9",
      poolAmount: "4.5 BNB",
      poolVariation: "-100%",
      poolRemaining: "4.5 BNB"
    },
    {
      id: 30,
      token: "META",
      listed: "48 m 13 s",
      contract: 0,
      tokenPrice: "$0.0495004121",
      liquidity: "$133,911.9",
      poolAmount: "4.5 BNB",
      poolVariation: "0%",
      poolRemaining: "4.5 BNB"
    },
    {
      id: 31,
      token: "RALPH",
      listed: "1 h 48 m 13 s",
      contract: 2,
      tokenPrice: "$0.0309998611",
      liquidity: "$296,911.9",
      poolAmount: "52.48111293 ETH",
      poolVariation: "531.32%",
      poolRemaining: "52.48111293 ETH"
    },
    {
      id: 32,
      token: "MIMETIC",
      listed: "2 h 48 m 13 s",
      contract: 1,
      tokenPrice: "$0.0306599911",
      liquidity: "$296,911.9",
      poolAmount: "4.5 BNB",
      poolVariation: "-100%",
      poolRemaining: "4.5 BNB"
    },

  ]
  
  
  return (
    <div className="body-body">

      <div className="container">
        <div className="d-flex justify-content-between align-items-center pt-4">
          <h6 className="text-white">UNISWAP {'>'} 
            <span className="text-blue ">
              BIG SWAP EXPLORER
            </span>
          </h6>
          <div className="search-wrapper position-relative">
            <input type="text" className="form-control input-dark " placeholder="Filter by token" />
            <i className="material-icons">search</i>
          </div>
        </div>
        <p className="text-grey pb-5">Show latest big swaps in uniswap with useful</p>

        <BootstrapTable 
          keyField='id' 
          data={ data } 
          columns={ columns } 
          bordered={ false }
        />

        <div style={{ height: 100, width: "100%" }} />

      </div>
    </div>

   );
}
