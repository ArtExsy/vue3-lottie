import { PropType } from 'vue';
export interface LottieProps {
    animationData: any;
    animationLink: string;
    loop: boolean | number;
    autoPlay: boolean;
    rendererSettings: any;
    width: number | string;
    height: number | string;
    speed: number;
    delay: number;
    direction: string;
    pauseOnHover: boolean;
    playOnHover: boolean;
    backgroundColor: string;
    pauseAnimation: boolean;
}
declare const _default: import("vue").DefineComponent<{
    animationData: {
        type: PropType<any>;
        default: () => {};
    };
    animationLink: {
        type: PropType<string>;
        default: string;
    };
    loop: {
        type: PropType<number | boolean>;
        default: boolean;
    };
    autoPlay: {
        type: PropType<boolean>;
        default: boolean;
    };
    width: {
        type: PropType<string | number>;
        default: string;
    };
    height: {
        type: PropType<string | number>;
        default: string;
    };
    speed: {
        type: PropType<number>;
        default: number;
    };
    delay: {
        type: PropType<number>;
        default: number;
    };
    direction: {
        type: PropType<string>;
        default: string;
    };
    pauseOnHover: {
        type: PropType<boolean>;
        default: boolean;
    };
    playOnHover: {
        type: PropType<boolean>;
        default: boolean;
    };
    backgroundColor: {
        type: PropType<string>;
        default: string;
    };
    pauseAnimation: {
        type: PropType<boolean>;
        default: boolean;
    };
}, {
    elementid: import("vue").Ref<string>;
    hoverEnded: () => void;
    hoverStarted: () => void;
    getCurrentStyle: any;
    play: () => void;
    pause: () => void;
    stop: () => void;
    destroy: () => void;
    setSpeed: (speed?: number) => void;
    setDirection: (direction: 'forward' | 'reverse') => void;
    goToAndStop: (frame: number, isFrame?: Boolean) => void;
    goToAndPlay: (frame: number, isFrame?: Boolean) => void;
    playSegments: (segments: Array<number>, forceFlag?: Boolean) => void;
    setSubFrame: (useSubFrame?: Boolean) => void;
    getDuration: (inFrames?: Boolean) => any;
    updateDocumentData: (documentData: any, index?: number) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    onComplete: any;
    onLoopComplete: any;
    onEnterFrame: any;
    onSegmentStart: any;
    onAnimationLoaded: any;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    animationData: {
        type: PropType<any>;
        default: () => {};
    };
    animationLink: {
        type: PropType<string>;
        default: string;
    };
    loop: {
        type: PropType<number | boolean>;
        default: boolean;
    };
    autoPlay: {
        type: PropType<boolean>;
        default: boolean;
    };
    width: {
        type: PropType<string | number>;
        default: string;
    };
    height: {
        type: PropType<string | number>;
        default: string;
    };
    speed: {
        type: PropType<number>;
        default: number;
    };
    delay: {
        type: PropType<number>;
        default: number;
    };
    direction: {
        type: PropType<string>;
        default: string;
    };
    pauseOnHover: {
        type: PropType<boolean>;
        default: boolean;
    };
    playOnHover: {
        type: PropType<boolean>;
        default: boolean;
    };
    backgroundColor: {
        type: PropType<string>;
        default: string;
    };
    pauseAnimation: {
        type: PropType<boolean>;
        default: boolean;
    };
}>> & {
    onOnComplete?: ((...args: any[]) => any) | ((...args: unknown[]) => any);
    onOnLoopComplete?: ((...args: any[]) => any) | ((...args: unknown[]) => any);
    onOnEnterFrame?: ((...args: any[]) => any) | ((...args: unknown[]) => any);
    onOnSegmentStart?: ((...args: any[]) => any) | ((...args: unknown[]) => any);
    onOnAnimationLoaded?: ((...args: any[]) => any) | ((...args: unknown[]) => any);
}, {
    height: string | number;
    width: string | number;
    backgroundColor: string;
    direction: string;
    loop: number | boolean;
    speed: number;
    animationData: any;
    animationLink: string;
    autoPlay: boolean;
    delay: number;
    pauseOnHover: boolean;
    playOnHover: boolean;
    pauseAnimation: boolean;
}>;
export default _default;
