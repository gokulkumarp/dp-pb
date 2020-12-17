import React from "react";
import { Link } from "react-router-dom";
import "./homepage.css"
const HomePage = () => {
  const homeLayout = () => (
    <div className="container">
      <header class="heading">
        <div class="heading-content">
          <h2>Personal Budget</h2>
          <h1>
          Gain Total Control of Your Money

          </h1>
          <p>
          Stop living paycheck-to-paycheck,
get out of debt, and save more money.
          </p>
          <Link to="/login" class="btn-2">
            Get Started <i class="fa fa-chevron-right"></i>
          </Link>
        </div>
        <img src= 'https://www-assets.youneedabudget.com/wp-content/uploads/2019/05/15215226/ynab_budgeting_app.svg' class="budget-image"></img>

      </header>
        
        <img class="tab-image" src= 'https://www-assets.youneedabudget.com/wp-content/uploads/2019/05/15215708/ynab_budgeting_windows_mac_ios_android-300x216.jpg'/>    
        <div  class="content2" >
        <h2>You Need A Budget is award-winning software and a proven method—that works.</h2>
        <p>What really makes You Need A Budget different is that we can t<em>each you how to manage your money and get ahead—for good. </em>What if your bills rolled in and instead of piling up, you just paid them? No sweat. What if you didn’t even realize it was payday because you had money in the bank and weren’t desperate for that check to arrive?<strong> Forget everything you think you know about budgeting and prepare to experience total control.&nbsp;</strong></p>
        
        
        </div>
    <div class="heading2">
    <div class="heading-content">
          <h1>
          On average, new budgeters save $600 in their first two months and more than $6,000 their first year.

          </h1>
          <Link to="/login" class="btn-2">
            Get Started <i class="fa fa-chevron-right"></i>
          </Link>
        </div>
        <img src= 'https://www-assets.youneedabudget.com/wp-content/uploads/2020/11/19213012/ilo_home_explainervideoart.svg' class="budget-image"></img>
    </div>
    </div>
  );
  return <React.Fragment>{homeLayout()}</React.Fragment>;
};

export default HomePage;
