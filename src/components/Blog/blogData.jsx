import { Link } from "react-router-dom";

export const blogPosts = [
  {
    id: "island-hopping",
    title: "Ultimate Phuket Island Hopping Guide",
    category: "Activities",
    excerpt:
      "Uncover the must-see islands around Phuket, from high-speed adventures to leisurely cruises, and plan the perfect island-hopping experience.",
    imageUrl:
      "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?ixlib=rb-4.0.3",
    date: "February 12, 2024",
    readTime: 10,
    content: (
      <>
        <p>
          Phuket’s surrounding waters are home to some of Thailand’s most
          stunning islands. Whether you crave a quick, exhilarating day trip or
          a laid-back voyage, there’s an island-hopping experience tailored to
          your travel style. Below are our top recommendations and tips to make
          your journey unforgettable.
        </p>

        <h2>Must-Visit Islands</h2>
        <ul>
          <li>
            <strong>Phi Phi Islands</strong> – Famous for Maya Bay, soaring
            limestone cliffs, and crystal-clear waters. Perfect for a speedboat
            day trip.
          </li>
          <li>
            <strong>James Bond Island</strong> – Iconic rock formations featured
            in the classic film. This too is best visited by speedboat for a
            thrilling ride.
          </li>
          <li>
            <strong>Koh Racha</strong> – Ideal for a more relaxed catamaran
            cruise with pristine beaches and excellent snorkeling or diving
            spots.
          </li>
          <li>
            <strong>Koh He (Coral Island)</strong> – Great value for snorkeling;
            it’s close to Phuket and offers vibrant marine life without a
            lengthy journey.
          </li>
          <li>
            <strong>Similan Islands</strong> – Renowned for their crystal-clear
            waters and coral reefs. Be aware they’re closed for a portion of the
            year (insert specific dates here), so plan accordingly. It’s a
            longer trip but well worth the effort.
          </li>
        </ul>

        <h2>Tour Options</h2>
        <ul>
          <li>
            <strong>Speedboat Tours</strong> – Hit multiple islands quickly and
            experience a bit of an adrenaline rush along the way. Phi Phi and
            James Bond Island are top choices.
          </li>
          <li>
            <strong>Catamaran Cruises</strong> – A slower-paced, scenic trip to
            places like Koh Racha, perfect for a relaxing day soaking up the sun
            and enjoying onboard comforts.
          </li>
          <li>
            <strong>Private Longtail Boats</strong> – For a more personal,
            authentic Thai experience. You can even get picked up right in front
            of certain beaches and head out to nearby islands on your own
            schedule.
          </li>
        </ul>
        <div className="book-button-container">
          <Link to="/activities" className="book-button">
            Click here to book with us!
          </Link>
        </div>

        <h2>Best Time for Island Hopping</h2>
        <p>
          Generally, November to April provides calm seas and clearer skies,
          ideal for smooth travel and excellent visibility under the water.
          However, always check local forecasts and Similan Island access rules
          before setting off.
        </p>

        <p>
          Whether you’re after an action-packed day trip or a leisurely sail,
          Phuket’s island-hopping scene offers something for every traveler.
          Pack your sunscreen, bring an adventurous spirit, and get ready for an
          unforgettable exploration of Thailand’s tropical gems.
        </p>
      </>
    ),
  },
  {
    id: "big-buddha",
    title: "Visiting the Big Buddha: A Complete Guide",
    category: "Attractions",
    excerpt:
      "Everything you need to know about visiting Phuket's iconic Big Buddha statue, including best times to visit and cultural etiquette.",
    imageUrl:
      "https://images.unsplash.com/photo-1580494200292-b6e7924cd629?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    date: "February 15, 2024",
    readTime: 8,
    content: (
      <>
        <p>
          Standing at 45 meters tall, the Big Buddha is one of Phuket's most
          important and revered landmarks. This guide will help you plan the
          perfect visit to this majestic statue.
        </p>

        <h2>Best Time to Visit</h2>
        <p>
          Early morning (7-9am) or late afternoon (4-6pm) are ideal times to
          visit. You'll avoid the midday heat and crowds, plus catch stunning
          views of Phuket during golden hour.
        </p>

        <h2>What to Wear</h2>
        <p>
          As this is a religious site, respectful dress is required. Shoulders
          and knees should be covered. If needed, free sarongs are available at
          the entrance.
        </p>

        <h2>Getting There</h2>
        <p>
          Located in the Nakkerd Hills between Chalong and Kata, you can reach
          the Big Buddha by:
        </p>
        <ul>
          <li>Taxi or Grab (recommended for convenience)</li>
          <li>Rented scooter (for experienced riders)</li>
        </ul>

        <h2>Tips for Visitors</h2>
        <ul>
          <li>Bring water - it can get hot during the climb</li>
          <li>Wear comfortable walking shoes</li>
          <li>Don't forget your camera - the views are spectacular</li>
          <li>Plan for 1-2 hours to fully explore the site</li>
        </ul>
      </>
    ),
  },
  {
    id: "ultimate-market-experience",
    title: "Ultimate Market Experience in Phuket",
    category: "Travel & Culture",
    excerpt:
      "Discover Phuket’s bustling markets, where local flavors, crafts, and cultural experiences come together in vibrant harmony.",
    imageUrl:
      "https://charter.docka.cafe/wp-content/uploads/naka-market-phuket-1.jpg",
    date: "February 10, 2024",
    readTime: 7,
    content: (
      <>
        <p>
          Phuket’s markets are more than just places to shop—they’re a lively
          reflection of local life and culture. From handmade crafts and
          clothing to fresh produce and authentic street eats, these markets
          offer a gateway into the heart and soul of the island.
        </p>

        <h2>Top Markets to Explore</h2>
        <ul>
          <li>Phuket Town Walking Street Sunday Night Market</li>
          <li>Chillva Market</li>
          <li>Old Town Sunday Walking Street</li>
          <li>Naka Market</li>
          <li>Banzaan Market</li>
        </ul>

        <h2>What You’ll Find</h2>
        <p>
          Each market has its own unique charm, featuring everything from
          vibrant spices and fresh seafood to handcrafted souvenirs and trendy
          street fashion. Whether you’re a foodie or a curious traveler, there’s
          something for everyone.
        </p>

        <h2>Insider Tips</h2>
        <ul>
          <li>
            <strong>Bring Cash</strong> – Many stalls don’t accept cards, so
            have enough baht on hand.
          </li>
          <li>
            <strong>Embrace the Culture</strong> – Don’t be shy to haggle
            respectfully on accesories but avoid haggling on food but dont let
            that stop you from striking up a conversation with friendly local
            vendors.
          </li>
        </ul>

        <p>
          With an open mind and a spirit of adventure, you’ll uncover Phuket’s
          vibrant culture in every corner of its markets. Get ready for a
          shopping spree and cultural immersion like no other!
        </p>
      </>
    ),
  },
];
