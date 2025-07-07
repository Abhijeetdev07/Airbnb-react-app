import "./Card.css"
import house1 from '../../assets/house.jpg'
import house2 from '../../assets/housekichen.jpg'
import house3 from '../../assets/houseliving.jpg'

function Card() {
  return (
    <div className="card">
        <div className="images">
            <img src={house1} alt="" />
            <img src={house2} alt="" />
            <img src={house3} alt="" />
        </div>
        <span className="cardspan1">2bhk villa gudgaon</span>
        <span className="cardspan2">Rs 25000/month</span>
    </div>
  )
}

export default Card