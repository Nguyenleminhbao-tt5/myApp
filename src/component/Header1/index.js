

import "./Header1.css";




function Header1()
{
    return(
        <div className="header1">
            <div className="header1__item btn-active">
                <a className="header1__item-link " href=""> Ho so </a>
            </div>
            <div className="header1__item">
                <a className="header1__item-link" href=""> Thanh tich</a>
            </div>
            <div className="header1__item">
                <a className="header1__item-link" href="">Cai dat on tap</a>
            </div>
            <div className="header1__item">
                <a className="header1__item-link" href="">Cai dat chung</a>
            </div>
        </div>
    )
}

export default Header1;