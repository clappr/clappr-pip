import { Events, UICorePlugin } from 'clappr'

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
    if (this.core.ready) {
      this.listenTo(this.core.mediaControl, Events.MEDIACONTROL_RENDERED, this.addButtonToMediaControl)
    } else {
      this.listenToOnce(this.core, Events.CORE_READY, this.bindEvents)
    }
  }

  bindClick() {
    this.$el.click(() => this.togglePictureInPicture())
  }

  togglePictureInPicture() {
    this.pipPlugin && this.pipPlugin.togglePictureInPicture()
  }

  hide() { this.$el.hide() }

  show() { this.$el.show() }

  addButtonToMediaControl() {
    this.$el.remove()
    if (!this.isPipSupported) return
    this.core.mediaControl.$('.media-control-button[data-fullscreen]').after(this.el)
  }

  render() {
    this.$el.css({ float: 'right', height: '100%' })
    this.$el.append(icon)
    // small tweak to prevent clappr style conflict
    this.$el.find('path[fill=none]').css({ fill: 'none' })
  }
}