import React from 'react'
import { useSelector } from 'react-redux';
import SvgIconCustom from '../component/SvgIconCustom';

export default function Multiswap() {
  const { theme } = useSelector((state) => state.theme);

  return (
    <div className={`body-body pb-5 ${theme}`}>

      <div className="container">
        <div className="top-search-title pt-4">
          <div className="text-white">
            <h6>COMMON {'>'}
              <span className="text-blue ">
                MULTISWAP
              </span>
            </h6> 
            <p>Trade many pairs at once</p>
          </div>
        </div>
        
        <div className="d-flex justify-content-center mt-4 text-white">
          {/* <div className="col-sm-12 col-md-6 col-lg-4  "></div> */}
          <div className="text-center">
            <div className="d-flex justify-content-center">
              <div className="icon-purple-wrapper">
                <div className="shine-effect"></div>
                <SvgIconCustom src="/assets/icons/13.svg" className={["multiswap-icon"]} />
              </div>
            </div>
            <h4 className="mt-4 mb-3 fw-bolder">SEARCH AND ADD PAIRS</h4>
            <h6 className="pb-3">You can add as many pairs as you want in the same view</h6>
            <div className="search-wrapper mb-2 position-relative">
              <input type="text" className="form-control input-dark " placeholder="Add or search pair" />
              <i className="material-icons" style={{ top: '20%' }}>search</i>
            </div>
            <p className="pt-5">In order for it to work properly please accept uniswap conditions each time you add pair</p>

          </div>
          {/* <div className="col-sm-12 col-md-6 col-lg-4  "></div> */}
        </div>
        
      </div>
    </div>

  );
}
