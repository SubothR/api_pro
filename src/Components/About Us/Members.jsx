import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { Earth, Mail } from "lucide-react";
import Load from "../../assets/API_PRO_LOADING.gif";

export default function Members() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const PlaceholderCard = () => (
    <motion.div
      className="bg-gray-200 rounded-lg p-6 flex justify-center items-center"
      animate={{
        opacity: [0.6, 1, 0.6],
        scale: [0.95, 1.05, 0.95],
      }}
      transition={{ duration: 1.5, repeat: Infinity }}
    >
      <img src={Load} alt="loading animation" className="w-20 h-20" />
    </motion.div>
  );

  const hoverAnimation = {
    scale: 1.05,
    rotate: [0, 5, -5, 5, 0],
    color: "#2ED280",
    transition: { duration: 0.4, ease: "easeInOut" },
  };

  if (error)
    return (
      <section className="py-16 px-6 max-w-7xl mx-auto text-center text-red-500">
        Error: {error}
      </section>
    );

  return (
    <section className="py-16 px-6 max-w-7xl mx-auto" id="ourteam">
      <h2 className="text-4xl font-extrabold text-center mb-12 text-gray-900">
        The Team Behind API PRO
      </h2>

      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {loading
          ? Array.from({ length: 10 }).map((_, idx) => (
              <PlaceholderCard key={idx} />
            ))
          : users.map(({ id, name, email, website }, i) => (
              <motion.div
                key={id}
                className="bg-[#252525] rounded-lg shadow-md p-6 cursor-pointer hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  delay: i * 0.15,
                  type: "spring",
                  stiffness: 70,
                  damping: 15,
                }}
              >
                <motion.h3
                  className="text-xl font-semibold mb-2 text-gray-900 flex items-center gap-2"
                  whileHover={hoverAnimation}
                >
                  <span>{name}</span>
                </motion.h3>

                <motion.p
                  className="text-gray-700 flex gap-3 mb-1 items-center"
                  whileHover={hoverAnimation}
                >
                  <Mail className="text-gray-600" />
                  <a
                    href={`mailto:${email}`}
                    className="text-blue-600 hover:underline"
                  >
                    {email}
                  </a>
                </motion.p>

                <motion.p
                  className="text-gray-700 flex gap-3 items-center"
                  whileHover={hoverAnimation}
                >
                  <Earth className="text-gray-600" />
                  <a
                    href={`http://${website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    {website}
                  </a>
                </motion.p>
              </motion.div>
            ))}
      </div>
    </section>
  );
}
