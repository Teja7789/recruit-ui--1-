import React from 'react';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import { useState } from 'react';

function DataExportModal({ columnConfig, showExportModal, setShowExportModal, exportData, dataTableRef }) {
    const [exportFormat, setExportFormat] = useState('csv');
    const exportColumns = columnConfig.map((col) => {
        if (col.isSelected) {
            return {
                title: col.header,
                dataKey: col.field,
            };
        }
    });
    const handleModalClose = () => {
        setShowExportModal(false);
        setExportFormat('csv');
    };

    const exportTableData = () => {
        if (exportFormat === 'csv') {
            if (dataTableRef.current) {
                dataTableRef.current.exportCSV();
            }
            setShowExportModal(false);
        } else {
            import('jspdf').then((jsPDF) => {
                import('jspdf-autotable').then(() => {
                    const doc = new jsPDF.default(0, 0);
                    doc.autoTable(exportColumns, exportData);
                    doc.save('TableData.pdf');
                });
            });
            setShowExportModal(false);
        }
    };

    return (
        <>
            <Dialog
                header={'Export'}
                visible={showExportModal}
                onHide={() => handleModalClose()}
                className="w-50"
                breakpoints={{ '960px': '75vw', '641px': '100vw' }}
            >
                <div className="d-flex justify-content-center flex-column ">
                    <p className="company-secondary-text fw-normal mb-4">
                        Select the file type you would like to Export
                    </p>

                    <label htmlFor="myDropdown">File Type</label>
                    <div className="card d-flex justify-content-center mt-2">
                        <Dropdown
                            id="myDropdown"
                            value={exportFormat}
                            onChange={(e) => setExportFormat(e.value)}
                            options={[
                                { fileType: 'CSV', value: 'csv' },
                                { fileType: 'PDF', value: 'pdf' },
                            ]}
                            optionLabel="fileType"
                            placeholder="Select a File Type"
                            className="w-100"
                            defaultValue={exportFormat === 'CSV'}
                        />
                    </div>

                    <div className="ms-auto mt-3 d-flex gap-2">
                        <Button
                            className="company-secondary-btn"
                            size="small"
                            label="Cancel"
                            onClick={() => handleModalClose()}
                        />
                        <Button className="company-primary-btn" size="small" label="Export" onClick={exportTableData} />
                    </div>
                </div>
            </Dialog>
        </>
    );
}

export default DataExportModal;
