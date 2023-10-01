import { Box, Typography, alpha } from "@mui/material";
import $Piano from "../lib/Piano";
import { memo } from "react";

const Scale = memo(function Scale({ name, tonic, keys }) {
  return (
    <Box
      display="flex"
      alignItems="center"
      gap={8}
      padding={2}
      borderRadius={1}
      sx={(t) => ({
        transition: t.transitions.create(["background"]),
        "&:hover": { bgcolor: alpha(t.palette.primary.main, 0.2) },
      })}
    >
      <Typography width="20%">
        {tonic} {name}
      </Typography>
      <Box position="relative" display="flex" gap={0.5} sx={{ perspective: 1000 }}>
        {Object.keys($Piano.notes).map((key, index) => {
          const note = $Piano.notes[key];
          return (
            <Box
              key={key}
              className={{ active: keys[index], isSharp: note.isSharp }}
              display="flex"
              alignItems="flex-end"
              justifyContent="center"
              width={$Piano.note.filtered.width}
              height={note.isSharp ? $Piano.note.filtered.sharpHeight : $Piano.note.filtered.height}
              borderRadius={0.25}
              bgcolor="text.primary"
              sx={{
                transformOrigin: "top center",
                userSelect: "none",
                transition: (t) => t.transitions.create(["transform", "background", "box-shadow"]),
                "&.isSharp": {
                  position: "absolute",
                  zIndex: 1,
                  left:
                    index % 2 !== 0
                      ? index * ($Piano.note.filtered.width / 2) + index * 2
                      : index * ($Piano.note.filtered.width / 2) + $Piano.note.filtered.width / 2 + 2 + index * 2,
                  bgcolor: "black",
                  borderTopLeftRadius: 0,
                  borderTopRightRadius: 0,
                  boxShadow: 1,
                  "&.active": {
                    bgcolor: "primary.dark",
                  },
                },
                "&.active": {
                  bgcolor: "primary.main",
                },
                "&.isPlaying": {
                  transform: "rotateX(-15deg)",
                },
              }}
            />
          );
        })}
      </Box>
      <Box display="flex" gap={2}>
        {Object.values($Piano.notes).map((note, index) =>
          keys[index] ? <Typography key={note.name}>{note.name}</Typography> : null
        )}
      </Box>
    </Box>
  );
});

export default Scale;
