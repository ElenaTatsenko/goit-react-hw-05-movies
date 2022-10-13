import { Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import Layout from './Layout/Layout'
export const App = () => {
  return (
    <>
      <div>Lena</div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<div>Home</div>} />
          <Route path="movies" element={<div>Movies</div>}></Route>
          <Route path="movies/:movieId" element={<div>MovieDeteils</div>}>
              <Route path="cast" element={<div>Cast</div>} />
              <Route path="reviews" element={<div>Reviews</div>} />
            </Route>
            <Route path="*" element={<div to="/">Navigate</div>} />
        </Route>
      </Routes>
      <ToastContainer></ToastContainer>
    </>
  );
};
