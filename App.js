import React from 'react'
import { View } from 'react-native'
import AddEntry from './src/components/AddEntry'
import {store} from './store'
import { Provider } from 'react-redux'
import reducer from './src/reducers'
// import History from './components/History'

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={{flex: 1}}>
          <AddEntry />
        </View>
     </Provider>
    )
  }
}
