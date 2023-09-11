import React, { useEffect, useState } from "react";
import { CSVLink } from "react-csv";
import { useParams } from "react-router-dom";

export function Details() {
    const [fetchvalue, setFetchvalue] = useState([])
    var { id } = useParams()
    useEffect(() => {
        fetch("https://fakestoreapi.com/products/" + id)
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
    const dataArray = [fetchvalue]
    return (
        <>
            <div className="row">
                <div className="col-lg-6 ">
                    <img src={fetchvalue.image} className="img-fluid" />
                </div>
                <div className="col-lg-6">
                    <h1 className="card-title">{fetchvalue.title}</h1>
                    <p className="card-content text-danger fs-1">{fetchvalue.price}</p>
                    <p className="card-content">{fetchvalue.description}</p>
                    <CSVLink data={dataArray} headers={headers} className="text-dark">
                        <button className="btn btn-warning">Download me</button>
                    </CSVLink>

                </div>


            </div>
        </>
    )
}