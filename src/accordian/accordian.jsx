import { Box, IconButton, Typography } from "@mui/material";
import React, { act, useState } from "react";

export const Accordian = ({
  title,
  description,
  handleChange,
  index,
  activeIndex,
}) => {
  return (
    <Box sx={{ width: "45%", boxShadow: 3, mb: 2 }}>
      <Box sx={{ boxShadow: 1, display: "flex" }}>
        <Typography variant="h5" fontWeight={700} sx={{ p: 2 }}>
          {title}
        </Typography>

        <IconButton onClick={() => handleChange(index)}>
          {index === activeIndex ? "▼" : "▲"}
        </IconButton>
      </Box>
      <Box sx={{ display: index === activeIndex ? "block" : "none" }}>
        <Typography sx={{ p: 2 }}>{description}</Typography>
      </Box>
    </Box>
  );
};
