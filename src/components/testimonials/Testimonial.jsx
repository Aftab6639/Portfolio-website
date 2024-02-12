// import React from 'react'
// import './testimonial.css'
// import AVTAR1 from '../../assets/avatar1.jpg';
// import AVTAR2 from '../../assets/avatar2.jpg';
// import AVTAR3 from '../../assets/avatar3.jpg';
// import AVTAR4 from '../../assets/avatar4.jpg';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination, } from 'swiper/modules';

// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// // import 'swiper/css/scrollbar';

// const data = [
//   {
// avatar: AVTAR1,
// name: 'Alice Smith',
// review: 'Great working experience with Aftab due to his expertise in React Material UI and on the backend Node.js Express.js with MySQL and NoSQL databases. Best experience!',
// },
//   {
//   avatar: AVTAR2,
//   name: 'Emma Johnson',
//   review: 'Working with Aftab was fantastic. His knowledge of React and backend development made our project seamless. I highly recommend him for any project!',
// },
//   {
//     avatar: AVTAR3,
//     name: 'Michael Brown',
//   review: 'Wonderful experience collaborating with Aftab. His proficiency in React and backend technologies is commendable. Highly recommend!',
// },
//     {
//       avatar: AVTAR4,
//       name: 'Sarah Thompson',
//       review: 'Aftab exceeded all expectations. His expertise in React and backend technologies ensured the project\'s success. Would definitely work with him again!',
//       },
// ]
// const Testimonial = () => {
//   return (
//     <section id='testimonial'>
//       <h5>Review From Client</h5>
//       <h2>Testimonial</h2>
//       <Swiper className="container testimonial-container"
//       // install Swiper modules
//       modules={[Navigation, Pagination,]}
//       spaceBetween={50}
//       slidesPerView={1}
//       navigation
//       pagination={{ clickable: true }}
//       scrollbar={{ draggable: true }}
//       onSwiper={(swiper) => console.log(swiper)}
//       onSlideChange={() => console.log('slide change')}
//       >
//         {
//           data.map(({avatar , name, review}, index) => {
// return(
//   <SwiperSlide key={index} className='testimonial'>
//           <div className="client-avtar">
//             <img src={avatar} alt='img'/>
//           </div>
//           <h5 className='clienyt-name'>{name}</h5>
//             <small className='review-client'>
// {review}
//             </small>
//         </SwiperSlide>
// )
//           })
//         }
       
//       </Swiper>
//     </section>
//   )
// }

// export default Testimonial