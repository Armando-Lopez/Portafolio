import React from "react";

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: undefined,
      title: undefined,
      description: undefined,
      url: undefined,
      img: undefined,
    };
    this._scrollAppear = this._scrollAppear.bind(this);
  }

  componentDidMount() {
    this.setState({
      index: this.props.index,
      title: this.props.title,
      description: this.props.description,
      url: this.props.url,
      img: this.props.img,
    });

    this.card = React.createRef();
    if (this.card.current) console.log(this.card);

    const card = document.querySelectorAll(".card")[this.props.index];
    const cardTitle = card.querySelector(".card__title");
    const cardDescription = card.querySelector(".card__description");
    this._scrollAppear(card, cardTitle, cardDescription);
    window.addEventListener("scroll", () => {
      this._scrollAppear(card, cardTitle, cardDescription);
    });
  }

  _scrollAppear(card, cardTitle, cardDescription) {
    const cardPosition = card.getBoundingClientRect().top;
    if (cardPosition < window.innerHeight / 1.3) {
      cardTitle.classList.add("card__title-appear");
      cardDescription.classList.add("card__description-appear");
    }
  }

  render() {
    const { title, description, url, img } = this.state;
    return (
      <a href={url}>
        <div className="card" ref={this.card}>
          <img
            className="card__thumbnail"
            src={img}
            alt={title}
            loading="lazy"
          />
          <div className="card__title">
            <h3>{title}</h3>
          </div>
          <div className="card__description">
            <p>{description}</p>
          </div>
        </div>
      </a>
    );
  }
}

export default Card;
