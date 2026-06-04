import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';

const MessageCard = ({ message, onPress }) => {
  return (
    <TouchableOpacity 
      style={styles.card} 
      onPress={onPress}
      activeOpacity={0.7}
    >
      <View style={styles.cardHeader}>
        <Text style={styles.title}>{message.title}</Text>
        <Text style={styles.timestamp}>{message.timestamp}</Text>
      </View>
      <Text style={styles.preview} numberOfLines={2}>
        {message.content}
      </Text>
      <View style={styles.cardFooter}>
        <Text style={styles.sender}>From: {message.sender}</Text>
        <Text style={styles.viewMore}>View Details →</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    flex: 1,
  },
  timestamp: {
    fontSize: 12,
    color: '#888',
    marginLeft: 8,
  },
  preview: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
    marginBottom: 8,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
    paddingTop: 8,
  },
  sender: {
    fontSize: 12,
    color: '#6200EE',
    fontWeight: '600',
  },
  viewMore: {
    fontSize: 12,
    color: '#6200EE',
  },
});

export default MessageCard;