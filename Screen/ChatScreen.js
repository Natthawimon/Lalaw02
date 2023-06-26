import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const ChatScreen = () => {
  const navigation = useNavigation();
  const [chatRooms, setChatRooms] = useState([]);

  useEffect(() => {
    fetchChatRooms();
  }, []);

  const fetchChatRooms = async () => {
    try {
      const response = await axios.get('http://141.98.17.89/chat/messagelist', {
        params: {
          userId: '100010',
        },
      });

      const messageList = response.data.messageList;
      setChatRooms(messageList);
    } catch (error) {
      console.error(error);
    }
  };

  const navigateToChatRoom = (chatRoomId) => {
    navigation.navigate('ChatRoomPage', { chatRoomId });
  };

  const renderChatRoom = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.chatRoomContainer}
        onPress={() => navigateToChatRoom(item.CHR_ID)}
      >
        <Text style={styles.chatRoomName}>{item.CHR_NAME}</Text>
        <Text>Users: {item.CHR_UIDUS}, {item.CHR_UIDLW}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Chat Rooms</Text>
      <FlatList
        data={chatRooms}
        renderItem={renderChatRoom}
        keyExtractor={(item) => item.CHR_ID.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  chatRoomContainer: {
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderRadius: 8,
  },
  chatRoomName: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
});

export default ChatScreen;
