class Main extends egret.DisplayObjectContainer {
    public constructor() {
        super();

        // this.addChild(new HelloDragonBones());
        // this.addChild(new SetBoneOffset());
        // this.addChild(new AnimationBase());
        // this.addChild(new ReplaceSlotDisplay());
        this.addChild(new ReplaceSkin());
        // this.addChild(new ReplaceAnimation());
        // this.addChild(new coreElement.Game());

        // this.addChild(new PerformanceTest());
        // this.addChild(new BoundingBoxTest());
    }
}