import { Grid, Paper, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useForm } from "../../../../hooks/useForm";

export const Search = () => {
  const { onInputChange, formState } = useForm({ name: "" });
  const { name } = formState;

  const navigate = useNavigate();

  const handleSubmit = (e: React.ChangeEvent<unknown>) => {
    e.preventDefault();
    if (name.trim() === "") {
      return;
    }
    navigate(`../pokemon/${name.toLowerCase()}`, { replace: true });
  };
  return (
    <Paper
      elevation={3}
      sx={{
        padding: "100px 10px",
      }}
    >
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={[1]}
      >
        <Grid item xs={12}>
          <Typography
            variant="h5"
            gutterBottom
            component="div"
            textAlign="center"
          >
            Buscá a tu pokemón favorito
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <form onSubmit={(e) => handleSubmit(e)}>
            <TextField
              label="Nombre"
              name="name"
              variant="outlined"
              fullWidth
              onChange={onInputChange}
              value={name}
            />
          </form>
        </Grid>
      </Grid>
    </Paper>
  );
};
