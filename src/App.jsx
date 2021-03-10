import React from 'react';
import Shell from "./Shell"
import config from "./config.js"

class App extends React.Component {
  save() {
    const configration = config()
    Object.entries(configration).forEach((entry) => {
      const index = entry[0];
      const value = entry[1];
      localStorage.setItem(index, value)
    })
  }

  render() {
    this.save();
    return (
      <Shell />
    )
  }
}

export default App;