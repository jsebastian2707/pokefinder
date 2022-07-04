import React, { Component } from "react";
class PokeInfo extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-header">
          <h3><img src={this.props.pokeimg} alt="poke" />{this.props.pokename}</h3>
        </div>
        <div className="card-body">
          <img src={this.props.pokeimg2} alt="poke" />
          <p className="card-text">{this.props["pokedesc"]}</p>
        </div>
      </div>
    );
  }
}
export default PokeInfo;

//  ██╗  ██╗ █████╗ ██╗  ██╗██╗   ██╗
//  ██║  ██║██╔══██╗██║ ██╔╝██║   ██║
//  ███████║███████║█████╔╝ ██║   ██║
//  ██╔══██║██╔══██║██╔═██╗ ██║   ██║
//  ██║  ██║██║  ██║██║  ██╗╚██████╔╝
//  ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝ ╚═════╝ 