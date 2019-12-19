import React from "react";
import Popup from "reactjs-popup";

class PopupMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      year: "",
      poster: "",
      rating: 0
    };
  }

  handleChangeTitle = event => {
    this.setState({
      title: event.target.value
    });
  };
  handleChangeYear = event => {
    this.setState({
      year: event.target.value.replace(/\D/g, "").slice(0, 4)
    });
  };
  handleChangePoster = event => {
    this.setState({
      poster: event.target.value
    });
  };
  handleChangeRating = event => {
    this.setState({
      rating: event.target.value
    });
  };

  render() {
    return (
      <div>
        <Popup modal trigger={<button className="btnplus">+</button>}>
          <div className="popup">
            <div className="popupContent">
              <input
                name="rating"
                placeholder="Enter rating of movie..."
                onChange={this.handleChangeRating}
                className="inputPopup"
              />
              <input
                name="poster"
                placeholder="Enter URL poster of movie..."
                onChange={this.handleChangePoster}
                className="inputPopup"
              />

              <input
                name="title"
                placeholder="Enter Title of movie..."
                onChange={this.handleChangeTitle}
                className="inputPopup"
              />
              <input
                name="year"
                placeholder="Enter Year of movie..."
                onChange={this.handleChangeYear}
                className="inputPopup"
                value={this.state.year}
              />
              <button
                className="btnadd"
                onClick={() =>
                  this.props.add(
                    this.state.title,
                    this.state.year,
                    this.state.poster,
                    this.state.rating
                  )
                }
              >
                Add Movie
              </button>
            </div>
          </div>
        </Popup>
      </div>
    );
  }
}

export default PopupMovie;
