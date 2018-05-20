import React, {Component} from 'react';
import './App.css';
import SocialDetails from './SocialDetails';

function Me({data}) {

  return (<ul>
    {data.details.map(function(detail){
      return  <li> <SocialDetails socialDetails={detail}/>  </li>
    })}
    </ul>
    )
}


export default Me;
