import React from "react";

class ItemCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    handleDecreaseItem = () => {
        this.props.item.count > 0 && this.props.handleItemCountChange(this.props.item.id, --this.props.item.count);
    }

    handleIncreaseItem = () => {
        this.props.handleItemCountChange(this.props.item.id, ++this.props.item.count);
    }

    render() {
        return (
            <div className="ItemCard">
                <div className="thumbnail">
                    <img
                        src={this.props.item.thumbnail}
                        alt="item thumbnail"
                    />
                </div>
                <div className="Item-Info">
                    <h3 className="name">{this.props.item.name}</h3>
                    <p className="subtitle">{this.props.item.detail}</p>
                    <div className="price">
                        ${parseFloat(this.props.item.price).toFixed(2)}
                    </div>
                </div>
                <div>
                    <div className="ItemActions-action">
                        <button onClick={this.handleDecreaseItem}>-</button>
                        <span>{this.props.item.count}</span>
                        <button onClick={this.handleIncreaseItem}>+</button>
                    </div>
                    <div className="ItemActions-total">
                        ${parseFloat(this.props.item.price * this.props.item.count).toFixed(2)}
                    </div>
                </div>
            </div>
        );
    }
}

export default ItemCard;
