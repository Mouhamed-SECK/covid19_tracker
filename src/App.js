import React from "react";
import { fetchData } from "./api";

import { Cards, Chart, CountryPicker } from "./components";
import styles from "./App.module.css";

import coronaImg from "./img/image.png";

class App extends React.Component {
  state = {
    data: {},
    country: "",
  };

  async componentDidMount() {
    const fetchedData = await fetchData();

    this.setState({ data: fetchedData });
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    console.log(fetchedData);
    this.setState({ data: fetchedData, country });
  };
  render() {
    const { data, country } = this.state;

    return (
      <div className={styles.container}>
        <img src={coronaImg} alt="Corona" className={styles.image} />
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
      </div>
    );
  }
}

export default App;
