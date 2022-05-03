import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef, useState } from "react";
import './Chatbot.css'
import Modal from 'react-modal';
import axios from "axios";
import placeholder from '../../assets/icons/post-noimg.png'

const Chatbot = (props) => {
    const messagesEndRef = useRef(null)
    const [message, setMessage] = useState("");
    const [messageList, setMessageList] = useState([]);


    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }

    useEffect(() => {
        scrollToBottom()
    }, []);


    const addMessage = async () => {
        if (message.trim() != "") {
            const req = message
            await setMessageList(messageList.concat(
                {
                    chat: req,
                    human: true
                }
            ))
            setMessage("")
            scrollToBottom()
            const result = await axios.post(`http://localhost:8080/chat/dialogflow/vi/` + req + `/abcd123`)
                .then(res => {
                    addBotMessage(req, res.data)
                })
        }
    }

    const addSuggestion = async (req) => {
        if (req.trim() != "") {
            await setMessageList(messageList.concat(
                {
                    chat: req,
                    human: true
                }
            ))
            setMessage("")
            scrollToBottom()
            const result = await axios.post(`http://localhost:8080/chat/dialogflow/vi/` + req + `/abcd123`)
                .then(res => {
                    addBotMessage(req, res.data)
                })
        }
    }

    const addBotMessage = async (req, res) => {
        await setMessageList(messageList.concat(
            {
                chat: req,
                human: true,
            },
            {
                chat: res,
            }
        ))
        scrollToBottom()
    }

    const ChatBubble = (props) => {
        return (
            <div className={!props.human ? "chat-content left" : "chat-content right"}>
                {
                    !props.human ?
                        <span className="chatbot-avatar">
                            <FontAwesomeIcon icon="robot"></FontAwesomeIcon>
                        </span>
                        : ""
                }
                <span className={!props.human ? "chat-bubble chatbot" : "chat-bubble guest"}>{props.chat}</span>
            </div>
        )
    }

    const ChatCard = (props) => {
        return (
            <div className="chat-content left">
                <span className="chatbot-avatar">
                    <FontAwesomeIcon icon="robot"></FontAwesomeIcon>
                </span>
                <div className="chat-card">
                    <div className="card-img-section">
                        <img className="card-img" src={props.imageUri ? props.imageUri : placeholder}></img>
                        <div className="card-introduction">
                            <span className="title">{props.title ? props.title : "N/A"}</span>
                            <span className="description">{props.subtitle ? props.subtitle : "N/A"}</span>
                        </div>
                    </div>
                    <div className="card-btn-section">
                        {props.buttons ? props.buttons.map((item, index) => {
                            return (
                                <div className="card-btn"
                                    onClick={() => {
                                        window.open(item.postback ? item.postback : "#", "_blank")
                                    }}>
                                    <span className="icon">
                                        <FontAwesomeIcon icon={['fas', 'arrow-up-right-from-square']}></FontAwesomeIcon>
                                    </span>
                                    {item.text ? item.text : "Click me"}
                                </div>
                            )
                        })
                            : ""}

                    </div>
                </div>

            </div>
        )
    }

    const ChatSuggestion = (props) => {
        return (
            <div className="chat-content left">
                <span className="chatbot-avatar">
                    <FontAwesomeIcon icon="robot"></FontAwesomeIcon>
                </span>
                <div className="chat-suggestions">
                    {
                        props.quickReplies ? props.quickReplies.map((item, index) => {
                            return (
                                <span
                                    className="chat-suggestion"
                                    onClick={()=>addSuggestion(item)}
                                >{item}</span>
                            )
                        })
                            : ""
                    }

                </div>
            </div>
        )
    }

    return (
        <Modal className="chatbox" isOpen={props.isOpen} overlayClassName="chatbot-overlay">
            <div className="chatbox-header">
                <div className="title">
                    <span className="chatbot-avatar">
                        <FontAwesomeIcon icon="robot"></FontAwesomeIcon>
                    </span>
                    <span className="chatbot-name">
                        Course
                        <span>
                            <FontAwesomeIcon icon="rectangle-ad"></FontAwesomeIcon>
                            viser
                        </span>
                    </span>
                </div>
                <span className="chatbot-close" onClick={props.onClose}>
                    <FontAwesomeIcon icon="times"></FontAwesomeIcon>
                </span>
            </div>
            <div className="chatbox-body">
                <div className="chat-view">
                    <div className="chat-container">

                        {/* <ChatCard></ChatCard> */}
                        {/* <ChatSuggestion></ChatSuggestion> */}
                        {
                            messageList.map((item, index) => {
                                return (
                                    <div>
                                        {
                                            item.human ?
                                                <ChatBubble
                                                    chat={item.chat}
                                                    human={item.human}
                                                ></ChatBubble>
                                                :
                                                item.chat.map((chatItem, index) => {
                                                    if (chatItem.card) {
                                                        return (
                                                            <ChatCard
                                                                title={chatItem.card.title}
                                                                subtitle={chatItem.card.subtitle}
                                                                imageUri={chatItem.card.imageUri}
                                                                buttons={chatItem.card.buttons}
                                                            ></ChatCard>

                                                        )
                                                    }
                                                    if (chatItem.text) {
                                                        return (
                                                            <ChatBubble
                                                                chat={chatItem.text.text}>
                                                            </ChatBubble>
                                                        )
                                                    }
                                                    if (chatItem.quickReplies) {
                                                        return (
                                                            <ChatSuggestion
                                                                quickReplies={chatItem.quickReplies.quickReplies}
                                                            ></ChatSuggestion>
                                                        )
                                                    }
                                                })
                                        }

                                    </div>
                                )


                            })
                        }
                        <div className="temp" ref={messagesEndRef}></div>
                    </div>

                </div>
                <div className="chat-input">
                    <input className="text-input" onChange={(e) => setMessage(e.target.value)} value={message}></input>
                    <button className="send-btn" onClick={addMessage}>
                        <FontAwesomeIcon icon={['fas', 'paper-plane']}></FontAwesomeIcon>
                    </button>
                </div>
            </div>
        </Modal >
    )
}

export default Chatbot