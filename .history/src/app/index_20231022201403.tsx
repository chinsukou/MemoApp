import { View, Text, StyleSheet } from 'react-native'

import Header from '../components/Header'

const Index = (): JSX.Element => {
  return (
    <View style={styles.container}>

      <Header />

      <View>

      <View style={styles.memoListItem}>
            <View>
              <Text style={styles.memoListItemTitle}>買い物リスト</Text>
              <Text style={styles.memoListItemDate}>2023年10月1日 10:00</Text>
            </View>
            <View>
              <Text>X</Text>
            </View>
        </View>

        <View style={styles.memoListItem}>
            <View>
              <Text style={styles.memoListItemTitle}>買い物リスト</Text>
              <Text style={styles.memoListItemDate}>2023年10月1日 10:00</Text>
            </View>
            <View>
              <Text>X</Text>
            </View>
        </View>

        <View style={styles.memoListItem}>
            <View>
              <Text style={styles.memoListItemTitle}>買い物リスト</Text>
              <Text style={styles.memoListItemDate}>2023年10月1日 10:00</Text>
            </View>
            <View>
              <Text>X</Text>
            </View>
        </View>

      </View>

      <View style={styles.circleBotton}>
        <Text style={styles.circleBottonLabel}>+</Text>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
  memoListItem: {
    backgroundColor: '#fffffff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 19,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBlockColor: 'rgba(0,0,0,0.15)'
  },
  memoListItemTitle: {
    fontSize: 16,
    lineHeight: 32
  },
  memoListItemDate: {
    fontSize: 12,
    lineHeight: 16,
    color: '#848484'
  },
  circleBotton: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#467FD3',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 40,
    bottom: 40,
    shadowColor: '#000000',
    shadowOpacity: 0.25,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 8 },
    elevation: 8
  },
  circleBottonLabel: {
    color: '#ffffff',
    fontSize: 40,
    lineHeight: 48
  }
})

export default Index
