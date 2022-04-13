import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef, useState } from "react";
import './Chatbot.css'
import Modal from 'react-modal';

const ChatBubble = (props) => {


    return (
        <div className={props.chatbot ? "chat-content left" : "chat-content right"}>
            {
                props.chatbot ?
                    <span className="chatbot-avatar">
                        <FontAwesomeIcon icon="robot"></FontAwesomeIcon>
                    </span>
                    : ""
            }
            <span className={props.chatbot ? "chat-bubble chatbot" : "chat-bubble guest"}>{props.chat}</span>
        </div>
    )
}

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
            await setMessageList(messageList.concat(
                <ChatBubble
                    chat={message}
                ></ChatBubble>
            ))
            scrollToBottom()
            setMessage("")
        }
    }
    const addBotMessage = async (props) => {
        if (message.trim() != "") {
            await setMessageList(messageList.concat(
                <ChatBubble
                chatbot
                    chat={props.message}
                ></ChatBubble>
            ))
            scrollToBottom()
            setMessage("")
        }
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
                        {messageList}
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
        </Modal>
    )
}

export default Chatbot