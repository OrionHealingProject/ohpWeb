import React from 'react';
import Container from 'react-bootstrap/Container'

import YoutubeEmbed from '../YouTube';

export function VideoSection() {
    return (
        <Container className="section-container" id="video">
            <h1 className="text-center ">My Latest Video</h1>
            <YoutubeEmbed embedId="uVc3LOjiTr0" />
        </Container>

    )
}