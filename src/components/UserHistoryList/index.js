import './index.css'

const UserHistoryList = props => {
    const { historyListDetails, onDeleteHistoryItem } = props
    const { timeAccessed, logoUrl, title, domainUrl, id } = historyListDetails
    
    const onDeleteHistory = () => {
        onDeleteHistoryItem(id)
    }

    return (
        <li className="history-list-item">
            <div className="time-container">
                <p className="browsing-time">{timeAccessed}</p>
                <div classNam="history-content-container">
                    <div className="content-card">
                    <img src={logoUrl} alt="domain logo" className="logo-image" />
                    <p className="browser-title">{title}</p>
                    <p className="history-url">{domainUrl}</p>
                    </div>
                </div>
            </div>
            <div className= "history-delate-container">
                <button type="button" className="delete-button" onClick={onDeleteHistory} testid="delete">
                    <img
                        src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
                        alt="delete"
                        className="browser-delete-icon"
                    />
                </button>
            </div>
        </li>
    )
}

export default UserHistoryList