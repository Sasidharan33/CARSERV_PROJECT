import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
export const data=[
  { 
    id:1,
    size:"14 inch",
    image:require('./images/14-1.jpg'),
    name:"14 inch alloy",
    price:460,
    quantity:1
  },
  { 
    id:2,
    size:"16 inch",
    image:require('./images/16.jpg'),
    name:"16 inch alloy",
    price:720,
    quantity:1
  },
  { 
    id:3,
    size:"18 inch",
    image:require('./images/18.jpg'),
    name:"18 inch alloy",
    price:860,
    quantity:1
  },
  { 
    id:4,
    size:"20 inch",
    image:require('./images/20.jpg'),
    name:"20 inch alloy",
    price:1120,
    quantity:1
  },
  { 
    id:5,
    image:require('./images/sl1.jpg'),
    name:"spoiler type1",
    price:2000,
    quantity:1
  },
  { 
    id:6,
    image:require('./images/sl2.jpg'),
    name:"spoiler type2",
    price:2360,
    quantity:1
  },
  { 
    id:7,
    image:require('./images/sl3.jpg'),
    name:"spoiler type3",
    price:2200,
    quantity:1
  },
  { 
    id:8,
    image:require('./images/sl4.jpg'),
    name:"spoiler type1",
    price:2150,
    quantity:1
  },
  { 
    id:9,
    image:require('./images/el1.jpg'),
    name:"exhaust model 1",
    price:800,
    quantity:1
  },
  { 
    id:10,
    image:require('./images/el2.jpg'),
    name:"exhaust model 2",
    price:900,
    quantity:1
  },
  { 
    id:11,
    image:require('./images/el3.jpg'),
    name:"exhaust model 3",
    price:800,
    quantity:1
  },
  { 
    id:12,
    image:require('./images/el4.jpg'),
    name:"exhaust model 4",
    price:800,
    quantity:1
  }
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
