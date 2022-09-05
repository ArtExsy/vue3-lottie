import { defineComponent as _, ref as c, computed as $, watch as B, onMounted as N, openBlock as P, createElementBlock as V, normalizeStyle as j } from "vue";
import M from "lottie-web";
const T = (t, o) => {
  const e = t.__vccOpts || t;
  for (const [l, u] of o)
    e[l] = u;
  return e;
}, F = _({
  props: {
    animationData: {
      type: Object,
      default: () => ({})
    },
    animationLink: {
      type: String,
      default: ""
    },
    loop: {
      type: [Boolean, Number],
      default: !0
    },
    autoPlay: {
      type: Boolean,
      default: !0
    },
    width: {
      type: [Number, String],
      default: "100%"
    },
    height: {
      type: [Number, String],
      default: "100%"
    },
    speed: {
      type: Number,
      default: 1
    },
    delay: {
      type: Number,
      default: 0
    },
    direction: {
      type: String,
      default: "forward"
    },
    pauseOnHover: {
      type: Boolean,
      default: !1
    },
    playOnHover: {
      type: Boolean,
      default: !1
    },
    backgroundColor: {
      type: String,
      default: "transparent"
    },
    pauseAnimation: {
      type: Boolean,
      default: !1
    }
  },
  emits: {
    onComplete: null,
    onLoopComplete: null,
    onEnterFrame: null,
    onSegmentStart: null,
    onAnimationLoaded: null
  },
  setup(t, { emit: o }) {
    let e = c(null);
    const l = c("");
    let u = 1;
    const f = (n) => document.querySelector(`[data-id="${n}" ]`) !== null, s = async (n) => {
      let a = t.autoPlay;
      t.playOnHover && (a = !1);
      let i = {};
      if (t.animationData !== {} && (i = JSON.parse(JSON.stringify(t.animationData))), t.animationLink != "")
        try {
          i = await (await fetch(t.animationLink)).json();
        } catch (d) {
          console.error(d);
          return;
        }
      let r = t.loop;
      typeof r == "number" && r > 0 && (r = r - 1), t.delay > 0 && (a = !1), e = M.loadAnimation({
        container: n,
        renderer: "svg",
        loop: r,
        autoplay: a,
        animationData: i
      }), setTimeout(() => {
        a = t.autoPlay, t.playOnHover ? e.pause() : a ? e.play() : e.pause(), o("onAnimationLoaded");
      }, t.delay), e.setSpeed(t.speed), t.direction === "reverse" && e.setDirection(-1), t.direction === "normal" && e.setDirection(1), (t.pauseAnimation || t.playOnHover) && e.pause(), e.addEventListener("loopComplete", () => {
        t.direction === "alternate" && (e.stop(), u = u * -1, e.setDirection(u), e.play()), o("onLoopComplete");
      }), e.addEventListener("complete", () => {
        o("onComplete");
      }), e.addEventListener("enterFrame", () => {
        o("onEnterFrame");
      }), e.addEventListener("segmentStart", () => {
        o("onSegmentStart");
      });
    }, m = $(() => {
      let n = t.width, a = t.height;
      return typeof t.width == "number" && (n = `${t.width}px`), typeof t.height == "number" && (a = `${t.height}px`), {
        "--lottie-animation-container-width": n,
        "--lottie-animation-container-height": a,
        "--lottie-animation-container-background-color": t.backgroundColor
      };
    }), y = () => {
      e && t.pauseOnHover && e.pause(), e && t.playOnHover && e.play();
    }, v = () => {
      e && t.pauseOnHover && e.play();
    };
    B(
      () => t.pauseAnimation,
      () => {
        if ((t.pauseOnHover || t.playOnHover) && t.pauseAnimation) {
          console.error(
            "If you are using pauseAnimation prop for Vue3-Lottie, please remove the props pauseOnHover and playOnHover"
          );
          return;
        }
        e && (t.pauseAnimation ? e.pause() : e.play());
      }
    );
    const p = () => {
      e && e.play();
    }, h = () => {
      e && e.pause();
    }, g = () => {
      e && e.stop();
    }, S = () => {
      e && e.destroy();
    }, L = (n = 1) => {
      if (n <= 0)
        throw new Error("Speed must be greater than 0");
      e && e.setSpeed(n);
    }, O = (n) => {
      e && (n === "forward" ? e.setDirection(1) : n === "reverse" && e.setDirection(-1));
    }, b = (n, a = !0) => {
      e && e.goToAndStop(n, a);
    }, w = (n, a = !0) => {
      e && e.goToAndPlay(n, a);
    }, D = (n, a = !1) => {
      e && e.playSegments(n, a);
    }, H = (n = !0) => {
      e && e.setSubframe(n);
    }, A = (n = !0) => {
      if (e)
        return e.getDuration(n);
    }, E = (n, a = 0) => {
      e && e.renderer.elements[a].updateDocumentData(
        n
      );
    }, k = (n) => {
      for (var a = "", i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", r = i.length, d = 0; d < n; d++)
        a += i.charAt(
          Math.floor(Math.random() * r)
        );
      return a;
    }, C = (n) => {
      if (t.pauseOnHover && t.playOnHover)
        throw new Error(
          "You cannot set pauseOnHover and playOnHover for Vue3-Lottie at the same time."
        );
      if (t.animationLink === "" && t.animationData === {})
        throw new Error(
          "You must provide either animationLink or animationData"
        );
      const a = setInterval(() => {
        if (f(n)) {
          clearInterval(a);
          const i = document.querySelector(`[data-id="${n}" ]`);
          i && s(i);
        }
      }, 0);
    };
    return N(async () => {
      l.value = k(20), C(l.value);
    }), {
      elementid: l,
      hoverEnded: v,
      hoverStarted: y,
      getCurrentStyle: m,
      play: p,
      pause: h,
      stop: g,
      destroy: S,
      setSpeed: L,
      setDirection: O,
      goToAndStop: b,
      goToAndPlay: w,
      playSegments: D,
      setSubFrame: H,
      getDuration: A,
      updateDocumentData: E
    };
  }
}), I = ["data-id"];
function q(t, o, e, l, u, f) {
  return P(), V("div", {
    "data-id": t.elementid,
    class: "lottie-animation-container",
    style: j(t.getCurrentStyle),
    onMouseenter: o[0] || (o[0] = (...s) => t.hoverStarted && t.hoverStarted(...s)),
    onMouseleave: o[1] || (o[1] = (...s) => t.hoverEnded && t.hoverEnded(...s))
  }, null, 44, I);
}
const J = /* @__PURE__ */ T(F, [["render", q]]);
function Y(t, o) {
  const e = Object.assign(
    {},
    {
      name: "Vue3Lottie"
    },
    o
  );
  t.component(`${e.name}`, J);
}
const K = {
  version: "2.3.0",
  install: Y
};
export {
  J as Vue3Lottie,
  K as default,
  Y as install
};
