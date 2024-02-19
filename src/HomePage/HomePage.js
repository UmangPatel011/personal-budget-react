import React from 'react';

function HomePage() {
  return (
    <div className="container center">
      <div className="page-area">
        <div className="text-box">
          <h1>Stay on track</h1>
          <p>
            Do you know where you are spending your money? If you really stop to track it down,
            you would get surprised! Proper budget management depends on real data... and this
            app will help you with that!
          </p>
        </div>

        <div className="text-box">
          <h1>Keep your cashflow crystal clear</h1>
          <p>
            Effortlessly track your cashflow and gain insights that help you see easy opportunities to save.
          </p>
        </div>

        <div className="text-box">
          <h1>Budget planner</h1>
          <p>
            Use the free printable budget worksheet below to see how your spending compares with the 50/30/20 budget guide.
          </p>
          <a href="https://www.nerdwallet.com/article/finance/budget-worksheet">NerdWallet Budget Worksheet</a>
        </div>

        <div className="text-box">
          <h1>Free Budget Templates</h1>
          <p>
            When it comes to money management, a little time and effort can go a long way. In a business setting, a budget can be an essential tool for measuring performance over time, setting attainable goals, and informing strategic plans.
          </p>
          <a href="https://www.smartsheet.com/free-google-docs-budget-templates-for-google-docs-google-sheets">SmartSheet Budget Templates</a>
        </div>

        <div className="text-box">
          <h1>Results</h1>
          <p>
            People who stick to a financial plan, budgeting every expense, get out of debt faster!
            Also, they live happier lives... since they expend without guilt or fear...
            because they know it is all good and accounted for.
          </p>
        </div>

        <div className="text-box">
          <h1>Chart</h1>
          <p>
            <canvas id="myChart" width="400" height="400"></canvas>
          </p>
        </div>

        {/* YouTube Video Embed */}
        <div>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/M7ucIl9MGs0"
            frameBorder="0"
            allowFullScreen
            title="YouTube Video"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
