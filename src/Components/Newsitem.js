import React, { Component } from "react";
export default class Newsitem extends Component {
  render() {
    let { title, description, imgSrc, newsUrl, author, date, source } = this.props
    return (
      <div>
        <div className="card mb-3">
          <div className="card">
            <span className="position-absolute top-0 translate-middle badge rounded-pill bg-info" > {source}
            </span>
            <img src={!imgSrc ? "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202208/photo-1552820728-8b83bb6b773f_6-647x363.jpeg?yT8rjF0_CK3a2kucokD2_ykbTkA3gKIu" : imgSrc} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">
                {description}
              </p>
              <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
              <a href={newsUrl} rel="noreferrer" target='_blank' className="btn btn-sm btn-dark">
                Load More
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
