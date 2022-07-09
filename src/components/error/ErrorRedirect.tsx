import { Paper, Typography } from "@mui/material";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const ErrorRedirect = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate(`/`, { replace: true });
  }, []);

  return (
    <Paper sx={{ p: 2 }}>
      <Typography variant="h5" textAlign={"center"}>
        No se ha encontrado el pokemón
      </Typography>
    </Paper>
  );
};
