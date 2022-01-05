import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


/*
export default function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Layout/>}>
          <Route index element = {<Home />}/>
          <Route path = "add" element = {<Home />}/>
          <Route path = "*" element = {<NoPage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
*/
//ReactDOM.render(<App />, document.getElementById("root"));
