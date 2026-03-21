import { motion, AnimatePresence } from "framer-motion";

interface SplashScreenProps {
  show: boolean;
}

export function SplashScreen({ show }: SplashScreenProps) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="splash"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[hsl(160,50%,4%)]"
        >
          {/* Mensagem no topo da tela */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="absolute top-0 left-0 w-full h-20 bg-[hsl(160,50%,4%)] flex justify-center items-center text-4xl text-white"
          >
            Olá, Techers!
          </motion.div>

          {/* Ambient glow layers */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full"
              style={{
                background: "radial-gradient(circle, hsl(153,100%,50%,0.12) 0%, transparent 70%)",
              }}
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              transition={{ duration: 2, delay: 0.3 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
              style={{
                background: "radial-gradient(circle, hsl(162,100%,40%,0.06) 0%, transparent 60%)",
              }}
            />
          </div>

          {/* Main content */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="relative flex flex-col items-center gap-5"
          >
            {/* Panda icon with pulse ring */}
            <motion.div
              initial={{ scale: 0, rotate: -20 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.1 }}
              className="relative"
            >
              {/* Pulse ring */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: [0, 0.5, 0], scale: [0.8, 1.4, 1.6] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                className="absolute inset-0 rounded-2xl"
                style={{
                  background: "linear-gradient(135deg, hsl(153,100%,50%), hsl(162,100%,40%))",
                }}
              />
              <div
                className="relative flex h-20 w-20 items-center justify-center rounded-2xl shadow-2xl"
                style={{
                  background: "linear-gradient(135deg, hsl(153,100%,50%), hsl(162,100%,40%))",
                }}
              >
                {/* Panda icon */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 0.6 }}
                  className="relative flex h-20 w-20 items-center justify-center rounded-2xl"
                >
                  {/* Coração */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.7 }}
                    className="absolute inset-0 rounded-2xl"
                    style={{
                      background: "linear-gradient(135deg, hsl(153,100%,50%), hsl(162,100%,40%))",
                    }}
                  />
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}