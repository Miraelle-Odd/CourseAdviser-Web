import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import './ManagerChatbot.css'
import axios from "axios";
import { ChatCard, ChatSuggestion, ChatImage, ChatBubble } from "./Chatbot";

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
                        if (item.text) {
                            if (!item.text.text[0].includes('Hidden:'))
                                return (
                                    <div>
                                        {item.text.text}
                                    </div>
                                )
                        }
                        if (item.quickReplies) {
                            return (
                                <ChatSuggestion
                                    human
                                    quickReplies={item.quickReplies.quickReplies}
                                    onClick={sendSuggestion}
                                ></ChatSuggestion>
                            )
                        }
                        if (item.image) {
                            return (
                                <ChatImage human image={item.image}></ChatImage>
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
                    .then(async res => {
                        const hiddenMessage = res.data.filter(e => e.text?.text[0]?.includes("Hidden:"))[0]?.text?.text[0];
                        const recommendId = hiddenMessage?.split("Hidden:")[1];
                        var rawRecommendList = [];
                        var dataRecommendList = [];
                        if (recommendId) {
                            await axios.get(`https://localhost:7095/Recommend/${recommendId}`).then((ress) => {
                                rawRecommendList = ress.data.split(",")
                            })

                            Promise.all(rawRecommendList.map(async item => {
                                var param = item.split('');

                                return await axios.get(`http://localhost:8080/bot-recommenders/image-detail/${param[0]}/${param[1]}`).then((res) => {
                                    dataRecommendList.push(res.data)
                                })
                            })).then(async _ => {
                                res.data.splice(res.data.findIndex(e => e.text?.text[0]?.includes("Hidden:")), 0, ...dataRecommendList)
                                setResult({
                                    input: userInput,
                                    response: res.data,
                                })
                            })
                        }

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
                .then(async res => {
                    const hiddenMessage = res.data.filter(e => e.text?.text[0]?.includes("Hidden:"))[0]?.text?.text[0];
                    const recommendId = hiddenMessage?.split("Hidden:")[1];
                    var rawRecommendList = [];
                    var dataRecommendList = [];
                    if (recommendId) {
                        await axios.get(`https://localhost:7095/Recommend/${recommendId}`).then((ress) => {
                            rawRecommendList = ress.data.split(",")
                        })

                        Promise.all(rawRecommendList.map(async item => {
                            var param = item.split('');

                            return await axios.get(`http://localhost:8080/bot-recommenders/image-detail/${param[0]}/${param[1]}`).then((res) => {
                                dataRecommendList.push(res.data)
                            })
                        })).then(async _ => {
                            res.data.splice(res.data.findIndex(e => e.text?.text[0]?.includes("Hidden:")), 0, ...dataRecommendList)
                            setResult({
                                input: userInput,
                                response: res.data,
                            })
                        })
                    }

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
                    placeholder="Mời dùng thử"
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
                            Hãy nhập một câu ở test console phía trên để kiểm thử.
                        </span>

                }


            </div>
        </div>
    )
}

export default ManagerChatbot