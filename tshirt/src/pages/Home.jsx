import { motion, AnimatePresence } from "framer-motion";
import { useSnapshot } from "valtio";
import state from "../store";
import { CustomButton } from "../components";
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation,
} from "../config/motion";

const Home = () => {
  const snap = useSnapshot(state);
  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.section className="home" {...slideAnimation("left")}>
          <motion.header {...slideAnimation("down")}>
            <img
              src="./threejs.png"
              alt="logo"
              className="w-8 h-8 object-contain"
            />
          </motion.header>
          <motion.div className="home-content" {...headContainerAnimation}>
            <motion.div {...headTextAnimation}>
              <h1 className="head-text">
                LET'S <br className="xl: block hidden" /> DO IT.
              </h1>
            </motion.div>
            <motion.div
            {...headContentAnimation}
            className="flex flex-col gap-5">
              <p className="max-w-md font-normal text-gray-600">
                Step into the Future of Fashion with Our Exclusive 3D
                Illustrated T-Shirt!<br/><strong>Elevate Your Style</strong>{" "}<br/><strong> Embrace
                Individuality</strong>
              </p>

              <CustomButton
                type="filled"
                title="Customize It"
                handleClick = {() => state.intro = false}
              />
            </motion.div>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default Home;