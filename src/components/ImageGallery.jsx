import React, { useState } from "react";
import Menu from "../components/Menu";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

const ImageGallery = () => {
    const [items, setItems] = useState(Menu);

    const filterItems = (cate) => {
        const updateItems = Menu.filter((curElem) => {
            return curElem.category === cate;
        });
        setItems(updateItems);
    };

    return (
        <>
            <h1 className="mt-4 text-center main-heading">
                Order Your Favourite Dish
            </h1>
            <hr />

            <div className="menu-tabs container">
                <div className="menu-tab d-flex justify-content-around">
                    <button
                        className="btn btn-warning"
                        onClick={() => filterItems("breakfast")}>
                        Breakfast
                    </button>
                    <button
                        className="btn btn-warning"
                        onClick={() => filterItems("lunch")}>
                        Lunch
                    </button>
                    <button
                        className="btn btn-warning"
                        onClick={() => filterItems("evening")}>
                        Evening
                    </button>
                    <button
                        className="btn btn-warning"
                        onClick={() => filterItems("dinner")}>
                        Dinner
                    </button>
                    <button
                        className="btn btn-warning"
                        onClick={() => setItems(Menu)}>
                        All
                    </button>
                </div>
            </div>

            <div className="menu-items container-fluid mt-5">
                <div className="row">
                    <div className="col-11 mx-auto">
                        <div className="row">
                            {items.map((elem) => {
                                // prettier-ignore
                                const { id, name, image, category, price, description } = elem;
                                return (
                                    <div
                                        className="item1 col-12 col-md-6 col-lg-4 col-xl-4 my-5"
                                        key={id}>
                                        <div className="row item-inside">
                                            {/*Item image col*/}
                                            <div className="col-12 col-md-12 col-lg-4 img-div">
                                                <img
                                                    src={image}
                                                    alt={name}
                                                    className="img-fluid"
                                                />
                                            </div>
                                            {/*Item details col*/}
                                            <div className="col-12 col-md-12 col-lg-8 item-desc">
                                                <div className="main-title pt-4 pb-3">
                                                    <h1>{name}</h1>
                                                    <p>{description}</p>
                                                </div>
                                                <div className="menu-price-book">
                                                    <div className="price-book-divide d-flex justify-content-between">
                                                        <h2>Price: {price}</h2>
                                                        <a href="">
                                                            <button className="btn btn-primary">
                                                                Order Now
                                                            </button>
                                                        </a>
                                                    </div>
                                                </div>
                                                <p>
                                                    *Price may vary on selected
                                                    date.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ImageGallery;
