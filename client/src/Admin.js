import React, { Component } from 'react';
import './App.css';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'hidden',
  },
  table: {
    minWidth: 700,
  },
});

class ScheduleHistory extends Component {
  render() {
    return (
    <Paper className={styles.root}>
      <Table className={styles.table}>
        <TableHead>
          <TableRow>
            <TableCell>Nome Paciente</TableCell>
            <TableCell align="right">Telefone</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Horário Início</TableCell>
            <TableCell align="right">Horário Término</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>     
          {Array.from(this.props.data).map((row,key) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.telephone}</TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{new Intl.DateTimeFormat('pt-BR', {
                year: 'numeric', 
                month: 'long',
                day: '2-digit' ,
                hour: 'numeric',
                minute: 'numeric'
                }).format(new Date(row.begin_date))}</TableCell>
              <TableCell align="right">{new Intl.DateTimeFormat('pt-BR', {
                year: 'numeric', 
                month: 'long',
                day: '2-digit' ,
                hour: 'numeric',
                minute: 'numeric'
                }).format(new Date(row.end_date))}</TableCell>
            </TableRow>
          ))
          }
        </TableBody>
      </Table>
    </Paper>
    )
  }
};

export default ScheduleHistory;