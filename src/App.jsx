import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './index.css';

export default function App() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetch('/photos.json')
      .then(res => res.json())
      .then(setPhotos);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold my-4">Group Photobook</h1>
      <div className="w-full max-w-4xl">
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          navigation
          pagination={{ clickable: true }}
          loop
        >
          {photos.map((photo, idx) => (
            <SwiperSlide key={idx}>
              <div className="relative">
                <img
                  src={photo.src}
                  alt={photo.caption}
                  className="w-full h-[500px] object-cover rounded-lg shadow-lg"
                />
                <div className="absolute bottom-0 w-full bg-black bg-opacity-50 text-white text-center p-2 rounded-b-lg">
                  {photo.caption}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
