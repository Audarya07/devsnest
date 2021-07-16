import React, { Component } from 'react';

class Card extends Component {
    render(){
        return (
            <div className="card">
                <img src="https://picsum.photos/300/200" alt="" />
                <h2>React Card</h2>
                <p>Reload again and again to get new pictures</p>
            </div>
        );
    }
}

export default Card;