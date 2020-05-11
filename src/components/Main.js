import React from "react";
import { today, documents } from "./data";

function Main() {
  return (
    <main className="main">
      <div className="main-header">
        <div className="main-header-intro-wrapper">
          <div className="main-header-welcome">
            <div className="main-header-welcome-title text-light">
              Welcome, <strong>Dickens</strong>
            </div>
            <div className="main-header-welcome-subtitle text-light">
              How are you today?
            </div>
          </div>
          <div className="quickview">
            {today.map(({ amount, item }, i) => (
              <div className="quickview-item" key={i}>
                <div className="quickview-item-total">{amount}</div>
                <div className="quickview-item-description">
                  <span className="text-light">{item}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="main-overview">
        <div className="overviewCard">
          <div className="overviewCard-icon overviewCard-icon--document">
            <i className="far fa-file-alt" />
          </div>
          <div className="overviewCard-description">
            <h3 className="overviewCard-title text-light">
              Recent<strong>Spending</strong>
            </h3>
            <p className="overviewCard-subtitle">Badges Redeemed</p>
          </div>
        </div>
        <div className="overviewCard">
          <div className="overviewCard-icon overviewCard-icon--calendar">
            <i className="far fa-calendar-check" />
          </div>
          <div className="overviewCard-description">
            <h3 className="overviewCard-title text-light">
              Upcoming <strong>Event</strong>
            </h3>
            <p className="overviewCard-subtitle">Blockchain Summit</p>
          </div>
        </div>
        <div className="overviewCard">
          <div className="overviewCard-icon overviewCard-icon--mail">
            <i className="far fa-envelope" />
          </div>
          <div className="overviewCard-description">
            <h3 className="overviewCard-title text-light">
              Recent <strong>Emails</strong>
            </h3>
            <p className="overviewCard-subtitle">+10</p>
          </div>
        </div>
        <div className="overviewCard">
          <div className="overviewCard-icon overviewCard-icon--photo">
            <i className="far fa-file-image" />
          </div>
          <div className="overviewCard-description">
            <h3 className="overviewCard-title text-light">
              New <strong>Updates</strong>
            </h3>
            <p className="overviewCard-subtitle">Refferal link available</p>
          </div>
        </div>
      </div>
      <div className="main-cards">
        <div className="card">
          <div className="card-header">
            <div className="card-header-title text-light">
              Your <strong>Events</strong>
              <a href="/" className="card-header-link text-bold">
                View All
              </a>
            </div>
            <div className="settings">
              <div className="settings-block">
                <i className="fas fa-edit" />
              </div>
              <div className="settings-block">
                <i className="fas fa-cog" />
              </div>
            </div>
          </div>
          <div className="card-main">
            <div className="card-row">
              <div className="card-icon">
                <i className="fas fa-gift" />
              </div>
              <div className="card-time">
                <div>Today</div>
              </div>
              <div className="card-detail">
                <div className="card-source text-bold">Poap Admin</div>
                <div className="card-description">Received 4 Daily Tokens</div>
                <div className="card-note">8:30pm, 1404 Gibson St</div>
              </div>
            </div>
            <div className="card-row">
              <div className="card-icon">
                <i className="fas fa-book" />
              </div>
              <div className="card-time">
                <div>Tuesday</div>
              </div>
              <div className="card-detail">
                <div className="card-source text-bold">MetaMask</div>
                <div className="card-description">
                  Account 1 was created with 4 POAP Token
                </div>
                <div className="card-note">4:30pm, Delta, Gate 27B</div>
              </div>
            </div>
            <div className="card-row">
              <div className="card-icon">
                <i className="fas fa-plane" />
              </div>
              <div className="card-time">
                <div>Thursday</div>
              </div>
              <div className="card-detail">
                <div className="card-source text-bold">
                  National Institute of Science
                </div>
                <div className="card-description">
                  Earn POAP badge at CC Global Crypto Summit
                </div>
                <div className="card-note">
                  7:30pm, Carnegie Center for Science
                </div>
              </div>
            </div>
            <div className="card-row">
              <div className="card-icon">
                <i className="fas fa-heart" />
              </div>
              <div className="card-time">
                <div>Friday</div>
              </div>
              <div className="card-detail">
                <div className="card-source text-bold">
                  24th Annual Heart Ball
                </div>
                <div className="card-description">
                  Join us and contribute to your favorite local charity and earn
                  a Budge.
                </div>
                <div className="card-note">6:45pm, Austin Convention Ctr</div>
              </div>
            </div>
            <div className="card-row">
              <div className="card-icon">
                <i className="fas fa-heart" />
              </div>
              <div className="card-time">
                <div>Saturday</div>
              </div>
              <div className="card-detail">
                <div className="card-source text-bold">
                  Little Tech Air Show
                </div>
                <div className="card-description">
                  See the Eth fly with roaring glitter
                </div>
                <div className="card-note">11:00pm, Jacksonville Postcard</div>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            <div className="card-header-title text-light">
              Recent <strong>Issued Tokens</strong>
              <a href="/" className="card-header-link text-bold">
                View All
              </a>
            </div>
            <div className="settings">
              <div className="settings-block">
                <i className="fas fa-edit" />
              </div>
              <div className="settings-block">
                <i className="fas fa-cog" />
              </div>
            </div>
          </div>
          <div className="card">
            <div className="documents">
              {documents.map(({ title, date }, i) => (
                <div className="document" key={i}>
                  <div className="document-img" />
                  <div className="document-title">{title} </div>
                  <div className="document-date">{date}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="card card--finance">
          <div className="card-header">
            <div className="card-header-title text-light">
              Monthly <strong>Spending</strong>
              <a href="/" className="card-header-link text-bold">
                View All
              </a>
            </div>
            <div className="settings">
              <div className="settings-block">
                <i className="fas fa-edit" />
              </div>
              <div className="settings-block">
                <i className="fas fa-cog" />
              </div>
            </div>
          </div>
          <div id="chartdiv"></div>
        </div>
      </div>
      <div className="main-cards">
        <div className="col-md-4 col-md-offset-4">
          <p>
            <div align="center">
              <p> Accounts holding POAP</p>
              <p>Hover to show Details</p>
              <div id="piechart"></div>
              <p>
                <small>Total and Percentage</small>
              </p>
            </div>
          </p>
          <div style={{ position: "relative" }}>
            <div className="c100 p74 big">
              <span className="font-family-Avenir font-size-super">74%</span>
              <div className="slice">
                <div className="bar" />
                <div className="fill" />
              </div>
              <p className="complete-text font-family-primary font-weight-regular" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
