import * as React from 'react';
import { useState, useEffect } from 'react';
import AddProducts from '../products/AddProducts';
import EditProducts from '../products/EditProducts';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { db } from "../../firebase-config";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Swal from "sweetalert2";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Modal from '@mui/material/Modal';
import { useAppStore } from '../../appStore';
import Skeleton from '@mui/material/Skeleton';

//modal box lai bich ma open garnako lagi 
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function ProductList() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [allRows, setAllRows] = useState([]); // Will hold all products data
  const empCollectionRef = collection(db, "products");
  const [open, setOpen] = useState(false);
  const [editopen, setEditOpen] = useState(false);
  const [formid, setFormid] = useState("");
  const handleOpen = () => setOpen(true);
  const handleEditOpen = () => setEditOpen(true);
  const handleEditClose = () => setEditOpen(false);
  const handleClose = () => setOpen(false);
  const setRows = useAppStore((state) => state.setRows);
  const rows = useAppStore((state) => state.rows);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const data = await getDocs(empCollectionRef);
    const products = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    setRows(products);  // For displaying data
    setAllRows(products);  // Store the full data in allRows
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const deleteUser = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.value) {
        deleteApi(id);
      }
    });
  };

  const deleteApi = async (id) => {
    const userDoc = doc(db, "products", id);
    await deleteDoc(userDoc);
    Swal.fire("Deleted!", "Your file has been deleted.", "success");
    getUsers();
  };

  // Updated filterData function to search for matching items
  const filterData = (v) => {
    if (v) {
      const filteredRows = allRows.filter((row) =>
        row.name.toLowerCase().includes(v.name.toLowerCase())
      );
      setRows(filteredRows);
    } else {
      setRows(allRows); // If no value, reset to full data
    }
  };

  const editData = (id, name, price, category) => {
    const data = {
      id: id,
      name: name,
      price: price,
      category: category
    };
    setFormid(data);
    handleEditOpen();
  };

  return (
    <>
      <div>
        {/* Modal components */}
        <Modal open={open} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
          <Box sx={style}><AddProducts closeEvent={handleClose} /></Box>
        </Modal>

        <Modal open={editopen} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
          <Box sx={style}><EditProducts closeEvent={handleEditClose} fid={formid} /></Box>
        </Modal>
      </div>

      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <Typography gutterBottom variant="h5" component="div" sx={{ padding: "20px" }}>
          Products List
        </Typography>
        <Divider />
        <Box height={10} />
        <Stack direction="row" spacing={2} className="my-2 mb-2">
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={allRows}  // Full list for autocomplete options
            sx={{ width: 300 }}
            onInputChange={(e, v) => filterData({ name: v })}  // Search on input change
            getOptionLabel={(rows) => rows.name || ""}
            renderInput={(params) => <TextField {...params} size="small" label="Search Products" />}
          />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}></Typography>
          <Button variant="contained" endIcon={<AddCircleIcon />} onClick={handleOpen}>
            Add
          </Button>
        </Stack>
        <Box height={10} />
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell align="left" style={{ minWidth: "100px" }}>Name</TableCell>
                <TableCell align="left" style={{ minWidth: "100px" }}>Price</TableCell>
                <TableCell align="left" style={{ minWidth: "100px" }}>Category</TableCell>
                <TableCell align="left" style={{ minWidth: "100px" }}>Date</TableCell>
                <TableCell align="left" style={{ minWidth: "100px" }}>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                  <TableCell align="left">{row.name}</TableCell>
                  <TableCell align="left">{row.price}</TableCell>
                  <TableCell align="left">{row.category}</TableCell>
                  <TableCell align="left">{row.date}</TableCell>
                  <TableCell align="left">
                    <Stack spacing={2} direction="row">
                      <EditIcon
                        style={{ fontSize: "20px", color: "blue", cursor: "pointer" }}
                        onClick={() => editData(row.id, row.name, row.price, row.category)}
                      />
                      <DeleteIcon
                        style={{ fontSize: "20px", color: "darkred", cursor: "pointer" }}
                        onClick={() => deleteUser(row.id)}
                      />
                    </Stack>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </>
  );
}