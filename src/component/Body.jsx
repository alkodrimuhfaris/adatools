import React from 'react'
import { Route, useParams } from 'react-router-dom'
import DashboardBsc from '../pages/bsc/DashboardBsc'
import LivePairsBsc from '../pages/bsc/LivePairsBsc'
import PairExplorerBsc from '../pages/bsc/PairExplorerBsc'

import DashboardEther from '../pages/ether/DashboardEther'
import UniLivePairs from '../pages/ether/UniLivePairs'
import SushiLivePairs from '../pages/ether/SushiLivePairs'
import UniPairExplorer from '../pages/ether/UniPairExplorer'
import SushiPairExplorer from '../pages/ether/SushiPairExplorer'
import UniBigSwap from '../pages/ether/UniBigSwap'
import SushiBigSwap from '../pages/ether/SushiBigSwap'

import DashboardPolygon from '../pages/polygon/DashboardPolygon'
import LivePairsPoly from '../pages/polygon/LivePairsPoly'
import PairExplorerPoly from '../pages/polygon/PairExplorerPoly'

import Multiswap from '../pages/Multiswap'
import UserAccount from '../pages/UserAccount'
import Configuration from '../pages/Configuration'


export default function Body(props) {

  const { parent, child } = useParams()

  const url = [
    {
      name: "main",
      main: () => {
        switch (parent) {
          case 'bsc':
            return <DashboardBsc theme={props.theme} />
          case 'ether':
            return <DashboardEther theme={props.theme} />
          case 'polygon':
            return <DashboardPolygon theme={props.theme} />
          default:
            return
        }
      }
    },
    {
      name: "live-pair",
      main: () => {
        switch (parent) {
          case 'bsc':
            return <LivePairsBsc  theme={props.theme}/>
          case 'polygon':
            return <LivePairsPoly theme={props.theme}/>
          default:
            return
        }
      }
    },
    {
      name: "uni-live-pair",
      main: () => <UniLivePairs />
    },
    {
      name: "sushi-live-pair",
      main: () => <SushiLivePairs />
    },
    {
      name: "pair-explorer",
      main: () => {
        switch (parent) {
          case 'bsc':
            return <PairExplorerBsc />
          case 'polygon':
            return <PairExplorerPoly />
          default:
            return
        }
      }
    },
    {
      name: "uni-pair-explorer",
      main: () => <UniPairExplorer />
    },
    {
      name: "sushi-pair-explorer",
      main: () => <SushiPairExplorer />
    },
    {
      name: "uni-big-swap",
      main: () => <UniBigSwap />
    },
    {
      name: "sushi-big-swap",
      main: () => <SushiBigSwap />
    },
    {
      name: "multiswap",
      main: () => <Multiswap />
    },
    {
      name: "user",
      main: () => <UserAccount />
    },
    {
      name: "configuration",
      main: () => <Configuration />
    }
  ]

  console.log('props', props)

  return (
    <div >
      <Route path={'/app/:parent/:child'} >
        {url.map((i, id) => {
          if (i.name === child) {
            return <i.main key={id}  />
          }
          return (
            <div key={id} className="h-100 w-100 centering-element"/>
          )
        })}
      </Route>
    </div>
  )
}
