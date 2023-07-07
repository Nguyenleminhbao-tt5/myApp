import "./DefaultLayout.css"

function DefaultLayout({children})
{
    return (
        <div className="App">
            <div class="wrapper">
                <div className="triangle"></div>
                <div className="rectangular"></div>
                {/* <img src="https://i.pinimg.com/564x/b2/8b/b3/b28bb3ee256362f88cebec720a7e852b.jpg" className="img" alt=""/>
                <img src="https://i.pinimg.com/originals/cc/54/60/cc54604a9a08836b5bc4f80aefdbaf9d.gif" className="gif" alt=""/> */}

            </div>
            
            <div className="center">
                <div className="main">
                    <div className="siderbar">
                        <div className="siderbar__avatar">
                            <h2 className="avatar-heading">
                                DOPI
                            </h2>
                            <div className="avatar-img">
                                <img className="avatar" src="https://i.pinimg.com/originals/03/a4/28/03a428ee705240475480c7722c6c2b3b.gif" alt=""/>
                            </div>
                            <div className="avatar-name">Mèo Capoo</div>
                        </div>
                        <ul className="siderbar__option">
                            <li className="option-item active" >
                                <i className="home-icon fa-solid fa-house"></i>
                                <a className="option-item__link" href="">Trang chủ</a>
                            </li>
                            <li className="option-item">
                                <i className="search-icon  fa-solid fa-magnifying-glass"></i>
                                <a className="option-item__link" href="">Từ điển</a>
                            </li>
                            <li className="option-item">
                                <i className="book-icon fa-solid fa-book"></i>
                                <a className="option-item__link" href="">Sổ tay</a>
                            </li>
                        </ul>
                        <div className="siderbar__social">
                            <img src="../../../assets/facebook.png" className="social-fb" alt=""/>
                            <img src="../../../assets/instagram.png" className="social-inst" alt=""/>
                            <img src="../../../assets/youtube.png" className="social-you" alt=""/>
                        </div>
                    </div>
                    <div className="content">
                        {children}
                    </div>
                </div>
            </div>
            
        </div>
        
    )
}

export default DefaultLayout;