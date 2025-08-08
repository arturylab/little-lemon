import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import BookingForm from '../components/BookingForm';

// 1. Simula la función fetchAPI
const fetchAPI = jest.fn();

// 2. Función que llama a fetchAPI
async function initializeTimes() {
  return await fetchAPI();
}

// 3. Reducer que también usa fetchAPI al recibir una fecha
async function updateTimes(state, action) {
  if (action.type === 'update' && action.date) {
    return await fetchAPI(action.date);
  }
  return state;
}

// 4. Prueba de renderizado estático
test('Renders the BookingForm static text', () => {
  const mockDispatch = jest.fn();
  const mockAvailableTimes = ['17:00', '18:00', '19:00'];

  render(
    <BookingForm
      availableTimes={mockAvailableTimes}
      dispatch={mockDispatch}
    />
  );

  const fechaLabel = screen.getByText('Fecha');
  expect(fechaLabel).toBeInTheDocument();
});

// 5. Prueba para initializeTimes con fetchAPI mockeado
test('initializeTimes returns fetched times', async () => {
  fetchAPI.mockResolvedValue(['17:00', '18:00', '19:00']);

  const times = await initializeTimes();

  expect(times).toEqual(['17:00', '18:00', '19:00']);
  expect(fetchAPI).toHaveBeenCalled();
});

// 6. Prueba para updateTimes con fecha
test('updateTimes returns updated times based on date', async () => {
  const initialState = ['17:00', '18:00'];
  const action = { type: 'update', date: '2024-01-01' };

  fetchAPI.mockResolvedValue(['20:00', '21:00']);

  const newState = await updateTimes(initialState, action);

  expect(newState).toEqual(['20:00', '21:00']);
  expect(fetchAPI).toHaveBeenCalledWith('2024-01-01');
});
