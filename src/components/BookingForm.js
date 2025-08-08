//components/BookingForm.js
'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';

export default function BookingForm({ availableTimes, dispatch, submitForm }) {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      date,
      time,
      guests,
      occasion
    };

    submitForm(formData);
  };

  const handleDateChange = (e) => {
    const newDate = e.target.value;
    setDate(newDate);
    dispatch({ type: 'update', date: newDate }); // ← Aquí se envía el cambio de estado
  };

  return (
    <form onSubmit={handleSubmit} className="grid max-w-md gap-6">
      <div className="grid gap-2">
        <Label htmlFor="res-date">Fecha</Label>
        <Input
          type="date"
          id="res-date"
          value={date}
          onChange={handleDateChange}
          required
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="res-time">Hora</Label>
        <Select value={time} onValueChange={setTime}>
          <SelectTrigger id="res-time">
            <SelectValue placeholder="Selecciona una hora" />
          </SelectTrigger>
          <SelectContent>
            {availableTimes.map((t) => (
              <SelectItem key={t} value={t}>{t}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="grid gap-2">
        <Label htmlFor="guests">Número de invitados</Label>
        <Input
          type="number"
          id="guests"
          min="1"
          max="10"
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
          required
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="occasion">Ocasión</Label>
        <Select value={occasion} onValueChange={setOccasion}>
          <SelectTrigger id="occasion">
            <SelectValue placeholder="Selecciona una ocasión" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="cumpleaños">Cumpleaños</SelectItem>
            <SelectItem value="aniversario">Aniversario</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Button type="submit">Reservar</Button>
    </form>
  );
}
