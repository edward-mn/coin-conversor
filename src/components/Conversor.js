import React, { Component } from "react";
import "./Conversor.css";

export default class Conversor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      originCurrency: "",
      finalCurrency: 0,
    };

    this.converter = this.converter.bind(this); //Pass object to converter
  }

  converter() {
    let originToFinalCurrency = `${this.props.originCurrency}-${this.props.finalCurrency}`;
    let url = `https://economia.awesomeapi.com.br/json/${originToFinalCurrency}`;

    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        let actualValueCurrency = json[0].bid;
        let convertedCurrency = (
          this.state.originCurrency * actualValueCurrency
        ).toFixed(2);
        const currencyFormated = parseFloat(convertedCurrency).toLocaleString(
          "pt-BR",
          {
            style: "currency",
            currency: this.props.finalCurrency,
          }
        );
        this.setState({ finalCurrency: currencyFormated });
      });
  }

  render() {
    return (
      <div className="card-conversor">
        <h2>
          {this.props.originCurrency} para {this.props.finalCurrency}
        </h2>
        <input
          type="text"
          onChange={(event) => {
            this.setState({ originCurrency: event.target.value });
          }}
        ></input>
        <input type="button" value="Converter" onClick={this.converter}></input>
        <h2>{this.state.finalCurrency}</h2>
      </div>
    );
  }
}
