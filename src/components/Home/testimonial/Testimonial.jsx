import React from 'react';
import {ImQuotesRight} from 'react-icons/im'
import { customer } from '../../assets/data/data'
import Heading from '../../common/Heading'

const Testimonial = () => {
  return (
    <>
        <section className="customer">
            <Heading title='Choose The Plans' desc='Meet our newbies! The latest templates uploaded to the marketplace.' />

            <div className="content">
                {customer.map(item => (
                    <div className="card">
                        <button>
                            <ImQuotesRight />
                        </button>
                        <p>{item.desc}</p>
                        <h3>{item.name}</h3>
                        <span>{item.post}</span>
                    </div>
                ))}
            </div>
        </section>
    </>
  )
}

export default Testimonial