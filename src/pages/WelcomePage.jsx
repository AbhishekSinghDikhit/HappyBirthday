import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Box, Typography, TextField } from "@mui/material";
import teddy from "/images/teddy2.png";
import monkey from "/images/monkey.png";
const WelcomePage = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [accessGranted, setAccessGranted] = useState(false);
  const [accessDenied, setAccessDenied] = useState(false);

  const handleCheckName = () => {
    if (name.trim().toLowerCase() === "hername") {
      setAccessGranted(true);
      setAccessDenied(false);
    } else {
      setAccessDenied(true);
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #FFE6FA, #FFD6F0)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        fontFamily: "'Poppins', sans-serif",
        position: "relative",
        overflow: "hidden",
        px: 2,
      }}
    >
      {/* Floating Hearts */}
      {[...Array(10)].map((_, i) => (
        <Box
          key={i}
          sx={{
            position: "absolute",
            width: "20px",
            height: "20px",
            backgroundColor: "#FFD1DC",
            opacity: 0.6,
            borderRadius: "50%",
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animation: `floatHeart ${5 + Math.random() * 5}s ease-in-out infinite`,
          }}
        />
      ))}

      {/* Character Image */}
      <img
        src={accessGranted ? monkey : teddy}
        alt="Character"
        style={{
          width: "240px",
          marginBottom: "24px",
          animation: "floatTeddy 3s ease-in-out infinite",
          zIndex: 1,
        }}
      />

      {/* Greeting */}
      <Typography
        variant="h3"
        sx={{
          fontWeight: 700,
          background: "linear-gradient(90deg, #AA60C8, #D69ADE)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          animation: "glowPulse 2s infinite alternate",
          fontSize: { xs: "2rem", sm: "2.5rem" },
          zIndex: 1,
        }}
      >
        {accessGranted ? "Hello Cutie 🐒" : "Hello Cutie 🧸"}
      </Typography>

      {!accessGranted && (
        <Box sx={{ mt: 4, zIndex: 1 }}>
          <TextField
            label="Enter your name"
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
            sx={{
              backgroundColor: "#fff",
              borderRadius: "8px",
              mb: 2,
              width: "260px",
            }}
          />
          <Button
            onClick={handleCheckName}
            sx={{
              px: 4,
              py: 1.5,
              fontSize: "1rem",
              fontWeight: 600,
              borderRadius: "50px",
              color: "#fff",
              background: "linear-gradient(90deg, #AA60C8, #D69ADE)",
              boxShadow: "0 6px 12px rgba(0,0,0,0.15)",
              transition: "all 0.3s ease-in-out",
              "&:hover": {
                transform: "scale(1.05)",
                boxShadow: "0 8px 16px rgba(0,0,0,0.25)",
                background: "linear-gradient(90deg, #D69ADE, #AA60C8)",
              },
            }}
          >
            Unlock Surprise 🔐
          </Button>
          {accessDenied && (
            <Typography sx={{ mt: 2, color: "#e53935", fontWeight: 600 }}>
              This surprise is not for you 😢
            </Typography>
          )}
        </Box>
      )}

      {accessGranted && (
        <Button
          onClick={() => navigate("/surprise")}
          sx={{
            mt: 4,
            px: 4,
            py: 1.5,
            fontSize: "1.2rem",
            fontWeight: 600,
            borderRadius: "50px",
            color: "#fff",
            background: "linear-gradient(90deg, #AA60C8, #D69ADE)",
            boxShadow: "0 6px 12px rgba(0,0,0,0.15)",
            transition: "all 0.3s ease-in-out",
            "&:hover": {
              transform: "scale(1.05)",
              boxShadow: "0 8px 16px rgba(0,0,0,0.25)",
              background: "linear-gradient(90deg, #D69ADE, #AA60C8)",
            },
            zIndex: 1,
          }}
        >
          Click here for Surprise 💖
        </Button>
      )}

      {/* Floating Animation CSS */}
      <style>
        {`
        @keyframes floatTeddy {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }

        @keyframes glowPulse {
          0% { text-shadow: 0 0 10px rgba(255, 144, 204, 0.5); }
          100% { text-shadow: 0 0 25px rgba(255, 144, 204, 1); }
        }

        @keyframes floatHeart {
          0% {
            transform: translateY(0) scale(1);
            opacity: 0.7;
          }
          50% {
            transform: translateY(-20px) scale(1.1);
            opacity: 1;
          }
          100% {
            transform: translateY(0) scale(1);
            opacity: 0.7;
          }
        }
      `}
      </style>
    </Box>
  );
};

export default WelcomePage;
