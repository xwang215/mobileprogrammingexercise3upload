import React from 'react';
import { View, Text, StyleSheet, FlatList, SafeAreaView } from 'react-native';
import MessageCard from '../components/MessageCard';
import { messagesData } from '../data/messages';

const CategoryScreen = ({ route, navigation }) => {
  const { categoryName, categoryColor } = route.params;
  const messages = messagesData[categoryName] || [];

  const handleMessagePress = (message) => {
    navigation.navigate('Message', { message });
  };

  const renderMessage = ({ item }) => (
    <MessageCard 
      message={item} 
      onPress={() => handleMessagePress(item)} 
    />
  );

  const renderHeader = () => (
    <View style={[styles.header, { backgroundColor: categoryColor }]}>
      <Text style={styles.headerTitle}>{categoryName}</Text>
      <Text style={styles.headerSubtitle}>
        {messages.length} messages in this category
      </Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={messages}
        renderItem={renderMessage}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContent}
        ListHeaderComponent={renderHeader}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>No messages in this category</Text>
          </View>
        }
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    padding: 20,
    marginBottom: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 4,
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#fff',
    opacity: 0.9,
  },
  listContent: {
    padding: 16,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
  },
  emptyText: {
    fontSize: 16,
    color: '#666',
  },
});

export default CategoryScreen;
