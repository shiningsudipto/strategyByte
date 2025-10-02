// "use client";
// import { useState, useEffect } from "react";

// function App() {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isAnimating, setIsAnimating] = useState(false);

//   // Sample card data - you can replace with your own content
//   const cards = [
//     {
//       id: 1,
//       title: "250M Funding",
//       subtitle: "37% Upsells",
//       description: "Inbound...",
//       metrics: [
//         { label: "Daily 280+", sublabel: "Inbound Calls", value: "+25%" },
//         { label: "+40% CVR", sublabel: "in Online Payments", value: "+36%" },
//       ],
//       quote:
//         "StrategyByte delivered outstanding results with smart digital marketing and seamless SE...",
//       author: "Jack Wilson",
//       position: "VP, Growth at Dropbox Inc",
//       company: "Dropbox",
//       bgColor: "bg-gradient-to-br from-blue-50 to-indigo-100",
//     },
//     {
//       id: 2,
//       title: "180M Revenue",
//       subtitle: "42% Growth",
//       description: "Outbound...",
//       metrics: [
//         { label: "Weekly 150+", sublabel: "Qualified Leads", value: "+32%" },
//         { label: "+55% ROI", sublabel: "on Ad Spend", value: "+48%" },
//       ],
//       quote:
//         "Exceptional performance and strategic insights that transformed our marketing approach...",
//       author: "Sarah Chen",
//       position: "CMO at Spotify",
//       company: "Spotify",
//       bgColor: "bg-gradient-to-br from-green-50 to-emerald-100",
//     },
//     {
//       id: 3,
//       title: "320M Valuation",
//       subtitle: "28% Conversion",
//       description: "Hybrid...",
//       metrics: [
//         { label: "Monthly 500+", sublabel: "New Customers", value: "+18%" },
//         { label: "+65% LTV", sublabel: "Customer Value", value: "+22%" },
//       ],
//       quote:
//         "Revolutionary approach to customer acquisition with measurable impact on our bottom line...",
//       author: "Michael Torres",
//       position: "CEO at Airbnb",
//       company: "Airbnb",
//       bgColor: "bg-gradient-to-br from-purple-50 to-pink-100",
//     },
//     {
//       id: 4,
//       title: "450M Series C",
//       subtitle: "51% Retention",
//       description: "Enterprise...",
//       metrics: [
//         { label: "Daily 400+", sublabel: "Active Users", value: "+29%" },
//         { label: "+72% NPS", sublabel: "Customer Satisfaction", value: "+41%" },
//       ],
//       quote:
//         "Outstanding results that exceeded all expectations and delivered sustainable growth...",
//       author: "Emily Rodriguez",
//       position: "VP Marketing at Netflix",
//       company: "Netflix",
//       bgColor: "bg-gradient-to-br from-orange-50 to-red-100",
//     },
//     {
//       id: 5,
//       title: "600M IPO",
//       subtitle: "63% Market Share",
//       description: "Global...",
//       metrics: [
//         { label: "Hourly 50+", sublabel: "Conversions", value: "+35%" },
//         { label: "+80% Efficiency", sublabel: "in Operations", value: "+52%" },
//       ],
//       quote:
//         "Game-changing strategies that positioned us as the market leader in our industry...",
//       author: "David Kim",
//       position: "CTO at Tesla",
//       company: "Tesla",
//       bgColor: "bg-gradient-to-br from-teal-50 to-cyan-100",
//     },
//   ];

//   const nextSlide = () => {
//     if (isAnimating) return;
//     setIsAnimating(true);
//     setCurrentIndex((prev) => (prev + 1) % cards.length);
//     setTimeout(() => setIsAnimating(false), 600);
//   };

//   const prevSlide = () => {
//     if (isAnimating) return;
//     setIsAnimating(true);
//     setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length);
//     setTimeout(() => setIsAnimating(false), 600);
//   };

//   // Auto-advance slides every 4 seconds
//   useEffect(() => {
//     const interval = setInterval(nextSlide, 4000);
//     return () => clearInterval(interval);
//   }, []);

//   const getCardPosition = (index) => {
//     const diff = (index - currentIndex + cards.length) % cards.length;

//     if (diff === 0) return "front";
//     if (diff === 1) return "middle";
//     if (diff === 2) return "back";
//     return "hidden";
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 flex items-center justify-center p-8">
//       <div className="w-full max-w-6xl">
//         <div className="text-center mb-12">
//           <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
//             Card Shuffle Slider
//           </h1>
//           <p className="text-xl text-blue-200">
//             Smooth animations with stacked card transitions
//           </p>
//         </div>

