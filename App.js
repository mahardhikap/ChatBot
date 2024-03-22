import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import {GiftedChat, Bubble} from 'react-native-gifted-chat';
import {Dialogflow_V2} from 'react-native-dialogflow';
import {dialogflowConfig} from './env';

const account_bot = {
  _id: 2,
  name: 'App Bot',
  avatar: 'https://i.ibb.co/RP4GRM1/5500-1-04.jpg',
};

const App = () => {
  const [messages, setMessages] = useState([
    {
      _id: 1,
      text: `Hai aku adalah Chatbot yang akan membantu.`,
      createdAt: new Date(),
      user: account_bot,
    },
  ]);

  useEffect(() => {
    Dialogflow_V2.setConfiguration(
      dialogflowConfig.client_email,
      dialogflowConfig.private_key,
      Dialogflow_V2.LANG_ENGLISH_US,
      dialogflowConfig.project_id,
    );
  }, []);

  const handleGoogleResponse = result => {
    let text = result.queryResult.fulfillmentMessages[0].text.text[0];
    sendBotResponse(text);
  };

  const onSend = (messages = []) => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, messages),
    );

    let message = messages[0].text;
    Dialogflow_V2.requestQuery(
      message,
      result => handleGoogleResponse(result),
      error => console.log(error),
    );
  };

  const sendBotResponse = text => {
    let msg = {
      _id: messages.length + 1,
      text,
      createdAt: new Date(),
      user: account_bot,
    };
    setMessages(previousMessages => GiftedChat.append(previousMessages, [msg]));
  };

  const renderBubble = props => {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          left: {backgroundColor: '#c0ebfc'}, // bubble bot
          right: {backgroundColor: '#ededed'}, // bubble pengguna
        }}
        textStyle={{
          left: {color: '#000'}, // text bot
          right: {color: '#000'}, // text pengguna
        }}
        timeTextStyle={{
          left: {color: '#000'}, // date bot
          right: {color: '#000'}, // date pengguna
        }}
      />
    );
  };

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <GiftedChat
        messages={messages}
        onSend={onSend}
        user={{
          _id: 1,
        }}
        renderBubble={renderBubble}
        renderUsernameOnMessage={true}
      />
    </View>
  );
};

export default App;
