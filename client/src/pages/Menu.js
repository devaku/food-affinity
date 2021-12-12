import React, { useEffect, useState } from 'react';

// Components
import Header from '../components/Header';
import Footer from '../components/Footer';
import CategoryBar from '../components/CategoryBar';
import FoodOptions from '../components/FoodOptions';

// CSS
import '../css/Menu.css';

// Services
import { GetLocalStorage, SaveLocalStorage } from '../services/utility';
import * as api from '../api';

function Menu() {
    let [categoryName, setCategoryName] = useState('Menu');
    let [total, setTotal] = useState('');
    let [categories, setCategories] = useState({
        status: 'idle',
        entities: [],
    });
    let [products, setProducts] = useState({
        status: 'idle',
        entities: [],
    });

    let [payment_details, setPaymentDetails] = useState({
        id: null,
        amount: 0,
        provider: 'NONE',
        status: 'NOTPAID',
    });

    let [orders, setOrders] = useState({
        id: null, // order_id
        payment_id: null,
        status: 'idle',
        total: 0,
        user_id: null,
    });

    let [cart, setCart] = useState({
        order_id: null,
        entities: [
            {
                product_id: null,
                quantity: 0,
            },
        ],
    });

    let [productReference, setProductReference] = useState([]);

    // Update the Products on the page when
    // Category option is clicked
    const handleCategoryClick = async (e) => {
        let { value } = e.target;
        // Determine category name
        let categoryName = categories.entities.find(
            (item) => item.id === parseInt(value)
        ).name;

        // Loading
        setProducts({
            ...products,
            status: 'loading',
        });
        let response = await api.READ_SomeProducts(value);

        // Update the category name
        setCategoryName(categoryName);
        // Display to UI
        setProducts({
            status: 'idle',
            entities: response,
        });
    };

    const handleAddCart = async (e, quantity, closeModal) => {
        let { value: product_id } = e.target;

        // Add item to cart
        // Get the product reference to display onto cart
        let promiseArray = await Promise.all([
            api.CREATE_CartContents(orders.id, product_id, quantity),
            api.READ_AProduct(product_id),
        ]);

        let product = promiseArray[1];
        setProductReference([...productReference, product]);

        let cartItem = {
            product_id,
            quantity,
        };

        // Update state
        setCart({
            ...cart,
            entities: [...cart.entities, cartItem],
        });

        closeModal(false);
    };

    const handleEditCart = async (e, quantity, closeModal) => {
        let { value: product_id } = e.target;

        /**
         * This code should all just be done server side.
         * Preferrably in one SQL function. >_>
         */

        // Edit the item on the cart
        let result = await api.UPDATE_CartQuantityContents(
            orders.id,
            product_id,
            quantity
        );

        console.log(result);

        return;

        // Update cart
        // This code is SERIOULSY inefficient. >_>
        setProductReference([]);
        let { items, total } = result;
        for (let x = 0; x < items.length; x++) {
            // let temp = [];
            // temp.push(items[x]);
            // setProductReference(temp);
        }

        // setCart({
        //     ...cart,
        //     order_id,
        //     entities: response,
        // });

        // closeModal(false);
    };

    const handleRemoveItem = async (e, closeModal) => {
        let { value: product_id } = e.target;
        console.log('REMOVE ITEM CLICK');
        closeModal(false);
    };

    const handleCheckout = async (e) => {
        console.log('checkout click');
    };

    // DEBUG
    const user_id = 1;

    // Load the cart
    const ReadCart = async (order_id) => {
        let response = await api.READ_CartContents(order_id);

        let { total, items } = response;
        setTotal(total);

        setCart({
            ...cart,
            order_id,
            entities: items,
        });
    };

    // Run on startup
    /**
     * MULTIPLE THINGS HAPPEN ON STARTUP
     * Load all the categories from the backend
     * Read PaymentDetails of User
     * - if it doesn't exist: create a Payment Details transaction for the user
     * Create a Order Details for the user
     * - if it doesn't exist: create
     *
     * There's probably a better, smarter way to do this
     * But I'm too dumb to figure that out by myself
     *
     * IDs should be tied to user_id instead.
     * Should be something changed for the future
     */
    useEffect(() => {
        let asyncWrapper = async () => {
            // Loading
            setCategories({
                ...categories,
                status: 'loading',
            });

            let response = await api.READ_AllCategories();

            // Idle
            setCategories({
                status: 'idle',
                entities: response,
            });

            let zCookie = GetLocalStorage();
            if (zCookie.payment_details_id) {
                let response = await api.READ_PaymentDetails(
                    zCookie.payment_details_id
                );
                setPaymentDetails({
                    ...payment_details,
                    ...response,
                });
            } else {
                // Apply defaults
                let { id: payment_details_id } =
                    await api.CREATE_PaymentDetails(
                        payment_details.amount,
                        payment_details.provider,
                        payment_details.status
                    );

                setPaymentDetails({
                    ...payment_details,
                    id: payment_details_id,
                });

                zCookie.payment_details_id = payment_details_id;
            }

            if (zCookie.order_id) {
                let response = await api.READ_OrderDetails(zCookie.order_id);
                setOrders({
                    ...orders,
                    ...response,
                });
            } else {
                let { id: order_id } = await api.CREATE_OrderDetails(
                    user_id,
                    orders.total,
                    zCookie.payment_details_id
                );

                setOrders({
                    ...orders,
                    id: order_id,
                    payment_id: zCookie.payment_details_id,
                });

                zCookie.order_id = order_id;
            }

            await ReadCart(zCookie.order_id);
            SaveLocalStorage(zCookie);
        };
        asyncWrapper();
    }, []);

    return (
        <div className="backdrop d-flex flex-column">
            <Header categoryName={categoryName}></Header>
            <div className="menu d-flex py-2">
                <CategoryBar
                    categories={categories.entities}
                    handleCategoryClick={handleCategoryClick}
                    categoryStatus={categories.status}
                ></CategoryBar>
                <FoodOptions
                    products={products.entities}
                    productHandler={setProducts}
                    handleAddCart={handleAddCart}
                    productStatus={products.status}
                ></FoodOptions>
            </div>
            <Footer
                cart={cart}
                handleEditCart={handleEditCart}
                handleRemoveItem={handleRemoveItem}
                handleCheckout={handleCheckout}
                total={total}
            ></Footer>
        </div>
    );
}

export default Menu;
