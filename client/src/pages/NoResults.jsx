import React from "react";

import { Container, Row, Col } from "../components/Grid";

function NoResults() {
    return (
        <Container fluid>
            <Row>
                <Col size="md-12">
                    <h1>There are no results for this book</h1>
                </Col>
            </Row>
        </Container>
    );
}

export default NoResults;