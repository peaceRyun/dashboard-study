'use client';

import React from 'react';

class OrderCoffee extends React.Component {
    // 생성자 함수
    constructor(props) {
        super(props); //부모 생성자 함수 호출
        this.state = {
            name: props.name,
            price: props.price,
        };
    }

    order() {
        console.log(`${this.state.name}은 ${this.state.price}원 입니다.`);
    }

    // render 메서드
    render() {
        return (
            <div>
                <h1>{this.state.name}</h1>
                <p>가격: {this.state.price}원</p>
                <button onClick={() => this.order()}>주문하기</button>
            </div>
        );
    }
}

export default OrderCoffee;
