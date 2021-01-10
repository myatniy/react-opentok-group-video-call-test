import React from 'react';
import {OTPublisher, createSession, OTSubscriber} from 'opentok-react';
import Navbar from "./components/navbar";
import { API_KEY, SESSION_ID, TOKEN } from "./config";

import "./App.css";

function setHeightGroupCallContainer() {
    const heightOfNavbar = document.getElementById("video-call-navbar").offsetHeight;
    const heightOfGroupCallContainer = window.innerHeight - heightOfNavbar;
    const target = document.querySelector("#group-call-container");

    target.style.height = `${heightOfGroupCallContainer}px`;
}

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { streams: [] };
    }

    componentWillMount() {
        this.sessionHelper = createSession({
            apiKey: API_KEY,
            sessionId: SESSION_ID,
            token: TOKEN,
            onStreamsUpdated: streams => { this.setState({ streams }); }
        });
    }

    componentWillUnmount() {
        this.sessionHelper.disconnect();
    }

    componentDidMount() {
        setHeightGroupCallContainer();
    }

    // componentDidUpdate(prevProps, prevState, snapshot) {
    //     setHeightGroupCallContainer();
    // }

    render() {
        return (
            <div id="video-chat-app-container">
                <Navbar />
                <section id="group-call-container">
                    <OTPublisher session={this.sessionHelper.session} />

                    {this.state.streams.map(stream => {
                        return (
                            <OTSubscriber
                                key={stream.id}
                                session={this.sessionHelper.session}
                                stream={stream}
                            />
                        );
                    })}
                </section>
            </div>
        );
    }
}
