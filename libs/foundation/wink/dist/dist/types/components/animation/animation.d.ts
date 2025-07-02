import { AnimationItem } from 'lottie-web';
export declare class Animation {
    host: HTMLWinkAnimationElement;
    src: string;
    count: number;
    autoplay: boolean;
    controls: boolean;
    clickToPlay: boolean;
    lottie: AnimationItem;
    status: string;
    loaded: boolean;
    watchPropHandler(newValue: boolean, oldValue: boolean): void;
    toggleAnimation(): Promise<void>;
    componentDidLoad(): void;
    private loadAnimation;
    private play;
    private pause;
    private stop;
    private toggleAnimationOnClick;
    private renderControls;
    render(): any;
}
