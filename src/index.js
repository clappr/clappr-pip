import { UICorePlugin, Log } from 'clappr'

import icon from './icons/pip.svg'

export default class PipButton extends UICorePlugin {
  get name() { return 'pip_button' }
  get tagName() { return 'button' }

  get attributes() {
    return {
      'class': 'media-control-button media-control-icon pip-button'
    }
  }

  constructor(core) {
    super(core)
    this.bindClick()
  }

  bindClick() {
    this.$el.click(() => this.togglePictureInPicture())
  }

  togglePictureInPicture() {
    Log.debug(this.name, 'togglePictureInPicture()')
  }

  hide() { this.$el.hide() }

  show() { this.$el.show() }

  render() {
    this.$el.css({ float: 'right', height: '100%' })
    this.$el.append(icon)
    // small tweak to prevent clappr style conflict
    this.$el.find('path[fill=none]').css({ fill: 'none' })
    setTimeout(() => {
      this.core.mediaControl.$el.find('.media-control-button[data-fullscreen]').first().after(this.el)
    }, 700)
  }
}