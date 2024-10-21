import WebView from 'react-native-webview'
import Constants from 'expo-constants'
import { StyleSheet } from 'react-native'

export default function RootLayout() {
  return (
    <WebView
      style={styles.container}
      source={{ uri: 'https://slovo-istini.com/', baseUrl: 'https://slovo-istini.com/' }}
      originWhitelist={['https://*', 'git://*']}
      onNavigationStateChange={e => {
        console.log('onNavigationStateChange: ', e)
      }}
      onAccessibilityAction={e => console.log('onAccessibilityAction: ', e)}
      onTouchCancel={e => console.log('onTouchCancel: ', e)}
      // onTouchEnd={e => console.log('onTouchEnd: ', e)}
      // onTouchMove={e => console.log('onTouchMove: ', e)}
      // onTouchStart={e => console.log('onTouchStart: ', e)}
      onAccessibilityEscape={() => console.log('onAccessibilityEscape: ')}
      onAccessibilityTap={() => console.log('onAccessibilityTap: ')}
      onContentProcessDidTerminate={e => console.log('onContentProcessDidTerminate: ', e)}
      onContentSizeChange={e => console.log('onContentSizeChange: ', e)}
      onCustomMenuSelection={e => console.log('onCustomMenuSelection: ', e)}
      onError={e => console.log('onError: ', e)}
      onFileDownload={e => console.log('onFileDownload: ', e)}
      onHttpError={e => console.log('onHttpError: ', e)}
      onLayout={e => console.log('onLayout: ', e)}
      onLoad={e => console.log('onLoad: ', e)}
      onLoadEnd={e => console.log('onLoadEnd: ', e)}
      onLoadProgress={e => console.log('onLoadProgress: ', e)}
      onLoadStart={e => console.log('onLoadStart: ', e)}
      onMagicTap={() => console.log('onMagicTap: ')}
      onMessage={e => console.log('onMessage: ', e)}
      onOpenWindow={e => console.log('onOpenWindow: ', e)}
      onPointerCancel={e => console.log('onPointerCancel: ', e)}
      onPointerDown={e => console.log('onPointerDown: ', e)}
      onPointerEnter={e => console.log('onPointerEnter: ', e)}
      onPointerLeave={e => console.log('onPointerLeave: ', e)}
      onPointerMove={e => console.log('onPointerMove: ', e)}
      onPointerUp={e => console.log('onPointerUp: ', e)}
      onRenderProcessGone={e => console.log('onRenderProcessGone: ', e)}
      // onResponderEnd={e => console.log('onResponderEnd: ', e)}
      // onResponderGrant={e => console.log('onResponderGrant: ', e)}
      // onResponderMove={e => console.log('onResponderMove: ', e)}
      // onResponderReject={e => console.log('onResponderReject: ', e)}
      // onResponderRelease={e => console.log('onResponderRelease: ', e)}
      // onResponderStart={e => console.log('onResponderStart: ', e)}
      // onResponderTerminate={e => console.log('onResponderTerminate: ', e)}
      // onScroll={e => console.log('onScroll: ', e)}
      onScrollAnimationEnd
      onSourceChanged={e => console.log('onSourceChanged: ', e)}
      // onMoveShouldSetResponder={e => {
      //   console.log('onMoveShouldSetResponder: ', e)
      //   return true
      // }}
      // onResponderTerminationRequest={e => {
      //   console.log('onResponderTerminationRequest: ', e)
      //   return true
      // }}
      // onShouldStartLoadWithRequest={e => {
      //   console.log('onShouldStartLoadWithRequest: ', e)
      //   return true
      // }}
      // onStartShouldSetResponder={e => {
      //   console.log('onStartShouldSetResponder: ', e)
      //   return true
      // }}
      menuItems={[
        { key: 'menuItem1', label: 'Menu Item 1' },
        { key: 'menuItem2', label: 'Menu Item 2' },
      ]}
      mediaPlaybackRequiresUserAction
      allowFileAccess
      bounces
      cacheEnabled
      javaScriptEnabled
      pagingEnabled
      scrollEnabled
      enableApplePay
      domStorageEnabled
      geolocationEnabled
      nestedScrollEnabled
      pullToRefreshEnabled
      sharedCookiesEnabled
      directionalLockEnabled
      textInteractionEnabled
      webviewDebuggingEnabled
      thirdPartyCookiesEnabled
      autoManageStatusBarEnabled
      fraudulentWebsiteWarningEnabled
      useSharedProcessPool
      useWebView2
    />
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
})
