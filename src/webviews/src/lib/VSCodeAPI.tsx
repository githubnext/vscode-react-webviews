declare const acquireVsCodeApi: Function

interface VSCodeApi {
  getState: () => any
  setState: (newState: any) => any
  postMessage: (message: any) => void
}

class VSCodeWrapper {
  private readonly vscodeApi: VSCodeApi = acquireVsCodeApi()

  /**
   * Send a message to the extension framework.
   * @param message
   */
  public postMessage(message: any): void {
    this.vscodeApi.postMessage(message)
  }

  /**
   * Add listener for messages from extension framework.
   * @param callback called when the extension sends a message
   * @returns function to clean up the message eventListener.
   */
  public onMessage(callback: (message: any) => void): () => void {
    window.addEventListener('message', callback)
    return () => window.removeEventListener('message', callback)
  }

  public getState = (): any => {
    return this.vscodeApi.getState() ?? {}
  }

  public setState = (newState: any): any => {
    return this.vscodeApi.setState(newState)
  }
}

// Singleton to prevent multiple fetches of VSCodeAPI.
const VSCodeAPI = new VSCodeWrapper()
export default VSCodeAPI
