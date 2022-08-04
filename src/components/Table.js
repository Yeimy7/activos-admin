import React, { useMemo, useState } from 'react'
import DataTable from 'react-data-table-component';
import { FilterComponent } from './activos/FilterComponent';

export const Table = ({ columns, tablaActivos, title }) => {

    console.log(tablaActivos)
    console.log(columns)

    const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
    const [filterText, setFilterText] = useState('')

    // const filteredItems = tablaActivos.filter(
    //     item => item.nombre && item.nombre.includes(filterText),
    // );
    const filteredItems = tablaActivos.filter(
        item => item.codigo && item.codigo.includes(filterText),
    );
    const paginacionOpciones = {
        rowsPerPageText: 'Filas por página',
        rangeSeparatorText: 'de',
        selectAllRowsItem: true,
        selectAllRowsItemText: 'Todos'
    }

    const customStyles = {
        headCells: {
            style: {
                backgroundColor: '#1B1D31',
                color: 'white',
            }
        }
    };

    const subHeaderComponentMemo = useMemo(() => {
        const handleClear = () => {
            if (filterText) {
                setResetPaginationToggle(!resetPaginationToggle);
                setFilterText('');
            }
        };

        return (
            <FilterComponent onFilter={e => setFilterText(e.target.value)} onClear={handleClear} filterText={filterText} />
        );
    }, [filterText, resetPaginationToggle]);

    return (
        <div className='table table-responsive'>
            <DataTable
                columns={columns}
                data={filteredItems}
                title={title}
                pagination
                paginationComponentOptions={paginacionOpciones}
                paginationResetDefaultPage={resetPaginationToggle}
                fixedHeader
                fixedHeaderScrollHeight='400px'
                subHeader
                subHeaderComponent={subHeaderComponentMemo}
                striped
                responsive
                noDataComponent={<span>No se encontró ningún elemento </span>}
                customStyles={customStyles}
            />
        </div>
    )
}
