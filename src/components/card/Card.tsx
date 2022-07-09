import { Grid, Paper, Typography } from "@mui/material";
import { ReactNode } from "react";

interface CardI {
  text: string;
  children: ReactNode;
  action?: () => void;
  hideTextMobile?: boolean;
}

export const Card = ({ text, children, action, hideTextMobile }: CardI) => {
  return (
    <Paper onClick={action} elevation={1} sx={{ padding: 2 }}>
      <Grid container textAlign={"center"}>
        <Grid item xs={12} display="flex" justifyContent="center">
          {children}
        </Grid>
        <Grid item xs={12} display="flex" justifyContent="center">
          <Typography
            sx={{
              display: { xs: hideTextMobile ? "none" : "", md: "block" },
            }}
          >
            {text}
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};