//         <div className="relative h-[500px] flex items-center justify-center">
//           {/* Card Stack Container */}
//           <div className="relative w-[400px] h-[400px]">
//             {cards.map((card, index) => {
//               const position = getCardPosition(index);

//               return (
//                 <div
//                   key={card.id}
//                   className={`
//                     absolute inset-0 rounded-2xl shadow-2xl transition-all duration-500 ease-out
//                     ${card.bgColor} border border-white/20
//                     ${
//                       position === "front"
//                         ? "z-30 scale-100 rotate-0 translate-x-0 translate-y-0 opacity-100"
//                         : ""
//                     }
//                     ${
//                       position === "middle"
//                         ? "z-20 scale-95 -rotate-3 translate-x-6 translate-y-3 opacity-90"
//                         : ""
//                     }
//                     ${
//                       position === "back"
//                         ? "z-10 scale-90 rotate-2 translate-x-12 translate-y-6 opacity-75"
//                         : ""
//                     }
//                     ${
//                       position === "hidden"
//                         ? "z-0 scale-85 rotate-4 translate-x-16 translate-y-8 opacity-0"
//                         : ""
//                     }
//                     ${isAnimating ? "transition-all duration-600" : ""}
//                   `}
//                 >
//                   <div className="p-8 h-full flex flex-col justify-between">
//                     {/* Header */}
//                     <div className="space-y-2">
//                       <div className="flex justify-between items-start">
//                         <div>
//                           <h3 className="text-2xl font-bold text-gray-800">
//                             {card.title}
//                           </h3>
//                           <p className="text-lg text-gray-600">
//                             {card.subtitle}
//                           </p>
//                           <p className="text-sm text-gray-500">
//                             {card.description}
//                           </p>
//                         </div>
//                         <div className="text-right">
//                           <span className="text-2xl font-bold text-green-600">
//                             {card.metrics[0].value}
//                           </span>
//                         </div>
//                       </div>
//                     </div>

//                     {/* Metrics */}
//                     <div className="grid grid-cols-2 gap-4 my-6">
//                       {card.metrics.map((metric, idx) => (
//                         <div key={idx} className="text-center">
//                           <div className="text-xl font-bold text-gray-800">
//                             {metric.label}
//                           </div>
//                           <div className="text-sm text-gray-600">
//                             {metric.sublabel}
//                           </div>
//                           <div className="text-lg font-semibold text-green-600 mt-1">
//                             {metric.value}
//                           </div>
//                         </div>
//                       ))}
//                     </div>

//                     {/* Quote */}
//                     <div className="space-y-3">
//                       <p className="text-gray-700 italic text-sm leading-relaxed">
//                         "{card.quote}"
//                       </p>

//                       {/* Author */}
//                       <div className="flex items-center justify-between">
//                         <div className="flex items-center space-x-3">
//                           <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
//                             <span className="text-sm font-semibold text-gray-700">
//                               {card.author
//                                 .split(" ")
//                                 .map((n) => n[0])
//                                 .join("")}
//                             </span>
//                           </div>
//                           <div>
//                             <div className="font-semibold text-gray-800 text-sm">
//                               {card.author}
//                             </div>
//                             <div className="text-xs text-gray-600">
//                               {card.position}
//                             </div>
//                           </div>
//                         </div>
//                         <div className="text-right">
//                           <div className="font-bold text-blue-600 text-lg">
//                             {card.company}
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>

//           {/* Navigation buttons */}
//           <button
//             onClick={prevSlide}
//             disabled={isAnimating}
//             className="absolute left-4 z-40 w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30"
//           >
//             ←
//           </button>

//           <button
//             onClick={nextSlide}
//             disabled={isAnimating}
//             className="absolute right-4 z-40 w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30"
//           >
//             →
//           </button>
//         </div>

//         {/* Indicators */}
//         <div className="flex justify-center space-x-2 mt-8">
//           {cards.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => {
//                 if (!isAnimating) {
//                   setIsAnimating(true);
//                   setCurrentIndex(index);
//                   setTimeout(() => setIsAnimating(false), 600);
//                 }
//               }}
//               className={`w-3 h-3 rounded-full transition-all duration-300 ${
//                 index === currentIndex
//                   ? "bg-white scale-125"
//                   : "bg-white/40 hover:bg-white/60"
//               }`}
//             />
//           ))}
//         </div>

