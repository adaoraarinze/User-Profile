import * as React from 'react';
import { styled } from '@mui/system';
import TablePaginationUnstyled from '@mui/base/TablePaginationUnstyled';
import './Table.css';
import Box from '@mui/material/Box';
import { MenuItem, Select } from '@mui/material';
import { useState } from 'react';

function createData(teams: string, game: string, winner: string, roles: string) {
  return { teams, game, winner, roles };
}

const rows = [
  createData('team 1 vs team 2', 'super smash bros.', 'team 1', 'commentator'),
  createData('team 4 vs team 2', 'league of legends', 'team 2', 'player'),
  createData('team 3 vs team 5', 'super smash bros.', 'team 3', 'spectator'),
  createData('team 2 vs team 6', 'league of legends', 'team 2', 'caster'),
  createData('team 2 vs team 4', 'super smash bros.', 'team 4', 'player'),
  createData('team 2 vs team 4', 'league of legends', 'team 2', 'player'),
  createData('team 5 vs team 3', 'super smash bros.', 'team 5', 'caster'),
]

const blue = {
  200: '#A5D8FF',
  400: '#3399FF',
};

const grey = {
  50: '#F3F6F9',
  100: '#E7EBF0',
  200: '#E0E3E7',
  300: '#CDD2D7',
  400: '#B2BAC2',
  500: '#A0AAB4',
  600: '#6F7E8C',
  700: '#3E5060',
  800: '#2D3843',
  900: '#1A2027',
};

const Root = styled('div')(
  ({ theme }) => `
  table {
    font-family: IBM Plex Sans, sans-serif;
    font-size: 0.875rem;
    border-collapse: collapse;
    width: 100%;
  }

  td,
  th {
    border: 1px solid #000000;
    text-align: left;
    padding: 6px;
  }

  th {
    background-color: #0d324d7c;
  }
  `,
);

const CustomTablePagination = styled(TablePaginationUnstyled)(
  ({ theme }) => `
  & .MuiTablePaginationUnstyled-spacer {
    display: none;
  }
  & .MuiTablePaginationUnstyled-toolbar {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;

    @media (min-width: 768px) {
      flex-direction: row;
      align-items: center;
    }
  }
  & .MuiTablePaginationUnstyled-selectLabel {
    margin: 0;
  }
  & .MuiTablePaginationUnstyled-select {
    padding: 2px;
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[800] : grey[200]};
    border-radius: 50px;
    background-color: transparent;
    &:hover {
      background-color: ${theme.palette.mode === 'dark' ? grey[800] : grey[50]};
    }
    &:focus {
      outline: 1px solid ${theme.palette.mode === 'dark' ? blue[400] : blue[200]};
    }
  }
  & .MuiTablePaginationUnstyled-displayedRows {
    margin: 0;

    @media (min-width: 768px) {
      margin-left: auto;
    }
  }
  & .MuiTablePaginationUnstyled-actions {
    padding: 2px;
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[800] : grey[200]};
    border-radius: 50px;
    text-align: center;
  }
  & .MuiTablePaginationUnstyled-actions > button {
    margin: 0 8px;
    border: transparent;
    border-radius: 2px;
    background-color: transparent;
    &:hover {
      background-color: ${theme.palette.mode === 'dark' ? grey[800] : grey[50]};
    }
    &:focus {
      outline: 1px solid ${theme.palette.mode === 'dark' ? blue[400] : blue[200]};
    }
  }
  `,
);

export const Table = ({
}) => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number,
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const [selectedFilter, setSelectedFilter] = useState("All");
  const [isFilter, setIsFilter] = useState<boolean>(false);
  
  const options = {
    filter: false
  };
  
  const games = [
    { game: 'super smash bros.' },
    { game: 'league of legends' },  
  ];

  const roles = [
    { role: 'player' },
    { role: 'caster' },  
    { role: 'commentator' },
    { role: 'spectator' },  
  ]

  const onFilter = ({ target: { value } }: any) => {
    if(value == "All") {
      setIsFilter(false);
      setSelectedFilter(value);
    }

    else {
    setSelectedFilter(value);
    setIsFilter(true);
    }
  };

  return (
    <Box
      mt={-3}
      mb={4}
      display="flex" 
      alignItems="center"
      justifyContent="center"
    >
      
    <Root sx={{ width: 500, maxWidth: '100%'}}>

    <div className='filter-menu'>
    <Select className='filter-button' size='small' onChange={onFilter} value={selectedFilter}>
        <MenuItem value="All">All</MenuItem>
        {games.map((x) => (
          <MenuItem key={x.game} value={x.game}>
            {x.game}
          </MenuItem>
        ))}
      </Select>

      <Select className='filter-button' size='small'  onChange={onFilter} value={selectedFilter}>
        <MenuItem value="All">All</MenuItem>
        {roles.map((x) => (
          <MenuItem key={x.role} value={x.role}>
            {x.role}
          </MenuItem>
        ))}
      </Select>
      </div>

      <table aria-label="custom pagination table">
        <thead>
          <tr>
            <th>Teams</th>
            <th>Game</th>
            <th>Winner</th>
            <th>Roles played</th>
          </tr>
        </thead>
        <tbody>
          {(rowsPerPage > 0
            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : rows
          ).filter(row => isFilter ? (row.game === selectedFilter || row.roles === selectedFilter) : (row)).map((row) => (
            <tr key={row.teams}>
              <td>{row.teams}</td>
              <td style={{ width: 80 }} align="right">
              {row.game}
              </td>
              <td style={{ width: 80 }} align="right">
                {row.winner}
              </td>
              <td style={{ width: 80 }} align="right">
                {row.roles}
              </td>
            </tr>
          ))}

          {emptyRows > 0 && (
            <tr style={{ height: 41 * emptyRows }}>
              <td colSpan={4} />
            </tr>
          )}
        </tbody>
        <tfoot>
          <tr>
            <CustomTablePagination
              rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
              colSpan={4}
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              componentsProps={{
                select: {
                  'aria-label': 'rows per page',
                },
                actions: {
                  showFirstButton: true,
                  showLastButton: true,
                } as any,
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </tr>
        </tfoot>
      </table>
    </Root>
    </Box>
  );
}