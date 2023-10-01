import React, { Component } from 'react';

class ShopItemFunc extends Component {
    render() {
        return (
            <div class="main-content">
                <h2>{this.item.brand}</h2>
                <h1>{this.item.title}</h1>
                <h3>{this.item.description}</h3>
                <div class="description">
                    {this.item.descriptionFull}
                </div>
                <div class="highlight-window mobile"><div class="highlight-overlay"></div></div>
                <div class="divider"></div>
                <div class="purchase-info">
                    <div class="price">{this.item.currency}{this.item.price}</div>
                    <button>Добавить в корзину</button>
                </div>
            </div>
        )
    }
}

export default ShopItemFunc;