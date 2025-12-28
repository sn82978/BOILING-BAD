import Footer from "../components/Footer";

function F25Content() {
    return (
        <div>
            <h1>F25</h1>
            <p>published: december 28, 2025</p>
            <h2>bideo</h2>
            <video width="640" height="360" controls> 
                <source src="/BOILING-BAD/videos/bottumbun2_fixed.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <p>shoutout to beach for existing</p>
        </div>
    )
}

function F25() {
    return (
    <div>
        <F25Content></F25Content>
        <Footer></Footer>
    </div>)
}

export default F25;