import { useNavigate } from "react-router-dom";
import {
  TextField,
  Button,
  Typography,
  Box,
  IconButton,
  InputAdornment,
  Checkbox,
  Divider,
} from "@mui/material";
import { motion } from "framer-motion";
import { useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';


const Signup = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  return (
    <Box className="min-h-screen flex flex-col lg:flex-row bg-zinc-900">
      {/* Right Side - Form */}
      <Box className="flex-1 flex items-center justify-center px-4 py-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}

        >
          {/* Back to Home */}
          <Box
            className="flex items-center gap-1 mb-4 cursor-pointer hover:underline text-sky-400 transition duration-200"
            onClick={() => navigate("/")}
          >
            <ArrowBackIosNewIcon sx={{ fontSize: 16 }} />
            <Typography variant="body2" sx={{ fontWeight: 500 }} onClick={() => navigate("/")}>
              Back to Home
            </Typography>
          </Box>

          {/* Welcome Heading */}
          <Box className="flex flex-col gap-1 mb-3">
            <h1 className="font-bold text-4xl text-white">Welcome!</h1>
            <h2 className="text-gray-400 text-sm sm:text-base">
              Create your account to get started with FeeDo
            </h2>
          </Box>

          {/* Social Login Buttons */}
          <Box className="flex flex-col gap-3 mb-2">
            <Button
              fullWidth
              variant="contained"
              startIcon={<GoogleIcon />}
              sx={{
                backgroundColor: "#ffffff",
                color: "#000000",
                textTransform: "none",
                fontWeight: "bold",
                borderRadius: "12px",
                "&:hover": { backgroundColor: "#f3f4f6" },
                padding: 1.2
              }}
            >
              Sign up with Google
            </Button>

            <Button
              fullWidth
              variant="contained"
              startIcon={<GitHubIcon />}
              sx={{
                backgroundColor: "#0f172a",
                color: "#ffffff",
                textTransform: "none",
                fontWeight: "bold",
                borderRadius: "12px",
                "&:hover": { backgroundColor: "#1e293b" },
                padding: 1.2
              }}
            >
              Sign up with GitHub
            </Button>
          </Box>

          <Divider
            sx={{
              color: "#f1f5f9", // Light gray/white text
              borderColor: "#475569", // Slate-600-like line color
              fontWeight: "bold",
              mb: 1.5,
              "&::before, &::after": {
                borderColor: "#475569", // Also changes the divider line color
              },
            }}
          >
            Or
          </Divider>


          <Box className="w-full max-w-md bg-zinc-800 p-6 sm:p-8 md:p-10 rounded-2xl shadow-2xl">
            <form className="flex flex-col gap-4">
              <div>
                <label className="block text-sm mb-1 text-white">Full Name</label>
                <TextField
                  fullWidth
                  label="Enter your full name"
                  variant="outlined"
                  className="bg-zinc-950 rounded-lg"
                  InputProps={{ style: { color: "#fff" } }}
                  InputLabelProps={{ style: { color: "#94a3b8" } }}
                />
              </div>

              <div>
                <label className="block text-sm mb-1 text-white">Email</label>
                <TextField
                  fullWidth
                  label="Your email address"
                  type="email"
                  variant="outlined"
                  className="bg-zinc-950 rounded-lg"
                  InputProps={{ style: { color: "#fff" } }}
                  InputLabelProps={{ style: { color: "#94a3b8" } }}
                />
              </div>

              <div>
                <label className="block text-sm mb-1 text-white">Password</label>
                <TextField
                  fullWidth
                  label="Your password"
                  type={showPassword ? "text" : "password"}
                  variant="outlined"
                  className="bg-zinc-950 rounded-lg"
                  InputProps={{
                    style: { color: "#fff" },
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={() => setShowPassword((prev) => !prev)}
                          edge="end"
                        >
                          {showPassword ? (
                            <VisibilityOff style={{ color: "#94a3b8" }} />
                          ) : (
                            <Visibility style={{ color: "#94a3b8" }} />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  InputLabelProps={{ style: { color: "#94a3b8" } }}
                />
              </div>

              <div>
                <label className="block text-sm mb-1 text-white">
                  Confirm Password
                </label>
                <TextField
                  fullWidth
                  label="Confirm your password"
                  type={showConfirmPassword ? "text" : "password"}
                  variant="outlined"
                  className="bg-zinc-950 rounded-lg"
                  InputProps={{
                    style: { color: "#fff" },
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={() =>
                            setShowConfirmPassword((prev) => !prev)
                          }
                          edge="end"
                        >
                          {showConfirmPassword ? (
                            <VisibilityOff style={{ color: "#94a3b8" }} />
                          ) : (
                            <Visibility style={{ color: "#94a3b8" }} />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  InputLabelProps={{ style: { color: "#94a3b8" } }}
                />
              </div>

              {/* Checkbox Section */}
              <div className="flex items-start mt-2">
                <Checkbox
                  checked={isChecked}
                  onChange={(e) => setIsChecked(e.target.checked)}
                  sx={{ padding: 0, color: "#94a3b8" }}
                />
                <Typography className="text-sm text-white pl-2 leading-snug">
                  I agree to the{" "}
                  <span
                    className="text-sky-400 hover:underline cursor-pointer"
                    onClick={() => navigate("/terms")}
                  >
                    Terms of Service
                  </span>{" "}
                  and{" "}
                  <span
                    className="text-sky-400 hover:underline cursor-pointer"
                    onClick={() => navigate("/privacy")}
                  >
                    Privacy Policy
                  </span>
                </Typography>
              </div>

              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                disabled={!isChecked}
                sx={{
                  mt: 1,
                  py: 1.5,
                  fontWeight: "bold",
                  textTransform: "none",
                  borderRadius: "12px",
                }}
              >
                Create Account
              </Button>

              <Typography
                onClick={() => navigate("/login")}
                className="text-sm text-sky-400 text-center mt-4 cursor-pointer hover:underline"
              >
                Already have an account?
              </Typography>
            </form>
          </Box>
        </motion.div>
      </Box>

      {/* Left Side - Welcome Message */}
      <Box className="hidden lg:flex flex-1 bg-gradient-to-br from-gray-700 to-zinc-900 items-center justify-center p-10">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <Typography
            variant="h3"
            className="text-white font-bold text-center text-3xl md:text-4xl lg:text-5xl"
          >
            Welcome to Our Platform
          </Typography>
        </motion.div>
      </Box>
    </Box>
  );
};

export default Signup;
