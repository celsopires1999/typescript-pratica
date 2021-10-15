import EventManager from "./event-manager"
import BoxPostList from "./box-post-list"

export default class BoxPostForm {

    static boxId = 'box-post-form'
    static EVENT_CLICK_HIDDEN_BOX_FORM = 'box-post-form-click-hidden'
    private buttonFormSelector = `#${BoxPostForm.boxId}>button[type=button]`

    constructor(private eventManager: EventManager) {
        this.init()
    }

    private init() {
        const buttonForm = document.querySelector(this.buttonFormSelector)
        buttonForm.addEventListener('click', () => {
            this.hiddenBox()

            this.eventManager.runEvent(BoxPostForm.EVENT_CLICK_HIDDEN_BOX_FORM)
        })
        this.eventManager.addListener(BoxPostList.EVENT_CLICK_HIDDEN_BOX_LIST, () => {
            this.showBox()
        })
    }

    private hiddenBox() {
        const boxForm = document.getElementById(BoxPostForm.boxId)
        boxForm.style.display = 'none'
    }

    private showBox() {
        const boxForm = document.getElementById(BoxPostForm.boxId)
        boxForm.removeAttribute('style')
    }
}
