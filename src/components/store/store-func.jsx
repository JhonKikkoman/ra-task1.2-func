import React, { Component } from 'react';

class ShopItemFunc extends Component {
    // eslint-disable-next-line no-useless-constructor
    // constructor(props) {
    //     super(props)
    // }
    render() {
        return (
            <div class="main-content">
                <h2>{this.props.render.brand}</h2>
                <h1>{this.props.render.title}</h1>
                <h3>{this.props.render.description}</h3>
                <div class="description">
                    {this.props.render.descriptionFull}
                </div>
                <div class="highlight-window mobile"><div class="highlight-overlay"></div></div>
                <div class="divider"></div>
                <div class="purchase-info">
                    <div class="price">{this.props.render.currency}{this.props.render.price}</div>
                    <button>Добавить в корзину</button>
                </div>
            </div>
        )
    }
}

export default ShopItemFunc;