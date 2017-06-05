import React, { Component } from 'react';
import moment from 'moment';

import Section from '../Section';
import Job from '../Job';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selections: []
    };
  }
  renderSelections() {

  }

  render() {
    return (
      <div className="app">
        <header className="app__header">
          <h1>Jason Featheringham</h1>
        </header>

        <Section title="Work Experience">
          <Job
            title="User Experience Engineer"
            company={{ name: 'PagerDuty', url: 'http://www.pagerduty.com' }}
            start="2014-06"
            end="2016-05"
            location="San Francisco, CA">
            <p>
              Principal Front-End Engineer for the web-app Growth team, working closely with Design to create and ensure quality UI and UX consistency and efficiency.  Principal Sass owner and evangelist.  Part of the core Ember migration team.
            </p>
          </Job>

          <Job
            title="Lead Front-End Engineer"
            company={{ name: 'Hunters Alley' }}
            start="2013-09"
            end="2014-06"
            location="San Francisco, CA">
            <p>
              Implemented initial marketplace web app for consumers to buy and sell contemporary pre-owned or handmade products.   Strong focus on UI flow and device-agnostic usability, while primarily focused on progressive enhancement for modern browsers.  Owner of Sass/CSS.
            </p>
          </Job>

          <Job
            title="Lead Front-End Engineer"
            company={{ name: 'One Kings Lane', url: 'http://www.onekingslane.com' }}
            start="2011-11"
            end="2014-06"
            location="San Francisco, CA">
            <p>
              Single-handedly engineered the mobile-first optimized shopping experience, designed to bring customers the best shopping experience throughout their day.  Contributed documentation and brown-bag workshops to help fellow engineers hone their layout skills.  Implemented the Wish List feature, winning 1st Place in the OKL 2104 Hack Day competition with 3 other engineers.
            </p>
          </Job>

          <Job
            title="Front-End Engineering Manager"
            company={{ name: 'Scripps Networks Interactive', url: 'http://www.onekingslane.com' }}
            start="2009-09"
            end="2011-06"
            location="San Francisco, CA">
            <p>
              Led the HGTV, Food Network and Great American Country front-end team, ensuring quality code, engineering guidelines and timely delivery for the nation’s top home entertainment network websites.
            </p>
          </Job>
        </Section>
      </div>
    );
  }
}

export default App;
