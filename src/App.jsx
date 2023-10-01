import { Box, Button, Container, Link, Typography } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import $Piano from "./lib/Piano";
import Scale from "./components/Scale";

function App() {
  const [activeKeys, setactiveKeys] = useState(Object.keys($Piano.notes).reduce((a, c) => ({ ...a, [c]: false }), {}));
  const [filteredScales, setfilteredScales] = useState([]);

  const handleFindScales = () => {
    setfilteredScales($Piano.filter(Object.values(activeKeys).map((value) => (value ? 1 : "-"))));
    setTimeout(() => {
      document.getElementById("scale-container").scrollIntoView({ behavior: "smooth" });
    }, 50);
  };

  const handleChangeKey = useCallback(
    (key) => {
      setactiveKeys((prev) => ({ ...prev, [key]: !activeKeys[key] }));
      $Piano.play(key);
    },
    [activeKeys]
  );

  const handleKeyboard = useCallback(
    ({ code }) => {
      switch (code) {
        case "KeyQ":
          handleChangeKey("C");
          break;
        case "Digit2":
          handleChangeKey("Cs");
          break;
        case "KeyW":
          handleChangeKey("D");
          break;
        case "Digit3":
          handleChangeKey("Ds");
          break;
        case "KeyE":
          handleChangeKey("E");
          break;
        case "KeyR":
          handleChangeKey("F");
          break;
        case "Digit5":
          handleChangeKey("Fs");
          break;
        case "KeyT":
          handleChangeKey("G");
          break;
        case "Digit6":
          handleChangeKey("Gs");
          break;
        case "KeyY":
          handleChangeKey("A");
          break;
        case "Digit7":
          handleChangeKey("As");
          break;
        case "KeyU":
          handleChangeKey("B");
          break;
      }
    },
    [handleChangeKey]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyboard);

    return () => {
      window.removeEventListener("keydown", handleKeyboard);
    };
  }, [handleKeyboard]);

  return (
    <>
      <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" gap={8} minHeight="100vh">
        <Box>
          <Typography variant="h1" textAlign="center">
            Musical Scale Finder
          </Typography>
          <Typography variant="subtitle1" fontWeight={500} textAlign="center">
            By <Link href="https://github.com/JCiroLo" target="_blank">JCiroLo</Link>
          </Typography>
        </Box>
        <Box position="relative" display="flex" gap={1} sx={{ perspective: 5000 }}>
          {Object.keys($Piano.notes).map((key, index) => {
            const note = $Piano.notes[key];
            return (
              <Box
                key={key}
                className={{ active: activeKeys[key], isSharp: note.isSharp }}
                display="flex"
                alignItems="flex-end"
                justifyContent="center"
                width={$Piano.note.general.width}
                height={note.isSharp ? $Piano.note.general.sharpHeight : $Piano.note.general.height}
                paddingY={1}
                borderRadius={0.5}
                bgcolor="text.primary"
                sx={{
                  cursor: "pointer",
                  transformStyle: "preserve-3d",
                  transformOrigin: "top center",
                  userSelect: "none",
                  transition: (t) => t.transitions.create(["transform", "background", "box-shadow"]),
                  "&.isSharp": {
                    position: "absolute",
                    zIndex: 1,
                    left:
                      index % 2 !== 0
                        ? index * ($Piano.note.general.width / 2) + index * 4
                        : index * ($Piano.note.general.width / 2) + $Piano.note.general.width / 2 + 4 + index * 4,
                    bgcolor: "black",
                    borderTopLeftRadius: 0,
                    borderTopRightRadius: 0,
                    boxShadow: 1,
                    "&.active": {
                      bgcolor: "primary.dark",
                      boxShadow: 0,
                    },
                  },
                  "&.active": {
                    transform: "rotateX(-15deg)",
                    bgcolor: "primary.main",
                  },
                }}
                onClick={() => handleChangeKey(key)}
              >
                <Typography fontSize={24} fontWeight={600} color={note.isSharp ? "text.primary" : "background.default"}>
                  {note.name}
                </Typography>
              </Box>
            );
          })}
        </Box>
        <Button color="info" size="large" onClick={handleFindScales}>
          <Typography fontSize={28} fontWeight={600}>
            Find
          </Typography>
        </Button>
      </Box>
      <Container id="scale-container">
        <Box display="flex" flexDirection="column" gap={2}>
          {filteredScales.map((scale, index) => (
            <Scale key={index} name={scale.scale} tonic={scale.tonic} keys={scale.keys} />
          ))}
        </Box>
      </Container>
    </>
  );
}

export default App;
