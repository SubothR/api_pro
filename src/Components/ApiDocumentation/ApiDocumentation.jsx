import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { category: "GETTING STARTED", items: [{ name: "Authentication" }] },
  {
    category: "CORE RESOURCES",
    items: [
      { name: "GET /users", active: true },
      { name: "POST /users" },
      { name: "GET /analytics" },
      { name: "GET /logs" },
    ],
  },
];

export default function ApiDocumentation() {
  const [activeTab, setActiveTab] = useState("GET /users");

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      alert("Copied to clipboard!");
    });
  };

  const content = {
    "GET /users": {
      title: "GET /v1/users",
      description:
        "Retrieves a list of all users associated with your project.",
      request: `fetch('https://api.apipro.com/v1/users', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY'
  }
})
  .then(response => response.json())
  .then(data => console.log(data));`,
      response: `{
  "users": [
    { "id": "user_001", "name": "Jane Doe", "email": "jane@example.com" },
    { "id": "user_002", "name": "John Smith", "email": "john@example.com" }
  ]
}`,
    },
    "POST /users": {
      title: "POST /v1/users",
      description: "Creates a new user in your project.",
      request: `fetch('https://api.apipro.com/v1/users', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ name: 'Alice', email: 'alice@example.com' })
})
  .then(response => response.json())
  .then(data => console.log(data));`,
      response: `{
  "id": "user_003",
  "name": "Alice",
  "email": "alice@example.com",
  "status": "created"
}`,
    },
    "GET /analytics": {
      title: "GET /v1/analytics",
      description: "Fetches usage statistics and trends.",
      request: `fetch('https://api.apipro.com/v1/analytics', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY'
  }
})
  .then(res => res.json())
  .then(data => console.log(data));`,
      response: `{
  "visits": 2045,
  "activeUsers": 134,
  "bounceRate": "42%"
}`,
    },
    "GET /logs": {
      title: "GET /v1/logs",
      description: "Returns API logs for debugging and monitoring.",
      request: `fetch('https://api.apipro.com/v1/logs', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY'
  }
})
  .then(res => res.json())
  .then(data => console.log(data));`,
      response: `{
  "logs": [
    { "id": "log_001", "action": "GET /users", "status": 200 },
    { "id": "log_002", "action": "POST /users", "status": 201 }
  ]
}`,
    },
  };

  const tabData = content[activeTab];

  return (
    <div className="min-h-screen  text-gray-900 shadow-2xl flex flex-col md:flex-row"
    style={{
        background: "linear-gradient(180deg, #000428 30%, transparent 70%)",
      }}
    >
      {/* Sidebar */}
      <motion.aside
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="hidden md:block w-64 shadow-md p-6"
      >
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1, y: 80 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-xl font-bold mb-6">API PRO Docs</h2>
          {links.map((section) => (
            <div key={section.category} className="mb-4">
              <h3 className="text-sm font-semibold text-gray-500 mb-2">
                {section.category}
              </h3>
              <ul className="space-y-2">
                {section.items.map((item) => (
                  <li key={item.name}>
                    <motion.button
                      whileTap={{ scale: 0.97 }}
                      onClick={() => setActiveTab(item.name)}
                      className={`block w-full text-left px-3 py-1 rounded-md font-semibold ${
                        activeTab === item.name
                          ? "bg-blue-600 text-white"
                          : "text-blue-600 hover:underline"
                      }`}
                    >
                      {item.name}
                    </motion.button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>
      </motion.aside>

      {/* Main Content */}
      <main className="flex-1 p-6 pb-40">
        {/* Note pb-40 added for mobile bottom space */}
        <AnimatePresence mode="wait">
          {tabData && (
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 120 }}
              animate={{ opacity: 1, y: 80 }}
              exit={{ opacity: 0, y: 120 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-3xl font-bold mb-4">{tabData.title}</h1>
              <p className="text-gray-700 mb-6">{tabData.description}</p>

              {/* Request */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <h2 className="text-xl font-semibold">Example Request</h2>
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={() => copyToClipboard(tabData.request)}
                    className="text-sm bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
                  >
                    Copy
                  </motion.button>
                </div>
                <pre className="bg-gray-800 text-green-300 p-4 rounded-md overflow-auto text-sm">
                  {tabData.request}
                </pre>
              </div>

              {/* Response */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <h2 className="text-xl font-semibold">Example Response</h2>
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={() => copyToClipboard(tabData.response)}
                    className="text-sm bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
                  >
                    Copy
                  </motion.button>
                </div>
                <pre className="bg-gray-800 text-yellow-300 p-4 rounded-md overflow-auto text-sm">
                  {tabData.response}
                </pre>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Mobile Dropdown (fixed) */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="md:hidden fixed bottom-0 left-0 right-0  p-4 shadow-inner  border-gray-200 z-40"
        style={{zIndex:10}}
        
      >
        <select
          value={activeTab}
          onChange={(e) => setActiveTab(e.target.value)}
          className="w-full p-2 border rounded-md   text-gray-900 "
          style={{
        background: "linear-gradient(#000000)",
      }}
        >
          {links.flatMap((section) =>
            section.items.map((item) => (
              <option key={item.name} value={item.name} className="bg-black rounded-2xl" style={{borderRadius:10}}>
                {item.name}
              </option>
            ))
          )}
        </select>
      </motion.div>
    </div>
  );
}
