import React from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView } from 'react-native';

const MessageScreen = ({ route }) => {
  const { message } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.messageContainer}>
          <View style={styles.header}>
            <Text style={styles.title}>{message.title}</Text>
            <View style={styles.metaInfo}>
              <Text style={styles.sender}>From: {message.sender}</Text>
              <Text style={styles.timestamp}>{message.timestamp}</Text>
            </View>
          </View>

          <View style={styles.divider} />

          <View style={styles.contentSection}>
            <Text style={styles.contentLabel}>Message</Text>
            <Text style={styles.contentText}>{message.content}</Text>
          </View>

          <View style={styles.infoCard}>
            <Text style={styles.infoTitle}>Message Details</Text>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Message ID:</Text>
              <Text style={styles.infoValue}>{message.id}</Text>
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Sender:</Text>
              <Text style={styles.infoValue}>{message.sender}</Text>
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Date:</Text>
              <Text style={styles.infoValue}>{message.timestamp}</Text>
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Status:</Text>
              <Text style={[styles.infoValue, styles.statusRead]}>Read</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    padding: 16,
  },
  messageContainer: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  header: {
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 12,
  },
  metaInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sender: {
    fontSize: 14,
    color: '#6200EE',
    fontWeight: '600',
  },
  timestamp: {
    fontSize: 14,
    color: '#888',
  },
  divider: {
    height: 1,
    backgroundColor: '#e0e0e0',
    marginVertical: 16,
  },
  contentSection: {
    marginBottom: 24,
  },
  contentLabel: {
    fontSize: 14,
    color: '#888',
    marginBottom: 8,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  contentText: {
    fontSize: 16,
    color: '#333',
    lineHeight: 24,
  },
  infoCard: {
    backgroundColor: '#f8f9fa',
    borderRadius: 8,
    padding: 16,
  },
  infoTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 12,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  infoLabel: {
    fontSize: 14,
    color: '#666',
  },
  infoValue: {
    fontSize: 14,
    color: '#333',
    fontWeight: '500',
  },
  statusRead: {
    color: '#4CAF50',
  },
});

export default MessageScreen;