import "./DefaultLayout.css"

function DefaultLayout({children})
{
    return (
        <div className="App">
            <div className="triangle"></div>
            <div className="rectangular"></div>
            <div className="wrapper">
                <div className="main">
                    <div className="siderbar">

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