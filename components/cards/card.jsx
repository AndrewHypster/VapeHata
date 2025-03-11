'use client'
import { useState } from 'react';
import InputNum from '../input/input'
import './card.css'
import { ABlock } from '../link/link';
import Image from 'next/image';
import { useShowAlert } from '../alert/alert';

const Card = ({type, kind, name, price, img, link='#'}) => {
  const [quantity, setQuantity] = useState(1);
  const showAlert = useShowAlert()

  const toCar = () => {
    const store = JSON.parse(localStorage.getItem('car'))?? []
    // const id = crypto.randomUUID().split('-')[0]
    store.push({kind, name, price, quantity, link})
    localStorage.setItem('car', JSON.stringify(store))
    showAlert('success', 'Успішно додано в кошик!')
  }
  
  return (
  <div href={link} className="card">
    <div className="relative">
      <ABlock href={link}>
        <CardType type={type} />
        <Image src={img} width={150} height={150} alt={name} className='card-img' />
      </ABlock>
    </div>
    <div className="card-content">
      <div className="card-text">
        <small className="card-kind">{kind}</small>
        <b className="card-name">{name}</b>
      </div>
      <span className="card-price">{price * quantity}грн</span>
      <form className="card-form">
        <InputNum value={quantity} onChange={setQuantity} />
        <button type='button' className="card-btn" onClick={toCar}>В кошик</button>
      </form>
      <div className="card-colors"></div>
    </div>
  </div>
  )
}

const CardType = ({ type }) => {
  if (type == 'new')
    return (
      <span className="card-type card-type-new">Новинка</span>
    )
  else if (type == 'top')
    return (
      <span className="card-type card-type-top">Топ</span>
    )
  else return <></>
}

export default Card
