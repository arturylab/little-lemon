// src/app/reservations/page.js
'use client';

import React, { useReducer, useEffect } from 'react';
import BookingForm from '@/components/BookingForm';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import LoadApiScript from '@/components/LoadApiScript';

function initializeTimes() {
  return [];
}

function updateTimes(state, action) {
  if (action.type === 'update' && action.date) {
    return typeof fetchAPI === 'function' ? fetchAPI(new Date(action.date)) : [];
  }
  return state;
}

export default function Main() {
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);
  const router = useRouter();

  useEffect(() => {
    const interval = setInterval(() => {
      if (typeof fetchAPI === 'function') {
        const today = new Date();
        dispatch({ type: 'update', date: today });
        clearInterval(interval);
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);

  // ✅ submitForm se pasa a BookingForm
  const submitForm = (formData) => {
    const success = submitAPI(formData);
    if (success) {
      router.push('/confirmed');
    } else {
      alert('Error al enviar la reserva. Inténtalo de nuevo.');
    }
  };

  return (
    <section className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 items-center px-20 py-5">
      <LoadApiScript />
      <div className="space-y-6">
        <h1 className="text-2xl font-semibold mb-6">Reserva tu mesa</h1>
        <BookingForm
          availableTimes={availableTimes}
          dispatch={dispatch}
          submitForm={submitForm} // ← aquí se pasa
        />
      </div>
      <div className="w-full h-[300px] md:h-[400px] relative">
        <Image
          src="/restaurant.jpg"
          alt="Chefs preparing food"
          fill
          objectFit="cover"
          className="object-cover rounded-lg shadow-md"
          priority
        />
      </div>
    </section>
  );
}

