import Layout from '../../components/MyLayout';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import Table from "react-bootstrap/Table";
import Pagination from "react-bootstrap/Pagination";

import tableLinks from "../../css/TableTheme";

// Run with npm run dev

const Index = props => (
    <Layout>
        <Table variant="dark" size="sm" striped>
            <thead>
            <tr>
                <th>Items + {props.letter.valueOf()}</th>
            </tr>
            </thead>
            <tbody>
            {props.items.map( item => (
                <tr key={item.id}>
                    <td>
                        <Link href="/pg/[id]" as={`/pg/${item.id}`}>
                            <a style={tableLinks}>{item.name}</a>
                        </Link>
                    </td>
                </tr>
            ))}
            </tbody>
        </Table>
        <Pagination>
            <Pagination.Prev href={props.prevpg}/>
            <Pagination.Next href={props.nextpg}/>
        </Pagination>
    </Layout>

);

Index.getInitialProps = async function(context) {
    const perapi = 'http://172.30.30.117:8000/'
    const webnav = 'http://172.30.30.117:3000/'
    const { letter } = context.query;
    const { pgno } = context.query;

    const res = await fetch(perapi + letter + '/' + pgno)
    const data = await res.json();

    // Logic to create a next page to use in the pagination tabs
    let subone = webnav + letter + '/' + (parseInt(pgno)-1)
    let plusone = webnav + letter + '/' + (parseInt(pgno)+1)

    console.log(`Data from personal api: ${data.items.map(entry => entry.name + " " + entry.id)}`)
    console.log(`Data from plusone and subone: ` + plusone + " " + subone)


    return {
        items: data.items.map(entry => entry),
        letter: letter,
        pgno: pgno,
        nextpg : plusone,
        prevpg : subone
    };
}

export default Index;
