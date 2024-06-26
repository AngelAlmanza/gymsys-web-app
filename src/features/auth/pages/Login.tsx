import { useLogin } from "@/features/auth/hooks";
import {
  Box,
  Button,
  Container,
  FormControl,
  InputLabel,
  TextField,
  Typography,
} from "@mui/material";

const Login = () => {
  const { handleLogin } = useLogin();

  return (
    <Container
      maxWidth="md"
      className="container"
    >
      <Box className="input-container">
        <Typography
          variant="h2"
          className="input-container__title"
        >
          Iniciar sesión
        </Typography>
        <FormControl fullWidth>
          <InputLabel htmlFor="email">Email</InputLabel>
          <TextField
            id="email"
            type="email"
          />
        </FormControl>
      </Box>
      <Box className="input-container">
        <FormControl fullWidth>
          <InputLabel htmlFor="password">Password</InputLabel>
          <TextField
            id="password"
            type="password"
          />
        </FormControl>
      </Box>
      <Box>
        <Button
          variant="contained"
          color="primary"
          onClick={handleLogin}
          fullWidth
        >
          Iniciar sesión
        </Button>
      </Box>
    </Container>
  );
};

export default Login;
