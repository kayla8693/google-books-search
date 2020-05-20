import React from "react";

import { Container, Row, Col } from "../components/Grid";

export function BookList({ children }) {
    return <ul className="list-group">{children}</ul>;
}

export function BookListItem({
    title,
    authors,
    description,
    image,
    link
}) {
    return (
        <li className="list-group-item">
            <Container>
                <Row>
                    <Col size="xs-4 sm-2">
                        <img src={image} alt={title} />
                    </Col>
                    <Col size="xs-8 sm-9">
                        <h3>{title} by {authors}</h3>
                        <p>{description}</p>
                        <a rel="noreferrer noopener" target="blank" href={link}>
                            Go to Book!
                        </a>
                    </Col>
                </Row>
            </Container>
        </li>
    );
}
