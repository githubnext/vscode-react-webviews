// import {
//   enableHotReload,
//   hotRequireExportedFn,
//   registerUpdateReconciler,
// } from '@hediet/node-reload'
// import { Disposable } from '@hediet/std/disposable'
import * as vscode from 'vscode'
// import MyWebview from './MyWebview'
import { NextWebviewPanel } from './NextWebview'

// if (process.env.NODE_ENV === 'development') {
//   enableHotReload({ entryModule: module })
// }
// registerUpdateReconciler(module)

// export class Extension {
//   public readonly dispose = Disposable.fn()

//   constructor() {
//     super()

//     // Disposables are disposed automatically on reload.
//     const item = this.dispose.track(vscode.window.createStatusBarItem())
//     item.text = 'Hallo Welt'
//     item.show()
//   }
// }

export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    vscode.commands.registerCommand('NextWebview1.start', () => {
      const webview = NextWebviewPanel.getInstance({
        extensionUri: context.extensionUri,
        route: 'view1',
        title: 'GitHub Next Webview 1',
        viewId: 'ghnextA',
      })
      // const webview = MyWebview.createOrShow(context.extensionUri)
      // setInterval(() => {
      //   // MyWebview.update()
      //   console.debug('!!!!!! reloading webview!')
      // }, 1000)
    }),
    vscode.commands.registerCommand('NextWebview2.start', () => {
      const webview = NextWebviewPanel.getInstance({
        extensionUri: context.extensionUri,
        route: 'view2',
        title: 'GitHub Next Webview 2',
        viewId: 'ghnextB',
      })
    })
  )

  // context.subscriptions.push(
  //   hotRequireExportedFn(module, Extension, Extension => new Extension())
  // )
}
