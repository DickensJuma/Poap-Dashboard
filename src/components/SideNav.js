import React from "react";

function SideNav() {
  return (
    <aside className="sidenav">
      <div className="sidenav-brand">
        <i className="sidenav-brand-icon" />
        <a className="sidenav-brand-link" href="/">
          POAP<span className="text-light"></span>
        </a>
        <i className="fas fa-times sidenav-brand-close" />
      </div>
      <div className="sidenav-profile">
        <div className="sidenav-profile-avatar" />
        <div className="sidenav-profile-title text-light"></div>
      </div>
      <div className="row row--align-v-center row--align-h-center">
        <ul className="navList">
          <li className="navList-heading">
            Accounts
            <i className="far fa-file-alt" />
          </li>
          <li>
            <div className="navList-subheading row row--align-v-center">
              <span className="navList-subheading-icon">
                <i className="fas fa-briefcase-medical" />
              </span>
              <span className="navList-subheading-title">Tokens Received</span>
            </div>
            <ul className="subList subList--hidden">
              <li className="subList-item">Poap 1</li>
              <li className="subList-item">Poap 2</li>
              <li className="subList-item">Poap 3</li>
            </ul>
          </li>
          <li>
            <div className="navList-subheading row row--align-v-center">
              <span className="navList-subheading-icon">
                <i className="fas fa-plane-departure" />
              </span>
              <span className="navList-subheading-title">ETH Accounts</span>
            </div>
            <ul className="subList subList--hidden">
              <li className="subList-item">ACCOUNT 1</li>
              <li className="subList-item">ACCOUNT 2</li>
              <li className="subList-item">ACCOUNT 3</li>
              <li className="subList-item">ACCOUNT 4</li>
            </ul>
          </li>
          <li>
            <div className="navList-subheading row row--align-v-center">
              <span className="navList-subheading-icon">
                <i className="far fa-angry" />
              </span>
              <span className="navList-subheading-title">Active Accounts</span>
            </div>
            <ul className="subList subList--hidden">
              <li className="subList-item">Account 3</li>
              <li className="subList-item">Account 4</li>
            </ul>
          </li>
          <li className="navList-heading">
            messages
            <i className="far fa-envelope" />
          </li>
          <li>
            <div className="navList-subheading row row--align-v-center">
              <span className="navList-subheading-icon">
                <i className="fas fa-envelope" />
              </span>
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
              <span className="navList-subheading-icon">
                <i className="fas fa-eye" />
              </span>
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
              <span className="navList-subheading-icon">
                <i className="fas fa-book-open" />
              </span>
              <span className="navList-subheading-title">archives</span>
            </div>
            <ul className="subList subList--hidden">
              <li className="subList-item">primary</li>
              <li className="subList-item">social</li>
              <li className="subList-item">promotional</li>
            </ul>
          </li>
          <li className="navList-heading">
            photo album
            <i className="far fa-image" />
          </li>
          <li>
            <div className="navList-subheading row row--align-v-center">
              <span className="navList-subheading-icon">
                <i className="fas fa-mountain" />
              </span>
              <span className="navList-subheading-title">vacation</span>
            </div>
            <ul className="subList subList--hidden">
              <li className="subList-item">cambodia</li>
              <li className="subList-item">new york</li>
            </ul>
          </li>
          <li>
            <div className="navList-subheading row row--align-v-center">
              <span className="navList-subheading-icon">
                <i className="fas fa-wine-glass-alt" />
              </span>
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
              <span className="navList-subheading-icon">
                <i className="fas fa-graduation-cap" />
              </span>
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
            statistics
            <i className="fas fa-chart-bar" />
          </li>
          <li>
            <div className="navList-subheading row row--align-v-center">
              <span className="navList-subheading-icon">
                <i className="fas fa-credit-card" />
              </span>
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
              <span className="navList-subheading-icon">
                <i className="fas fa-phone" />
              </span>
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
              <span className="navList-subheading-icon">
                <i className="fas fa-plane" />
              </span>
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
            Events
            <i className="fas fa-calendar-alt" />
          </li>
          <li>
            <div className="navList-subheading row row--align-v-center">
              <span className="navList-subheading-icon">
                <i className="fas fa-wine-glass-alt" />
              </span>
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
              <span className="navList-subheading-icon">
                <i className="fas fa-school" />
              </span>
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
              <span className="navList-subheading-icon">
                <i className="fas fa-users" />
              </span>
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
  );
}

export default SideNav;
