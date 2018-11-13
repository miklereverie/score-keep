import React from "react";
import PropTypes from "prop-types";
export default class TitleBar extends React.Component {
  renderSubtitle() {
    if (this.props.subtitulo) {
      return <h2 className="title-bar__subtitle">{this.props.subtitulo}</h2>;
    }
  }
  render() {
    return (
      <div className="title-bar">
        <div className="wrapper">
          <h1>{this.props.titulo}</h1>
          {this.renderSubtitle()}
        </div>
      </div>
    );
  }
}

TitleBar.propTypes = {
  titulo: PropTypes.string.isRequired,
  subtitulo: PropTypes.string
};

TitleBar.defaultProps = {
  //   titulo: "titulo por defecto",
  //   subtitulo: "Subtitulo por defecto"
};
