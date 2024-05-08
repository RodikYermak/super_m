import { createRoot } from 'react-dom/client';
import { loadStripe } from '@stripe/stripe-js';

const stripeLoadedPromise = loadStripe(
    'pk_test_51PEGiJFOfA0oRjDAcqYPit4tIKc4LL61a6Ytlnj4w42ziRNewGYtmgMbQeeFvjyX3jy3BdSpJpNXdjEFEHsFw6hE00F2pDXne4'
);

function App() {
    function handleClick(event) {
        stripeLoadedPromise.then((stripe) => {
            stripe
                .redirectToCheckout({
                    lineItems: [
                        {
                            price: 'price_1PEH2OFOfA0oRjDAy8kket8a',
                            quantity: 1,
                        },
                    ],
                    mode: 'payment',
                    successUrl: 'https://react-tutorial.app/app.html',
                    cancelUrl: 'https://react-tutorial.app/app.html',
                })
                .then((response) => {
                    // this will only log if the redirect did not work
                    console.log(response.error);
                })
                .catch((error) => {
                    // wrong API key? you will see the error message here
                    console.log(error);
                });
        });
    }

    return <button onClick={handleClick}>Pay</button>;
}

createRoot(document.querySelector('#react-root')).render(<App />);
