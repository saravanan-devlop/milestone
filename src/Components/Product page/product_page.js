import React, { useEffect, useState } from "react";
import { CSVLink } from "react-csv";
import { Link } from "react-router-dom";
import StarRatings from "react-star-ratings";

export function Products() {
    const [fetchvalue, setFetchvalue] = useState([])
    const [count, setCount] = useState(0)
    useEffect(() => {
        fetch("https://fakestoreapi.com/products/")
            .then(response => response.json())
            .then(data => setFetchvalue(data))
    })

    const headers = [
        { label: "ID", key: "id" },
        { label: "Title", key: "title" },
        { label: "Price", key: "price" },
        { label: "Description", key: "description" },
        { label: "Category", key: "category" },
    ];
    return (
        <>
            <div className="container">
                <div className="border-bottom">
                    <h2>Products</h2>
                    <div className="d-flex justify-content-end">
                        <CSVLink data={fetchvalue} headers={headers} className="text-dark">
                            <button className="btn btn-warning">Download me</button>
                        </CSVLink></div>
                </div>

                <table className="table table-striped">
                    <thead>
                        <tr><th>Image</th>
                            <th>Id</th>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Description</th>
                            <th>Category</th>
                            <th className="px-5">Rating</th>
                            <th className="px-3">Add/Less</th>
                            <th className="">View More</th></tr>
                    </thead>
                    <tbody>
                        {

                            fetchvalue.map((value, index) => (
                                <>

                                    <tr>
                                        <td><img src={value.image} className="imgsize" /></td>
                                        <td>{value.id}</td>
                                        <td>{value.title}</td>
                                        <td>{value.price}</td>
                                        <td>{value.description}</td>
                                        <td>{value.category}</td>
                                        <td><StarRatings
                                            rating={value.rating.rate}
                                            starRatedColor="orange"
                                            numberOfStars={5}
                                            starDimension="20px"
                                            starSpacing="2px" />
                                        </td>
                                        <td><button className="btn btn-success" onClick={() => { setCount(count + 1) }}>+</button>
                                            {count}
                                            <button className="btn btn-danger" onClick={() => { setCount(count - 1) }}>-</button></td>
                                        <td><Link to={`/product/${value.id}`}><button className="btn btn-primary ">More</button></Link></td>

                                    </tr>


                                </>
                            ))
                        }</tbody>
                </table>

            </div>
        </>
    )
}