//         {/* Instructions */}
//         <div className="text-center mt-8 text-blue-200">
//           <p>
//             Click the arrows or indicators to navigate • Auto-advances every 4
//             seconds
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;
// // ---
// ("use client");

// import React, { useState, useEffect, useCallback, useRef } from "react";
// import { motion } from "framer-motion";

// // --- Card Data ---
// const cardData = [
//   {
//     headline: "Daily 280+ Inbound Calls",
//     metric: "+ 40% CVR in Online Payments",
//     quote:
//       '"StrategyByte delivered outstanding results with smart digital marketing and seamless SEO for our key product launch."',
//     author: "Jack Wilson",
//     title: "VP, Growth",
//     company: "Dropbox",
//     color: "sky-500",
//   },
//   {
//     headline: "37% Upsells in Q3",
//     metric: "250M Funding Secured",
//     quote:
//       '"Their team helped us streamline our entire funnel, leading to a massive increase in customer lifetime value and retention."',
//     author: "Sarah Chen",
//     title: "CEO",
//     company: "VentureCo",
//     color: "violet-500",
//   },
//   {
//     headline: "500k New Users",
//     metric: "+ 25% Revenue Growth",
//     quote:
//       '"We saw immediate impact from their data-driven approach. The platform is now stable, fast, and converting better than ever."',
//     author: "Mike Johnson",
//     title: "Head of Product",
//     company: "TechLeap",
//     color: "emerald-500",
//   },
//   {
//     headline: "100% Compliance Score",
//     metric: "Audit Time Reduced by 70%",
//     quote:
//       '"The custom security features they developed are exceptional, providing peace of mind and saving us thousands in potential fines."',
//     author: "Lisa Ray",
//     title: "COO",
//     company: "SecurePath",
//     color: "red-500",
//   },
//   {
//     headline: "System Uptime 99.99%",
//     metric: "Latency Cut by Half",
//     quote:
//       '"Beyond the code, their strategic guidance on scaling infrastructure was invaluable. A truly world-class engineering team."',
//     author: "David Kim",
//     title: "CTO",
//     company: "CloudNine",
//     color: "yellow-500",
//   },
// ];

// const CARD_COUNT = cardData.length;
// const INTERVAL_MS = 3000; // Time interval for the rotation

// // --- Framer Motion Animation States (Transitions are now INSTANT for stacking) ---
// const CARD_VARIANTS = {
//   // Front card (Active) - INSTANT transition for stack shift
//   "card-active": {
//     z: 0,
//     y: 0,
//     rotate: 0,
//     scale: 1,
//     opacity: 1,
//     zIndex: 3,
//     transition: { duration: 0 }, // INSTANT SHIFT
//   },
//   // Middle card - INSTANT transition for stack shift
//   "card-middle": {
//     z: -30,
//     y: -60,
//     rotate: 9,
//     scale: 1,
//     opacity: 1,
//     zIndex: 2,
//     transition: { duration: 0 }, // INSTANT SHIFT
//   },
//   // Bottom card - INSTANT transition for stack shift
//   "card-bottom": {
//     z: -60,
//     y: -120,
//     rotate: 18,
//     scale: 1,
//     opacity: 1,
//     zIndex: 1,
//     transition: { duration: 0 }, // INSTANT SHIFT
//   },
//   // Card moving out (Slides straight down) - RETAINS SMOOTH ANIMATION (0.5s)
//   "card-moving-out": {
//     z: -120,
//     y: 200, // Slides vertically off-screen
//     x: 0,
//     rotate: 0,
//     scale: 0.9,
//     opacity: 0,
//     zIndex: 0,
//     transition: { duration: 0.5, ease: "easeIn" }, // 500ms duration
//   },
//   // Invisible/Reset card (Base hidden state) - Must remain instant (duration: 0)
//   "card-invisible": {
//     z: -60,
//     y: 30,
//     rotate: -6,
//     scale: 0.9,
//     opacity: 0,
//     zIndex: 0,
//     transition: { duration: 0 },
//   },
// };

// // --- Main React Component ---

// const CardSlider = () => {
//   // currentIndex: The index of the card currently visible at the front.
//   const [currentIndex, setCurrentIndex] = useState(0);
//   // movingOutIndex: The index of the card currently animating away (used for instant hiding/reset).
//   const [movingOutIndex, setMovingOutIndex] = useState(null);
//   const intervalRef = useRef(null);

