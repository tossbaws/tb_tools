import Layout from '../components/MyLayout';
import fetch from 'isomorphic-unfetch';

import 'bootstrap/dist/css/bootstrap.min.css';

import React from "react";

// Run with npm run dev

const Index = props => (
    <Layout>
        <div>
            <p>Howdy + {props.items.map( item => item.name)}</p>
        </div>
    </Layout>
);

Index.getInitialProps = async function() {

    const perapi = 'http://172.30.30.117:8000/c/4'
    const res2 = await fetch(perapi)
    const data2 = await res2.json();

    console.log(`Data from personal api: ${data2.items.map(entry => entry.name + " " + entry.id)}`)


    return {
        items: data2.items.map(entry => entry)
    };
}

export default Index;
