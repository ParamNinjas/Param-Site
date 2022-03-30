import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import  microsoft from '../img/microsoft.png'
import liferay from '../img/Liferay.png'
import ibm from '../img/ibm.png'
import  EOH from '../img/EOH.png'
import bbd from '../img/bbd.jpg'
import iqb from '../img/iqb.png'
import  ioco from '../img/ioco.png'
import ntiys from '../img/ntiys.png'
import altron from '../img/altron.png'
import fd from '../img/fd.png'
import ovations from '../img/ovations.png'

const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
};

const items = [
    <div className="item" data-value="1">
        <img src={microsoft} className="sliderimg"/>
    </div>,
    <div className="item" data-value="2">
        <img src={ibm} className="sliderimg"/>
    </div>,
    <div className="item" data-value="3">
        <img src={liferay} className="sliderimg"/>
    </div>,
    <div className="item" data-value="4">
        <img src={altron} className="sliderimg"/>
    </div>,
    <div className="item" data-value="5">
        <img src={bbd} className="sliderimg"/>
    </div>,
     <div className="item" data-value="2">
     <img src={EOH} className="sliderimg"/>
 </div>,
 <div className="item" data-value="3">
     <img src={ioco} className="sliderimg"/>
 </div>,
 <div className="item" data-value="4">
     <img src={iqb} className="sliderimg"/>
 </div>,
 <div className="item" data-value="5">
     <img src={ntiys} className="sliderimg"/>
 </div>,
  <div className="item" data-value="4">
  <img src={fd} className="sliderimg"/>
</div>,
<div className="item" data-value="5">
  <img src={ovations} className="sliderimg"/>
</div>,
];

const Partners=() => {
    return(
        <AliceCarousel
        autoPlay autoPlayInterval="2000"
        mouseTracking
        items={items}
        responsive={responsive}
        controlsStrategy="alternate"
    />
    )
}
export default Partners;