import React from "react";
import Navigation from "./Navigation";

export default function Header({ currentPage, handlePageChange }) {
    return (
        <header className="mb-6 py-4 display-flex">
            <div className="row">
                <div className="col-6">
                    <h2 className="name">Vanessa Villaluz</h2>
                </div>
                <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
            </div>
        </header>
    )
}