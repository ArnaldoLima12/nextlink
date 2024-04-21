import HeadPage from "./Head";

const Layout = ({children, headeConfiguration}) =>
{   
    return(
        <>
            <HeadPage {...headeConfiguration}/>
            <div className="max-h-dvh h-screen poppins-regular overflow-auto" style={{background: '#080808'}}>
                {children}
            </div>
        </>
        
    );
}

export default Layout;