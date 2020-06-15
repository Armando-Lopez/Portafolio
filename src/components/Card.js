import React from "react";

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: this.props.index,
      title: this.props.title,
      description: this.props.description,
      url: this.props.url,
      img: this.props.img,
    };
    // this._scrollAppear = this._scrollAppear.bind(this);
  }

  // componentDidMount() {
  //   const card = document.querySelectorAll(".card")[this.props.index];
  //   const cardTitle = card.querySelector(".card__title");
  //   const cardDescription = card.querySelector(".card__description");
  //   this._scrollAppear(card, cardTitle, cardDescription);
  //   window.addEventListener("scroll", () => {
  //     this._scrollAppear(card, cardTitle, cardDescription);
  //   });
  // }

  // _scrollAppear(card, cardTitle, cardDescription) {
  //   const cardPosition = card.getBoundingClientRect().top;
  //   if (cardPosition < window.innerHeight / 1.3) {
  //     cardTitle.classList.add("card__title-appear");
  //     cardDescription.classList.add("card__description-appear");
  //   }
  // }

  render() {
    const { title, description, url, img } = this.state;
    return (
      <div className="card">
        <div className="card__thumbnail">
          <img src={img} alt={title} loading="lazy" />
        </div>
        <div className="card__content">
          <h3 className="name">{title}</h3>
          <p className="description">{description}</p>
          <a className="link" href={url}>
            Visit project
          </a>
        </div>
      </div>
    );
  }
}

export default Card;
