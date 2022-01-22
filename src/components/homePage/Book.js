import { Link } from "react-router-dom";

const Book = () => {
    return ( 
        <section className="book-section" id="book-online">
            <h2 className="book-title fancy-border unobserve">Book Now</h2>
            <div className="subsection">
                <h3 className="subsection-title unobserve">full mani-pedi</h3>
                <p className="subsection-subtitle unobserve">i'm a tagline. Click here to add your own text and edit me.</p>
                <hr />
                <div className="price-time">
                    <span className="time unobserve">1 hr 30min</span>
                    <span className="price unobserve">$60</span>
                </div>


                <Link to="/book" className="book-it" state={'nails'}>Book It</Link>


            </div>

        </section>
     );
}
 
export default Book;