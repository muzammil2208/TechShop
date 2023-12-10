import Image from "next/image"
import Category from "../components/Category"

export default function Home() {
  return (
    <div className="home-container">
        <div className="jumbotron">
              <Image
              src="/removedapple.png"
              width={400}
              height={400}
              alt="image of iphone"
              />
              <div className="jumbotron-content">
                <p>Get amazing prices at TechShop using our discount vouchers</p>
                <button className="main-btn">
                  Shop Now
                </button>
              </div>
            </div>  
        <Category/>
    </div>


    
  )
}
