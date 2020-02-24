import Layout from '../../components/MyLayout';
import fetch from 'isomorphic-unfetch';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/BootstrapTheme.css';
import ItemTheme from "../../css/ItemTheme"

import React from "react";
import Card from "react-bootstrap/Card";

const Post = props => (
    <Layout>
        <Card style={ItemTheme}>
            <Card.Header>
                <h1>{props.item.item.name}</h1>
            </Card.Header>
            <Card.Body>
                <Card.Text>
                    <p>{props.item.item.description}</p>
                    Current Changes: [{props.item.item.current.price}],[{props.item.item.current.trend}]<br/>
                    Today's Changes: [{props.item.item.today.price}],[{props.item.item.today.trend}]
                </Card.Text>

                {props.item.item.icon_large ? <img src={props.item.item.icon_large} /> : null}
            </Card.Body>
        </Card>
    </Layout>
);

Post.getInitialProps = async function(context) {
    const { id } = context.query;
    const perapi = 'http://172.30.30.117:8000/'
    const res = await fetch(perapi + `${id}`)

    const item = await res.json();

    // const res = await fetch(url+suff+`${id}`, {
    //     mode: "cors",
    //     headers: {
    //         "Content-Type":"application/json"
    //     }
    // });

    console.log(`Fetched item: ${JSON.stringify(item)}`);

    return { item: item };
};

export default Post;
