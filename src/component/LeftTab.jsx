import React from 'react'
import { Link, useLocation, useParams, useRouteMatch } from 'react-router-dom'

export default function LeftTab(props) {

  // const sidebarCollapsed = localStorage.getItem('sidebar-collapsed')
  // const [isExpanded, setIsExpanded] = React.useState(false)

  React.useEffect(() => {
    console.log('props', props)
  }, [props.theme])

  const { parent, child } = useParams()

  // const handleToggler = () => {
  //   if (isExpanded) {
  //     setIsExpanded(false)
  //     localStorage.setItem('sidebar-collapsed', true)
  //     return;
  //   }
  //   setIsExpanded(true)
  //   localStorage.removeItem('sidebar-collapse')
  // }

  const goToLandingPage = () => {
    window.location.href="/"
  }

  const etherSidebar = [
    {
      icon: "/assets/icons/10.svg",
      name: 'ADATBOARD',
      to: 'main'
    },
    {
      icon: '',
      name: 'Uniswap',
      to: ''
    },
    {
      icon: '/assets/icons/11.svg',
      name: 'Live New Pairs',
      to: 'uni-live-pair'
    },
    {
      icon: '/assets/icons/12.svg',
      name: 'Pair Explorer',
      to: 'uni-pair-explorer'
    },
    {
      icon: '/assets/icons/03.svg',
      name: 'Big Swap Explorer',
      to: 'uni-big-swap'
    },
    {
      icon: '',
      name: 'Sushiswap',
      to: ''
    },
    {
      icon: '/assets/icons/11.svg',
      name: 'Live New Pairs',
      to: 'sushi-live-pair'
    },
    {
      icon: '/assets/icons/12.svg',
      name: 'Pair Explorer',
      to: 'sushi-pair-explorer'
    },
    {
      icon: '/assets/icons/03.svg',
      name: 'Big Swap Explorer',
      to: 'sushi-big-swap'
    },
    {
      icon: '',
      name: 'Common',
      to: ''
    },
    {
      icon: '/assets/icons/13.svg',
      name: 'Multiswap',
      to: 'multiswap'
    },
    {
      icon: '/assets/icons/14.svg',
      name: 'New Pairs Bot',
      to: ''
    },
    {
      icon: '',
      name: 'Others',
      to: ''
    },
    {
      icon: '/assets/icons/15.svg',
      name: 'User Account',
      to: 'user'
    },
    {
      icon: '/assets/icons/16.svg',
      name: 'Configuration',
      to: 'configuration'
    },
    {
      icon: '',
      name: 'Theme',
      to: ''
    },
    {
      icon: '/assets/icons/17.svg',
      name: 'Theme Mode',
      to: ''
    },
    {
      icon: '/assets/icons/bsc.png',
      name: 'BSC',
      to: {
        pathname: '/app/bsc/main'
      }
    },
    {
      icon: '/assets/icons/polygon.png',
      name: 'Polygon',
      to: {
        pathname: '/app/bsc/polygon'
      }
    }
  ]

  const bscSidebar = [
    {
      icon: "/assets/icons/10.svg",
      name: 'ADATBOARD',
      to: 'main'
    },
    {
      icon: '',
      name: 'Pancakeswap',
      to: ''
    },
    {
      icon: '/assets/icons/11.svg',
      name: 'Live New Pairs',
      to: 'live-pair'
    },
    {
      icon: '/assets/icons/12.svg',
      name: 'Pair Explorer',
      to: 'pair-explorer'
    },
    {
      icon: '',
      name: 'Common',
      to: ''
    },
    {
      icon: '/assets/icons/13.svg',
      name: 'Multiswap',
      to: 'multiswap'
    },
    {
      icon: '/assets/icons/14.svg',
      name: 'New Pairs Bot',
      to: ''
    },
    {
      icon: '',
      name: 'Others',
      to: ''
    },
    {
      icon: '/assets/icons/15.svg',
      name: 'User Account',
      to: 'user'
    },
    {
      icon: '/assets/icons/16.svg',
      name: 'Configuration',
      to: 'configuration'
    },
    {
      icon: '',
      name: 'Theme',
      to: ''
    },
    {
      icon: '/assets/icons/17.svg',
      name: 'Theme Mode',
      to: ''
    },
    {
      icon: '/assets/icons/ether.svg',
      name: 'Ether',
      to: {
        pathname: '/app/ether/main'
      }
    },
    {
      icon: '/assets/icons/polygon.png',
      name: 'Polygon',
      to: {
        pathname: `/app/polygon/${child}`
      }
    }
  ]

  const polySidebar = [
    {
      icon: "/assets/icons/10.svg",
      name: 'ADATBOARD',
      to: 'main'
    },
    {
      icon: '',
      name: 'Quickswap',
      to: ''
    },
    {
      icon: '/assets/icons/11.svg',
      name: 'Live New Pairs',
      to: 'live-pair'
    },
    {
      icon: '/assets/icons/12.svg',
      name: 'Pair Explorer',
      to: 'pair-explorer'
    },
    {
      icon: '',
      name: 'Common',
      to: ''
    },
    {
      icon: '/assets/icons/13.svg',
      name: 'Multiswap',
      to: 'multiswap'
    },
    {
      icon: '/assets/icons/14.svg',
      name: 'New Pairs Bot',
      to: ''
    },
    {
      icon: '',
      name: 'Others',
      to: ''
    },
    {
      icon: '/assets/icons/15.svg',
      name: 'User Account',
      to: 'user'
    },
    {
      icon: '/assets/icons/16.svg',
      name: 'Configuration',
      to: 'configuration'
    },
    {
      icon: '',
      name: 'Theme',
      to: ''
    },
    {
      icon: '/assets/icons/17.svg',
      name: 'Theme Mode',
      to: ''
    },
    {
      icon: '/assets/icons/ether.svg',
      name: 'Ether',
      to: {
        pathname: '/app/ether/main'
      }
    },
    {
      icon: '/assets/icons/bsc.png',
      name: 'BSC',
      to: {
        pathname: `/app/bsc/${child}`
      }
    }
  ]

  const changeTheme = (val) => {
    const cur = props.theme === 'dark' ? 'light' : 'dark'
    // props.setTheme(cur)
  }

  return (
    <div className={props.isMobile ? props.expanded ? `left-tabs mobile ${props.theme} ` : `d-none` : `left-tabs ${props.theme}` }>
      <div className={`brand-head pointer ${props.theme}`} onClick={goToLandingPage} >
        <img src="/assets/logo_gram.png" alt="logo" className="logo-only" />
        <img src="/assets/logo.png" alt="logo" className="logo-with-text" />
      </div>

      <div>

        {parent === 'bsc' && bscSidebar.map((i, index) => {
          if (!i.icon && !i.to) return (
            <div key={index}>
              <div className='tab-menu-not-hover ' >
                {i.icon !== '' && <img src={i.icon} alt="icons" />}
                <p className={`text-menu ${props.theme}`}>{i.name} </p>
              </div>
            </div>
          )
          if (i.icon && !i.to) return (
            <div 
              key={index} 
              onClick={()=> {
                i.name==='New Pairs Bot' && window.open('https://web.telegram.org/')
                i.name==='Theme Mode' && changeTheme()
              }}
            >
              <div className='tab-menu ' >
                {i.icon !== '' && <img src={i.icon} alt="icons" />}
                <p className={`text-menu ${props.theme}`}>{i.name} </p>
              </div>
            </div>
          )
          if (i.to) return (
            <Link key={index} to={i.to} replace className="link-wrap">
              <div className={child === i.to ? 't-selected ' : 'tab-menu '} >
                {i.icon !== '' && <img src={i.icon} alt="icons" />}
                <p className={`text-menu ${props.theme}`}>{i.name} </p>
              </div>
            </Link>
          )
        })}

        {parent === 'ether' && etherSidebar.map((i, index) => {
          if (!i.icon && !i.to) return (
            <div key={index}>
              <div className='tab-menu-not-hover ' >
                {i.icon !== '' && <img src={i.icon} alt="icons" />}
                <p className={`text-menu ${props.theme}`}>{i.name} </p>
              </div>
            </div>
          )
          if (i.icon && !i.to) return (
            <div key={index} onClick={()=> i.name==='New Pairs Bot' ? window.open('https://web.telegram.org/') : null}>
              <div className='tab-menu ' >
                {i.icon !== '' && <img src={i.icon} alt="icons" />}
                <p className={`text-menu ${props.theme}`}>{i.name} </p>
              </div>
            </div>
          )
          if (i.to) return (
            <Link key={index} to={i.to} replace className="link-wrap">
            <div className={child === i.to ? 't-selected ' : 'tab-menu '} >
              {i.icon !== '' && <img src={i.icon} alt="icons" />}
              <p className={`text-menu ${props.theme}`}>{i.name} </p>
            </div>
          </Link>
          )
        })}

        {parent === 'polygon' && polySidebar.map((i, index) => {
          if (!i.icon && !i.to) return (
            <div key={index}>
              <div className='tab-menu-not-hover ' >
                {i.icon !== '' && <img src={i.icon} alt="icons" />}
                <p className={`text-menu ${props.theme}`}>{i.name} </p>
              </div>
            </div>
          )
          if (i.icon && !i.to) return (
            <div key={index} onClick={()=> i.name==='New Pairs Bot' ? window.open('https://web.telegram.org/') : null}>
              <div className='tab-menu ' >
                {i.icon !== '' && <img src={i.icon} alt="icons" />}
                <p className={`text-menu ${props.theme}`}>{i.name} </p>
              </div>
            </div>
          )
          if (i.to) return (
            <Link key={index} to={i.to} replace className="link-wrap">
            <div className={child === i.to ? 't-selected ' : 'tab-menu '} >
              {i.icon !== '' && <img src={i.icon} alt="icons" />}
              <p className={`text-menu ${props.theme}`}>{i.name} </p>
            </div>
          </Link>
          )
        })}
      </div>

    </div>
  )
}
