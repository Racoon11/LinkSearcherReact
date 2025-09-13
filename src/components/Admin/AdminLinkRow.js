
export function AdminLinkRow({ link }) {
  return (
    <div className="container">
        <div className="row">
            <div className="col-10">
                <li className='link-row' >
                    <a className={`link-name ${link.IsHidden ? "hidden" : ""} `} href={ link.Link }>{ link.Name }</a><br/>
                    <a className={`link-link ${link.IsHidden ? "hidden" : ""} `}  href={ link.Link }>{ link.Link }</a>
                    <p className='link-desc'>{ link.Description }</p>
                    <ul className='themes-list'>
                        { link.Themes.map((theme) => <li key={theme} className='theme'>#{theme}</li>) }
                    </ul>
                </li>
            </div>
            <div className="col-2">
                <button className="edit-button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-magic" viewBox="0 0 16 16">
                        <path d="M9.5 2.672a.5.5 0 1 0 1 0V.843a.5.5 0 0 0-1 0zm4.5.035A.5.5 0 0 0 13.293 2L12 3.293a.5.5 0 1 0 .707.707zM7.293 4A.5.5 0 1 0 8 3.293L6.707 2A.5.5 0 0 0 6 2.707zm-.621 2.5a.5.5 0 1 0 0-1H4.843a.5.5 0 1 0 0 1zm8.485 0a.5.5 0 1 0 0-1h-1.829a.5.5 0 0 0 0 1zM13.293 10A.5.5 0 1 0 14 9.293L12.707 8a.5.5 0 1 0-.707.707zM9.5 11.157a.5.5 0 0 0 1 0V9.328a.5.5 0 0 0-1 0zm1.854-5.097a.5.5 0 0 0 0-.706l-.708-.708a.5.5 0 0 0-.707 0L8.646 5.94a.5.5 0 0 0 0 .707l.708.708a.5.5 0 0 0 .707 0l1.293-1.293Zm-3 3a.5.5 0 0 0 0-.706l-.708-.708a.5.5 0 0 0-.707 0L.646 13.94a.5.5 0 0 0 0 .707l.708.708a.5.5 0 0 0 .707 0z"/>
                    </svg>
                </button>
            </div>
        </div>
    </div>
  );
}