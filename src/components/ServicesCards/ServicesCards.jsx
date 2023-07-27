
import './ServicesCardsStyle.css';
import Data from './cardData';
function ServicesCards() {
    return (
        <div className='ServicesCards'>
            {
                Data.map((data) => {
                    return (
                        <div className={(data.reverse) ? "card reverse" : "card"} key={data.id}>
                            <div className="Cdesc">
                                <h1 className="Cdesc-h1">{data.title}</h1>
                                <p>{data.desc}
                                </p>
                            </div>
                            <img src={data.img} alt="" />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ServicesCards



