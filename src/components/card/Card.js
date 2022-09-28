import React from "react";
import './Card.css'
function Card(props) {
    return (
        <div className="cardContainer container-fluid">
            <div class="card-wrapper">
                <div class="card-top">
                    <img
                        class="image"
                        src={props.carImg.img4}
                    />
                </div>
                <div class="card-bottom">
                    <p class="top-text">News ! </p>
                    <span class="bottom-text">
                        Abe Funeral Delegation Named 'Taiwan' Foreign Ministry: China has no reason to protest
                    </span>
                </div>
            </div>
            <div class="card-wrapper">
                <div class="card-top">
                    <img
                        class="image"
                        src={props.carImg.img5}
                    />
                </div>
                <div class="card-bottom">
                    <p class="top-text">News ! </p>
                    <span class="bottom-text">
                    Abe Funeral Delegation Named 'Taiwan' Foreign Ministry: China has no reason to protest
                    </span>
                </div>
            </div>
            <div class="card-wrapper">
                <div class="card-top">
                    <img
                        class="image"
                        src={props.carImg.img6}
                    />
                </div>
                <div class="card-bottom">
                    <p class="top-text">News ! </p>
                    <span class="bottom-text">
                    Abe Funeral Delegation Named 'Taiwan' Foreign Ministry: China has no reason to protest
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Card;
