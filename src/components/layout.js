import * as React from "react"
import Header from "./header"
import Helmet from 'react-helmet'
import { Global, css } from '@emotion/react'

const Layout = ({children}) => {
  
    return (
        <>
            <Global
                styles={css`
                    html {
                        font-size: 62.5%;
                    }

                    body {
                        font-size: 1.8rem;
                        line-height: 1.5;
                        font-family: 'PT Sans', sans-serif;
                    }

                    h1, h2, h3 {
                        margin: 0;
                        line-height: 1.5;
                    }

                    h1, h2 {
                        font-family: 'Roboto', serif;
                    }

                    h3 {
                        font-family: 'PT Sans', sans-serif;
                    }

                    ul {
                        list-style: none;
                        margin: 0;
                        padding: 0;
                    }
                `}
            />

            <Helmet>
                <title> Gatsby Hotel </title>
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.css"
                    integrity="sha512-oHDEc8Xed4hiW6CxD7qjbnI+B07vDdX7hEPTvn9pSZO1bcRqHp8mj9pyr+8RVC2GmtEfI2Bi9Ke9Ass0as+zpg=="
                    crossorigin="anonymous"
                    referrerpolicy="no-referrer"
                />
                <link
                    rel="preconnect"
                    href="https://fonts.googleapis.com"
                />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                crossorigin/>
                <link
                    href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&family=Roboto:wght@400;700;900&display=swap"
                    rel="stylesheet"
                />
            </Helmet>

            <Header/>

            {children}
        </>
    )
}

export default Layout
