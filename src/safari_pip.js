import Promise from 'promise-polyfill'

export default class SafariPip {
  get isActive() {
    return this._el.webkitPresentationMode === 'picture-in-picture'
  }

  get isSupported() {
    return this._el
        && this._el.webkitSupportsPresentationMode
        && typeof(this._el.webkitSetPresentationMode) === 'function'
  }

  constructor(element) {
    this._el = element
  }

  enterPictureInPicture() {
    return new Promise((resolve, reject) => {
      this.isSupported
          ? resolve(this._el.webkitSetPresentationMode('picture-in-picture'))
          : reject('Picture in picture not supported')
    })
  }

  exitPictureInPicture() {
    return new Promise((resolve, reject) => {
      this.isSupported
          ? resolve(this._el.webkitSetPresentationMode('inline'))
          : reject('Picture in picture not supported')
    })
  }

  togglePictureInPicture() {
    return this.isActive
        ? this.exitPictureInPicture()
        : this.enterPictureInPicture()
  }
}