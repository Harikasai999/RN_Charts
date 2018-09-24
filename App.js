/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native'
import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view'
import PieChartPage from './Src/Components/PieChartPage.js'
import BarChartPage from './Src/Components/BarChartPage.js'
import BarChartWithX_Axis from './Src/Components/BarChartWithX_Axis.js'
import LineChartsPage from './Src/Components/LineChartsPage.js'
import LineChartWithX_Axis from './Src/Components/LineChartWithX_Axis.js'
import LineChartWithY_Axis from './Src/Components/LineChartWithY_Axis.js'
import ProgressCirclePage from './Src/Components/ProgressCirclePage.js'
import StackedBarChartPage from './Src/Components/StackedBarChartPage.js'
import BarChartGroup from './Src/Components/BarChartGroup.js'
import XYAxisBarChart from './Src/Components/XYAxisBarChart.js'
import XYAxisLineChart from './Src/Components/XYAxisLineChart.js'
import CustomGrid from './Src/Components/CustomGrid.js'
import DecoratorPage from './Src/Components/DecoratorPage.js'

type Props = {}
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <View style={{ height: Platform.OS === 'ios' ? 20 : 0 }} />
        <View style={{ height: 44, alignItems: 'center', justifyContent: 'center', backgroundColor: '#2E8B57' }}>
          <Text style={{ fontSize: 16, fontWeight: '700', color: 'white' }}>Charts</Text>
        </View>
        <View style={styles.container}>
          <ScrollableTabView
            initialPage={0}
            scrollWithoutAnimation={false}
            tabBarTextStyle={{ fontSize: 16, fontWeight: '700', color: '#2E8B57' }}
            tabBarUnderlineStyle={{ backgroundColor: '#2E8B57', height: 1 }}
            renderTabBar={() => <ScrollableTabBar />}
          >
            <PieChartPage tabLabel="Pie-Chart" />
            <BarChartPage tabLabel="Bar-Chart" />
            <BarChartWithX_Axis tabLabel="Bar-Chart-XAxis" />
            <LineChartsPage tabLabel="Line-Chart" />
            <CustomGrid tabLabel="Custom-Grid" />
            <LineChartWithX_Axis tabLabel="Line-Chart-XAxis" />
            <LineChartWithY_Axis tabLabel="Line-Chart-YAxis" />
            <ProgressCirclePage tabLabel="Progress-Circle" />
            <StackedBarChartPage tabLabel="Stacked-Bar-Chart" />
            <XYAxisLineChart tabLabel="X & Y Axis-Line-Chart" />
            <XYAxisBarChart tabLabel="X & Y Axis-Bar-Chart" />
            <DecoratorPage tabLabel="Decorator" />
          </ScrollableTabView>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
})
