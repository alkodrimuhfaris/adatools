import React from 'react'
import { BrowserRouter as Router, useLocation, useRouteMatch, Route, useParams } from 'react-router-dom'
import Head from './Head'
import LeftTab from './LeftTab'
import Footer from './Footer'
import Body from './Body'

export default function Layout() {

  const { pathname } = useLocation()
  const { parent } = useParams()

  const [width, setWidth] = React.useState(window.screen.availWidth)
  const [expanded, setExpanded] = React.useState(false)
  const [theme, setTheme] = React.useState('dark')

  console.log("theme", theme)

  if (pathname === "/app") {
    window.location.href = '/app/bsc'
  }

  React.useEffect(() => {
    // window.addEventListener("scroll", (event) => {
    //   if (window?.scrollY > 70) setButtonVisible(true) 
    //   if (window?.scrollY < 70) setButtonVisible(false)
    // });
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    }
  }, [])

  // React.useEffect(() => {
  //   console.log("route changed", parent)
  // }, [parent])

  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  }

  const changeTheme = (val) => {
    console.log("called")
    setTheme(val)
  }

  const isMobile = (width <= 768);

  const background = theme === 'dark' ? 'bg-160b2c' : 'light';

  let classRight = isMobile ? `right-body ${background}` : `right-body desktop ${background}`

  return (
    <Router>
      {/* head */}
      <Head isMobile={isMobile} />

      {/* body  */}
      <div className="d-flex position-relative h-100">

        <button className="button-expand-mobile" onClick={()=>setExpanded(!expanded)}>
          <i className="material-icons">
            menu
          </i>
        </button>

        <Route exact path='/app/:parent/:child' >
          <LeftTab 
            isMobile={isMobile} 
            expanded={expanded} 
            setExpanded={(val) => setExpanded(val)}  
            setTheme={(val) => changeTheme(val)}  
            theme={theme}
          />
        </Route>

        {/* right body  */}
        <div className={`${classRight}`}>
          
          <div className="top-small">
            <div className="container d-flex justify-content-between">
              <div className="d-flex text-white">
                <div 
                  className={parent === 'ether' ? "me-3 tab-top-selected" : "me-3 pointer"}
                  onClick={parent !== 'ether' ? () => window.location.href="/app/ether/main": null}
                >
                  <img src="/assets/icons/ether.svg" alt="ether" className="logo-ether" />
                  <p className="d-inline ms-1">Ether</p>
                </div>
                <div 
                  className={parent === 'bsc' ? "me-3 tab-top-selected" : "me-3 pointer"}
                  onClick={parent !== 'bsc' ? () => window.location.href="/app/bsc/main": null}
                >
                  <img src="/assets/icons/bsc.png" alt="bsc" className="logo-ether" />
                  <p className="d-inline ms-1">BSC</p>
                </div>
                <div 
                  className={parent === 'polygon' ? "me-3 tab-top-selected" : "me-3 pointer"}
                  onClick={parent !== 'polygon' ? () => window.location.href="/app/polygon/main": null}
                >
                  <img src="/assets/icons/polygon.png" alt="polygon" className="logo-ether" />
                  <p className="d-inline ms-1">Polygon</p>
                </div>
              </div>
              <div className={isMobile ? "d-none" :  "ms-auto"}>
                <span className="text-white">Next ADATShare: </span>
                <span className="text-blue">2021-09-01 - 1,252,964 ADAT </span>
                <span className="text-white">| Next Token Burn: </span>
                <span className="text-blue">2021-09-01 - 28,107 ADAT</span>
              </div>
            </div>
          </div>

          <Route exact path='/app/:parent/:child' >
            <Body
              setTheme={(val) => changeTheme(val)}  
              theme={theme}
            /> 
          </Route>

          <Footer />
          
        </div>
      </div>
      
    </Router>
  )
}
