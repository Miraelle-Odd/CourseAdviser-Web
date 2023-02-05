import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef, useState } from "react";
import './Chatbot.css'
import Modal from 'react-modal';
import axios from "axios";
import placeholder from '../../assets/icons/post-noimg.png'

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
            {
                !props.human ?
                    <span className="chatbot-avatar">
                        <FontAwesomeIcon icon="robot"></FontAwesomeIcon>
                    </span>
                    : ""
            }
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
                            <div className="card-btn" key={index}
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
            {
                !props.human ?
                    <span className="chatbot-avatar">
                        <FontAwesomeIcon icon="robot"></FontAwesomeIcon>
                    </span>
                    : ""
            }
            <div className="chat-suggestions">
                {
                    props.quickReplies ? props.quickReplies.map((item, index) => {
                        return (
                            <span key={index}
                                className="chat-suggestion"
                                onClick={props.onClick}
                            >{item}</span>
                        )
                    })
                        : ""
                }

            </div>
        </div>
    )
}

const ChatImage = (props) => {
    return (
        <div className="chat-content left">
            {
                !props.human ?
                    <span className="chatbot-avatar">
                        <FontAwesomeIcon icon="robot"></FontAwesomeIcon>
                    </span>
                    : ""
            }
            <div className='chat-image'>
                <div onClick={
                    () => window.open(props.image, "_blank")
                } target="_blank" className='hover-layer'>Zoom</div>
                <img src={props.image}></img>
            </div>
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
        console.log("NA", res.filter(e => e.text?.text[0]?.includes("Hidden:")))
        const hiddenMessage = res.filter(e => e.text?.text[0]?.includes("Hidden:"))[0]?.text?.text[0];
        const recommendId = hiddenMessage?.split("Hidden:")[1];
        var rawRecommendList = [];
        var dataRecommendList = [];
        if (recommendId) {
            await axios.get(`https://localhost:7095/Recommend/${recommendId}`).then((res) => {
                console.log("bbbbbbb", res.data)
                rawRecommendList = res.data.split(",")
            })

            Promise.all(rawRecommendList.map(async item => {
                var param = item.split('');

                return await axios.get(`http://localhost:8080/bot-recommenders/image-detail/${param[0]}/${param[1]}`).then((res) => {
                    dataRecommendList.push(res.data)
                })
            })).then(async _ => {
                res.splice(res.findIndex(e => e.text?.text[0]?.includes("Hidden:")), 0, ...dataRecommendList)
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
            )
        }

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
                        {
                            messageList.map((item, index) => {
                                console.log(item)
                                return (
                                    <div key={index}>
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
                                                        if (!chatItem.text.text[0].includes('Hidden:'))
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
                                                                onClick={(e) =>
                                                                    addSuggestion(e.target.textContent)
                                                                }
                                                            ></ChatSuggestion>
                                                        )
                                                    }
                                                    if (chatItem.image) {
                                                        return (
                                                            <ChatImage image={chatItem.image}></ChatImage>
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
                    <input
                        className="text-input"
                        onChange={(e) => setMessage(e.target.value)}
                        onKeyDown={async (e) => {
                            if (e.key === 'Enter') {
                                addMessage()
                            }
                        }}
                        value={message}
                    ></input>
                    <button className="send-btn" onClick={addMessage}>
                        <FontAwesomeIcon icon={['fas', 'paper-plane']}></FontAwesomeIcon>
                    </button>
                </div>
            </div>
        </Modal >
    )
}

export default Chatbot
export {
    ChatCard,
    ChatSuggestion
}