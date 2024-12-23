import React from 'react';

const DownloadCSV = () => {
  const csvContent = `Transaccion,Antigripal,Ibuprofeno,Jarabe para la tos,Paracetamol,Spray nasal,Termómetro,Vendas,Vitamina C
T1,1,1,1,1,0,1,1,1
T2,1,1,1,1,1,0,0,1
T3,1,1,1,1,0,0,0,1
T4,1,0,0,1,0,1,1,0
T5,0,1,1,0,1,0,0,1
T6,1,1,1,0,0,0,0,1
T7,1,0,1,1,0,1,0,0
T8,0,1,0,1,1,0,0,1
T9,1,1,1,1,0,1,0,0
T10,1,0,1,0,1,0,0,1`;

  const handleDownload = () => {
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'transacciones_fybeca.csv';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="p-4">
      <button
        onClick={handleDownload}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Descargar transacciones_fybeca.csv
      </button>
    </div>
  );
};

export default DownloadCSV;
