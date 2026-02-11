import { motion } from 'framer-motion';

function Icon({ icon, label, onClick }) {
  return (
    <motion.div 
      className="icon" 
      onDoubleClick={onClick}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ 
        scale: 1.1,
        transition: { type: "spring", stiffness: 400, damping: 15 }
      }}
      whileTap={{ 
        scale: 0.9,
        transition: { duration: 0.1 }
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
        delay: Math.random() * 0.2
      }}
    >
      <img src={icon} alt={label} />
      <span>{label}</span>
    </motion.div>
  );
}

export default Icon;
