import { defineComponent, PropType } from "vue";
import "uno.css";

export type IColor =
  | "blue"
  | "black"
  | "gray"
  | "red"
  | "yellow"
  | "green"
  | "blue"
  | "pink"
  | "indiog"
  | "purple";

export default defineComponent({
  name: "FButton",
  props: {
    color: {
      type: String as PropType<IColor>,
      default: "blue",
    },
    icon: {
      type: String,
      default: "",
    },
  },
  setup(props, { slots }) {
    return () => (
      <button
        class={`py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-${props.color}-500 hover:bg-${props.color}-700 border-none cursor-pointer m-1`}
      >
        {props.icon && <i class={`i-ic-baseline-${props.icon} p-3`}></i>}
        {slots.default ? slots.default() : ""}
      </button>
    );
  },
  // render() {
  //   return (
  //     <button
  //       class={`py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-${this.color}-500 hover:bg-${this.color}-700 border-none cursor-pointer m-1`}
  //     >
  //       {this.icon && <i class={`i-ic-baseline-${this.icon} p-3`}></i>}
  //       {this.$slots.default ? this.$slots.default() : ""}
  //     </button>
  //   );
  // },
});
