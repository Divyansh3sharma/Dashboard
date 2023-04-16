import Navbar from './navbar/Navbar';
import Leftbar from './leftbar/Leftbar';
import './App.css'
import Widget from './widgets/Widget';
import { FcCurrencyExchange } from "react-icons/fc";
import { FcBusinessman } from "react-icons/fc";
import { FcDatabase } from "react-icons/fc";
import { FcDebt } from "react-icons/fc";
import { FcBullish } from "react-icons/fc";
import { FcBarChart } from "react-icons/fc";
import { FcLineChart } from "react-icons/fc";



function App() {
 

  
  return (
    <div className='App'>
    <Navbar />
    <div className="container">
      <div className="Leftbar"><Leftbar /></div>

      <div className="Middle">
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
      </div>
   </div>
   </div>
  );
}

export default App;