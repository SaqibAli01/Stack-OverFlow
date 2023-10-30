import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

import AllSaves from "./AllSaves";
import ForLater from "../Home/Forlater";
import AddIcon from "@mui/icons-material/Add";

const Saves = () => {
  const [activeComponent, setActiveComponent] = useState(0);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [newListName, setNewListName] = useState("");
  const [lists, setLists] = useState([]);

  const handleAddListClick = () => {
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    setNewListName("");
  };

  const handleCreateList = () => {
    if (newListName) {
      setLists([...lists, newListName]);
      handleCloseDialog();
    }
  };
  const data = [
    {
      name: "All Saves",
      component: <AllSaves handleAddListClick={handleAddListClick} />,
    },
    { name: "For Later", component: <ForLater /> },
  ];

  return (
    <Box>
      <Grid container spacing={2} justifyContent="flex-start">
        <Grid item xs={12} sm={5} md={2.5}>
          <Box>
            {data.map((item, index) => {
              const styledActiveLink = {
                textDecoration: "none",
                padding: "10px 1px",
                fontSize: "15px",
                display: "flex",

                cursor: "pointer",
                gap: 1,
                margin: "5px 1px",
                borderRadius: "25px",
                color: index === activeComponent ? "#ffffff" : "black",
                backgroundColor:
                  index === activeComponent ? "#F48225" : "#F1F2F3",
                justifyContent: "flex-start",
                height: "18px",
                fontWeight: 400,
              };

              return (
                <Box
                  style={styledActiveLink}
                  onClick={() => setActiveComponent(index)}
                  key={index}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",

                      my: 1,
                    }}
                  >
                    <Typography
                      sx={{
                        color: "inherit",
                        fontWeight: 400,
                        fontSize: { md: "13px", sm: "12px", xs: "11px" },
                        borderRadius: "20px",
                        px: 3,
                      }}
                    >
                      {item.name}
                    </Typography>
                  </Box>
                </Box>
              );
            })}
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
                px: 2,
                my: 1,
              }}
            >
              <Typography
                sx={{
                  color: "#232629",
                  fontWeight: 700,
                  fontSize: { md: "11px", sm: "10px", xs: "9px" },
                }}
              >
                MY LISTS
              </Typography>

              <Button onClick={handleAddListClick}>
                <AddIcon />
              </Button>
            </Box>
            <Box>
              <Dialog open={isDialogOpen} onClose={handleCloseDialog}>
                <DialogTitle>Add List</DialogTitle>
                <DialogContent>
                  <TextField
                    autoFocus
                    margin="dense"
                    label="List Name"
                    fullWidth
                    variant="outlined"
                    value={newListName}
                    onChange={(e) => setNewListName(e.target.value)}
                  />
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleCloseDialog}>Cancel</Button>
                  <Button onClick={handleCreateList}>Add</Button>
                </DialogActions>
              </Dialog>

              {lists.length > 0 && (
                <Box sx={{ mt: 2 }}>
                  <ul>
                    {lists.map((list, index) => (
                      <li key={index} style={{ listStyle: "none" }}>
                        <Typography
                          sx={{
                            color: "#232629",
                            fontWeight: 400,
                            fontSize: { md: "13px", sm: "12px", xs: "11px" },
                          }}
                        >
                          {list}
                        </Typography>
                      </li>
                    ))}
                  </ul>
                </Box>
              )}
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} sm={7} md={9.5}>
          <Box sx={{ mb: 3 }}>{data[activeComponent].component}</Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Saves;
