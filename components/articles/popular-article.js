import React, { Component } from 'react';

export default class PopularArticle extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="article popular">
                <div className="image-wrapper">
                    <img src={this.props.articleData.imageUrl} />
                    <span className="article-date fs-8 fw-bold text-white">{this.props.articleData.date}</span>
                </div>
                <div className="artical-content p-2"> 
                    <div className="article-title">
                        <h6 className="text-dark">{this.props.articleData.title}</h6>
                    </div>
                    <div>
                        <p className="fs-8">
                            {this.props.articleData.content}
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}