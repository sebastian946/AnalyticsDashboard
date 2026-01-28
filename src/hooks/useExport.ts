import { utils, writeFile } from 'xlsx'
import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'

export const useExport = () => {
  const exportToExcel = (data: any[], filename: string) => {
    try {
      const worksheet = utils.json_to_sheet(data)
      const workbook = utils.book_new()
      utils.book_append_sheet(workbook, worksheet, 'Data')
      writeFile(workbook, `${filename}.xlsx`)
    } catch (error) {
      console.error('Error exporting to Excel:', error)
      throw error
    }
  }

  const exportToPDF = (data: any[], columns: string[], filename: string, title: string = 'Analytics Dashboard Export') => {
    try {
      const doc = new jsPDF()

      // Add title
      doc.setFontSize(16)
      doc.text(title, 14, 15)

      // Add table
      autoTable(doc, {
        head: [columns],
        body: data.map((row) => columns.map((col) => row[col] || '')),
        startY: 25,
        styles: {
          fontSize: 8,
          cellPadding: 2,
        },
        headStyles: {
          fillColor: [19, 127, 236], // primary color
          textColor: 255,
          fontStyle: 'bold',
        },
        alternateRowStyles: {
          fillColor: [245, 245, 245],
        },
      })

      doc.save(`${filename}.pdf`)
    } catch (error) {
      console.error('Error exporting to PDF:', error)
      throw error
    }
  }

  return { exportToExcel, exportToPDF }
}
