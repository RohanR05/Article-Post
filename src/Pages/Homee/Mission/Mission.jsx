import React from 'react'

const Mission = () => {
  return (
    <div>
       <h2
          style={{ fontSize: "3rem", marginBottom: "30px", color: "#394a20" }}
        >
          💡 Our Mission
        </h2>
        <p
          style={{
            fontSize: "2rem",
            maxWidth: "1100px",
            margin: "0 auto 30px",
            lineHeight: "1.5",
            color: "#394a20",
          }}
        >
          “Empowering voices, protecting privacy, and connecting communities —
          one thoughtful article at a time.”
        </p>
        <p
          style={{
            fontSize: "1.5rem",
            maxWidth: "900px",
            margin: "0 auto 20px",
            lineHeight: "1.5",
            color: "#394a20",
          }}
        >
          Built with Node.js, React, MongoDB, Tailwind CSS, DaisyUI, JavaScript,
          Firebase, and JWT for a safe and modern social platform.
        </p>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "15px",
            fontSize: "1.2rem",
            fontWeight: "bold",
            marginTop: "20px",
            color: "#394a20",
          }}
        >
          <span>⚙️ Node.js</span>
          <span>⚛ React</span>
          <span>🍃 MongoDB</span>
          <span>🎨 Tailwind CSS</span>
          <span>💠 DaisyUI</span>
          <span>🔥 Firebase</span>
          <span>🔑 JWT Security</span>
        </div>
    </div>
  )
}

export default Mission
