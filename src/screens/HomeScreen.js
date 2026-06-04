import React from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import CategoryButton from '../components/CategoryButton';

const categories = [
  { name: 'You', icon: '👤', color: '#FF6B6B' },
  { name: 'Home', icon: '🏠', color: '#4ECDC4' },
  { name: 'Love', icon: '❤️', color: '#FF69B4' },
  { name: 'Family', icon: '👨‍👩‍👧‍👦', color: '#45B7D1' },
  { name: 'Friends', icon: '🤝', color: '#96CEB4' },
  { name: 'School', icon: '📚', color: '#FFEAA7' },
];

const HomeScreen = ({ navigation }) => {
  const handleCategoryPress = (category) => {
    navigation.navigate('Category', {
      categoryName: category.name,
      categoryColor: category.color,
      categoryIcon: category.icon,
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Message Directory</Text>
          <Text style={styles.subHeaderText}>
            Select a category to view your messages
          </Text>
        </View>
        
        <View style={styles.grid}>
          {categories.map((category, index) => (
            <CategoryButton
              key={index}
              title={category.name}
              icon={category.icon}
              color={category.color}
              onPress={() => handleCategoryPress(category)}
            />
          ))}
        </View>

        <View style={styles.statsContainer}>
          <Text style={styles.statsTitle}>Quick Stats</Text>
          <View style={styles.statsGrid}>
            <View style={styles.statBox}>
              <Text style={styles.statNumber}>24</Text>
              <Text style={styles.statLabel}>Messages</Text>
            </View>
            <View style={styles.statBox}>
              <Text style={styles.statNumber}>6</Text>
              <Text style={styles.statLabel}>Categories</Text>
            </View>
            <View style={styles.statBox}>
              <Text style={styles.statNumber}>4</Text>
              <Text style={styles.statLabel}>Per Category</Text>
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
  scrollContent: {
    padding: 16,
  },
  header: {
    marginBottom: 24,
  },
  headerText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  subHeaderText: {
    fontSize: 16,
    color: '#666',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  statsContainer: {
    marginTop: 32,
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  statsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 16,
  },
  statsGrid: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  statBox: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#6200EE',
  },
  statLabel: {
    fontSize: 12,
    color: '#666',
    marginTop: 4,
  },
});

export default HomeScreen;