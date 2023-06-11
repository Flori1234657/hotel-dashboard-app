import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Preloader = ({ preloader }) => {
  const [textAnim, setTextAnim] = useState(true);
  const [loading, setLoading] = useState(false);

  const changeAnim = setTimeout(() => {
    setTextAnim(false);
    {
      preloader ? setLoading(true) : "";
    }
  }, 3000);

  return (
    <div className="preloader">
      <motion.h1
        initial={{ scale: 0.5 }}
        animate={textAnim ? { y: 250, scale: 1 } : { y: -250, scale: 0.5 }}
        transition={{ duration: 1 }}
      >
        Përshëndetje Menaxher!
      </motion.h1>
      {loading ? (
        <>
          <motion.h1
            initial={{ y: 700, scale: 0.5 }}
            animate={{ y: 200, scale: 1 }}
          >
            Ju Lutem Prisni...
          </motion.h1>
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default Preloader;
