import { Link } from "react-router-dom";

import React from 'react'

const Public = () => {
    const content = (
        <section className="public">
            <header>
                <h1>Welcome to <span className="nowrap">Tech Notes</span></h1>
            </header>
            <main className="public__main">
                <p>Accounts : password : roles</p>
                <p>testA : testA : Employee, Manager, Admin</p>
                <p>testM : testM : Employee, Manager</p>
                <p>testE : testE : Employee</p>
                <br />
                <p>Owner: Raghav Mehta</p>
            </main>
            <footer>
                <Link to="/login">Employee Login</Link>
            </footer>
        </section>

    )
  return content
}

export default Public