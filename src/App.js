import React from 'react';

import './App.css';

function App() {
  return (
 <div className="grid">
  <header className="header">
    <i className="fas fa-bars header-menu" />
    <div className="header-search">
      <input className="header-input" placeholder="Search..." />
    </div>
    <div className="header-avatar">
      <div className="dropdown">
        <ul className="dropdown-list">
          <li className="dropdown-list-item">
            <span className="dropdown-icon"><i className="far fa-user" /></span>
            <span className="dropdown-title">my profile</span>
          </li>
          <li className="dropdown-list-item">
            <span className="dropdown-icon"><i className="fas fa-clipboard-list" /></span>
            <span className="dropdown-title">my account</span>
          </li>
          <li className="dropdown-list-item">
            <span className="dropdown-icon"><i className="fas fa-sign-out-alt" /></span>
            <span className="dropdown-title">log out</span>
          </li>
        </ul>
      </div>
    </div>
  </header>
  <aside className="sidenav">
    <div className="sidenav-brand">
      <i className="fas fa-feather-alt sidenav-brand-icon" />
      <a className="sidenav-brand-link" href="#">Ux<span className="text-light">Pro</span></a>
      <i className="fas fa-times sidenav-brand-close" />
    </div>
    <div className="sidenav-profile">
      <div className="sidenav-profile-avatar" />
      <div className="sidenav-profile-title text-light">Matthew H</div>
    </div>
    <div className="row row--align-v-center row--align-h-center">
      <ul className="navList">
        <li className="navList-heading">
          documents<i className="far fa-file-alt" />
        </li>
        <li>
          <div className="navList-subheading row row--align-v-center">
            <span className="navList-subheading-icon"><i className="fas fa-briefcase-medical" /></span>
            <span className="navList-subheading-title">insurance</span>
          </div>
          <ul className="subList subList--hidden">
            <li className="subList-item">medical</li>
            <li className="subList-item">vision</li>
            <li className="subList-item">dental</li>
          </ul>
        </li>
        <li>
          <div className="navList-subheading row row--align-v-center">
            <span className="navList-subheading-icon"><i className="fas fa-plane-departure" /></span>
            <span className="navList-subheading-title">travel</span>
          </div>
          <ul className="subList subList--hidden">
            <li className="subList-item">domestic</li>
            <li className="subList-item">foreign</li>
            <li className="subList-item">misc</li>
          </ul>
        </li>
        <li>
          <div className="navList-subheading row row--align-v-center">
            <span className="navList-subheading-icon"><i className="far fa-angry" /></span>
            <span className="navList-subheading-title">taxes</span>
          </div>
          <ul className="subList subList--hidden">
            <li className="subList-item">current</li>
            <li className="subList-item">archives</li>
          </ul>
        </li>
        <li className="navList-heading">
          messages<i className="far fa-envelope" />
        </li>
        <li>
          <div className="navList-subheading row row--align-v-center">
            <span className="navList-subheading-icon"><i className="fas fa-envelope" /></span>
            <span className="navList-subheading-title">inbox</span>
          </div>
          <ul className="subList subList--hidden">
            <li className="subList-item">primary</li>
            <li className="subList-item">social</li>
            <li className="subList-item">promotional</li>
          </ul>
        </li>
        <li>
          <div className="navList-subheading row row--align-v-center">
            <span className="navList-subheading-icon"><i className="fas fa-eye" /></span>
            <span className="navList-subheading-title">unread</span>
          </div>
          <ul className="subList subList--hidden">
            <li className="subList-item">primary</li>
            <li className="subList-item">social</li>
            <li className="subList-item">promotional</li>
          </ul>
        </li>
        <li>
          <div className="navList-subheading row row--align-v-center">
            <span className="navList-subheading-icon"><i className="fas fa-book-open" /></span>
            <span className="navList-subheading-title">archives</span>
          </div>
          <ul className="subList subList--hidden">
            <li className="subList-item">primary</li>
            <li className="subList-item">social</li>
            <li className="subList-item">promotional</li>
          </ul>
        </li>
        <li className="navList-heading">
          photo album<i className="far fa-image" />
        </li>
        <li>
          <div className="navList-subheading row row--align-v-center">
            <span className="navList-subheading-icon"><i className="fas fa-mountain" /></span>
            <span className="navList-subheading-title">vacation</span>
          </div>
          <ul className="subList subList--hidden">
            <li className="subList-item">cambodia</li>
            <li className="subList-item">new york</li>
          </ul>
        </li>
        <li>
          <div className="navList-subheading row row--align-v-center">
            <span className="navList-subheading-icon"><i className="fas fa-wine-glass-alt" /></span>
            <span className="navList-subheading-title">anniversary</span>
          </div>
          <ul className="subList subList--hidden">
            <li className="subList-item">dive trip</li>
            <li className="subList-item">hikathon</li>
            <li className="subList-item">buffalo river</li>
          </ul>
        </li>
        <li>
          <div className="navList-subheading row row--align-v-center">
            <span className="navList-subheading-icon"><i className="fas fa-graduation-cap" /></span>
            <span className="navList-subheading-title">university</span>
          </div>
          <ul className="subList subList--hidden">
            <li className="subList-item">wild horse saloon</li>
            <li className="subList-item">service corps</li>
            <li className="subList-item">graduation</li>
            <li className="subList-item">internships</li>
          </ul>
        </li>
        <li className="navList-heading">
          statistics<i className="fas fa-chart-bar" />
        </li>
        <li>
          <div className="navList-subheading row row--align-v-center">
            <span className="navList-subheading-icon"><i className="fas fa-credit-card" /></span>
            <span className="navList-subheading-title">finances</span>
          </div>
          <ul className="subList subList--hidden">
            <li className="subList-item">mortgage</li>
            <li className="subList-item">investments</li>
            <li className="subList-item">spend log</li>
            <li className="subList-item">owed</li>
          </ul>
        </li>
        <li>
          <div className="navList-subheading row row--align-v-center">
            <span className="navList-subheading-icon"><i className="fas fa-phone" /></span>
            <span className="navList-subheading-title">call stats</span>
          </div>
          <ul className="subList subList--hidden">
            <li className="subList-item">last month</li>
            <li className="subList-item">bi-weekly</li>
            <li className="subList-item">yesterday</li>
            <li className="subList-item">today</li>
          </ul>
        </li>
        <li>
          <div className="navList-subheading row row--align-v-center">
            <span className="navList-subheading-icon"><i className="fas fa-plane" /></span>
            <span className="navList-subheading-title">trip logs</span>
          </div>
          <ul className="subList subList--hidden">
            <li className="subList-item">amsterdam</li>
            <li className="subList-item">buenos aires</li>
            <li className="subList-item">cambodia</li>
            <li className="subList-item">greenland</li>
          </ul>
        </li>
        <li className="navList-heading">
          Events<i className="fas fa-calendar-alt" />
        </li>
        <li>
          <div className="navList-subheading row row--align-v-center">
            <span className="navList-subheading-icon"><i className="fas fa-wine-glass-alt" /></span>
            <span className="navList-subheading-title">weddings</span>
          </div>
          <ul className="subList subList--hidden">
            <li className="subList-item">past</li>
            <li className="subList-item">present</li>
            <li className="subList-item">future</li>
          </ul>
        </li>
        <li>
          <div className="navList-subheading row row--align-v-center">
            <span className="navList-subheading-icon"><i className="fas fa-school" /></span>
            <span className="navList-subheading-title">playdates</span>
          </div>
          <ul className="subList subList--hidden">
            <li className="subList-item">weirdos</li>
            <li className="subList-item">smarties</li>
            <li className="subList-item">nerds</li>
          </ul>
        </li>
        <li>
          <div className="navList-subheading row row--align-v-center">
            <span className="navList-subheading-icon"><i className="fas fa-users" /></span>
            <span className="navList-subheading-title">networking</span>
          </div>
          <ul className="subList subList--hidden">
            <li className="subList-item">tech</li>
            <li className="subList-item">automotive</li>
            <li className="subList-item">UX research</li>
            <li className="subList-item">development</li>
          </ul>
        </li>
      </ul>
    </div>
  </aside>
  <main className="main">
    <div className="main-header">
      <div className="main-header-intro-wrapper">
        <div className="main-header-welcome">
          <div className="main-header-welcome-title text-light">
            Welcome, <strong>Matthew</strong>
          </div>
          <div className="main-header-welcome-subtitle text-light">
            How are you today?
          </div>
        </div>
        <div className="quickview">
          <div className="quickview-item">
            <div className="quickview-item-total">41</div>
            <div className="quickview-item-description">
              <i className="far fa-calendar-alt" />
              <span className="text-light">Events</span>
            </div>
          </div>
          <div className="quickview-item">
            <div className="quickview-item-total">64</div>
            <div className="quickview-item-description">
              <i className="far fa-comment" />
              <span className="text-light">Messages</span>
            </div>
          </div>
          <div className="quickview-item">
            <div className="quickview-item-total">27°</div>
            <div className="quickview-item-description">
              <i className="fas fa-map-marker-alt" />
              <span className="text-light">Austin</span>
            </div>
          </div>
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
            New <strong>Document</strong>
          </h3>
          <p className="overviewCard-subtitle">Europe Trip</p>
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
          <p className="overviewCard-subtitle">Chili Cookoff</p>
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
            New <strong>Album</strong>
          </h3>
          <p className="overviewCard-subtitle">House Concert</p>
        </div>
      </div>
    </div>
    <div className="main-cards">
      <div className="card">
        <div className="card-header">
          <div className="card-header-title text-light">
            Your <strong>Events</strong>
            <a href="#" className="card-header-link text-bold">View All</a>
          </div>
          <div className="settings">
            <div className="settings-block"><i className="fas fa-edit" /></div>
            <div className="settings-block"><i className="fas fa-cog" /></div>
          </div>
        </div>
        <div className="card-main">
          <div className="card-row">
            <div className="card-icon"><i className="fas fa-gift" /></div>
            <div className="card-time">
              <div>today</div>
            </div>
            <div className="card-detail">
              <div className="card-source text-bold">Jonathan G</div>
              <div className="card-description">
                Going away party at 8:30pm. Bring a friend!
              </div>
              <div className="card-note">1404 Gibson St</div>
            </div>
          </div>
          <div className="card-row">
            <div className="card-icon"><i className="fas fa-plane" /></div>
            <div className="card-time">
              <div>Tuesday</div>
            </div>
            <div className="card-detail">
              <div className="card-source text-bold">Matthew H</div>
              <div className="card-description">
                Flying to Bora Bora at 4:30pm
              </div>
              <div className="card-note">Delta, Gate 27B</div>
            </div>
          </div>
          <div className="card-row">
            <div className="card-icon"><i className="fas fa-book" /></div>
            <div className="card-time">
              <div>Thursday</div>
            </div>
            <div className="card-detail">
              <div className="card-source text-bold">
                National Institute of Science
              </div>
              <div className="card-description">
                Join the institute for an in-depth look at Stephen Hawking
              </div>
              <div className="card-note">
                7:30pm, Carnegie Center for Science
              </div>
            </div>
          </div>
          <div className="card-row">
            <div className="card-icon"><i className="fas fa-heart" /></div>
            <div className="card-time">
              <div>Friday</div>
            </div>
            <div className="card-detail">
              <div className="card-source text-bold">
                24th Annual Heart Ball
              </div>
              <div className="card-description">
                Join us and contribute to your favorite local charity.
              </div>
              <div className="card-note">6:45pm, Austin Convention Ctr</div>
            </div>
          </div>
          <div className="card-row">
            <div className="card-icon"><i className="fas fa-heart" /></div>
            <div className="card-time">
              <div>Saturday</div>
            </div>
            <div className="card-detail">
              <div className="card-source text-bold">Little Rock Air Show</div>
              <div className="card-description">
                See the Blue Angels fly with roaring thunder
              </div>
              <div className="card-note">
                11:00pm, Jacksonville Airforce Base
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-header">
          <div className="card-header-title text-light">
            Recent <strong>Documents</strong>
            <a href="#" className="card-header-link text-bold">View All</a>
          </div>
          <div className="settings">
            <div className="settings-block"><i className="fas fa-edit" /></div>
            <div className="settings-block"><i className="fas fa-cog" /></div>
          </div>
        </div>
        <div className="card">
          <div className="documents">
            <div className="document">
              <div className="document-img" />
              <div className="document-title">tesla-patents</div>
              <div className="document-date">07/16/2018</div>
            </div>
            <div className="document">
              <div className="document-img" />
              <div className="document-title">yearly-budget</div>
              <div className="document-date">09/04/2018</div>
            </div>
            <div className="document">
              <div className="document-img" />
              <div className="document-title">top-movies</div>
              <div className="document-date">10/10/2018</div>
            </div>
            <div className="document">
              <div className="document-img" />
              <div className="document-title">trip-itinerary</div>
              <div className="document-date">11/01/2018</div>
            </div>
          </div>
        </div>
      </div>
      <div className="card card--finance">
        <div className="card-header">
          <div className="card-header-title text-light">
            Monthly <strong>Spending</strong>
            <a href="#" className="card-header-link text-bold">View All</a>
          </div>
          <div className="settings">
            <div className="settings-block"><i className="fas fa-edit" /></div>
            <div className="settings-block"><i className="fas fa-cog" /></div>
          </div>
        </div>
        <div id="chartdiv" />
      </div>
    </div>
    {/* /.main-cards */}
  </main>
  <footer className="footer">
    <p><span className="footer-copyright">©</span> 2018 MTH</p>
    <p>
      Crafted with <i className="fas fa-heart footer-icon" /> by
      <a href="https://www.linkedin.com/in/matt-holland/" target="_blank" className="footer-signature">Matt H</a>
    </p>
  </footer>
</div>

  );
}

export default App;
