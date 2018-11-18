import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

// Components
import Header from './components/header'
import Footer from './components/footer'

// Pages
import Home from './pages/home'
import GettingHere from './pages/getting-here'
import EssentialInformation from './pages/essential-information'
import Activities from './pages/activities'
import FAQ from './pages/faq'

class App extends React.Component {
  render (match) {
    return (
      <div>
        <Router>
          <div>
            <div
              style={{
                minHeight: 'calc(100vh - 256px)',
                paddingTop: 56
              }}
            >
              <Header />

              <Route path="/" exact component={Home} />
              <Route path="/getting-here" component={GettingHere} />
              <Route
                path="/essential-information"
                component={EssentialInformation}
              />
              <Route path="/activities" component={Activities} />
              <Route path="/faq" component={FAQ} />
            </div>
            <Footer />
          </div>
        </Router>
      </div>
    )
  }
}

export default App
