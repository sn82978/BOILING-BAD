import Footer from "../components/Footer";

function BinkBatherContent() {
    return (
        <div>
            <h1>Bink Batheress (Pink Pantheress) "Fancy That" Tour LA</h1>
            <p>published: november 9, 2025</p>
            <h2>bideo</h2>
            <video width="640" height="360" controls>
                <source src="/BOILING-BAD/videos/binkbantheress_fixed.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <p>shoutout to Pink Pantheress for ts concert</p>
        </div>
    )
}

function BinkBanther() {
    return (
    <div>
        <BinkBatherContent></BinkBatherContent>
        <Footer></Footer>
    </div>)
}

export default BinkBanther;