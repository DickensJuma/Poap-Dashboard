import React from "react";
import {
  tokensRec,
  ethAc,
  mail,
  unreadmail,
  archives,
  vacation,
  anniversary,
  university,
  finances,
  tokenStats,
  activeAcc,
  tripLogs,
  playdates,
  networking,
  weddings,
} from "./navData";

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
            <i className="fas fa-clipboard-list" />
          </li>
          <li>
            <div className="navList-subheading row row--align-v-center">
              <span className="navList-subheading-icon">
                <i class="fas fa-coins" />
              </span>
              <span className="navList-subheading-title">Tokens Received</span>
            </div>
            <ul className="subList subList--hidden">
              {tokensRec.map(({ title }, i) => (
                <li className="subList-item" key={i}>
                  {title}
                </li>
              ))}
            </ul>
          </li>
          <li>
            <div className="navList-subheading row row--align-v-center">
              <span className="navList-subheading-icon">
                <i class="fas fa-chart-bar" />
              </span>
              <span className="navList-subheading-title">Token stats</span>
            </div>
            <ul className="subList subList--hidden">
              {tokenStats.map(({ time }, i) => (
                <li className="subList-item" key={i}>
                  {time}
                </li>
              ))}
            </ul>
          </li>
          <li>
            <div className="navList-subheading row row--align-v-center">
              <span className="navList-subheading-icon">
                <i class="fab fa-ethereum" />
              </span>
              <span className="navList-subheading-title">ETH Accounts</span>
            </div>
            <ul className="subList subList--hidden">
              {ethAc.map(({ title }, i) => (
                <li className="subList-item" key={i}>
                  {title}
                </li>
              ))}
            </ul>
          </li>
          <li>
            <div className="navList-subheading row row--align-v-center">
              <span className="navList-subheading-icon">
                <i class="fab fa-ethereum" />
              </span>
              <span className="navList-subheading-title">Active Accounts</span>
            </div>
            <ul className="subList subList--hidden">
              {activeAcc.map(({ acc }, i) => (
                <li className="subList-item" key={i}>
                  {acc}
                </li>
              ))}
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
              {mail.map(({ type }, i) => (
                <li className="subList-item" key={i}>
                  {type}
                </li>
              ))}
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
              {unreadmail.map(({ type }, i) => (
                <li className="subList-item" key={i}>
                  {type}
                </li>
              ))}
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
              {archives.map(({ type }, i) => (
                <li className="subList-item" key={i}>
                  {type}
                </li>
              ))}
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
              {vacation.map(({ city }, i) => (
                <li className="subList-item" key={i}>
                  {city}
                </li>
              ))}
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
              {anniversary.map(({ activity }, i) => (
                <li className="subList-item" key={i}>
                  {activity}
                </li>
              ))}
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
              {university.map(({ activity }, i) => (
                <li className="subList-item" key={i}>
                  {activity}
                </li>
              ))}
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
              {finances.map(({ activity }, i) => (
                <li className="subList-item" key={i}>
                  {activity}
                </li>
              ))}
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
              {tripLogs.map(({ city }, i) => (
                <li className="subList-item" key={i}>
                  {city}
                </li>
              ))}
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
              {weddings.map(({ time }, i) => (
                <li className="subList-item" key={i}>
                  {time}
                </li>
              ))}
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
              {playdates.map(({ type }, i) => (
                <li className="subList-item" key={i}>
                  {type}
                </li>
              ))}
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
              {networking.map(({ field }, i) => (
                <li className="subList-item" key={i}>
                  {field}
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </div>
    </aside>
  );
}

export default SideNav;
