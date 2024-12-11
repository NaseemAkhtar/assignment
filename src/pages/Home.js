import React, {useState, useEffect} from 'react'
import { Card, Placeholder, Row, Col } from 'react-bootstrap';
import config from "../config"
import Header from '../components/header';
import Hero from '../components/hero';
import useFetch from '../components/useFetch';
import Tags from '../components/tags';


import CardLoader from '../components/cardLoader';
import CardBlk from '../components/card';

function Home() {
    const [category, setCategory] = useState(null)
    const { data, loading, error } = useFetch(`${config.restEndpoint}/categories`);
    const { data: categoryData, loading: categoryLoading, error: categoryError } = useFetch(`${config.restEndpoint}/category/${category ? category : 'electronics'}`);

    const handleCategory = (tag) => {
        setCategory(tag)
    }

    return (
    <>
        <Header />
        <Hero />
        <Tags tags={data} fetchTag={handleCategory} />

        <div className='container'>
            <Row className="card_container" >
                {categoryLoading ?
                    Array(6).fill('_').map((card, ind) => (
                        <Col key={ind} sm={3} className="my-4">
                            <CardLoader key={ind} />
                        </Col>
                    ))
                    :
                    categoryData?.map(card => (
                        <Col key={card.id} sm={3} className="my-4" >
                            <CardBlk card={card} />
                        </Col>
                    ))
                }
            </Row>
        </div> 
    </>
    )
}

export default Home