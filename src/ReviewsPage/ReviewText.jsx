import React from 'react'

export default function ReviewText() {
    const reviews = [
        {
          name: 'Grace Johnson',
          image: '/review9.jpg',
         location: 'Abuja, Nigeria', 
         text: "I've been to countless coffee shops across Nigeria, but nothing quite compares to the experience I had here. The aroma when you walk in immediately wraps you in comfort. I ordered a hazelnut latte and a croissant — both were phenomenal. The coffee was rich, perfectly balanced, and served at just the right temperature. The staff were warm and attentive, even during a busy morning rush. I ended up staying for almost two hours just enjoying the ambiance. This is definitely my new go-to spot whenever I'm in town."},
         
         {name: 'Daniel Adeyemi',
          image: '/review-bg1.jpg' ,
          location: 'Lagos, Nigeria',
          text: "As someone who works remotely, I’m constantly looking for quiet, welcoming coffee spots — and this place absolutely nailed it. The interior decor is warm and minimalist, the Wi-Fi is reliable, and the flat white I had was easily one of the smoothest cups I've enjoyed. I also appreciate how eco-conscious the place is — biodegradable straws, reusable cups, and even a small book swap corner. I stayed through breakfast and lunch, and both meals were delicious. Highly recommended for creatives and coffee lovers alike."},
          
          {name: 'Isabelle Dupont',
          image: '/review-bg2.jpg' , 
          location: 'Lyon, France',
          text: "C’est magnifique! I stumbled upon this café during my vacation, and it quickly became my favorite spot. The espresso was bold and authentic, reminding me of home. I loved how they offered a variety of international blends — I tried one from Guatemala that had such a unique fruity undertone. The staff were very friendly, speaking multiple languages and offering great recommendations. The atmosphere is relaxed, with jazz playing softly in the background. It’s the kind of place where conversations linger and inspiration flows."},
          
          {name: 'Liam O’Connor', 
          image: '/review8.jpg' ,
          location: 'Dublin, Ireland',
          text: "I came here on a rainy afternoon and found more than just shelter — I found a sanctuary. The cappuccino I ordered was expertly crafted, with microfoam so smooth it felt like silk. The barista even added a beautiful leaf pattern on top. I sat by the window, watching the rain while sipping my drink and reading a book from their in-house library. It's not just a coffee shop — it's an experience. Perfect for people who love a cozy, intimate setting with great brews."},
          
          {name: 'Aisha Bello', 
          image: '/review10.jpg' ,
          location: 'Osun, Nigeria',
          text: "What impressed me most was the authenticity and passion behind this coffee shop. From the moment I walked in, I felt welcomed — like I was part of the community. I had their house blend pour-over and was blown away by how well it brought out the origin flavors. The ambiance was rustic yet modern, with lots of natural light and plants everywhere. I struck up a conversation with the owner, who told me about their direct trade relationships with farmers. It’s rare to see that level of transparency and love for the craft."},
         
          {name: 'Bolanle Adeyemi', 
          image: '/review6.jpg' ,
          location: 'Lekki, Lagos, Nigeria',
          text: "This café is my little slice of paradise in Lekki. As someone who appreciates good aesthetics and a calm atmosphere, I was truly impressed. Their iced mocha was just the right balance of bitter and sweet, and the coconut muffin I paired it with was divine. The space is airy and welcoming, perfect for catching up with friends or getting some quiet work done. I also appreciated the free Wi-Fi and abundance of charging points — it’s rare to find that combo in a Lagos coffee shop."},
          
          {name: 'Emeka Nwosu', 
          location: 'Abuja, Nigeria',
          image: '/review5.jpg' ,
          text: "I never expected to find such a well-crafted cup of coffee right in the heart of Abuja. The beans tasted freshly roasted, and there was real attention to detail in every aspect — from the latte art to the calm background music. I tried their caramel macchiato and banana bread, and I’m still thinking about them days later. The seating was spacious, with good lighting for reading or working. It’s a peaceful retreat from the city hustle. Highly recommended for anyone who loves great coffee and great vibes."},

          {name: 'Tunde Bakare', 
          location: 'Ibadan, Nigeria',
          image: '/review4.jpg' ,
          text: "I was pleasantly surprised by the quality of coffee served here. I had their Americano, and the depth of flavor was unlike anything I’ve had in Ibadan before — bold, clean, and with a slightly fruity note. What stood out for me even more was the staff: courteous, knowledgeable, and genuinely interested in customer satisfaction. This place gives off that artisan, third-wave coffee feel while still being down-to-earth. I’ll definitely be returning."},

          {name: 'Fatima Lawal', 
          location: 'Kano, Nigeria',
          image: '/review3.jpg',
          text: "Finding a good coffee shop in Kano used to be a struggle, but this one changed everything. The first thing that caught my eye was the beautiful minimalist decor and the soft acoustic music playing in the background. I had a cinnamon latte with oat milk and a slice of lemon cake — both were excellent. They even offered local tea blends, which I think is a brilliant touch. It’s a great mix of global standards and Nigerian flavor."},

          // {name: 'Uchechi Okafor',
          //   image: '/review2.jpg', 
          // location: 'Enugu, Nigeria',
          // text: "This place feels like a hidden gem. The attention to detail is superb, from the coffee bean sourcing to how every cup is presented. I had their flat white with a dash of vanilla syrup — smooth, velvety, and not overly sweet. The baristas knew what they were doing, and even took time to explain the origin of the beans. The vibe is very warm and laid back, with natural wood decor and greenery. It’s the perfect escape from the city’s noise."},

          // {name: 'Ifeoluwa George', 
          // image: '/review1.jpg',
          // location: 'Abeokuta, Nigeria',
          // text: "I was blown away by how well-run this coffee shop is. Their café latte was perfectly balanced — not too strong, not too weak. The menu had great variety, and the banana walnut loaf was freshly baked and moist. What really impressed me was the ambiance: peaceful, elegant, and welcoming to all ages. There was soft Afro-soul music in the background and an overall feeling of calm that made me want to stay for hours. Abeokuta needed this!"},
    ]
  return (
    <div className='reviewCont'>
      {reviews.map((review, index)=>{
        return <div key={index} className='review'   style={{
        backgroundImage: `url(${review.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
                <h2 className='review-name'>{review.name}</h2> 
                <h4 className='review-loc'>{review.location}</h4><br />
                <p className='review-text'>{review.text}</p>
              </div>
        
      })}
      
    </div>
  )
}
