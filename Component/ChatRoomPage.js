import React, { useEffect, useState, useRef } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';
import axios from 'axios';
import io from 'socket.io-client';

const socket = io('http://141.98.17.89');

const ChatRoomPage = ({ route }) => {
  const { chatRoomId } = route.params;
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const flatListRef = useRef();

  useEffect(() => {
    fetchChatMessages();

    // Listen for new messages
    socket.on('newMessage', handleNewMessage);

    return () => {
      // Clean up the socket event listener
      socket.off('newMessage', handleNewMessage);
    };
  }, []);

  const fetchChatMessages = async () => {
    try {
      const response = await axios.post('http://141.98.17.89/chat/gochat/chatRoomId', {
        chatRoomId: chatRoomId.toString(),
      });

      const sortedMessages = response.data.messages.sort((a, b) => new Date(a.MS_DTIME) - new Date(b.MS_DTIME));
      setMessages(sortedMessages);

      // Scroll to the bottom
      flatListRef.current.scrollToEnd();
    } catch (error) {
      console.error(error);
    }
  };

  const sendMessage = async () => {
    try {
      await axios.post('http://141.98.17.89/chat/gochat/send', {
        senderId: '100010',
        receiverId: '100008',
        message: newMessage,
        chatRoomId: 'chat_100010_100008',
      });

      // Create a new message object for the sent message
      const sentMessage = {
        MSCHR_ID: Math.random(), // Replace with the actual unique ID for the message
        MSCHRNM: 'Sender Name', // Replace with the sender's name
        MSCHRCT: newMessage,
        MSCHRSE: '100010',
        MS_DTIME: new Date().toISOString(), // Replace with the actual timestamp for the message
      };

      // Update the messages state with the new message
      setMessages((prevMessages) => [...prevMessages, sentMessage]);

      // Clear the input field after sending the message
      setNewMessage('');

      // Scroll to the bottom
      flatListRef.current.scrollToEnd();
    } catch (error) {
      console.error(error);
    }
  };

  const handleNewMessage = (message) => {
    setMessages((prevMessages) => [...prevMessages, message]);

    // Scroll to the bottom
    flatListRef.current.scrollToEnd();
  };

  const renderMessage = ({ item }) => {
    const isSender = item.MSCHRSE === '100010';

    return (
      <View style={[styles.messageContainer, isSender ? styles.senderContainer : styles.receiverContainer]}>
        <Text style={styles.senderName}>{item.MSCHRNM}</Text>
        <Text>{item.MSCHRCT}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.chatRoomName}>Chat Room ID: {chatRoomId}</Text>
      <View style={styles.messagesContainer}>
        <FlatList
          data={messages}
          renderItem={renderMessage}
          keyExtractor={(item) => item.MSCHR_ID.toString()}
          ref={flatListRef}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type your message"
          value={newMessage}
          onChangeText={(text) => setNewMessage(text)}
        />
        <Button title="Send" onPress={sendMessage} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  chatRoomName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  messagesContainer: {
    flex: 1,
  },
  messageContainer: {
    marginBottom: 10,
    padding: 10,
    borderRadius: 8,
  },
  senderContainer: {
    alignSelf: 'flex-end',
    backgroundColor: '#DCF8C6',
  },
  receiverContainer: {
    alignSelf: 'flex-start',
    backgroundColor: '#F2F2F2',
  },
  senderName: {
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#555',
  },
  inputContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  input: {
    flex: 1,
    marginRight: 10,
    padding: 10,
    borderWidth: 1,
    borderRadius: 4,
  },
});

export default ChatRoomPage;
