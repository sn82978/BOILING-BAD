import Footer from "../components/Footer";

function F24Content() {
    return (
        <div>
            <h1>F24</h1>
            <p>published: december 13, 2024</p>
            <h2>bideo</h2>
            <video width="640" height="360" controls>
                <source src="/BOILING-BAD/videos/bottombun1_fixed.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <p>shoutout to southwest airlines for letting us do this</p>
        </div>
    )
}

function F24() {
    return (
    <div>
        <F24Content></F24Content>
        <Footer></Footer>
    </div>)
}

export default F24;