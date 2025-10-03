import { Component } from "react";
import Slider from "react-slick";

class Gallery extends Component {
  state = {
    movies: [],
    isLoading: true,
    error: null,
  };

  async componentDidMount() {
    try {
      const response = await fetch(
        `http://www.omdbapi.com/?apikey=c427f576&s=${this.props.query}`
      );

      if (!response.ok) {
        throw new Error("Errore nel fetch dei film");
      }

      const data = await response.json();

      if (data.Response === "True") {
        this.setState({ movies: data.Search, isLoading: false });
      } else {
        this.setState({ error: data.Error, isLoading: false });
      }
    } catch (err) {
      this.setState({ error: err.message, isLoading: false });
    }
  }

  render() {
    const { movies, isLoading, error } = this.state;

    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 6,
      arrows: true,
      responsive: [
        { breakpoint: 1200, settings: { slidesToShow: 5, slidesToScroll: 5 } },
        { breakpoint: 992, settings: { slidesToShow: 4, slidesToScroll: 4 } },
        { breakpoint: 768, settings: { slidesToShow: 3, slidesToScroll: 3 } },
        { breakpoint: 576, settings: { slidesToShow: 2, slidesToScroll: 2 } },
      ],
    };

    return (
      <div className="container-fluid my-4">
        <h4 className="text-white mb-3">{this.props.title}</h4>
        {isLoading && <p className="text-white">Loading...</p>}
        {error && <p className="text-danger">{error}</p>}

        <div className="px-4">
          <Slider {...settings}>
            {movies.map((movie) => (
              <div key={movie.imdbID} className="px-2">
                <img
                  src={
                    movie.Poster !== "N/A"
                      ? movie.Poster
                      : "https://via.placeholder.com/200x300?text=No+Image"
                  }
                  alt={movie.Title}
                  className="rounded shadow-sm"
                  style={{
                    width: "100%",
                    height: "300px",
                    objectFit: "cover",
                  }}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    );
  }
}

export default Gallery;
