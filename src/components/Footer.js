import React from "react";

export default function Footer() {
    const styles = {
        footerStyle: {
            position: "fixed",
        left: "0",
        bottom: "0",
        width: "100%",
        }
    }

    return (
        <footer style={styles.footerStyle}>
            <div className="container text-center mb-5">
                <p>Footer info</p>
            </div>
        </footer>
    )
}