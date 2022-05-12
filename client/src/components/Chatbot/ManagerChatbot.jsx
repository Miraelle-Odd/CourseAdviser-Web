import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef, useState } from "react";
import './ManagerChatbot.css'
import Modal from 'react-modal';
import axios from "axios";
import placeholder from '../../assets/icons/post-noimg.png'
import { ChatCard, ChatSuggestion } from "./Chatbot";

const ManagerChatbot = (props) => {
    const [userInput, setUserInput] = useState()
    const [result, setResult] = useState()

    const UserInputDisplay = (props) => {
        return (
            <div className="section">
                <span className="title">Người dùng nhập:</span>
                <span className="contents">{props.text}</span>
            </div>
        )

    }
    const BotResponseDisplay = (props) => {
        return (
            <div className="section">
                <span className="title">Phản hồi:</span>
                <span className="contents">
                    {props.items && props.items.length != 0 ? props.items.map((item, index) => {
                        if (item.card)
                            return (
                                <ChatCard
                                    human
                                    title={item.card.title}
                                    subtitle={item.card.subtitle}
                                    imageUri={item.card.imageUri}
                                    buttons={item.card.buttons}
                                ></ChatCard>
                            )
                        if (item.text)
                            return (item.text.text)
                        if (item.quickReplies) {
                            return (
                                <ChatSuggestion
                                    human
                                    quickReplies={item.quickReplies.quickReplies}
                                    onClick={sendSuggestion}
                                ></ChatSuggestion>
                            )
                        }
                    }) : <span>No result</span>}
                </span>
                <span className="space"></span>
            </div>
        )
    }

    const sendText = async (e) => {
        if (e.key === 'Enter') {
            if (userInput && userInput.trim() != "") {
                const req = userInput
                await axios.post(`http://localhost:8080/chat/dialogflow/vi/` + req + `/abcd123`)
                    .then(res => {
                        setResult({
                            input: userInput,
                            response: res.data,
                        })
                    })
            }
        }
    }

    const sendSuggestion = async (e) => {
        if (e.target.textContent && e.target.textContent.trim() != "") {
            const req = e.target.textContent
            setUserInput(e.target.textContent)
            await axios.post(`http://localhost:8080/chat/dialogflow/vi/` + req + `/abcd123`)
                .then(res => {
                    setResult({
                        input: e.target.textContent,
                        response: res.data,
                    })
                })
        }
    }
    return (
        <div className="manager-chatbot">
            <div className="input-area">
                <input
                    className="chat-input"
                    placeholder="Try it now"
                    onChange={(e) => setUserInput(e.target.value)}
                    onKeyDown={sendText}
                    value={userInput}
                ></input>
            </div>
            <div className="chatbot-result">
                {
                    result ?
                        <div>
                            <UserInputDisplay
                                text={result.input ? result.input : "none"}
                            ></UserInputDisplay>
                            <BotResponseDisplay
                                items={result.response ? result.response : []}
                            ></BotResponseDisplay>
                        </div>
                        :
                        <span className="no-input">
                            <FontAwesomeIcon icon={['fas', 'circle-info']}></FontAwesomeIcon>
                            Please use test console above to try a sentence.
                        </span>

                }


            </div>
        </div>
    )
}

export default ManagerChatbot