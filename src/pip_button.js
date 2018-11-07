import { Events, Log, UICorePlugin } from 'clappr'

import icon from './icons/pip.svg'

export default class PipButton extends UICorePlugin {
  get name() { return 'pip_button' }
  get tagName() { return 'button' }

  get pipPlugin() {
    return this.core.getPlugin('pip')
  }

  get isPipSupported() {
    return this.pipPlugin && this.pipPlugin.isPictureInPictureSupported()
  }

  get attributes() {
    return {
      'class': 'media-control-button media-control-icon pip-button'
    }
  }

  constructor(core) {
    super(core)
    this.bindClick()
  }

  bindEvents() {
    this.listenTo(this.core.mediaControl, Events.MEDIACONTROL_RENDERED, this.addButtonToMediaControl)
  }

  bindClick() {
    this.$el.click(() => this.togglePictureInPicture())
  }

  togglePictureInPicture() {
    Log.debug(this.name, 'togglePictureInPicture()')
  }

  hide() { this.$el.hide() }

  show() { this.$el.show() }

  addButtonToMediaControl() {
    this.$el.remove()
    if (!this.isPipSupported) return
    this.core.mediaControl.$el.find('.media-control-button[data-fullscreen]').first().after(this.el)
  }

  render() {
    this.$el.css({ float: 'right', height: '100%' })
    this.$el.append(icon)
    // small tweak to prevent clappr style conflict
    this.$el.find('path[fill=none]').css({ fill: 'none' })
  }
}