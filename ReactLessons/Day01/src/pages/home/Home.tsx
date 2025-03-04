import Header from "../../components/Header/Header"
import Hero from "../../components/Hero/Hero"


const Home = () => {
    //* here you write TS Code. (fn, states, hooks etc)

    // * under the return you write HTML
    return (  
    // in tsx files you use "className=" instead of "class=""
    // <> </>  is used when you want to look into multiple htmls. as return in tsx only can return 1 Element
    
    <div className="class-name">
        <Header />
        <Hero />

    </div>
     );
}

export default Home