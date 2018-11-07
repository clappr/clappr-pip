import Promise from 'promise-polyfill'

export default class W3CPip {
  get isActive() { return document.pictureInPictureElement === this._el }

  get isSupported() {
    return ('pictureInPictureEnabled' in document)
        && this._el
        && !this._el.disablePictureInPicture
        && typeof(this._el.requestPictureInPicture) === 'function'
  }

  constructor(element) {
    this._el = element
  }

  enterPictureInPicture() {
    return new Promise((resolve, reject) => {
      this.isSupported
          ? resolve(this._el.requestPictureInPicture())
          : reject('Picture in picture not supported')
    })
  }

  exitPictureInPicture() {
    return new Promise((resolve, reject) => {
      this.isSupported
          ? resolve(document.exitPictureInPicture())
          : reject('Picture in picture not supported')
    })
  }

  togglePictureInPicture() {
    return this.isActive
        ? this.exitPictureInPicture()
        : this.enterPictureInPicture()
  }
}