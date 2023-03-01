import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './components/Body/Home/Home';
import HistoryPage from './pages/HistoryPage';
import Achievement from './pages/AchievementPage';
import RootLayout from './pages/RootLayout';
import OrderPage from './pages/OrderPage';
import { useContext } from 'react';
import productContext from './context/ProductContext';

const router = createBrowserRouter([
    {
        path: '',
        element: <RootLayout />,
        children: [
            { index: true, element: <Home /> },
            { path: 'history', element: <HistoryPage /> },
            { path: 'achievement', element: <Achievement /> },
        ],
    },
    { path: 'order', element: <OrderPage />, children: [{ path: ':productId', element: <OrderPage /> }] },
]);

const App = () => {
    return <RouterProvider router={router} />;
};

export default App;
