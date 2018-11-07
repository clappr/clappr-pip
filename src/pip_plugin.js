import { CorePlugin } from 'clappr'

export default class PipPlugin extends CorePlugin {
  get name() { return 'pip' }

  getExternalInterface() {
    return {
      isPictureInPictureSupported: this.isPictureInPictureSupported,
      isPictureInPictureActive: this.isPictureInPictureActive,
      enterPictureInPicture: this.enterPictureInPicture,
      exitPictureInPicture: this.exitPictureInPicture,
      togglePictureInPicture: this.togglePictureInPicture,
    }
  }

  isPictureInPictureSupported() { return false }

  isPictureInPictureActive() { return false }

  enterPictureInPicture() {}

  exitPictureInPicture() {}

  togglePictureInPicture() {
    this.isPictureInPictureActive()
      ? this.exitPictureInPicture()
      : this.enterPictureInPicture()
  }
}