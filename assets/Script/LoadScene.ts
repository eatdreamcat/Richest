const {ccclass, property} = cc._decorator;


enum LOAD_STEP {
    /** 默认值 */
    DEFAULT,
    /** 初始化 */
    INIT,

}

@ccclass
export default class LoadScene extends cc.Component {

    @property(cc.Label)
    progressInfo: cc.Label = null;

    @property(cc.Node)
    gUIMgr: cc.Node = null;
    

    @property
    private _step: LOAD_STEP = LOAD_STEP.DEFAULT;


    start () {
        // init logic
        this.progressInfo.string = '';
        this.nextStep();
    }

    /** 加载的下一步 */
    private nextStep() {
        ++ this._step;
        switch (this._step) {
            case LOAD_STEP.INIT:
            break;

        }
    }
}
