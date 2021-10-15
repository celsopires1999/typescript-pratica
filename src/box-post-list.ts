import EventManager from "./event-manager"
import BoxPostForm from "./box-post-form"

export default class BoxPostList {

    static boxId = 'box-post-list'
    static EVENT_CLICK_HIDDEN_BOX_LIST = 'box-post-list-click-hidden'
    private buttonListSelector = `#${BoxPostList.boxId}>button[type=button]`

    constructor(private eventManager: EventManager) {
        this.init()
    }

    private init() {
        const buttonList = document.querySelector(this.buttonListSelector)
        buttonList.addEventListener('click', () => {
            this.hiddenBox()

            this.eventManager.runEvent(BoxPostList.EVENT_CLICK_HIDDEN_BOX_LIST)
        })
        this.eventManager.addListener(BoxPostForm.EVENT_CLICK_HIDDEN_BOX_FORM, () => {
            this.showBox()
        })
    }

    private hiddenBox() {
        const boxList = document.getElementById(BoxPostList.boxId)
        boxList.style.display = 'none'
    }

    private showBox() {
        const boxList = document.getElementById(BoxPostList.boxId)
        boxList.removeAttribute('style')
    }
}
