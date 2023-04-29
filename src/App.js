import Navbar from './navbar/Navbar';
import Leftbar from './leftbar/Leftbar';
import './App.css'
import New_page from './new_page/New_page';
import Widget from './widgets/Widget';
import { FcCurrencyExchange } from "react-icons/fc";
import { FcBusinessman } from "react-icons/fc";
import { FcDatabase } from "react-icons/fc";
import { FcDebt } from "react-icons/fc";
import { FcBullish } from "react-icons/fc";
import { FcBarChart } from "react-icons/fc";
import { FcLineChart } from "react-icons/fc";
import { useState } from 'react'


function App() {
  const[openTracker, setOpenTracker] = useState(false);

  const handleTracker = () => {
    setOpenTracker(!openTracker);
    // console.log(openTracker);
  }
  
  return (
    <div className='App'>
    <Navbar />
    <div className="container">
      <div className="Leftbar">
        <Leftbar handleTracker = {handleTracker} />
      </div>

      <div className="Middle">
    {openTracker ? 
    
    <New_page /> :
      <>  
        <div className="upper">
        <Widget header = "Budget" counter="$24K" comment ="+12% since last month" icon = {<FcCurrencyExchange />} />
        <Widget header = "Total Customers" counter="10K" comment ="-2.6% since last month" icon = {<FcBusinessman />} />
        <Widget header = "Total Customers" counter="10K" comment ="-2.6% since last month" icon = {<FcDatabase />} />
        <Widget header = "Total Profit" counter="$150K" comment ="Total profit increased by 9%" icon = {<FcDebt />} />
        </div>
        <div className="lower">
        <Widget header = "Sales"  large = {true}  chart = {<FcBarChart />} />
        <Widget header = "Sources"  large = {true}  chart = {<FcLineChart />} />
        </div>
      
      </>   }
      </div>
   </div>
   </div>
  );
}
export default App;