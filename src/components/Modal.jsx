import { motion } from "framer-motion";
import { cn } from "../../utils/cn";
import Button from "./Button";

const modalFadeVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      ease: "easeInOut",
    },
  },
  exit: {
    opacity: 0,
    transition: {
      ease: "easeInOut",
    },
  },
};

const messageScaleVariants = {
  hidden: { scale: 0.85 },
  visible: {
    scale: 1,
    transition: {
      ease: "easeInOut",
    },
  },
  exit: {
    scale: 0.85,
    transition: {
      ease: "easeInOut",
    },
  },
};

export default function Modal(props) {
  return (
    <motion.div
      variants={modalFadeVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="fixed left-0 top-0 z-50 h-full w-full bg-gray-950/50"
    >
      <div className="container flex h-full items-center justify-center">
        <motion.div
          {...props}
          className={cn(
            "space-y-6 rounded-lg border border-primary bg-black px-12 py-10 text-center text-white",
            props.className,
          )}
          variants={messageScaleVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <div
            style={{ direction: "rtl", lineHeight: "1.5" }}
            className=" text-xl lg:text-2xl"
            dangerouslySetInnerHTML={{ __html: props.message }}
          />
          <Button
            className="drop-shadow-md"
            type="button"
            onClick={props.onButtonClick}
          >
            סגור
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
}
