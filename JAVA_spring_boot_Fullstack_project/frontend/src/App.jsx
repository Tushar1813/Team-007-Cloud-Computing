import React, { useEffect, useState } from 'react';
import './index.css';

function App() {
    const [expenditures, setExpenditures] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('/api/expenditures')
            .then(res => {
                if (!res.ok) throw new Error('Failed to fetch data from server');
                return res.json();
            })
            .then(data => {
                setExpenditures(data);
                setLoading(false);
            })
            .catch(err => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    const totalExpenditure = expenditures.reduce((sum, item) => sum + parseFloat(item.amount), 0);
    const currentYear = expenditures.length > 0 ? Math.max(...expenditures.map(e => e.year)) : new Date().getFullYear();
    const formatCurrency = (amount) => {
        return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount);
    };

    if (loading) {
        return (
            <div className="loading-container">
                <span className="loader"></span>
                <p>Loading financial data...</p>
            </div>
        );
    }

    return (
        <div className="dashboard-container">
            <header className="dashboard-header">
                <div>
                    <h1 className="dashboard-title">Financial Overview</h1>
                    <p className="dashboard-subtitle">Enterprise Expenditure Dashboard & Analytics</p>
                </div>
            </header>

            {error && (
                <div className="error-message">
                    <strong>Error:</strong> {error}
                </div>
            )}

            <div className="stats-grid">
                <div className="stat-card">
                    <div className="stat-title">Total Expenditure</div>
                    <div className="stat-value">{formatCurrency(totalExpenditure)}</div>
                </div>
                <div className="stat-card">
                    <div className="stat-title">Total Records</div>
                    <div className="stat-value">{expenditures.length}</div>
                </div>
                <div className="stat-card">
                    <div className="stat-title">Current Fiscal Year</div>
                    <div className="stat-value">{currentYear}</div>
                </div>
            </div>

            <div className="table-container">
                <div className="table-header">
                    <h2>Expenditure Records</h2>
                </div>
                <div style={{ overflowX: 'auto' }}>
                    <table className="expenditure-table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Category</th>
                                <th>Amount</th>
                                <th>Year</th>
                            </tr>
                        </thead>
                        <tbody>
                            {expenditures.length === 0 ? (
                                <tr>
                                    <td colSpan="4" style={{ textAlign: 'center', color: 'var(--text-secondary)' }}>
                                        No expenditure records found.
                                    </td>
                                </tr>
                            ) : (
                                expenditures.map((item) => (
                                    <tr key={item.id}>
                                        <td>#{item.id}</td>
                                        <td><span className="category-badge">{item.category}</span></td>
                                        <td className="amount-cell">{formatCurrency(item.amount)}</td>
                                        <td>{item.year}</td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default App;
