import { useNavigate } from "react-router-dom";
import { TextField, Button, Typography, Box, IconButton, InputAdornment } from "@mui/material";
import { motion } from "framer-motion";
import { useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const Signup = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword((prev) => !prev);
  };

  return (
    <Box className="min-h-screen flex flex-col lg:flex-row">
      {/* Right Section - Signup Form */}
      <Box className="flex flex-1 items-center justify-center bg-zinc-900 p-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full sm:max-w-sm md:max-w-md bg-zinc-800 p-6 md:p-10 rounded-2xl shadow-2xl"
        >
          <Typography
            variant="h5"
            className="text-center font-bold pb-6 text-white"
          >
            Create Your Account
          </Typography>
          <form className="flex flex-col gap-6">
            <TextField
              fullWidth
              label="Enter your full name"
              className="bg-zinc-950 rounded-lg" 
              variant="outlined"
              // InputProps={{ style: { backgroundColor: '#1e293b', color: '#fff' } }}
              InputLabelProps={{ style: { color: '#94a3b8' } }}
            />
            <TextField
              fullWidth
              label="Your email address"
              type="email"
              variant="outlined"
              // InputProps={{ style: { backgroundColor: '#1e293b', color: '#fff' } }}
              className="bg-zinc-950 rounded-lg"
              InputLabelProps={{ style: { color: '#94a3b8' } }}
            />
            <TextField
              fullWidth
              label="Your password"
              type={showPassword ? "text" : "password"}
              variant="outlined"
              className="bg-zinc-950 rounded-lg"
              InputProps={{
                // style: { backgroundColor: '#1e293b', color: '#fff' },
      
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={togglePasswordVisibility} edge="end">
                      {showPassword ? (
                        <VisibilityOff style={{ color: '#94a3b8' }} />
                      ) : (
                        <Visibility style={{ color: '#94a3b8' }} />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              InputLabelProps={{ style: { color: '#94a3b8' } }}
            />
            <TextField
              fullWidth
              label="Confirm your password"
              type={showConfirmPassword ? "text" : "password"}
              variant="outlined"
              className="bg-zinc-950 rounded-lg"
              InputProps={{
                // style: { backgroundColor: '#1e293b', color: '#fff' },
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={toggleConfirmPasswordVisibility} edge="end">
                      {showConfirmPassword ? (
                        <VisibilityOff style={{ color: '#94a3b8' }} />
                      ) : (
                        <Visibility style={{ color: '#94a3b8' }} />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              InputLabelProps={{ style: { color: '#94a3b8' } }}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{ mt: 1, py: 1.5, fontWeight: 'bold', textTransform: 'none', borderRadius: '12px' }}
            >
              Sign Up
            </Button>
            <Typography
              onClick={() => navigate("/login")}
              className="text-sm text-sky-400 text-center mt-4 cursor-pointer hover:underline"
            >
              Already have an account?
            </Typography>
          </form>
        </motion.div>
      </Box>

      {/* Left Section - Branding */}
      <Box className="hidden lg:flex flex-1 bg-gradient-to-br from-gray-700 to-zinc-900 items-center justify-center p-10">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <Typography variant="h3" className="text-white font-bold text-center text-3xl md:text-4xl lg:text-5xl">
            Welcome to Our Platform
          </Typography>
        </motion.div>
      </Box>
    </Box>
  );
};

export default Signup;
