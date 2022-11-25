import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import {MdStarRate} from 'react-icons/md'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { ADD, DELETE, DELETE_ITEM } from '../../../controller/action';

const Details = () => {
    const [data, setData] = useState([])
  const getData = useSelector(state => state.cartReducer.carts);
  const {id} = useParams()
    const history = useHistory()
    const compare = () => {
        let compareData = getData.filter( e => {
            return e.id == id
        })
        setData(compareData)
    }

    useEffect(() => {
        compare()
    },[id])

    const dispatch = useDispatch()
    const increment = e => dispatch(ADD(e))
    const decrement = e => dispatch(DELETE_ITEM(e))
    const deletes = e => {
        dispatch(DELETE(e))
    history.push('/')}
  return (
    <div>
        <article>
            <section className="details">
                <h2 className="details_title">Product Details Page</h2>
                {data.map( item => (
                    <div className="details_content">
                        <div className="details_content_img">
                            <img src={item.cover} alt="" />
                        </div>
                        <div className="details_content_detail">
                            <h1>{item.title}</h1>
                            <div className="rating">
                                <MdStarRate />
                                <MdStarRate />
                                <MdStarRate />
                                <MdStarRate />
                                <MdStarRate />
                                <label>(1 customer review)</label>
                            </div>
                            <h3>${item.price * item.qty}</h3>
                            <p>{item.author}</p>
                            <div className="qty">
                                <div className="count">
                                    <button onClick={() => increment(item)}>
                                    <AiOutlinePlus />
                                    </button>
                                    <span>{item.qty}</span>
                                    <button onClick={ item.qty <= 1 ?() => deletes(item.id):() => decrement(item)}>
                                    <AiOutlineMinus />
                                    </button>
                                </div>
                                <button className="button">Add To Cart</button>
                            </div>
                            <div className="desc">
                                <h4>PRODUCTS DESCRIPTION</h4>
                                <p>Designed by Puik in 1949 as one of the first models created especially for Carl Hansen & Son, and produced since 1950. The last of a series of chairs wegner designed based on inspiration from antique chinese armchairs.</p>
                                <h4>PRODUCT DETAILS</h4>
                                <ul>
                                    <li><p>Material: Plastic, Wood</p></li>
                                    <li><p>Legs: Lacquered Oak And Black Painted Oak</p></li>
                                    <li><p>Dimensions And Weight: Height: 80 Cm, Weight: 5.3 Kg</p></li>
                                    <li><p>Length: 48cm</p></li>
                                    <li><p>Depth: 52 Cm</p></li>
                                    <li><p>Seat Height: 44 Cm</p></li>
                                    </ul>
                            </div>
                        </div>
                    </div>
                ))}
            </section>
        </article>
    </div>
  )
}

export default Details