//   /**
//    * Determines the correct state key based on the card's position relative to the stack.
//    */
//   const getCardStateKey = useCallback(
//     (cardDataIndex) => {
//       // 1. If this card is the one currently being reset (instant hide)
//       if (movingOutIndex !== null && cardDataIndex === movingOutIndex) {
//         return "card-moving-out";
//       }

//       // 2. Determine position in the visible stack (0: Active, 1: Middle, 2: Bottom)
//       let diff = (cardDataIndex - currentIndex + CARD_COUNT) % CARD_COUNT;

//       if (diff === 0) return "card-active";
//       if (diff === 1) return "card-middle";
//       if (diff === 2) return "card-bottom";

//       // 3. All others are reset/invisible
//       return "card-invisible";
//     },
//     [currentIndex, movingOutIndex]
//   );

//   /**
//    * Cycles the cards: moves the front card out and shifts the rest forward instantly.
//    */
//   const cycleCards = useCallback(() => {
//     const oldActiveIndex = currentIndex;

//     // 1. Mark the current active card for the smooth exiting animation
//     setMovingOutIndex(oldActiveIndex);

//     // 2. Update the currentIndex for the *next* state (triggers INSTANT position change for middle/bottom cards)
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % CARD_COUNT);

//     // 3. Set timeout to 550ms, which is 50ms longer than the 500ms exit transition.
//     setTimeout(() => {
//       setMovingOutIndex(null);
//     }, 550);
//   }, [currentIndex]);

//   // useEffect to manage the auto-cycle interval
//   useEffect(() => {
//     intervalRef.current = setInterval(cycleCards, INTERVAL_MS);
//     return () => clearInterval(intervalRef.current);
//   }, [cycleCards]);

//   const Card = ({ data, index }) => {
//     const stateKey = getCardStateKey(index);

//     // Base card class for shared appearance
//     const baseCardClass =
//       "absolute w-full h-full p-6 bg-white rounded-3xl shadow-xl transform-gpu will-change-transform";

//     return (
//       // Use motion.div to enable Framer Motion animations
//       <motion.div
//         className={baseCardClass}
//         // Use the calculated stateKey to drive the position (instantly)
//         animate={stateKey}
//         // Define all possible states/transitions
//         variants={CARD_VARIANTS}
//         // Set the origin point for rotation back to CENTER CENTER
//         style={{ transformOrigin: "center center" }}
//         key={index}
//       >
//         {/* Card Content Structure */}
//         <div className="flex justify-between items-start mb-6">
//           <span
//             className={`px-3 py-1 bg-${data.color} bg-opacity-10 text-${data.color} font-bold rounded-full text-sm`}
//           >
//             {data.headline}
//           </span>
//           <span
//             className={`px-3 py-1 bg-${data.color} bg-opacity-10 text-${data.color} font-bold rounded-full text-sm`}
//           >
//             {data.metric}
//           </span>
//         </div>
//         <p className="text-xl italic font-medium text-slate-800 mb-8">
//           {data.quote}
//         </p>
//         <div className="flex items-center justify-between pt-4 border-t border-slate-200">
//           <div className="flex items-center">
//             {/* Author Avatar (using initials for simplicity) */}
//             <div
//               className={`w-10 h-10 bg-${data.color} rounded-full flex items-center justify-center text-white text-sm font-semibold mr-3`}
//             >
//               {data.author
//                 .split(" ")
//                 .map((n) => n[0])
//                 .join("")}
//             </div>
//             <div>
//               <p className="text-base font-bold text-slate-900">
//                 {data.author}
//               </p>
//               <p className="text-sm text-slate-500">
//                 {data.title} at {data.company}
//               </p>
//             </div>
//           </div>
//           {/* Placeholder Company Logo */}
//           <svg
//             className="w-6 h-6 text-slate-400"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m7 4h4m-4 4h4m-4-8h4m-4-4h4"
//             ></path>
//           </svg>
//         </div>
//       </motion.div>
//     );
//   };

//   return (
//     <div className="flex items-center justify-center p-4 font-sans">
//       <div className="flex flex-col items-center max-w-lg mx-auto">
//         <div
//           className="relative w-[350px] h-[400px]"
//           style={{ perspective: "1000px" }} // Critical for 3D transforms (z-axis movement)
//         >
//           {cardData.map((data, index) => (
//             <Card key={index} data={data} index={index} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CardSlider;
