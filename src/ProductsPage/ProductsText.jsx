import React, {useState} from 'react'
import Cart from '../Cart';

export default function ProductsText() {

    const products = [
  {
    id: 1,
    name: "Esspresso Blend",
    image: "/ProductsImg/espresso.jpg",
    price: "1200",
    roast: "Light Roast",
    description: "Bright floral notes with hints of lemon and jasmine. Washed process."
  },
  {
    id: 2,
    name: "Americano",
    image: "/ProductsImg/americano.jpg",
    price: "1150",
    roast: "Medium Roast",
    description: "Balanced body with red fruit sweetness and smooth finish."
  },
  {
    id: 3,
    name: "Cappuccino",
    image: "/ProductsImg/cappuccino.jpg",
    price: "900",
    roast: "Medium Roast",
    description: "Wine-like acidity with notes of blackcurrant and citrus."
  },
  {
    id: 4,
    name: "Latte",
    image: "/ProductsImg/latte.jpg",
    price: "650",
    roast: "Medium Roast",
    description: "Sweet, nutty profile with low acidity. Natural process."
  },
  {
    id: 5,
    name: "Mocha",
    image: "/ProductsImg/mocha.jpg",
    price: "550",
    roast: "Medium-Dark Roast",
    description: "Rich cocoa and spice notes with a full body."
  },
  {
    id: 6,
    name: "Sumatra Mandheling",
    image: "/ProductsImg/sumatra.jpg",
    price: "800",
    roast: "Dark Roast",
    description: "Earthy and syrupy with notes of dark chocolate and spice."
  },
  {
    id: 7,
    name: "Rwanda Nyungwe",
    image: "/ProductsImg/rwanda.jpg",
    price: "850",
    roast: "Light Roast",
    description: "Bright acidity with peach, black tea, and floral aromas."
  },
  {
    id: 8,
    name: "Peru Cajamarca Organic",
    image: "/ProductsImg/peru.jpg",
    price: "1000",
    roast: "Medium Roast",
    description: "Smooth and clean with mild acidity and cocoa sweetness."
  },
  {
    id: 9,
    name: "Panama Boquete Geisha",
    image: "/ProductsImg/panama.jpg",
    price: "450",
    roast: "Light Roast",
    description: "Rare and exquisite with jasmine, bergamot, and tropical fruit."
  },
  {
    id: 10,
    name: "Tanzania Peaberry",
    image: "/ProductsImg/tanzania.jpg",
    price: "400",
    roast: "Medium Roast",
    description: "Bright and lively with citrus zest and berry sweetness."
  },
  {
    id: 11,
    name: "Yemen Mocha Matari",
    image: "/ProductsImg/yemen.jpg",
    price: "550",
    roast: "Medium-Dark Roast",
    description: "Exotic and complex with chocolate, spice, and dried fruit."
  },
  {
    id: 12,
    name: "Costa Rica Tarrazú",
    image: "/ProductsImg/costa.jpg",
    price: "1200",
    roast: "Medium Roast",
    description: "Crisp acidity with caramel and citrus notes. Washed process."
  },
  {
    id: 13,
    name: "Honduras Marcala",
    image: "/ProductsImg/honduras.jpg",
    price: "1000",
    roast: "Medium Roast",
    description: "Well-balanced with cocoa, almond, and light floral tones."
  },
  {
    id: 14,
    name: "El Salvador Pacamara",
    image: "/ProductsImg/savador.jpg",
    price: "850",
    roast: "Medium-Light Roast",
    description: "Large beans with creamy body and tropical fruit flavors."
  },
  {
    id: 15,
    name: "India Monsooned Malabar",
    image: "/ProductsImg/india.jpg",
    price: "700",
    roast: "Dark Roast",
    description: "Low acidity with a spicy, mellow body and earthy tones."
  },
  {
    id: 16,
    name: "Cuba Serrano",
    image: "/ProductsImg/cuba.jpg",
    price: "650",
    roast: "Medium-Dark Roast",
    description: "Strong, rich flavor with hints of cocoa and tobacco."
  },
  {
    id: 17,
    name: "Nicaragua Jinotega",
    image: "/ProductsImg/nicaragua.jpg",
    price: "1300",
    roast: "Medium Roast",
    description: "Mild and sweet with notes of chocolate and orange."
  },
  {
    id: 18,
    name: "Zimbabwe Chipinge",
    image: "/ProductsImg/zimbabwe.jpg",
    price: "1000",
    roast: "Medium Roast",
    description: "Balanced with citrus brightness and floral undertones."
  },
  {
    id: 19,
    name: "Papua New Guinea Sigri",
    image: "/ProductsImg/papua.jpg",
    price: "650",
    roast: "Medium Roast",
    description: "Sweet and clean cup with tropical fruit and spice."
  },
  {
    id: 20,
    name: "Vietnam Robusta Premium",
    image: "/ProductsImg/vietnam.jpg",
    price: "550",
    roast: "Dark Roast",
    description: "Strong body with chocolatey bitterness. Great for blends."
  },
  {
    id: 21,
    name: "Mexico Chiapas",
    image: "/ProductsImg/mexico.jpg",
    price: "750",
    roast: "Medium Roast",
    description: "Nutty and smooth with bright acidity and sweet finish."
  },
  {
    id: 22,
    name: "Java Estate Blawan",
    image: "/ProductsImg/java.jpg",
    price: "14.95",
    roast: "Medium-Dark Roast",
    description: "Deep body with mild acidity and spice. Traditional Indonesian flavor."
  },
  {
    id: 23,
    name: "Decaf Colombia",
    image: "/ProductsImg/colombia.jpg",
    price: "600",
    roast: "Medium-Light Roast",
    description: "Swiss Water Processed. Smooth, rich, and caffeine-free."
  },
  {
    id: 24,
    name: "Espresso",
    image: "/ProductsImg/espresso.jpg",
    price: "850",
    roast: "Dark Roast",
    description: "Bold, syrupy blend perfect for espresso machines and lattes."
  },
  {
    id: 25,
    name: "Kenyan AA",
    image: "/ProductsImg/breakfast.jpg",
    price: "800",
    roast: "Light Roast",
    description: "Smooth and bright with a gentle wake-up flavor."
  },
  {
    id: 26,
    name: "Cold Brew Blend",
    image: "/ProductsImg/cold.jpg",
    price: "750",
    roast: "Medium-Light Roast",
    description: "Crafted for smooth and refreshing cold brewing."
  },
  {
    id: 27,
    name: "Turkish Coffee",
    image: "/ProductsImg/turkish.jpg",
    price: "900",
    roast: "Medium Roast",
    description: "Oldest coffee blend with chocolatey, spicy, and fruity tones."
  },
  {
    id: 28,
    name: "Holiday Seasonal Blend",
    image: "/ProductsImg/holiday.jpg",
    price: "14.25",
    roast: "Medium Roast",
    description: "Festive mix with cinnamon, cocoa, and warm spice notes."
  },
  {
    id: 29,
    name: "Rainforest Alliance Blend",
    image: "/ProductsImg/rainforest.jpg",
    price: "950",
    roast: "Medium-Light Roast",
    description: "Ethically sourced blend with chocolate and nut undertones."
  },
  {
    id: 30,
    name: "Signature House Blend",
    image: "/ProductsImg/signature.jpg",
    price: "750",
    roast: "Medium Roast",
    description: "Smooth, versatile blend perfect for drip, French press, or pour-over."
  }
];
  
   
   const [cart, setCart] = useState([]);

   const handleAddToCart = (product) => {
    setCart([...cart, product]);

    alert('You have successfully added this product.')
  };


    const [selectedRoast, setSelectedRoast] = useState('All');

    const handleFilterChange = (roast) => {
      setSelectedRoast(roast);
    }


    const filteredProducts = selectedRoast === 'All'
      ? products
      : products.filter(product => product.roast === selectedRoast);

      
  return (
    <>
        <div className='products-header'>
            <h1 className='products-title'>OUR COFFEE SELECTION</h1>
            <h3 className='products-subtitle'>
                Explore our handpicked collection of rich, aromatic blends made for every kind of coffee lover.
            </h3>
        </div>
        <div className="product-search">
            <button className="filter-btn" onClick={() => handleFilterChange('All')} >All</button>
            <button className="filter-btn" onClick={() => handleFilterChange('Light Roast')} >Light Roast</button>
            <button className="filter-btn" onClick={() => handleFilterChange('Medium Roast')} >Medium Roast</button>
            <button className="filter-btn" onClick={() => handleFilterChange('Dark Roast')} >Dark Roast</button>
            <button className="filter-btn" onClick={() => handleFilterChange('Medium-Light Roast')} >Medium-Light Roast</button>
            <button className="filter-btn" onClick={() => handleFilterChange('Medium-Dark Roast')} >Medium-Dark Roast</button>
        </div>

        <div       
          className='holder'>
            {filteredProducts.map((product)=>{return (
                <div key={product.id} className="product-card">
                    <img className='prod-img' src={product.image} alt={product.name} />
                    <h2 className='product-name'>{product.name}</h2>
                    <p className='product-description'>{product.description}</p>
                    <p className='product-roast'><strong className='product-roast2'>Roast: </strong> {product.roast}</p>
                    <div className='payment'>
                      <span className='product-price'>&#8358;{product.price}</span>
                      <button className="add-to-cart-btn" onClick={() => handleAddToCart(product)}>Add to Cart</button>
                    </div>
                </div>
            )})}
        </div>
        {cart.length > 0 && (
        <Cart cart={cart} setCart={setCart} />
      )}
    </>
  )
}
