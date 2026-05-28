"use client";
import {
  Primitive
} from "./chunk-UQB6J6RY.js";
import "./chunk-JH3ZWOV5.js";
import "./chunk-VITWCYHP.js";
import {
  require_jsx_runtime
} from "./chunk-55OQIFKJ.js";
import {
  require_react
} from "./chunk-POTRPDEM.js";
import {
  __toESM
} from "./chunk-PR4QN5HX.js";

// node_modules/.pnpm/@radix-ui+react-label@2.1.2_@types+react@19.2.14_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@radix-ui/react-label/dist/index.mjs
var React = __toESM(require_react(), 1);
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var NAME = "Label";
var Label = React.forwardRef((props, forwardedRef) => {
  return (0, import_jsx_runtime.jsx)(
    Primitive.label,
    {
      ...props,
      ref: forwardedRef,
      onMouseDown: (event) => {
        var _a;
        const target = event.target;
        if (target.closest("button, input, select, textarea")) return;
        (_a = props.onMouseDown) == null ? void 0 : _a.call(props, event);
        if (!event.defaultPrevented && event.detail > 1) event.preventDefault();
      }
    }
  );
});
Label.displayName = NAME;
var Root = Label;
export {
  Label,
  Root
};
//# sourceMappingURL=@radix-ui_react-label.js.map
